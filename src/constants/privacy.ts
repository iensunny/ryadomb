export const PRIVACY_POLICY_VERSION =
  String(import.meta.env.VITE_PRIVACY_POLICY_VERSION || "1.0").trim();

export const PRIVACY_POLICY_URL =
  String(
    import.meta.env.VITE_PRIVACY_POLICY_URL ||
      new URL("privacy.html", document.baseURI).toString(),
  ).trim();
