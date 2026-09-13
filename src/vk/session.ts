import { bridge, usingBridgeMock } from "./bridge";

export type VkUserProfile = {
  id: number;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  city?: string;
};

export type VkLaunch = {
  userId?: number;
  appId?: number;
  platform?: string;
};

export type AppSession = {
  user: VkUserProfile;
  launch: VkLaunch;
  usingMock: boolean;
};

/** Локальный тестовый профиль для `vk-bridge-mock`. */
const MOCK_USER_INFO = {
  id: 2314852,
  first_name: "Ирина",
  last_name: "Иванова",
  photo_200: "https://vk.com/images/camera_200.png",
  city: { title: "Санкт-Петербург" },
};

type UserInfoLike = {
  id: number;
  first_name: string;
  last_name: string;
  photo_200?: string;
  city?: { title?: string };
};

function parseLaunchFromLocation(): VkLaunch {
  const params = new URLSearchParams(window.location.search);
  const userId = Number(params.get("vk_user_id"));
  const appId = Number(params.get("vk_app_id"));
  return {
    userId: Number.isFinite(userId) && userId > 0 ? userId : undefined,
    appId: Number.isFinite(appId) && appId > 0 ? appId : undefined,
    platform: params.get("vk_platform") ?? undefined,
  };
}

function withTimeout<T>(promise: Promise<T>, ms: number, label: string) {
  return new Promise<T>((resolve, reject) => {
    const timer = window.setTimeout(() => {
      reject(new Error(`${label} timeout`));
    }, ms);
    promise.then(
      (value) => {
        window.clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        window.clearTimeout(timer);
        reject(error);
      },
    );
  });
}

function sessionFromInfo(info: UserInfoLike, launch: VkLaunch): AppSession {
  return {
    usingMock: usingBridgeMock,
    launch: {
      userId: launch.userId ?? info.id,
      appId: launch.appId,
      platform: launch.platform ?? (usingBridgeMock ? "local_mock" : undefined),
    },
    user: {
      id: info.id,
      firstName: info.first_name,
      lastName: info.last_name,
      photoUrl: info.photo_200,
      city: info.city?.title,
    },
  };
}

async function readLaunchParams(): Promise<VkLaunch> {
  if (usingBridgeMock) {
    return parseLaunchFromLocation();
  }

  try {
    const data = await withTimeout(
      bridge.send("VKWebAppGetLaunchParams"),
      1500,
      "VKWebAppGetLaunchParams",
    );
    return {
      userId: data.vk_user_id,
      appId: data.vk_app_id,
      platform: data.vk_platform,
    };
  } catch {
    return parseLaunchFromLocation();
  }
}

export function fullName(user: Pick<VkUserProfile, "firstName" | "lastName">) {
  return `${user.firstName} ${user.lastName}`.trim();
}

export function initials(user: Pick<VkUserProfile, "firstName" | "lastName">) {
  return `${user.firstName.at(0) ?? ""}${user.lastName.at(0) ?? ""}`.toUpperCase();
}

export function isDesktopPlatform(platform: string | undefined, viewportWidth: number) {
  if (platform?.startsWith("desktop_")) return true;
  if (platform?.includes("mobile")) return false;
  return viewportWidth >= 900;
}

function envAppId() {
  const appId = Number(import.meta.env.VITE_VK_APP_ID);
  return Number.isFinite(appId) && appId > 0 ? appId : undefined;
}

let cachedSession: AppSession | null = null;

export async function bootSession(): Promise<AppSession> {
  if (cachedSession) return cachedSession;

  if (usingBridgeMock) {
    cachedSession = sessionFromInfo(MOCK_USER_INFO, parseLaunchFromLocation());
    void bridge.send("VKWebAppGetUserInfo", {}).catch(() => undefined);
    return cachedSession;
  }

  const [info, launch] = await Promise.all([
    withTimeout(
      bridge.send("VKWebAppGetUserInfo", {}),
      1500,
      "VKWebAppGetUserInfo",
    ),
    readLaunchParams(),
  ]);

  if (!("id" in info) || !info.id) {
    throw new Error("VKWebAppGetUserInfo did not return a user id");
  }

  cachedSession = sessionFromInfo(info, launch);
  return cachedSession;
}

export function familyTitle(user: VkUserProfile) {
  const surname = user.lastName.trim();
  let familySurname = surname;

  if (/(ова|ева|ина)$/i.test(surname)) {
    familySurname = `${surname.slice(0, -1)}ых`;
  } else if (/(ов|ев|ин)$/i.test(surname)) {
    familySurname = `${surname}ых`;
  } else if (/(ский|цкий)$/i.test(surname)) {
    familySurname = `${surname.slice(0, -2)}их`;
  } else if (/(ская|цкая)$/i.test(surname)) {
    familySurname = `${surname.slice(0, -2)}их`;
  }

  return `Семья ${familySurname}`;
}

export function inviteLink(appId: number | undefined, fragment: string) {
  const resolvedAppId = appId ?? envAppId();
  const normalizedFragment = fragment.replace(/^#/, "");
  if (resolvedAppId) {
    return `https://vk.com/app${resolvedAppId}#${normalizedFragment}`;
  }
  const url = new URL(window.location.href);
  url.hash = normalizedFragment;
  return url.toString();
}
