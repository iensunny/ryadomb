# groups

> Источник: [https://dev.vk.ru/ru/method/groups](https://dev.vk.ru/ru/method/groups)
- [Groups](method/groups)
  - [groups.addAddress](method/groups.addAddress) — Позволяет добавить адрес в сообщество.
Список адресов может быть получен методом [`groups.getAddresses`](method/groups.getAddresses).

> Для того, чтобы воспользоваться этим методом, вы должны быть администратором сообщества.
  - [groups.addCallbackServer](method/groups.addCallbackServer) — Добавляет сервер для [Callback API](api/callback/getting-started) в сообщество.
  - [groups.approveRequest](method/groups.approveRequest) — Позволяет одобрить заявку в группу от пользователя.
  - [groups.ban](method/groups.ban) — Добавляет пользователя или группу в черный список сообщества.
  - [groups.deleteAddress](method/groups.deleteAddress) — Удаляет адрес сообщества.
  - [groups.deleteCallbackServer](method/groups.deleteCallbackServer) — Удаляет сервер для [Callback API](api/callback/getting-started) из сообщества.
  - [groups.disableOnline](method/groups.disableOnline) — Выключает статус «онлайн» в сообществе.
  - [groups.editAddress](method/groups.editAddress) — Метод редактирует адрес в сообществе. Чтобы получить список адресов, вызовите метод [`groups.getAddresses`](method/groups.getAddresses).
  - [groups.editCallbackServer](method/groups.editCallbackServer) — Редактирует данные сервера для [Callback API](api/callback/getting-started) в сообществе.
  - [groups.editManager](method/groups.editManager) — Позволяет назначить/разжаловать руководителя в сообществе или изменить уровень его полномочий.
  - [groups.enableOnline](method/groups.enableOnline) — Включает статус «онлайн» в сообществе.
  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
  - [groups.getAddresses](method/groups.getAddresses) — Метод возвращает адрес указанного сообщества.
  - [groups.getBanned](method/groups.getBanned) — Возвращает список забаненных пользователей и сообществ в сообществе.
  - [groups.getById](method/groups.getById) — Возвращает информацию о заданном сообществе или о нескольких сообществах.
  - [groups.getCallbackConfirmationCode](method/groups.getCallbackConfirmationCode) — Позволяет получить строку, необходимую для подтверждения адреса сервера в [Callback API](api/callback/getting-started).
  - [groups.getCallbackServers](method/groups.getCallbackServers) — Получает информацию о серверах для [Callback API](api/callback/getting-started) в сообществе.
  - [groups.getCallbackSettings](method/groups.getCallbackSettings) — Позволяет получить настройки уведомлений [Callback API](api/callback/getting-started) для сообщества.
  - [groups.getCatalogInfo](method/groups.getCatalogInfo) — Возвращает список категорий для каталога сообществ.
  - [groups.getInvitedUsers](method/groups.getInvitedUsers) — Возвращает список пользователей, которые были приглашены в группу.
  - [groups.getInvites](method/groups.getInvites) — Данный метод возвращает список приглашений в сообщества и встречи текущего пользователя.
  - [groups.getLongPollServer](method/groups.getLongPollServer) — Возвращает данные для подключения к [Bots Longpoll API](api/bots-long-poll/getting-started).
  - [groups.getLongPollSettings](method/groups.getLongPollSettings) — Получает настройки Bots Longpoll API для сообщества.
  - [groups.getMembers](method/groups.getMembers) — Возвращает список участников сообщества.
  - [groups.getOnlineStatus](method/groups.getOnlineStatus) — Получает информацию о статусе «онлайн» в сообществе.
  - [groups.getRequests](method/groups.getRequests) — Возвращает список заявок на вступление в сообщество.
  - [groups.getTagList](method/groups.getTagList) — Возвращает список тегов сообщества
  - [groups.getTokenPermissions](method/groups.getTokenPermissions) — Возвращает настройки прав для ключа доступа сообщества.
  - [groups.invite](method/groups.invite) — Позволяет приглашать друзей в группу.
  - [groups.isMember](method/groups.isMember) — Возвращает информацию о том, является ли пользователь участником сообщества.
  - [groups.removeUser](method/groups.removeUser) — Позволяет исключить пользователя из группы или отклонить заявку на вступление.
  - [groups.search](method/groups.search) — Осуществляет поиск сообществ по заданной подстроке.
  - [groups.setCallbackSettings](method/groups.setCallbackSettings) — Позволяет задать настройки уведомлений о событиях в [Callback API](api/callback/getting-started).
  - [groups.setLongPollSettings](method/groups.setLongPollSettings) — Задаёт настройки для Bots Long Poll API в сообществе.
  - [groups.setSettings](method/groups.setSettings) — Устанавливает настройки сообщества
  - [groups.setUserNote](method/groups.setUserNote) — Позволяет создать или отредактировать заметку о пользователе в рамках переписки пользователя с сообществом
  - [groups.tagAdd](method/groups.tagAdd) — Позволяет добавить новый тег в сообщество.
  - [groups.tagBind](method/groups.tagBind) — Позволяет «привязывать» и «отвязывать» теги сообщества к беседам.
  - [groups.tagDelete](method/groups.tagDelete) — Позволяет удалить тег сообщества.
  - [groups.tagUpdate](method/groups.tagUpdate) — Позволяет переименовать существующий тег.
  - [groups.toggleMarket](method/groups.toggleMarket) — Переключает функционал раздела «Товаров» в выбранной группе.
  - [groups.unban](method/groups.unban) — Убирает пользователя или группу из черного списка сообщества.
