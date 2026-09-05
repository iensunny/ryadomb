import { familyMembers } from "../stories";

type Props = {
  onInvite: () => void;
};

export function Family({ onInvite }: Props) {
  return (
    <section className="screen screen-scroll with-nav">
      <header className="page-head">
        <p className="kicker">Семья</p>
        <h1>Книга пишется всей семьёй</h1>
        <p>
          Мама приглашает бабушек, дедушек и других родных по ссылке — они
          присоединяются как участники и добавляют свои истории.
        </p>
      </header>

      <div className="family-list">
        {familyMembers.map((member) => (
          <article className="member-row" key={member.id}>
            <span className="avatar">{member.initials}</span>
            <div>
              <h3>
                {member.name}
                {member.name === "Мама" ? " (вы)" : ""}
              </h3>
              <p>{member.role}</p>
            </div>
          </article>
        ))}
      </div>

      <button className="invite-card" onClick={onInvite}>
        <span>+</span>
        <div>
          <h2>Пригласить родных</h2>
          <p>Ссылка действует 30 дней</p>
        </div>
      </button>
    </section>
  );
}
