type Props = {
  onJoin: () => void;
  onCancel: () => void;
};

export function JoinFamily({ onJoin, onCancel }: Props) {
  return (
    <section className="screen join-screen">
      <div className="join-card">
        <p className="kicker">Приглашение</p>
        <h1>Вас пригласили в семью Ивановых</h1>
        <p>
          После вступления вы сможете добавлять голосовые истории, тексты и
          фотографии в общий семейный архив.
        </p>
        <div className="join-inviter">
          <span className="avatar">И</span>
          <div>
            <strong>Приглашение от Ивана</strong>
            <small>Ссылка действует 30 дней</small>
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
