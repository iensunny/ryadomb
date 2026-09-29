import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { FamilyPerson } from "../domain/family";
import { Avatar } from "../ui/Avatar";
import type { VkUserProfile } from "../vk/session";

type Props = {
  familyName: string;
  user: VkUserProfile;
  members: FamilyPerson[];
  onInvite: () => void;
  onOpenProfile: () => void;
  onDeleteFamily: () => Promise<void>;
  onLeaveFamily: () => Promise<void>;
  onRemoveMember: (memberId: string) => Promise<void>;
  joinedRecently?: boolean;
};

export function Family({
  familyName,
  user,
  members,
  onInvite,
  onOpenProfile,
  onDeleteFamily,
  onLeaveFamily,
  onRemoveMember,
  joinedRecently,
}: Props) {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [confirmation, setConfirmation] = useState("");
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState<FamilyPerson | null>(null);
  const [working, setWorking] = useState(false);
  const [actionError, setActionError] = useState("");
  const currentMember = members.find((member) => member.isYou);
  const isOwner = Boolean(currentMember?.isOwner);

  async function runAction(action: () => Promise<void>) {
    setWorking(true);
    setActionError("");
    try {
      await action();
    } catch (error) {
      setActionError(error instanceof Error ? error.message : "Не удалось выполнить действие");
      setWorking(false);
    }
  }

  useEffect(() => {
    if (!deleteOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [deleteOpen]);
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

      {joinedRecently && (
        <div className="family-join-success" role="status">
          <strong>Вы присоединились к семье</strong>
          <span>Теперь участники и общая семейная книга доступны вам.</span>
        </div>
      )}

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
            {isOwner && !member.isYou && (
              <button className="member-remove-button" onClick={() => setMemberToRemove(member)}>
                Исключить
              </button>
            )}
          </article>
        ))}
      </div>

      <section className="family-danger-zone">
        <h2>Управление семьёй</h2>
        {isOwner ? (
          <>
            <p>Удалить семью может только её владелец. Участники будут исключены, а истории, книга и фотографии удалены без возможности восстановления.</p>
            <button className="btn-danger" onClick={() => setDeleteOpen(true)}>Удалить семью</button>
          </>
        ) : (
          <>
            <p>После выхода вы потеряете доступ к общей книге и материалам этой семьи. Ваши материалы останутся у семьи.</p>
            <button className="btn-danger" onClick={() => setLeaveOpen(true)}>Покинуть семью</button>
          </>
        )}
        {actionError && <p className="form-error" role="alert">{actionError}</p>}
      </section>

      {deleteOpen && createPortal(
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true" aria-labelledby="delete-family-title">
            <h2 id="delete-family-title">Удалить семью?</h2>
            <p>Для подтверждения введите название семьи: <strong>{familyName}</strong></p>
            <input className="field" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} autoFocus />
            {actionError && <p className="form-error" role="alert">{actionError}</p>}
            <div className="modal-actions-row">
              <button className="btn-secondary" onClick={() => setDeleteOpen(false)}>Отмена</button>
              <button className="btn-danger" disabled={working || confirmation.trim() !== familyName} onClick={() => void runAction(onDeleteFamily)}>
                {working ? "Удаляем…" : "Удалить навсегда"}
              </button>
            </div>
          </section>
        </div>,
        document.body,
      )}

      {leaveOpen && createPortal(
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true" aria-labelledby="leave-family-title">
            <h2 id="leave-family-title">Покинуть семью?</h2>
            <p>Вы больше не сможете просматривать и изменять материалы семьи «{familyName}».</p>
            {actionError && <p className="form-error" role="alert">{actionError}</p>}
            <div className="modal-actions-row">
              <button className="btn-secondary" disabled={working} onClick={() => setLeaveOpen(false)}>Отмена</button>
              <button className="btn-danger" disabled={working} onClick={() => void runAction(onLeaveFamily)}>
                {working ? "Выходим…" : "Покинуть семью"}
              </button>
            </div>
          </section>
        </div>,
        document.body,
      )}

      {memberToRemove && createPortal(
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true" aria-labelledby="remove-member-title">
            <h2 id="remove-member-title">Исключить участника?</h2>
            <p>{memberToRemove.name} потеряет доступ к общей книге и материалам семьи.</p>
            {actionError && <p className="form-error" role="alert">{actionError}</p>}
            <div className="modal-actions-row">
              <button className="btn-secondary" disabled={working} onClick={() => setMemberToRemove(null)}>Отмена</button>
              <button className="btn-danger" disabled={working} onClick={() => void runAction(() => onRemoveMember(memberToRemove.id))}>
                {working ? "Исключаем…" : "Исключить"}
              </button>
            </div>
          </section>
        </div>,
        document.body,
      )}
    </section>
  );
}
