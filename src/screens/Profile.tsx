import { Avatar } from "../ui/Avatar";
import { fullName, type AppSession } from "../vk/session";

type Props = {
  session: AppSession;
  storyCount: number;
  bookPageCount: number;
  onOpenStories: () => void;
  onOpenBooks: () => void;
  onBack: () => void;
};

export function Profile({
  session,
  storyCount,
  bookPageCount,
  onOpenStories,
  onOpenBooks,
  onBack,
}: Props) {
  const { user, launch, usingMock } = session;

  return (
    <section className="screen screen-scroll profile-screen">
      <header className="page-head">
        <p className="kicker">Личный кабинет</p>
        <h1>Ваши семейные истории</h1>
        <p>Истории, семейная книга и профиль ВКонтакте в одном месте.</p>
      </header>

      <article className="profile-card">
        <Avatar person={user} className="avatar avatar-lg" />
        <div>
          <h2>{fullName(user)}</h2>
          <p>VK ID {user.id}</p>
          {user.city && <p>{user.city}</p>}
        </div>
      </article>

      <div className="profile-stats">
        <button className="profile-stat" onClick={onOpenStories}>
          <strong>{storyCount}</strong>
          <span>истории</span>
        </button>
        <button className="profile-stat" onClick={onOpenBooks}>
          <strong>{bookPageCount}</strong>
          <span>в книге</span>
        </button>
      </div>

      <div className="family-list profile-connection">
        <p className="section-label">Подключение</p>
        <article className="member-row">
          <div>
            <h3>Профиль ВКонтакте</h3>
            <p>{launch.platform ?? "локальная разработка"}</p>
          </div>
        </article>
        <article className="member-row">
          <div>
            <h3>
              {usingMock
                ? "Локальный vk-bridge-mock"
                : "Сессия VK Bridge"}
            </h3>
            <p>
              {usingMock
                ? "Снаружи VK события эмулирует mock из документации, чтобы собирать интерфейс."
                : "Имя и фото пришли из VKWebAppGetUserInfo. Подпись launch params проверяется на сервере, когда появится API."}
            </p>
          </div>
        </article>
      </div>

      <button className="btn-primary" onClick={onBack}>
        К семейным историям
      </button>
    </section>
  );
}
