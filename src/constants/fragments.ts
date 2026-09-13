export const JOIN_FRAGMENT_PREFIX = "join_";
export const INVITE_FRAGMENT = "join_family-home";

export function hasJoinFragment(value: string) {
  return value.includes(JOIN_FRAGMENT_PREFIX);
}
