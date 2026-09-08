import { useState } from "react";
import { initials, type VkUserProfile } from "../vk/session";

type Props = {
  person: Pick<VkUserProfile, "firstName" | "lastName"> & { photoUrl?: string };
  className?: string;
};

export function Avatar({ person, className = "avatar" }: Props) {
  const [failed, setFailed] = useState(false);

  if (person.photoUrl && !failed) {
    return (
      <img
        className={className}
        src={person.photoUrl}
        alt=""
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    );
  }

  return <span className={className}>{initials(person)}</span>;
}
