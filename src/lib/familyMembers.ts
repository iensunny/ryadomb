import type { FamilyPerson } from "../domain/family";
import type { VkUserProfile } from "../vk/session";
import { fullName } from "../vk/session";

export function buildFamilyMembers(
  user: VkUserProfile | undefined,
  mockMembers: FamilyPerson[],
  useMockMembers: boolean,
): FamilyPerson[] {
  if (!user) return useMockMembers ? mockMembers : [];

  const self: FamilyPerson = {
    id: "m-self",
    name: fullName(user),
    role: "Владелец семьи",
    initials: `${user.firstName.at(0) ?? ""}${user.lastName.at(0) ?? ""}`,
    photoUrl: user.photoUrl,
    isYou: true,
  };

  if (!useMockMembers) return [self];

  return [
    self,
    ...mockMembers
      .filter((member) => member.id !== "m1")
      .map((member) => ({ ...member, isYou: false, photoUrl: undefined })),
  ];
}
