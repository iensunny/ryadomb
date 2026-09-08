import { Avatar } from "../ui/Avatar";

type Props = {
  familyName: string;
  userName: string;
  photoUrl?: string;
  onJoin: () => void;
  onCancel: () => void;
};

export function JoinFamily({
  familyName,
  userName,
  photoUrl,
  onJoin,
  onCancel,
}: Props) {
  const [firstName, ...rest] = userName.split(" ");

  return (
    <section className="screen join-screen">
      <div className="join-card">
        <p className="kicker">Приглашение</p>
        <h1>Вас пригласили в {familyName}</h1>
        <p>
          Вы уже вошли через VK. После присоединения сможете добавлять тексты и
          фотографии в общий семейный архив.
        </p>
        <div className="join-inviter">
          <Avatar
            person={{
              firstName: firstName || userName,
              lastName: rest.join(" "),
              photoUrl,
            }}
          />
          <div>
            <strong>{userName}</strong>
            <small>Профиль ВКонтакте</small>
          </div>
        </div>
      </div>

      <div className="join-actions">
        <button className="btn-primary" onClick={onJoin}>
          Присоединиться
        </button>
        <button className="secondary-action" onClick={onCancel}>
          Не сейчас
        </button>
      </div>
    </section>
  );
}
