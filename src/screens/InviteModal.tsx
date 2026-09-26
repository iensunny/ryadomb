import { useEffect, useState } from "react";
import { createFamilyInvite } from "../lib/familyApi";
import { trackEvent } from "../lib/analytics";
import { bridge } from "../vk/bridge";
import { inviteLink, type VkUserProfile } from "../vk/session";

type Props = {
  familyName: string;
  appId?: number;
  user: VkUserProfile;
  onClose: () => void;
};

export function InviteModal({ familyName, appId, user, onClose }: Props) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    createFamilyInvite(familyName, user)
      .then(({ token }) => {
        if (!cancelled) setLink(inviteLink(appId, `join_${token}`));
      })
      .catch(() => {
        if (!cancelled) setError("Не удалось создать приглашение. Попробуйте ещё раз.");
      });
    return () => { cancelled = true; };
  }, [appId, familyName, user]);

  async function copy() {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      // ignore
    }
    setCopied(true);
    trackEvent("invite_copied", { screen: "family", user });
  }

  async function share() {
    if (!link) return;
    try {
      await bridge.send("VKWebAppShare", { link });
      setShared(true);
      trackEvent("invite_shared", { screen: "family", user });
    } catch {
      await copy();
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="invite-modal"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="kicker">Приглашение</p>
        <h2>Пригласить в {familyName}</h2>
        <p>Родные откроют ссылку во ВКонтакте и подтвердят вступление. Приглашение действует 30 дней.</p>
        {link && <code>{link}</code>}
        {!link && !error && <p className="copy-done">Создаём персональную ссылку…</p>}
        {error && <p className="form-error">{error}</p>}
        {copied && <p className="copy-done">Ссылка скопирована</p>}
        {shared && <p className="copy-done">Открыли окно VK</p>}
        <div className="modal-actions-row">
          <button className="secondary-action" onClick={copy} disabled={!link}>
            Копировать
          </button>
          <button className="secondary-action" onClick={share} disabled={!link}>
            Поделиться в VK
          </button>
        </div>
        <button className="btn-primary" onClick={onClose}>
          Готово
        </button>
      </section>
    </div>
  );
}
