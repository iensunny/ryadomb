import { useState } from "react";
import { Avatar } from "../ui/Avatar";

type Props = {
  userName: string;
  photoUrl?: string;
  onJoin: () => Promise<void>;
  onCancel: () => void;
};

export function JoinFamily({
  userName,
  photoUrl,
  onJoin,
  onCancel,
}: Props) {
  const [firstName, ...rest] = userName.split(" ");
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState("");

  async function join() {
    setJoining(true);
    setError("");
    try {
      await onJoin();
    } catch (reason) {
      const code = (reason as { code?: string }).code;
      setError(code === "ALREADY_IN_FAMILY"
        ? "Вы уже состоите в другой семье. Сначала выйдите из неё или обратитесь к владельцу."
        : code === "INVALID_INVITE"
          ? "Приглашение недействительно или истекло. Попросите новую ссылку."
          : "Не удалось присоединиться. Проверьте соединение и попробуйте ещё раз.");
      setJoining(false);
    }
  }

  return (
    <section className="screen join-screen">
      <div className="join-card">
        <p className="kicker">Приглашение</p>
        <h1>Вас пригласили в семейную книгу</h1>
        <p>
          Вы уже вошли через VK. После присоединения сможете добавлять тексты и
          фотографии в общую семейную книгу.
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
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="btn-primary" onClick={() => void join()} disabled={joining}>
          {joining ? "Присоединяем…" : "Присоединиться"}
        </button>
        <button className="secondary-action" onClick={onCancel} disabled={joining}>
          Не сейчас
        </button>
      </div>
    </section>
  );
}
