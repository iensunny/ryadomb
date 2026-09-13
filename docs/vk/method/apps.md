# apps

> Источник: [https://dev.vk.ru/ru/method/apps](https://dev.vk.ru/ru/method/apps)
- [Apps](method/apps)
  - [apps.addSnippet](method/apps.addSnippet) — Метод добавляет новый сниппет в коллекцию сниппетов [мини-приложения](mini-apps/development/snippets) или [игры](games/promotion/game-mechanics/snippets).


  - [apps.addUsersToTestingGroup](method/apps.addUsersToTestingGroup) — Метод добавляет указанных пользователей в группу тестировщиков мини-приложения.
  - [apps.deleteAppRequests](method/apps.deleteAppRequests) — Удаляет все уведомления о запросах, отправленных из текущего приложения.
  - [apps.deleteSnippet](method/apps.deleteSnippet) — Метод удаляет сниппет [мини-приложения](mini-apps/development/snippets) или [игры](games/promotion/game-mechanics/snippets).
  - [apps.get](method/apps.get) — Метод возвращает данные о приложениях.
  - [apps.getCatalog](method/apps.getCatalog) — Возвращает список приложений, доступных для пользователей сайта через каталог приложений.
  - [apps.getFriendsList](method/apps.getFriendsList) — Создает список друзей, который будет использоваться при отправке пользователем приглашений в приложение и игровых запросов.
  - [apps.getLeaderboard](method/apps.getLeaderboard) — Возвращает рейтинг пользователей в игре.
  - [apps.getMiniAppPolicies](method/apps.getMiniAppPolicies) — Метод получает ссылки, указанные в разделе [пользовательское соглашение и политика конфиденциальности](mini-apps/settings/general/legal-docs) мини-приложения.
  - [apps.getScopes](method/apps.getScopes) — Метод получает права доступа.

Есть два вида доступов:

* **Базовые** — фамилия и имя, фото профиля, пол и дата рождения — доступны сразу после создания приложения в [Сервисе авторизации VK ID](https://id.vk.com/about/business/go/).
* **Расширенные** — доступны после [подтверждения профиля бизнеса в сервисе VK Бизнес ID](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/create-application#Kak-podtverdit-profil-biznesa). Если профиль бизнеса уже подтверждён, появится доступ к номеру телефона пользователя. Чтобы метод возвращал другие [расширеннные права доступа](reference/access-rights#Права%20доступа%20для%20токена%20пользователя), запросите их через обращение в техническую поддержку. Для этого напишите на почту [devsupport@corp.vk.com](mailto:devsupport@corp.vk.com). Получение расширенных доступов рассматривается в индивидуальном порядке.
  - [apps.getScore](method/apps.getScore) — Метод возвращает количество очков пользователя в этой игре.
  - [apps.getSnippets](method/apps.getSnippets) — Метод возвращает информацию о сниппетах [мини-приложения](mini-apps/development/snippets) или [игры](games/promotion/game-mechanics/snippets), созданных с помощью [`apps.addSnippet`](method/apps.addSnippet).
  - [apps.getTestingGroups](method/apps.getTestingGroups) — Метод возвращает группы тестировщиков мини-приложения.
  - [apps.isNotificationsAllowed](method/apps.isNotificationsAllowed) — Метод проверяет, разрешил ли пользователь присылать ему [уведомления](mini-apps/promotion/social-mechanics/notifications/overview) в мини-приложении.
  - [apps.promoHasActiveGift](method/apps.promoHasActiveGift) — Проверить есть ли у пользователя подарок в игре.
  - [apps.promoUseGift](method/apps.promoUseGift) — Метод отмечает подарок, полученный пользователем в промоакции, как использованный.
  - [apps.removeTestingGroup](method/apps.removeTestingGroup) — Метод удаляет указанную группу тестировщиков мини-приложения.
  - [apps.removeUsersFromTestingGroups](method/apps.removeUsersFromTestingGroups) — Метод удаляет указанных пользователей из групп тестировщиков мини-приложения.
  - [apps.sendRequest](method/apps.sendRequest) — Позволяет отправить запрос другому пользователю в приложении, использующем авторизацию ВКонтакте.
  - [apps.updateMetaForTestingGroup](method/apps.updateMetaForTestingGroup) — Метод создает новую или обновляет существующую группу тестировщиков мини-приложения.
