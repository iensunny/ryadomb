# Описание методов API

> Источник: [https://dev.vk.ru/ru/method](https://dev.vk.ru/ru/method)
- [Account](method/account)
  - [account.getAppPermissions](method/account.getAppPermissions) — Метод получает настройки пользователя вашего [приложения](https://vk.com/apps?act=manage).
- [Ads](method/ads)
  - [ads.addOfficeUsers](method/ads.addOfficeUsers) — Добавляет администраторов и/или наблюдателей в рекламный кабинет.
  - [ads.checkLink](method/ads.checkLink) — Проверяет ссылку на рекламируемый объект.
  - [ads.createAds](method/ads.createAds) — Создает рекламные объявления.
  - [ads.createCampaigns](method/ads.createCampaigns) — Создает рекламные кампании.
  - [ads.createClients](method/ads.createClients) — Метод создаёт клиентов рекламного агентства. Доступен только для рекламных агентств.
  - [ads.createLookalikeRequest](method/ads.createLookalikeRequest) — Создаёт запрос на поиск похожей аудитории.
  - [ads.createTargetGroup](method/ads.createTargetGroup) — Создаёт аудиторию для ретаргетинга рекламных объявлений на пользователей, которые посетили сайт рекламодателя (просмотрели информации о товаре, зарегистрировались и т.д.).
  - [ads.createTargetPixel](method/ads.createTargetPixel) — Создаёт пиксель ретаргетинга.
  - [ads.deleteAds](method/ads.deleteAds) — Архивирует рекламные объявления.
  - [ads.deleteCampaigns](method/ads.deleteCampaigns) — Архивирует рекламные кампании.
  - [ads.deleteClients](method/ads.deleteClients) — Архивирует клиентов рекламного агентства.
  - [ads.deleteTargetGroup](method/ads.deleteTargetGroup) — Удаляет аудиторию ретаргетинга.
  - [ads.deleteTargetPixel](method/ads.deleteTargetPixel) — Удаляет пиксель ретаргетинга.
  - [ads.getAccounts](method/ads.getAccounts) — Возвращает список рекламных кабинетов.
  - [ads.getAds](method/ads.getAds) — Возвращает список рекламных объявлений.
  - [ads.getAdsLayout](method/ads.getAdsLayout) — Возвращает описания внешнего вида рекламных объявлений.
  - [ads.getAdsTargeting](method/ads.getAdsTargeting) — Возвращает параметры таргетинга рекламных объявлений
  - [ads.getBudget](method/ads.getBudget) — Возвращает текущий бюджет рекламного кабинета.
  - [ads.getCampaigns](method/ads.getCampaigns) — Возвращает список кампаний рекламного кабинета.
  - [ads.getCategories](method/ads.getCategories) — Позволяет получить возможные тематики рекламных объявлений.
  - [ads.getClients](method/ads.getClients) — Метод возвращает список клиентов рекламного агентства. Доступен только для рекламных агентств.
  - [ads.getDemographics](method/ads.getDemographics) — Возвращает демографическую статистику по рекламным объявлениям или кампаниям.
  - [ads.getFloodStats](method/ads.getFloodStats) — Возвращает информацию о текущем состоянии счетчика — количество оставшихся запусков методов и время до следующего обнуления счетчика в секундах.
  - [ads.getLookalikeRequests](method/ads.getLookalikeRequests) — Возвращает список запросов на поиск похожей аудитории.
  - [ads.getMusicians](method/ads.getMusicians) — Возвращает информацию о музыкантах, на слушателей которых доступно таргетирование.
  - [ads.getMusiciansByIds](method/ads.getMusiciansByIds) — Возвращает информацию о музыкантах на слушателей, для которых доступно таргетирование.
  - [ads.getOfficeUsers](method/ads.getOfficeUsers) — Возвращает список администраторов и наблюдателей рекламного кабинета.
  - [ads.getPostsReach](method/ads.getPostsReach) — Возвращает подробную статистику по охвату рекламных записей из объявлений и кампаний для продвижения записей сообщества.
  - [ads.getRejectionReason](method/ads.getRejectionReason) — Возвращает причину, по которой указанному объявлению было отказано в прохождении премодерации.
  - [ads.getStatistics](method/ads.getStatistics) — Возвращает статистику показателей эффективности по рекламным объявлениям, кампаниям, клиентам или всему кабинету.
  - [ads.getSuggestions](method/ads.getSuggestions) — Возвращает набор подсказок для различных параметров таргетинга.
  - [ads.getTargetGroups](method/ads.getTargetGroups) — Возвращает список аудиторий ретаргетинга.
  - [ads.getTargetPixels](method/ads.getTargetPixels) — Возвращает список пикселей ретаргетинга.
  - [ads.getTargetingStats](method/ads.getTargetingStats) — Возвращает размер целевой аудитории таргетинга, а также рекомендованные значения CPC и CPM.
  - [ads.getUploadURL](method/ads.getUploadURL) — Возвращает URL-адрес для загрузки фотографии рекламного объявления.

Подробности о загрузке изображений для объявлений смотрите на [отдельной странице](method/ads/upload-photo-ads).
  - [ads.getVideoUploadURL](method/ads.getVideoUploadURL) — Возвращает URL-адрес для загрузки видеозаписи рекламного объявления.

Подробности о загрузке видеозаписей для объявлений смотрите на [отдельной странице](method/ads/upload-video-ads).
  - [ads.importTargetContacts](method/ads.importTargetContacts) — Импортирует список контактов рекламодателя для учета зарегистрированных во ВКонтакте пользователей в аудитории ретаргетинга.
  - [ads.removeOfficeUsers](method/ads.removeOfficeUsers) — Удаляет администраторов и/или наблюдателей из рекламного кабинета.
  - [ads.removeTargetContacts](method/ads.removeTargetContacts) — Принимает запрос на исключение контактов рекламодателя из аудитории ретаргетинга.
  - [ads.saveLookalikeRequestResult](method/ads.saveLookalikeRequestResult) — Сохраняет результат поиска похожей аудитории.
  - [ads.shareTargetGroup](method/ads.shareTargetGroup) — Предоставляет доступ к аудитории ретаргетинга другому рекламному кабинету. В результате выполнения метода возвращается идентификатор аудитории для указанного кабинета.
  - [ads.updateAds](method/ads.updateAds) — Редактирует рекламные объявления.
  - [ads.updateCampaigns](method/ads.updateCampaigns) — Редактирует рекламные кампании.
  - [ads.updateClients](method/ads.updateClients) — Метод редактирует клиентов рекламного агентства. Доступен только для рекламных агентств.
  - [ads.updateOfficeUsers](method/ads.updateOfficeUsers) — Добавляет или редактирует администраторов и/или наблюдателей в рекламный кабинет.
  - [ads.updateTargetGroup](method/ads.updateTargetGroup) — Редактирует аудиторию ретаргетинга.
  - [ads.updateTargetPixel](method/ads.updateTargetPixel) — Редактирует пиксель ретаргетинга.
- [AppWidgets](method/appWidgets)
  - [appWidgets.getAppImageUploadServer](method/appWidgets.getAppImageUploadServer) — Позволяет получить адрес для загрузки фотографии в коллекцию приложения для виджетов приложений сообществ. Подробнее — в разделе [Изображения в виджете](https://dev.vk.com/ru/api/community-apps-widgets/getting-started#Изображения%20в%20виджете).
  - [appWidgets.getAppImages](method/appWidgets.getAppImages) — Позволяет получить коллекцию изображений, загруженных для приложения, в [виджетах приложений сообществ](api/community-apps-widgets/getting-started).
  - [appWidgets.getGroupImageUploadServer](method/appWidgets.getGroupImageUploadServer) — Позволяет получить адрес для загрузки фотографии в коллекцию сообщества для виджетов приложений сообществ. Подробнее — в разделе [Изображения в виджете](https://dev.vk.com/ru/api/community-apps-widgets/getting-started#Изображения%20в%20виджете).
  - [appWidgets.getGroupImages](method/appWidgets.getGroupImages) — Позволяет получить коллекцию изображений, загруженных для приложения, в [виджетах приложений сообществ](api/community-apps-widgets/getting-started).
  - [appWidgets.getImagesById](method/appWidgets.getImagesById) — Позволяет получить изображение для [виджетов приложений сообществ](api/community-apps-widgets/getting-started) по его идентификатору.
  - [appWidgets.saveAppImage](method/appWidgets.saveAppImage) — Позволяет сохранить изображение в коллекцию приложения для виджетов приложений сообществ после загрузки на сервер. Подробнее — в разделе [Изображения в виджете](api/community-apps-widgets/getting-started#Изображения%20в%20виджете).
  - [appWidgets.saveGroupImage](method/appWidgets.saveGroupImage) — Позволяет сохранить изображение в коллекцию сообщества для виджетов приложений сообществ после загрузки на сервер. Подробнее — в разделе [Изображения в виджете](api/community-apps-widgets/getting-started#Изображения%20в%20виджете).
  - [appWidgets.update](method/appWidgets.update) — Позволяет обновить [виджет приложения сообщества](api/community-apps-widgets/getting-started).
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
- [Board](method/board)
  - [board.addTopic](method/board.addTopic) — Создает новую тему в списке обсуждений группы.
  - [board.createComment](method/board.createComment) — Добавляет новый комментарий в обсуждении.
  - [board.deleteComment](method/board.deleteComment) — Удаляет сообщение темы в обсуждениях сообщества.
  - [board.editComment](method/board.editComment) — Редактирует одно из сообщений в обсуждении сообщества.
  - [board.getComments](method/board.getComments) — Возвращает список сообщений в указанной теме.
  - [board.getTopics](method/board.getTopics) — Возвращает список тем в обсуждениях указанной группы.
  - [board.restoreComment](method/board.restoreComment) — Метод восстанавливает в сообществе удалённое из обсуждения сообщение.
- [Bugtracker](method/bugtracker)
  - [bugtracker.addCompanyGroupsMembers](method/bugtracker.addCompanyGroupsMembers) — Добавляет [сотрудников](vk-testers/employees) в группы доступа [компании](vk-testers/company).
  - [bugtracker.addCompanyMembers](method/bugtracker.addCompanyMembers) — Добавляет [сотрудников](vk-testers/employees) в [компанию](vk-testers/company).
  - [bugtracker.changeBugreportStatus](method/bugtracker.changeBugreportStatus) — Изменяет статус отчёта в соответствии с правилами смены статусов.
  - [bugtracker.createComment](method/bugtracker.createComment) — Оставляет комментарий к отчёту.
  - [bugtracker.getBugreportById](method/bugtracker.getBugreportById) — Возвращает информацию об отчёте.
  - [bugtracker.getCompanyGroupMembers](method/bugtracker.getCompanyGroupMembers) — Возвращает список [сотрудников](vk-testers/employees) из группы доступа [компании](vk-testers/company).
  - [bugtracker.getCompanyMembers](method/bugtracker.getCompanyMembers) — Возвращает список [сотрудников](vk-testers/employees) [компании](vk-testers/company).
  - [bugtracker.getDownloadVersionUrl](method/bugtracker.getDownloadVersionUrl) — Возвращает одноразовую ссылку для скачивания сборки, прикреплённой к указанной версии приложения в [продукте](vk-tersters/product).
  - [bugtracker.getProductBuildUploadServer](method/bugtracker.getProductBuildUploadServer) — Получает ссылку для загрузки сборки приложения в [продукт](vk-testers/product).
  - [bugtracker.removeCompanyGroupMember](method/bugtracker.removeCompanyGroupMember) — Исключает [сотрудника](vk-testers/employees) из группы доступа [компании](vk-testers/company).
  - [bugtracker.removeCompanyMember](method/bugtracker.removeCompanyMember) — Удаляет [сотрудника](vk-testers/employees) из [компании](vk-testers/company) и из всех групп доступа в этой компании.
  - [bugtracker.saveProductVersion](method/bugtracker.saveProductVersion) — Метод создаёт версию или сохраняет изменения версии [продукта](vk-testers/product).
  - [bugtracker.setCompanyMemberRole](method/bugtracker.setCompanyMemberRole) — Изменяет [уровень доступа сотрудника](vk-testers/employees#Уровни%20доступа%20сотрудников) в [компании](vk-testers/company).
  - [bugtracker.setProductIsOver](method/bugtracker.setProductIsOver) — Отключает или включает приём отчётов в [продукте](vk-testers/product).
- [Calls](method/calls)
  - [calls.forceFinish](method/calls.forceFinish) — Принудительно завершить звонок
  - [calls.start](method/calls.start) — Создать новый звонок от имени пользователя или сообщества
- [CrowdCustomer](method/crowdCustomer)
  - [crowdCustomer.createTaskJob](method/crowdCustomer.createTaskJob) — Создание задания на разметку
  - [crowdCustomer.getTaskResults](method/crowdCustomer.getTaskResults) — Получение результатов разметки задачи
- [Database](method/database)
  - [database.getCities](method/database.getCities) — Возвращает список городов.
  - [database.getCitiesById](method/database.getCitiesById) — Возвращает информацию о городах и регионах по их идентификаторам.
  - [database.getRegions](method/database.getRegions) — Возвращает список регионов.
- [Docs](method/docs)
  - [docs.get](method/docs.get) — Возвращает расширенную информацию о документах пользователя или сообщества.
  - [docs.getById](method/docs.getById) — Возвращает информацию о документах по их идентификаторам.
  - [docs.getMessagesUploadServer](method/docs.getMessagesUploadServer) — Метод получает адрес сервера для [загрузки файла](api/upload/document-in-profile) в личное сообщение.
  - [docs.getWallUploadServer](method/docs.getWallUploadServer) — Метод получает адрес сервера для [загрузки документа](api/upload/document-in-profile) в папку **Отправленные** для последующей отправки документа на стену или личным сообщением.
  - [docs.save](method/docs.save) — Метод сохраняет файл после его успешной [загрузки на сервер](api/upload/document-in-profile).
- [Donut](method/donut)
  - [donut.getFriends](method/donut.getFriends) — Возвращает список донов, которые подписаны на определенные сообщества, из числа друзей пользователя.
  - [donut.getSubscription](method/donut.getSubscription) — Возвращает информацию о подписке VK Donut.
  - [donut.getSubscriptions](method/donut.getSubscriptions) — Возвращает информацию о подписках пользователя.
- [Friends](method/friends)
  - [friends.areFriends](method/friends.areFriends) — Метод возвращает информацию о том, добавлен ли текущий пользователь в друзья указанных пользователей.
  - [friends.get](method/friends.get) — Возвращает список идентификаторов друзей пользователя или расширенную информацию о друзьях пользователя (при использовании параметра `fields`).
  - [friends.getAppUsers](method/friends.getAppUsers) — Возвращает список идентификаторов друзей текущего пользователя, которые установили приложение. В список попадут только те пользователи, которые не ограничили видимость своей активности в мини-приложениях в настройках приватности.
  - [friends.getLists](method/friends.getLists) — Возвращает список меток друзей пользователя.
  - [friends.getMutual](method/friends.getMutual) — Возвращает список идентификаторов общих друзей между парой пользователей.
  - [friends.getOnline](method/friends.getOnline) — Возвращает список идентификаторов друзей пользователя, находящихся на сайте.
  - [friends.getRecent](method/friends.getRecent) — Возвращает список идентификаторов недавно добавленных друзей текущего пользователя.
  - [friends.getRequests](method/friends.getRequests) — Возвращает информацию о полученных или отправленных заявках на добавление в друзья для текущего пользователя.
  - [friends.getSuggestions](method/friends.getSuggestions) — Возвращает список профилей пользователей, которые могут быть друзьями текущего пользователя.
  - [friends.search](method/friends.search) — Позволяет искать по списку друзей пользователей.
- [Gifts](method/gifts)
  - [gifts.get](method/gifts.get) — Возвращает список полученных подарков пользователя.
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
- [LeadForms](method/leadForms)
  - [leadForms.create](method/leadForms.create) — Создаёт форму сбора заявок.
  - [leadForms.delete](method/leadForms.delete) — Удаляет форму сбора заявок.
  - [leadForms.get](method/leadForms.get) — Возвращает информацию о форме сбора заявок.
  - [leadForms.getLeads](method/leadForms.getLeads) — Возвращает заявки формы.
  - [leadForms.getUploadURL](method/leadForms.getUploadURL) — Возвращает URL для загрузки обложки для формы.
  - [leadForms.list](method/leadForms.list) — Возвращает список форм сообщества.
  - [leadForms.update](method/leadForms.update) — Обновляет форму сбора заявок.
- [Likes](method/likes)
  - [likes.getList](method/likes.getList) — Метод получает список идентификаторов пользователей, которые поставили у заданного объекта отметку «Нравится».
  - [likes.isLiked](method/likes.isLiked) — Проверяет, находится ли объект в списке **Мне нравится** заданного пользователя.
- [LoyaltyTeen](method/loyaltyTeen)
  - [loyaltyTeen.hasAccount](method/loyaltyTeen.hasAccount)
  - [loyaltyTeen.hasAccounts](method/loyaltyTeen.hasAccounts)
  - [loyaltyTeen.partnerCompleteAchievement](method/loyaltyTeen.partnerCompleteAchievement)
  - [loyaltyTeen.partnerCompleteTask](method/loyaltyTeen.partnerCompleteTask)
  - [loyaltyTeen.partnerCreateAccount](method/loyaltyTeen.partnerCreateAccount)
  - [loyaltyTeen.partnerGetAchievements](method/loyaltyTeen.partnerGetAchievements)
  - [loyaltyTeen.partnerGetBalance](method/loyaltyTeen.partnerGetBalance)
  - [loyaltyTeen.partnerGetOffers](method/loyaltyTeen.partnerGetOffers)
  - [loyaltyTeen.partnerGetTasks](method/loyaltyTeen.partnerGetTasks)
  - [loyaltyTeen.partnerHasAccount](method/loyaltyTeen.partnerHasAccount)
  - [loyaltyTeen.sumsubCallback](method/loyaltyTeen.sumsubCallback)
- [Market](method/market)
  - [market.add](method/market.add) — Метод добавляет новый товар.
  - [market.addAlbum](method/market.addAlbum) — Метод добавляет новую подборку с товарами в сообщество.
  - [market.addProperty](method/market.addProperty) — Добавляет новое свойство, которое может быть задано для товаров сообщества (например, «цвет», «размер» и т.д.).
  - [market.addPropertyVariant](method/market.addPropertyVariant) — Добавляет вариант свойства. Всего у свойства может быть 50 вариантов. 
  - [market.addToAlbum](method/market.addToAlbum) — Добавляет товар в одну или несколько выбранных подборок.
  - [market.createComment](method/market.createComment) — Создаёт новый комментарий к товару.
  - [market.delete](method/market.delete) — Удаляет товар.
  - [market.deleteAlbum](method/market.deleteAlbum) — Метод удаляет подборку с товарами.
  - [market.deleteComment](method/market.deleteComment) — Удаляет комментарий к товару.
  - [market.deleteProperty](method/market.deleteProperty) — Удаляет свойство товара.
  - [market.deletePropertyVariant](method/market.deletePropertyVariant) — Удаляет вариант свойства.
  - [market.edit](method/market.edit) — Метод редактирует информацию о товаре.
  - [market.editAlbum](method/market.editAlbum) — Метод редактирует подборку с товарами в сообществе.
  - [market.editComment](method/market.editComment) — Изменяет текст комментария к товару.
  - [market.editOrder](method/market.editOrder) — Редактирует заказ.
  - [market.editProperty](method/market.editProperty) — Редактирует свойство товара.
  - [market.editPropertyVariant](method/market.editPropertyVariant) — Редактирует вариант свойства.
  - [market.get](method/market.get) — Возвращает список товаров в сообществе.
  - [market.getAlbumById](method/market.getAlbumById) — Возвращает данные подборки с товарами.
  - [market.getAlbums](method/market.getAlbums) — Возвращает список подборок с товарами.
  - [market.getById](method/market.getById) — Возвращает информацию о товарах по идентификаторам.
  - [market.getCategories](method/market.getCategories) — Возвращает список категорий для товаров.
  - [market.getComments](method/market.getComments) — Возвращает список комментариев к товару.
  - [market.getGroupOrders](method/market.getGroupOrders) — Возвращает заказы сообщества.
  - [market.getOrderById](method/market.getOrderById) — Возвращает заказ по идентификатору.
  - [market.getOrderItems](method/market.getOrderItems) — Возвращает товары в заказе.
  - [market.getOrders](method/market.getOrders) — Возвращает заказы.
  - [market.getProductPhotoUploadServer](method/market.getProductPhotoUploadServer) — Возвращает адрес для [загрузки изображений товаров в сообщество](api/upload/photo-in-market).

  - [market.getProperties](method/market.getProperties) — Возвращает список свойств для указанного сообщества.
  - [market.groupItems](method/market.groupItems) — Объединяет товары в группу товаров.
  - [market.removeFromAlbum](method/market.removeFromAlbum) — Удаляет товар из одной или нескольких выбранных подборок.
  - [market.reorderAlbums](method/market.reorderAlbums) — Изменяет положение подборки с товарами в списке.
  - [market.reorderItems](method/market.reorderItems) — Изменяет положение товара в подборке.
  - [market.report](method/market.report) — Позволяет отправить жалобу на товар.
  - [market.reportComment](method/market.reportComment) — Позволяет оставить жалобу на комментарий к товару.
  - [market.restore](method/market.restore) — Восстанавливает удаленный товар.
  - [market.restoreComment](method/market.restoreComment) — Восстанавливает удаленный комментарий к товару.
  - [market.saveProductPhoto](method/market.saveProductPhoto) — Подготавливает изображение, загруженное с помощью [`market.getProductPhotoUploadServer`](method/market.getProductPhotoUploadServer), для добавления к товару сообщества. 
  - [market.saveProductPhotoBulk](method/market.saveProductPhotoBulk)
  - [market.search](method/market.search) — Метод получает товары из каталога сообщества.
  - [market.searchItems](method/market.searchItems)
  - [market.searchItemsBasic](method/market.searchItemsBasic) — Получение товаров по поисковому запросу для вкладки бизнес групп
  - [market.ungroupItems](method/market.ungroupItems) — Разделяет группу товаров на несколько товаров.
- [Messages](method/messages)
  - [messages.addChatUser](method/messages.addChatUser) — Добавляет в мультидиалог нового пользователя.
  - [messages.allowMessagesFromGroup](method/messages.allowMessagesFromGroup) — Позволяет разрешить отправку сообщений от сообщества текущему пользователю.
  - [messages.createChat](method/messages.createChat) — Создаёт чат с несколькими участниками.
  - [messages.delete](method/messages.delete) — Удаляет сообщение.
  - [messages.deleteChatPhoto](method/messages.deleteChatPhoto) — Позволяет удалить фотографию мультидиалога.
  - [messages.deleteConversation](method/messages.deleteConversation) — Удаляет беседу.
  - [messages.deleteReaction](method/messages.deleteReaction) — Удаление ранее поставленной реакции
  - [messages.denyMessagesFromGroup](method/messages.denyMessagesFromGroup) — Позволяет запретить отправку сообщений от сообщества текущему пользователю.
  - [messages.edit](method/messages.edit) — Редактирует сообщение.
  - [messages.editChat](method/messages.editChat) — Изменяет название беседы.
  - [messages.forceCallFinish](method/messages.forceCallFinish) — Метод используется для принудительного завершения звонка
  - [messages.getByConversationMessageId](method/messages.getByConversationMessageId) — Возвращает сообщения по conversation_message_id.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.getChat](method/messages.getChat) — Возвращает информацию о беседе.
  - [messages.getChatPreview](method/messages.getChatPreview) — Получает данные для превью чата с приглашением по ссылке.
  - [messages.getConversationMembers](method/messages.getConversationMembers) — Метод получает список участников беседы.
  - [messages.getConversations](method/messages.getConversations) — Возвращает список бесед пользователя.
  - [messages.getConversationsById](method/messages.getConversationsById) — Позволяет получить беседу по её идентификатору.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.getHistoryAttachments](method/messages.getHistoryAttachments) — Возвращает материалы диалога или беседы.
  - [messages.getImportantMessages](method/messages.getImportantMessages) — Возвращает список важных сообщений пользователя.
  - [messages.getInviteLink](method/messages.getInviteLink) — Получает ссылку для приглашения пользователя в беседу.
  - [messages.getLastActivity](method/messages.getLastActivity) — Метод получает текущий статус и дату последней активности пользователя.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
  - [messages.getLongPollServer](method/messages.getLongPollServer) — Возвращает данные, необходимые для [подключения к Long Poll серверу](api/user-long-poll/getting-started).
  - [messages.getMessagesReactions](method/messages.getMessagesReactions) — Получить актуальные счётчики реакций на сообщения
  - [messages.getReactedPeers](method/messages.getReactedPeers) — Получить список пользователей и сообществ, которые поставили реакцию на сообщение
  - [messages.getReactionsAssets](method/messages.getReactionsAssets) — Получение ассетов реакций
  - [messages.isMessagesFromGroupAllowed](method/messages.isMessagesFromGroupAllowed) — Возвращает информацию о том, разрешена ли отправка сообщений от сообщества пользователю.
  - [messages.joinChatByInviteLink](method/messages.joinChatByInviteLink) — Позволяет присоединиться к чату по ссылке-приглашению.
  - [messages.markAsAnsweredConversation](method/messages.markAsAnsweredConversation) — Помечает беседу как отвеченную либо снимает отметку.
  - [messages.markAsImportant](method/messages.markAsImportant) — Помечает сообщения как важные либо снимает отметку.
  - [messages.markAsImportantConversation](method/messages.markAsImportantConversation) — Помечает беседу как важную либо снимает отметку.
  - [messages.markAsRead](method/messages.markAsRead) — Метод помечает сообщения как прочитанные.
  - [messages.markReactionsAsRead](method/messages.markReactionsAsRead) — Отмечает прочитанными все реакции на сообщениях с заданными cmids
  - [messages.pin](method/messages.pin) — Закрепляет сообщение.
  - [messages.removeChatUser](method/messages.removeChatUser) — Исключает из мультидиалога пользователя, если текущий пользователь или сообщество является администратором беседы либо текущий пользователь пригласил исключаемого пользователя.
  - [messages.restore](method/messages.restore) — Восстанавливает удаленное сообщение.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
  - [messages.searchConversations](method/messages.searchConversations) — Позволяет искать диалоги.
  - [messages.send](method/messages.send) — Метод отправляет сообщение.
  - [messages.sendMessageEventAnswer](method/messages.sendMessageEventAnswer) — Отправляет событие с действием, которое произойдет при нажатии на callback-кнопку.
  - [messages.sendReaction](method/messages.sendReaction) — Метод установки реакции на сообщение
  - [messages.setActivity](method/messages.setActivity) — Изменяет статус набора текста пользователем в диалоге.
  - [messages.setChatPhoto](method/messages.setChatPhoto) — Метод сохраняет обложку беседы после её успешной [загрузки на сервер](api/upload/main-photo-in-chat).
  - [messages.startCall](method/messages.startCall) — Старт нового звонка от имени пользователя или от сообщества
  - [messages.unpin](method/messages.unpin) — Открепляет сообщение.
- [Newsfeed](method/newsfeed)
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getBanned](method/newsfeed.getBanned) — Возвращает список пользователей и групп, которые текущий пользователь скрыл из ленты новостей.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.getMentions](method/newsfeed.getMentions) — Возвращает список записей пользователей на своих стенах, в которых упоминается указанный пользователь.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.getSuggestedSources](method/newsfeed.getSuggestedSources) — Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
- [Notifications](method/notifications)
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
  - [notifications.sendMessage](method/notifications.sendMessage) — Метод отправляет [уведомление](mini-apps/promotion/social-mechanics/notifications/overview) пользователю мини-приложения.
- [Orders](method/orders)
  - [orders.cancelSubscription](method/orders.cancelSubscription) — Отменяет подписку.
  - [orders.changeState](method/orders.changeState) — Изменяет состояние заказа.
  - [orders.get](method/orders.get) — Возвращает список заказов.
  - [orders.getAmount](method/orders.getAmount) — Возвращает стоимость голосов в валюте пользователя.
  - [orders.getById](method/orders.getById) — Возвращает информацию об отдельном заказе.
  - [orders.getUserSubscriptionById](method/orders.getUserSubscriptionById) — Получает информацию о подписке по её идентификатору.
  - [orders.getUserSubscriptions](method/orders.getUserSubscriptions) — Получает список активных подписок пользователя.
- [Pages](method/pages)
  - [pages.clearCache](method/pages.clearCache) — Позволяет очистить кеш отдельных внешних страниц, которые могут быть прикреплены к записям ВКонтакте. После очистки кеша при последующем прикреплении ссылки к записи, данные о странице будут обновлены.
  - [pages.get](method/pages.get) — Возвращает информацию о вики-странице.
  - [pages.getHistory](method/pages.getHistory) — Возвращает список всех старых версий вики-страницы.
  - [pages.getTitles](method/pages.getTitles) — Возвращает список вики-страниц в группе.
  - [pages.getVersion](method/pages.getVersion) — Возвращает текст одной из старых версий страницы.
  - [pages.parseWiki](method/pages.parseWiki) — Метод получает HTML-представление вики-разметки.
  - [pages.save](method/pages.save) — Сохраняет текст вики-страницы.
  - [pages.saveAccess](method/pages.saveAccess) — Сохраняет новые настройки доступа на чтение и редактирование вики-страницы.
- [Photos](method/photos)
  - [photos.copy](method/photos.copy) — Позволяет скопировать фотографию в альбом "Сохраненные фотографии"
  - [photos.createAlbum](method/photos.createAlbum) — Создает пустой альбом для фотографий.
  - [photos.createComment](method/photos.createComment) — Создает новый комментарий к фотографии.
  - [photos.delete](method/photos.delete) — Удаление фотографии на сайте.
  - [photos.deleteAlbum](method/photos.deleteAlbum) — Удаляет указанный альбом для фотографий у текущего пользователя
  - [photos.deleteComment](method/photos.deleteComment) — Удаляет комментарий к фотографии.
  - [photos.edit](method/photos.edit) — Редактирует описание или геометку у фотографии.
  - [photos.editAlbum](method/photos.editAlbum) — Редактирует данные альбома для фотографий.
  - [photos.editComment](method/photos.editComment) — Изменяет текст комментария к фотографии.
  - [photos.get](method/photos.get) — Возвращает список фотографий в альбоме.
  - [photos.getAlbums](method/photos.getAlbums) — Возвращает список фотоальбомов пользователя или сообщества.
  - [photos.getAlbumsCount](method/photos.getAlbumsCount) — Возвращает количество доступных альбомов пользователя или сообщества.
  - [photos.getAll](method/photos.getAll) — Возвращает все фотографии пользователя или сообщества в антихронологическом порядке.
  - [photos.getAllComments](method/photos.getAllComments) — Возвращает отсортированный в антихронологическом порядке список всех комментариев к конкретному альбому или ко всем альбомам пользователя.
  - [photos.getById](method/photos.getById) — Возвращает информацию о фотографиях по их идентификаторам.
  - [photos.getChatUploadServer](method/photos.getChatUploadServer) — Метод получает адрес сервера для [загрузки обложки чата](api/upload/main-photo-in-chat).
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [photos.getMarketAlbumUploadServer](method/photos.getMarketAlbumUploadServer) — Метод получает адрес сервера для [загрузки фотографии подборки товаров](api/upload/main-photo-in-market) в сообществе.
  - [photos.getMessagesUploadServer](method/photos.getMessagesUploadServer) — Метод получает адрес сервера для [загрузки фотографии в личное сообщение](api/upload/photo-in-message) пользователя или в сообщение сообщества.
  - [photos.getOwnerCoverPhotoUploadServer](method/photos.getOwnerCoverPhotoUploadServer) — Метод получает адрес сервера для [загрузки обложки](api/upload/main-photo-in-group) сообщества.
  - [photos.getOwnerPhotoUploadServer](method/photos.getOwnerPhotoUploadServer) — Метод получает адрес сервера для [загрузки главной фотографии](api/upload/main-photo-in-profile) на страницу пользователя или сообщества.
  - [photos.getUploadServer](method/photos.getUploadServer) — Метод получает адрес сервера для [загрузки фотографий в альбом](api/upload/album-photos) пользователя или сообщества.
  - [photos.getUserPhotos](method/photos.getUserPhotos) — Возвращает список фотографий, на которых отмечен пользователь
  - [photos.getWallUploadServer](method/photos.getWallUploadServer) — Метод получает адрес сервера для [загрузки фотографии на стену](api/upload/wall-photo) пользователя или сообщества.
  - [photos.makeCover](method/photos.makeCover) — Делает фотографию обложкой альбома.
  - [photos.move](method/photos.move) — Переносит фотографию из одного альбома в другой.
  - [photos.reorderAlbums](method/photos.reorderAlbums) — Меняет порядок альбома в списке альбомов пользователя.
  - [photos.reorderPhotos](method/photos.reorderPhotos) — Меняет порядок фотографии в списке фотографий альбома пользователя.
  - [photos.report](method/photos.report) — Позволяет пожаловаться на фотографию.
  - [photos.reportComment](method/photos.reportComment) — Позволяет пожаловаться на комментарий к фотографии.
  - [photos.restore](method/photos.restore) — Восстанавливает удаленную фотографию.
  - [photos.restoreComment](method/photos.restoreComment) — Восстанавливает удаленный комментарий к фотографии.
  - [photos.save](method/photos.save) — Метод сохраняет фотографии в альбом после их успешной [загрузки на сервер](api/upload/album-photos).
  - [photos.saveMarketAlbumPhoto](method/photos.saveMarketAlbumPhoto) — Метод сохраняет фотографию подборки товаров сообщества после её успешной [загрузки на сервер](api/upload/main-photo-in-market).
  - [photos.saveMessagesPhoto](method/photos.saveMessagesPhoto) — Метод сохраняет фотографию в личном сообщении после её успешной [загрузки на сервер](api/upload/photo-in-message).
  - [photos.saveOwnerCoverPhoto](method/photos.saveOwnerCoverPhoto) — Метод сохраняет обложку сообщества или профиля пользователя после её успешной [загрузки на сервер](api/upload/main-photo-in-group).
  - [photos.saveOwnerPhoto](method/photos.saveOwnerPhoto) — Метод сохраняет главную фотографию после её успешной [загрузки на сервер](api/upload/main-photo-in-profile).
  - [photos.saveWallPhoto](method/photos.saveWallPhoto) — Метод сохраняет фотографии на стене после их успешной [загрузки на сервер](api/upload/wall-photo).
  - [photos.search](method/photos.search) — Осуществляет поиск изображений по местоположению или описанию.
- [Podcasts](method/podcasts)
  - [podcasts.searchPodcast](method/podcasts.searchPodcast)
- [Polls](method/polls)
  - [polls.create](method/polls.create) — Позволяет создавать опросы, которые впоследствии можно прикреплять к записям на странице пользователя или сообщества.
  - [polls.edit](method/polls.edit) — Позволяет редактировать созданные опросы.
  - [polls.getBackgrounds](method/polls.getBackgrounds) — Возвращает варианты фонового изображения для опросов.
  - [polls.getById](method/polls.getById) — Возвращает детальную информацию об опросе по его идентификатору.
  - [polls.getPhotoUploadServer](method/polls.getPhotoUploadServer) — Возвращает адрес сервера для загрузки фоновой фотографии в опрос.
  - [polls.getVoters](method/polls.getVoters) — Получает список идентификаторов пользователей, которые выбрали определенные варианты ответа в опросе.
  - [polls.savePhoto](method/polls.savePhoto) — Сохраняет фотографию, загруженную в опрос.
- [PrettyCards](method/prettyCards)
  - [prettyCards.create](method/prettyCards.create) — Метод создаёт карточку карусели.

> Созданную карточку необходимо вручную добавить в карусель.
  - [prettyCards.delete](method/prettyCards.delete) — Удаляет карточку.
  - [prettyCards.edit](method/prettyCards.edit) — Редактирует карточку карусели.
  - [prettyCards.get](method/prettyCards.get) — Возвращает неиспользованные карточки владельца.
  - [prettyCards.getById](method/prettyCards.getById) — Возвращает информацию о карточке.
  - [prettyCards.getUploadURL](method/prettyCards.getUploadURL) — Возвращает URL для загрузки фотографии для карточки.
- [Search](method/search)
  - [search.getHints](method/search.getHints) — Метод позволяет получить результаты быстрого поиска по произвольной подстроке. 
- [Secure](method/secure)
  - [secure.addAppEvent](method/secure.addAppEvent) — Добавляет информацию о достижениях пользователя в игре.

  - [secure.checkToken](method/secure.checkToken) — Метод проверяет, что ключ доступа пользователя (`access_token`) выдан именно тому приложению, которому выдан переданный сервисный ключ доступа. Подходит для проверки ключа доступа iFrame и Standalone-приложений.
  - [secure.getAppBalance](method/secure.getAppBalance) — Возвращает платежный баланс (счет) приложения в сотых долях голоса.
  - [secure.getTransactionsHistory](method/secure.getTransactionsHistory) — Выводит историю транзакций по переводу голосов между пользователями и приложением.
  - [secure.getUserLevel](method/secure.getUserLevel) — Возвращает ранее выставленный игровой уровень одного или нескольких пользователей в приложении.
  - [secure.giveEventSticker](method/secure.giveEventSticker) — Выдает пользователю стикер и открывает игровое достижение.
  - [secure.sendNotification](method/secure.sendNotification) — Отправляет уведомление одному или нескольким пользователям.
  - [secure.setCounter](method/secure.setCounter) — Устанавливает счетчик, который выводится пользователю жирным шрифтом в левом меню.
- [Stats](method/stats)
  - [stats.get](method/stats.get) — Возвращает статистику сообщества или приложения.
  - [stats.getPostReach](method/stats.getPostReach) — Возвращает статистику для записи на стене.
  - [stats.trackVisitor](method/stats.trackVisitor) — Добавляет данные о текущем сеансе в статистику посещаемости приложения.
- [Status](method/status)
  - [status.get](method/status.get) — Получить текст статуса пользователя или сообщества.
- [Storage](method/storage)
  - [storage.get](method/storage.get) — Возвращает значение переменной, название которой передано в параметре `key`.
  - [storage.getKeys](method/storage.getKeys) — Возвращает названия всех переменных.
  - [storage.set](method/storage.set) — Метод задаёт значение переменной, название которой передано. Переменные хранятся бессрочно. Может быть создано не более 1&nbsp;000 переменных для каждого пользователя. Не более 1&nbsp;000 вызовов в час на каждого пользователя.
- [Store](method/store)
  - [store.addStickersToFavorite](method/store.addStickersToFavorite) — Добавляет стикер в избранные.
  - [store.getFavoriteStickers](method/store.getFavoriteStickers) — Возвращает список избранных стикеров.
  - [store.getProducts](method/store.getProducts) — Возвращает список продуктов.
  - [store.getStickersKeywords](method/store.getStickersKeywords) — Возвращает список ключевых слов для стикеров.
  - [store.removeStickersFromFavorite](method/store.removeStickersFromFavorite) — Удаляет стикер из избранных.
- [Stories](method/stories)
  - [stories.banOwner](method/stories.banOwner) — Позволяет скрыть из ленты новостей истории от выбранных источников.
  - [stories.delete](method/stories.delete) — Удаляет историю.
  - [stories.get](method/stories.get) — Возвращает истории, доступные для текущего пользователя.
  - [stories.getBanned](method/stories.getBanned) — Возвращает список источников историй, скрытых из ленты текущего пользователя.
  - [stories.getById](method/stories.getById) — Возвращает информацию об истории по её идентификатору.
  - [stories.getPhotoUploadServer](method/stories.getPhotoUploadServer) — Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).
  - [stories.getReplies](method/stories.getReplies) — Позволяет получить ответы на историю.
  - [stories.getStats](method/stories.getStats) — Возвращает статистику истории.
  - [stories.getVideoUploadServer](method/stories.getVideoUploadServer) — Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).
  - [stories.getViewers](method/stories.getViewers) — Возвращает список пользователей, просмотревших историю.
  - [stories.hideAllReplies](method/stories.hideAllReplies) — Скрывает все ответы автора за последние сутки на истории текущего пользователя.
  - [stories.hideReply](method/stories.hideReply) — Скрывает ответ на историю.
  - [stories.save](method/stories.save) — Метод сохраняет историю в профиле после её успешной [загрузки на сервер](api/upload/story-in-profile).
  - [stories.search](method/stories.search) — Возвращает результаты поиска по историям.
  - [stories.sendInteraction](method/stories.sendInteraction) — Отправляет фидбек на историю.
  - [stories.unbanOwner](method/stories.unbanOwner) — Позволяет вернуть пользователя или сообщество в список отображаемых историй в ленте.
- [Translations](method/translations)
  - [translations.translate](method/translations.translate) — Метод позволяет выполнить перевод переданных строк текста.
- [UserLinking](method/userLinking)
  - [userLinking.b2bGet](method/userLinking.b2bGet) — Метод для получения дополнительных сведений по Access Token
- [Users](method/users)
  - [users.get](method/users.get) — Метод позволяет получить информацию о пользователях.
  - [users.getFollowers](method/users.getFollowers) — Возвращает список идентификаторов пользователей, которые являются подписчиками пользователя.
  - [users.getSubscriptions](method/users.getSubscriptions)
  - [users.search](method/users.search) — Возвращает список пользователей в соответствии с заданным критерием поиска.
- [Utils](method/utils)
  - [utils.checkLink](method/utils.checkLink) — Возвращает информацию о том, является ли внешняя ссылка заблокированной на сайте ВКонтакте.
  - [utils.deleteFromLastShortened](method/utils.deleteFromLastShortened) — Удаляет сокращенную ссылку из списка пользователя.
  - [utils.getLastShortenedLinks](method/utils.getLastShortenedLinks) — Получает список сокращённых ссылок для текущего пользователя.
  - [utils.getLinkStats](method/utils.getLinkStats) — Возвращает статистику переходов по [сокращённой](utils.getShortLink) ссылке.
  - [utils.getServerTime](method/utils.getServerTime) — Возвращает текущее время на сервере ВКонтакте в `unixtime`.
  - [utils.getShortLink](method/utils.getShortLink) — Позволяет получить URL, сокращённый с помощью vk.cc.
  - [utils.resolveScreenName](method/utils.resolveScreenName) — Определяет тип объекта (пользователь, сообщество, приложение) и его идентификатор по короткому имени `screen_name`.
- [Video](method/video)
  - [video.add](method/video.add) — Метод добавляет видеозапись в список видеозаписей пользователя.
  - [video.addAlbum](method/video.addAlbum) — Создает пустой альбом видеозаписей.
  - [video.addToAlbum](method/video.addToAlbum) — Позволяет добавить видеозапись в альбом.
  - [video.createComment](method/video.createComment) — Cоздает новый комментарий к видеозаписи.
  - [video.delete](method/video.delete) — Удаляет видеозапись со страницы пользователя.
  - [video.deleteAlbum](method/video.deleteAlbum) — Удаляет альбом видеозаписей.
  - [video.deleteComment](method/video.deleteComment) — Удаляет комментарий к видеозаписи.
  - [video.edit](method/video.edit) — Метод редактирует данные видеозаписи.
  - [video.editAlbum](method/video.editAlbum) — Редактирует альбом с видео.
  - [video.editComment](method/video.editComment) — Изменяет текст комментария к видеозаписи.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
  - [video.getAlbumById](method/video.getAlbumById) — Позволяет получить информацию об альбоме с видео.
  - [video.getAlbums](method/video.getAlbums) — Возвращает список альбомов видеозаписей пользователя или сообщества.
  - [video.getAlbumsByVideo](method/video.getAlbumsByVideo) — Метод возвращает список альбомов, в которых находится видеозапись.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [video.getLongPollServer](method/video.getLongPollServer) — Позволяет получать данные о новых событиях трансляции в режиме реального времени.
  - [video.getOembed](method/video.getOembed) — Метод возвращает код для встраивания видео в `iframe`. 
  - [video.getPublicSectionFeed](method/video.getPublicSectionFeed) — Метод позволяет получать ссылку на выбранный тематический фид.
  - [video.getThumbUploadUrl](method/video.getThumbUploadUrl)
  - [video.removeFromAlbum](method/video.removeFromAlbum) — Позволяет убрать видеозапись из альбома.
  - [video.reorderAlbums](method/video.reorderAlbums) — Позволяет изменить порядок альбомов с видео.
  - [video.reorderVideos](method/video.reorderVideos) — Позволяет переместить видеозапись в альбоме.
  - [video.report](method/video.report) — Позволяет пожаловаться на видеозапись.
  - [video.reportComment](method/video.reportComment) — Позволяет пожаловаться на комментарий к видеозаписи.
  - [video.restore](method/video.restore) — Восстанавливает удаленную видеозапись.
  - [video.restoreComment](method/video.restoreComment) — Восстанавливает удаленный комментарий к видеозаписи.
  - [video.save](method/video.save) — Метод получает адрес сервера, на который необходимо [загрузить](api/upload/video-in-profile) видео, а также данные этого видео.

:::note
**Примечание.** Приложение может вызвать этот метод не более 5&nbsp;000 раз в сутки.
:::
  - [video.saveUploadedThumb](method/video.saveUploadedThumb)
  - [video.search](method/video.search) — Метод получает список видеозаписей в соответствии с заданными критериями поиска.
  - [video.startStreaming](method/video.startStreaming) — Получает RTMP-адрес для трансляции видео.
  - [video.stopStreaming](method/video.stopStreaming) — Завершает трансляцию.
- [Wall](method/wall)
  - [wall.closeComments](method/wall.closeComments) — Выключает комментирование записи.

  - [wall.createComment](method/wall.createComment) — Добавляет комментарий к записи на стене.
  - [wall.delete](method/wall.delete) — Удаляет запись со стены.
  - [wall.deleteComment](method/wall.deleteComment) — Удаляет комментарий к записи на стене.
  - [wall.edit](method/wall.edit) — :::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

Редактирует запись на стене.
  - [wall.editAdsStealth](method/wall.editAdsStealth) — Позволяет отредактировать скрытую запись.
  - [wall.editComment](method/wall.editComment) — Редактирует комментарий на стене.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getComment](method/wall.getComment) — Получает информацию о комментарии на стене.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [wall.getReposts](method/wall.getReposts) — Позволяет получать список репостов заданной записи.
  - [wall.openComments](method/wall.openComments) — Включает комментирование записи.
  - [wall.parseAttachedLink](method/wall.parseAttachedLink) — Принимает на вход ссылки и возвращает дополнительную информацию, которая может быть использована для создания сниппетов при публикации ссылки на стене пользователя и других ресурсах.
  - [wall.pin](method/wall.pin) — Закрепляет запись на стене (запись будет отображаться выше остальных).
  - [wall.post](method/wall.post) — Метод позволяет:

* Создать запись на стене.
* Предложить запись на стене публичной страницы.
* Опубликовать существующую отложенную запись.

:::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

  - [wall.postAdsStealth](method/wall.postAdsStealth) — Позволяет создать скрытую запись, которая не попадает на стену сообщества и в дальнейшем может быть использована для создания рекламного объявления типа «Запись в сообществе».
  - [wall.reportComment](method/wall.reportComment) — Позволяет пожаловаться на комментарий к записи.
  - [wall.reportPost](method/wall.reportPost) — Позволяет пожаловаться на запись.
  - [wall.repost](method/wall.repost) — Метод позволяет сделать репост — скопировать запись на стену пользователя или сообщества.

  - [wall.restore](method/wall.restore) — Восстанавливает удалённую запись на стене пользователя или сообщества.
  - [wall.restoreComment](method/wall.restoreComment) — Восстанавливает удаленный комментарий к записи на стене.
  - [wall.search](method/wall.search) — Позволяет искать записи на стене в соответствии с заданными критериями.
  - [wall.unpin](method/wall.unpin) — Отменяет закрепление записи на стене.
- [Widgets](method/widgets)
  - [widgets.getComments](method/widgets.getComments) — Получает список комментариев к странице, оставленных через [Виджет комментариев](widgets/comments).
  - [widgets.getPages](method/widgets.getPages) — Получает список страниц приложения/сайта, на которых установлен [Виджет комментариев](widgets/comments) или [«Мне нравится»](widgets/like).
