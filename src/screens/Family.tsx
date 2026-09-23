import { useState } from "react";
import type { FamilyPerson } from "../domain/family";
import { Avatar } from "../ui/Avatar";
import type { VkUserProfile } from "../vk/session";

type Props = {
  familyName: string;
  user: VkUserProfile;
  members: FamilyPerson[];
  onInvite: () => void;
  onOpenProfile: () => void;
  onDeleteFamily: () => void;
};

export function Family({
  familyName,
  user,
  members,
  onInvite,
  onOpenProfile,
  onDeleteFamily,
}: Props) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">{familyName}</p>
        <h1>Книга пишется всей семьёй</h1>
        <p>
          Вы приглашаете родных через VK. Они входят своим аккаунтом ВКонтакте и
          добавляют тексты и фотографии в общую семейную книгу.
        </p>
      </header>

      <button className="family-profile-link" onClick={onOpenProfile}>
        <Avatar person={user} className="avatar avatar-sm" />
        <span>
          <strong>
            {user.firstName} {user.lastName}
          </strong>
          <small>Профиль и настройки</small>
        </span>
        <b aria-hidden>›</b>
      </button>

      <p className="section-label">Участники семьи</p>

      <button className="invite-card" onClick={onInvite}>
        <span>+</span>
        <div>
          <h2>Пригласить родных</h2>
          <p>Приглашение через VK · действует 30 дней</p>
        </div>
      </button>

      <div className="family-list">
        {members.map((member) => (
          <article className="member-row" key={member.id}>
            {member.photoUrl ? (
              <Avatar
                person={{
                  firstName: member.name.split(" ")[0] ?? member.initials,
                  lastName: member.name.split(" ")[1] ?? "",
                  photoUrl: member.photoUrl,
                }}
                className="avatar avatar-sm"
              />
            ) : (
              <span className="avatar avatar-sm">{member.initials}</span>
            )}
            <div>
              <h3>
                {member.name}
                {member.isYou ? " (вы)" : ""}
              </h3>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="family-danger-zone">
        <h2>Управление семьёй</h2>
        <p>Удалить семью может только её владелец. Истории и книга будут удалены без возможности восстановления.</p>
        <button className="btn-danger" onClick={() => setDeleteOpen(true)}>Удалить семью</button>
      </section>

      {deleteOpen && (
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true">
            <h2>Удалить семью?</h2>
            <p>Для подтверждения введите название семьи: <strong>{familyName}</strong></p>
            <input className="field" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} autoFocus />
            <div className="modal-actions-row">
              <button className="btn-secondary" onClick={() => setDeleteOpen(false)}>Отмена</button>
              <button className="btn-danger" disabled={confirmation.trim() !== familyName} onClick={onDeleteFamily}>Удалить навсегда</button>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
