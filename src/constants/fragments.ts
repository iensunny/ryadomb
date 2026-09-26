export const JOIN_FRAGMENT_PREFIX = "join_";

export function hasJoinFragment(value: string) {
  return Boolean(joinTokenFromFragment(value));
}

export function joinTokenFromFragment(value: string) {
  const normalized = value.replace(/^#/, "");
  const start = normalized.indexOf(JOIN_FRAGMENT_PREFIX);
  if (start < 0) return null;
  const token = normalized.slice(start + JOIN_FRAGMENT_PREFIX.length).split(/[&/?]/)[0];
  return /^[A-Za-z0-9_-]{20,}$/.test(token) ? token : null;
}
