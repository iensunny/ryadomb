# reference/versions

> Источник: [https://dev.vk.ru/ru/reference/versions](https://dev.vk.ru/ru/reference/versions)
- [5.199](reference/version/5.199) — Изменения во внутренних алгоритмах обработки некоторых запросов.     
Изменений в составе API-методов, их параметров и возвращаемых значений нет.
- [5.195](reference/version/5.195) — - В методе `video.edit` изменён формат ответа.


  - [video.edit](method/video.edit) — Метод редактирует данные видеозаписи.
- [5.194](reference/version/5.194) — - В методы `ads.createClients` и `ads.updateClients` добавлен параметр `ord_data` для сохранения данных клиента по объекту оператора рекламных данных (ОРД).
- Метод ads.`getClients` возвращает данные клиента по ОРД в поле `ord_data`.
- Метод `messages.getChatPreview` возвращает поле `chat_settings.state` со значением `out` и поле `joined` со значением `false`, если пользователь никогда не был участником чата.


  - [ads.createClients](method/ads.createClients) — Метод создаёт клиентов рекламного агентства. Доступен только для рекламных агентств.
  - [ads.updateClients](method/ads.updateClients) — Метод редактирует клиентов рекламного агентства. Доступен только для рекламных агентств.
  - [ads.getClients](method/ads.getClients) — Метод возвращает список клиентов рекламного агентства. Доступен только для рекламных агентств.
  - [messages.getChatPreview](method/messages.getChatPreview) — Получает данные для превью чата с приглашением по ссылке.
- [5.193](reference/version/5.193) — - В методе `messages.markAsRead` параметр `start_cmid` переименован в `up_to_cmid`.
- В глобальном поиске в мобильном приложении изменяется текст блока мини-приложений на блок **Сервисы**.


  - [messages.markAsRead](method/messages.markAsRead) — Метод помечает сообщения как прочитанные.
- [5.192](reference/version/5.192) — - В методе `database.getSchoolClasses` изменён формат ответа.


- [5.154](reference/version/5.154) — - В методах `messages.*` добавлен тип вложения — сюжет (`narrative`).


- [5.141](reference/version/5.141) — 
- В объект заказа добавлено поле `is_viewed_by_admin`.




- [5.139](reference/version/5.139) — - В методе `groups.getById` изменён формат ответа. В `response` возвращаются:
    - Поле `groups` с информацией о необходимых сообществах.
    - Поле `profiles` c описанием пользователей, отметивших сообщество отметкой «Нравится».
    
    Также в объект группы добавлено поле `like`.

- Полностью поменялся формат метода `market.getCategories`. В `response` возвращается вложенное дерево категорий (вложенность бесконечная). Поля `offset` и `count` стали deprecated — дерево возвращается полностью.



- В методе `market.getById` изменился формат поля `category`: у поля был обязательное поле `section`, сейчас — поле parent (необязательное), указывающее на родителя. В `parent` может быть ещё `parent`, который указывает на его родителя. Вложенность бесконечная. Если родителя нет, то поле `parent` не возвращается. 


- [5.138](reference/version/5.138) — - В методе `wall.getById` изменён формат ответа, если параметр `extended`  имеет значение `0`: теперь для однородности результат обёрнут в поле `items`, как в случае запроса с параметром `extended`, равным `1`.
- В методе `messages.send` параметр `user_ids` помечен как deprecated. Используйте вместо него параметр `peer_ids`.


- [5.137](reference/version/5.137) — - В методе `newsfeed.ignoreItem` изменился формат ответа. Теперь в `response` возвращаются поля `status` (обязательное, `boolean`) и `message` (необязательное, `string`) с сообщением о скрытии блока.


- [5.134](reference/version/5.134) — - Поле `icon` объекта `store_product` теперь содержит объект типа `stickers_image_set`.


- [5.131](reference/version/5.131) — - В методах `market.add` и `market.edit` добавлено поле `sku`  — артикул товара.
- В методах `market.getOrderItems`, `market.getOrderById` и `market.get` в объект `item` добалено поле `sku`, обозначающее артикул товара.
- В методе `market.getOrderItems` добавлен новый опциональный параметр `user_id`. При этом метод сохраняет предыдущую логику поведения при отсутствии указания `user_id`.

  - [market.add](method/market.add) — Метод добавляет новый товар.
  - [market.edit](method/market.edit) — Метод редактирует информацию о товаре.
  - [market.getOrderItems](method/market.getOrderItems) — Возвращает товары в заказе.
  - [market.getOrderById](method/market.getOrderById) — Возвращает заказ по идентификатору.
  - [market.get](method/market.get) — Возвращает список товаров в сообществе.
- [5.130](reference/version/5.130) — - В методе `market.editOrder` добавлены поля, которые может изменять администратор сообщества:
    - `delivery_price` — стоимость доставки.
    - `track_number` — трек-номер.
    - `payment_status` — статус оплаты.

    Также добавлены поля для редактирования габаритов и веса заказа:
    - `width` — ширина.
    - `length` — длина.
    - `height` — высота.
    - `weight` — вес.

    Поле `merchant_comment` теперь сохраняет комментарий продавца.


  - [market.editOrder](method/market.editOrder) — Редактирует заказ.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
  - [messages.getConversations](method/messages.getConversations) — Возвращает список бесед пользователя.
  - [messages.getConversationsById](method/messages.getConversationsById) — Позволяет получить беседу по её идентификатору.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
- [5.126](reference/version/5.126) — * В объекте [товара](reference/objects/market-item), в объекте цены возвращается `old_amount_text` с текстовым представлением старой цены.



  - [market.get](method/market.get) — Возвращает список товаров в сообществе.
  - [market.getById](method/market.getById) — Возвращает информацию о товарах по идентификаторам.
- [5.125](reference/version/5.125) — * Появились  методы для работы с VK Donut: [`donut.isDon`](donut.isDon), [`donut.getFriends`](donut.getFriends), [`donut.getSubscription`](donut.getSubscription), [`donut.getSubscriptions`](donut.getSubscriptions)
* В объекте [записи](reference/objects/post) появилась информация о VK Donut.
* В объекте [комментария](reference/objects/comment) появилась информация о VK Donut.



  - [donut.getFriends](method/donut.getFriends) — Возвращает список донов, которые подписаны на определенные сообщества, из числа друзей пользователя.
  - [donut.getSubscription](method/donut.getSubscription) — Возвращает информацию о подписке VK Donut.
  - [donut.getSubscriptions](method/donut.getSubscriptions) — Возвращает информацию о подписках пользователя.
- [5.124](reference/version/5.124) — * В методе [`groups.get`](groups.get) в объекте `market` приходит поле `type (string)`, которое может иметь значения `basic` и `advanced` в зависимости от типа магазина. Поле приходит, если в группе включен раздел «Товары».



  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
- [5.122](reference/version/5.122) — * В объекте товара поля `date` и `views_count` теперь возвращаются только администратору группы, которой принадлежит товар.
* В объекте [заказа](reference/objects/market-order) информация о доставке и заказчике вынесена из основного объекта в новые вложенные объекты: `delivery` и `recepient`.


  - [market.getById](method/market.getById) — Возвращает информацию о товарах по идентификаторам.
  - [market.getGroupOrders](method/market.getGroupOrders) — Возвращает заказы сообщества.
  - [market.get](method/market.get) — Возвращает список товаров в сообществе.
  - [market.getOrderById](method/market.getOrderById) — Возвращает заказ по идентификатору.
- [5.120](reference/version/5.120) — * В объекте [товара](reference/objects/market-item) появился объект `dimensions` — габариты и вес товара. Возвращаются, если они были указаны при редактировании или сохранении товара.


  - [market.get](method/market.get) — Возвращает список товаров в сообществе.
  - [market.getById](method/market.getById) — Возвращает информацию о товарах по идентификаторам.
- [5.118](reference/version/5.118) — * В [`stories.save`](stories.save) изменён процесс загрузки историй. Начиная с этой версии, у методов [`stories.getPhotoUploadServer`](stories.getPhotoUploadServer) и [`stories.getVideoUploadServer`](stories.getVideoUploadServer) в ответе upload-сервера будет только один параметр — `upload_result (string)`. Для сохранения загруженных историй нужно дополнительно вызвать [`stories.save`](stories.save), передав туда полученный ранее `upload_result`.


  - [stories.save](method/stories.save) — Метод сохраняет историю в профиле после её успешной [загрузки на сервер](api/upload/story-in-profile).
  - [stories.getPhotoUploadServer](method/stories.getPhotoUploadServer) — Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).
  - [stories.getVideoUploadServer](method/stories.getVideoUploadServer) — Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).
- [5.115](reference/version/5.115) — * В [`stories.getViewers`](stories.getViewers) изменился ответ: в `items` теперь возвращается массив объектов. В объекте есть следующие поля: `is_liked (bool)` и `user_id (int)`.


  - [stories.getViewers](method/stories.getViewers) — Возвращает список пользователей, просмотревших историю.
- [5.114](reference/version/5.114) — * В пересланных сообщениях и ответах теперь возвращается `payload`.



- [5.113](reference/version/5.113) — * В методах [`stories.get`](stories.get), [`stories.getReplies`](stories.getReplies), [`stories.search`](stories.search) возвращается новый формат ленты историй. Вместо массива массивов историй, теперь — массив объектов [блока ленты историй](reference/objects/story-feed-item).



  - [stories.get](method/stories.get) — Возвращает истории, доступные для текущего пользователя.
  - [stories.getReplies](method/stories.getReplies) — Позволяет получить ответы на историю.
  - [stories.search](method/stories.search) — Возвращает результаты поиска по историям.
- [5.111](reference/version/5.111) — * В объекте сообщения появилось поле  [`template`](api/bots/development/messages).


  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [messages.send](method/messages.send) — Метод отправляет сообщение.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
- [5.110](reference/version/5.110) — * Изменился формат ответа в методе [`storage.get`](storage.get) для одного ключа `key`, теперь возвращается объект того же типа, что и при передаче `keys`.
* В объекте `market`, который возвращает [`groups.getSettings`](groups.getSettings), появилось поле `can_message (integer[1,0])`, определяющее, что у сообщества включены сообщения.


  - [storage.get](method/storage.get) — Возвращает значение переменной, название которой передано в параметре `key`.
- [5.107](reference/version/5.107) — * Клавиатуры бесед больше не возвращаются в [объекте сообщения](reference/objects/message).
* В [объекте сообщения](reference/objects/message) в поле `keyboard` возвращаются inline-клавиатуры.



  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
- [5.106](reference/version/5.106) — * В объекте [товара](reference/objects/market-item) внутри объекта `price` теперь возвращается новое поле `old_amount (string)`, которое содержит старую стоимость товара.


  - [market.get](method/market.get) — Возвращает список товаров в сообществе.
- [5.105](reference/version/5.105) — * В методе [`ads.getStatistics`](method/ads.getStatistics) из ответа убрали поле `goals`, вместо него возвращается поле `lead_form_sends`. 
* В метод [`apps.getActivity`](method/apps.getActivity) для типа `achievement` добавлен новый объект `media`, содержащий по ключу `images` картинки для данного достижения. Если картинок нет, то поле `media` будет отсутствовать. 
* В метод [`apps.get`](method/apps.get) и [объект приложения](reference/objects/app) добавлены 2 новых поля: `mobile_controls_type`  и `mobile_view_support_type`, которые описывают, как отображаются элементы управления для игр в WebView и в нативных клиентах:
    * Если `mobile_controls_type = 0`, то отображается чёрная полоса над областью с игрой.
    * Если `mobile_controls_type = 1`, то отображается прозрачный элемент управления поверх области с игрой.
    * Если `mobile_controls_type = 2`, элементы управления не отображаются (только для мини-приложений).
    * Если `mobile_view_support_type = 0`, то игра не использует нижнюю часть экрана на iPhoneX, черная полоса есть.
    * Если `mobile_view_support_type = 1`, то игра использует нижнюю часть экрана на iPhoneX, черной полосы нет.
  - [apps.get](method/apps.get) — Метод возвращает данные о приложениях.
  - [ads.getStatistics](method/ads.getStatistics) — Возвращает статистику показателей эффективности по рекламным объявлениям, кампаниям, клиентам или всему кабинету.
- [5.104](reference/version/5.104) — * В объекте [groups](reference/objects/group) поле `app_buttons` не возвращается, если в группе включено меню.



- [5.103](reference/version/5.103) — * Для метода [`ads.getPostsReach`](method/ads.getPostsReach) изменилось поведение при ошибках, они будут возвращаться для каждого объявления отдельно. 
* Метод [`ads.getAdsPostsReach`](method/ads.getAdsPostsReach) отключён, вместо него следует использовать [`ads.getPostsReach`](method/ads.getPostsReach).
* Добавлена поддержка новых типов клавиш в клавиатуре ботов.
* В Callback API и LongPoll API у события `message_new` вместо `{ object: message }` будет приходить `{ object: { message, client_info } }`.
* В [`client_info`](api/bots/getting-started#Информация%20о%20доступных%20пользователю%20функциях) содержится информация о клиенте, полезная для формирования сообщений ботами.

  - [ads.getPostsReach](method/ads.getPostsReach) — Возвращает подробную статистику по охвату рекламных записей из объявлений и кампаний для продвижения записей сообщества.
- [5.102](reference/version/5.102) — * В методах секции [`messages.*`](method/messages) доступен метод для получения [материалов диалога или беседы](reference/objects/story-feed-item).
* Сообщения, которые не помещаются в Bots Long Poll API или Callback API, обрезаются и имеют пометку `is_cropped`. В случае обрезания остается одно пересланное сообщение или ответ и только одно вложение на каждое сообщение.
* Для методов [`ads.createTargetGroup`](method/ads.createTargetGroup) и [`ads.updateTargetGroup`](method/ads.updateTargetGroup) параметр `lifetime` стал обязательным. Параметр принимает значения от `1` до `720`.
* Истории в методе [`stories.get`](method/stories.get) в рамках одного автора теперь приходят в хронологическом порядке. Раньше приходили в обратном.
* В методы [`stories.getPhotoUploadServer`](method/stories.getPhotoUploadServer) и [`stories.getVideoUploadServer`](method/stories.getVideoUploadServer) добавлен параметр `clickable_stickers`.



  - [ads.createTargetGroup](method/ads.createTargetGroup) — Создаёт аудиторию для ретаргетинга рекламных объявлений на пользователей, которые посетили сайт рекламодателя (просмотрели информации о товаре, зарегистрировались и т.д.).
  - [ads.updateTargetGroup](method/ads.updateTargetGroup) — Редактирует аудиторию ретаргетинга.
  - [stories.get](method/stories.get) — Возвращает истории, доступные для текущего пользователя.
  - [stories.getVideoUploadServer](method/stories.getVideoUploadServer) — Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).
  - [stories.getPhotoUploadServer](method/stories.getPhotoUploadServer) — Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).
- [5.101](reference/version/5.101) — * Методы работы со стеной возвращают новый аттач-сниппет для событий с типом [`events`](reference/objects/video).
* Обложки в объекте [видео](reference/objects/video) теперь передаются в полях `image` и `first_frame` в виде массивов объектов [`video_image`](reference/objects/video-image).
* Обложки в объекте [альбома видео](reference/objects/video-album-full) теперь передается в поле `image` в виде массива объектов [`video_image`](reference/objects/video-image).


- [5.100](reference/version/5.100) — * Параметры  `limit`, `count` и `offset` в методе [`messages.deleteConversation`](method/messages.deleteConversation) объявлены устаревшими.
* Метод [`wall.edit`](method/wall.edit) в случае успеха возвращает `post_id` — идентификатор отредактированного поста.



  - [messages.deleteConversation](method/messages.deleteConversation) — Удаляет беседу.
  - [wall.edit](method/wall.edit) — :::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

Редактирует запись на стене.
- [5.95](reference/version/5.95) — * В методах [`wall.getComments`](method/wall.getComments), [`market.getComments`](method/market.getComments), [`video.getComments`](method/video.getComments), [`board.getComments`](method/board.getComments) граффити вынесен в отдельный тип `attach`.
* Методы [`market.add`](method/market.add), [`market.edit`](method/market.edit) принимают параметр `url`. Объект `market` теперь может возвращать `url` и `button_title`.


  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [market.getComments](method/market.getComments) — Возвращает список комментариев к товару.
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [board.getComments](method/board.getComments) — Возвращает список сообщений в указанной теме.
- [5.93](reference/version/5.93) — * Метод [`wall.createComment`](wall.createComment) возвращает новую ошибку `222`.


- [5.92](reference/version/5.92) — * Метод [`wall.getComments`](wall.getComments) возвращает новые поля: `comment_id (integer)`, `current_level_count (integer)`.
* Метод [`wall.createComment`](wall.createComment) возвращает новое поле `parents_stack (array)`.
* Добавлен метод [`wall.getComment`](wall.getComment).
* В объекте [комментария к записи на стене](reference/objects/comment) возвращаются новые поля: `parents_stack (array)`, `thread (object)`. Может возвращаться поле `deleted (boolean)`, говорящее о том, что комментарий был удалён.
* В [объекте сообщения](reference/objects/message) разделены ответы и пересланные сообщения (`reply_message` и `fwd_messages`).
* В объектах [записи на стене](reference/objects/post), [видеозаписи](reference/objects/video), [товара](reference/objects/market-item) может возвращаться поле `is_favorite (boolean)`.


  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [wall.getComment](method/wall.getComment) — Получает информацию о комментарии на стене.
  - [wall.createComment](method/wall.createComment) — Добавляет комментарий к записи на стене.
- [5.90](reference/version/5.90) — * Метод [`account.getBanned`](account.getBanned) возвращает поля `profiles (array)` и `groups (array)` с данными [пользователей](reference/objects/user) и [сообществ](reference/objects/group).
* Добавлен новый формат ответа метода [`docs.save`](docs.save).
* Параметр `random_id` в методе [`messages.send`](messages.send) теперь обязательный.


  - [messages.send](method/messages.send) — Метод отправляет сообщение.
  - [docs.save](method/docs.save) — Метод сохраняет файл после его успешной [загрузки на сервер](api/upload/document-in-profile).
- [5.89](reference/version/5.89) — В [объекте пользователя](reference/objects/user) добавлены новые обязательные поля:
* `is_closed (boolean)` — включена ли приватность профиля.
* `can_access_closed (boolean)` — есть ли у текущего пользователя возможность видеть профиль пользователя при `is_closed = true`.
  - [users.get](method/users.get) — Метод позволяет получить информацию о пользователях.
  - [users.search](method/users.search) — Возвращает список пользователей в соответствии с заданным критерием поиска.
- [5.88](reference/version/5.88) — * Метод [`messages.removeChatUser`](messages.removeChatUser) возвращает ошибку `935: User not found in chat`, если пользователя нет в чате.



  - [messages.removeChatUser](method/messages.removeChatUser) — Исключает из мультидиалога пользователя, если текущий пользователь или сообщество является администратором беседы либо текущий пользователь пригласил исключаемого пользователя.
- [5.87](reference/version/5.87) — * В объекте [сообщества](reference/objects/group) у поля `wall` поменялись значения. Для сообществ возвращаются значения:
    *  `2` – стена ограничена (было `1`).
    *  `3` – стена закрытая (было `0`).



- [5.86](reference/version/5.86) — * Метод [`messages.search`](messages.search) при использовании параметра `extended` = `1` возвращает массив объектов [бесед](reference/objects/conversation).
* Изменения в методе [`stats.get`](stats.get):
    * Входные параметры `date_from` и `date_to` устарели, вместо них используются `timestamp_from` и `timestamp_to` — целые числа, представляющее собой время в Unixtime.
    * Появился входной параметр `stats_groups`, который позволяет фильтровать по отдельным блокам в статистике. Возможные значения: `visitors`, `reach`, `activity`.
    * В ответе поля `period_from` и `period_to` являются целыми числами и так же представляют собой время в Unixtime.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
  - [stats.get](method/stats.get) — Возвращает статистику сообщества или приложения.
- [5.85](reference/version/5.85) — * В объекте [приложения](reference/objects/app) в поле `type` приходят новые значения.
    * `app` — социальное приложение.
    * `game` — игра.
    * `site` — подключенный сайт.
    * `standalone` — отдельное приложение (для мобильного устройства).
    * `vk_app` — мини-приложение.
    * `community_app` — приложение сообщества.
    * `html5_game` — HTML5 игра.
* В объекте приложения больше не приходит поле `is_html5_app`.
* Метод [`messages.getConversationMembers`](messages.getConversationMembers) возвращает новую ошибку `917`.
* Изменения в API опросов:
    * Новый формат [объекта опроса](reference/objects/poll).
    * Метод [`polls.create`](polls.create) поддерживает новые параметры для опросов с мультивыбором и фоном.
* В методе [`groups.getLongPollServer`](groups.getLongPollServer) изменился тип поля `ts` — теперь это `string`, а не `integer`.


  - [apps.get](method/apps.get) — Метод возвращает данные о приложениях.
  - [polls.create](method/polls.create) — Позволяет создавать опросы, которые впоследствии можно прикреплять к записям на странице пользователя или сообщества.
  - [polls.getById](method/polls.getById) — Возвращает детальную информацию об опросе по его идентификатору.
  - [messages.getConversationMembers](method/messages.getConversationMembers) — Метод получает список участников беседы.
  - [groups.getLongPollServer](method/groups.getLongPollServer) — Возвращает данные для подключения к [Bots Longpoll API](api/bots-long-poll/getting-started).
- [5.84](reference/version/5.84) — * Метод [`messages.getChatPreview`](messages.getChatPreview) теперь возвращает максимум 5 участников из чата. Метод [`messages.getConversationMembers`](messages.getConversationMembers) возвращает поле `can_kick (boolean)` для участников беседы.
* В объекте [записи на стене](reference/objects/post) для комментариев могут вернуться поля `can_close` (boolean) и `can_open (boolean)`.



  - [messages.getChatPreview](method/messages.getChatPreview) — Получает данные для превью чата с приглашением по ссылке.
  - [messages.getConversationMembers](method/messages.getConversationMembers) — Метод получает список участников беседы.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
- [5.83](reference/version/5.83) — * В объекте [сообщения](reference/objects/message) могут приходить вложения с типами `graffiti` и `audio_message`. В объекте [беседы](reference/objects/conversation) возвращается поле `acl`.


- [5.82](reference/version/5.82) — * В объекте [беседы](reference/objects/conversation) возвращается новое поле `is_group_channel (boolean)` для каналов сообществ.
* Метод [`stories.get`](stories.get) возвращает истории в реверсивном порядке.


  - [stories.get](method/stories.get) — Возвращает истории, доступные для текущего пользователя.
- [5.81](reference/version/5.81) — * Метод [`messages.removeChatUser`](messages.removeChatUser) принимает новый параметр `member_id (integer)`.
* В Callback API и Bots Longpoll добавлено новое [событие](api/events/overview) — платёж через VK Pay.
* Метод [`messages.deleteConversation`](messages.deleteConversation) в ответе возвращает поле `last_deleted_id`, содержащее идентификатор последнего удалённого сообщения.


  - [messages.removeChatUser](method/messages.removeChatUser) — Исключает из мультидиалога пользователя, если текущий пользователь или сообщество является администратором беседы либо текущий пользователь пригласил исключаемого пользователя.
  - [messages.deleteConversation](method/messages.deleteConversation) — Удаляет беседу.
- [5.80](reference/version/5.80) — * Добавили новый API для сообщений. Изменился объект [`message`](reference/objects/message), а также появился объект  [`conversation`](reference/objects/conversation) и связанные с ним методы.
* Следующие методы объявлены устаревшими и обновляться не будут:
[`messages.getDialogs`](messages.getDialogs), [`messages.getChat`](messages.getChat), [`messages.getChatUsers`](messages.getChatUsers), [`messages.get`](messages.get), [`messages.searchDialogs`](messages.searchDialogs) объявлены устаревшими и больше обновляться не будут.
* В методе [`messages.markAsRead`](messages.markAsRead) больше не поддерживается параметр `message_ids`.
* Следующие методы будут перенаправляться на новые версии:
    * [`messages.markAsImportantDialog`](messages.markAsImportantDialog) → [`messages.markAsImportantConversation`](messages.markAsImportantConversation)
    * [`messages.markAsAnsweredDialog`](messages.markAsAnsweredDialog) → [`messages.markAsAnsweredConversation`](messages.markAsAnsweredConversation)
    * [`messages.deleteDialog`](messages.deleteDialog) → [`messages.deleteConversation`](messages.deleteConversation).
* Метод [`secure.sendSMSNotification`](secure.sendSMSNotification) теперь отправляет несколько сообщений. Изменился формат ответа.



  - [messages.getByConversationMessageId](method/messages.getByConversationMessageId) — Возвращает сообщения по conversation_message_id.
  - [messages.getConversations](method/messages.getConversations) — Возвращает список бесед пользователя.
  - [messages.getConversationsById](method/messages.getConversationsById) — Позволяет получить беседу по её идентификатору.
  - [messages.getConversationMembers](method/messages.getConversationMembers) — Метод получает список участников беседы.
  - [messages.searchConversations](method/messages.searchConversations) — Позволяет искать диалоги.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
  - [messages.markAsRead](method/messages.markAsRead) — Метод помечает сообщения как прочитанные.
- [5.78](reference/version/5.78) — Метод [`groups.getSettings`](groups.getSettings) возвращает поле `events`.
- [5.77](reference/version/5.77) — Добавлен новый формат объекта [`photo`](reference/objects/photo).
  - [photos.get](method/photos.get) — Возвращает список фотографий в альбоме.
  - [photos.getAll](method/photos.getAll) — Возвращает все фотографии пользователя или сообщества в антихронологическом порядке.
  - [photos.getById](method/photos.getById) — Возвращает информацию о фотографиях по их идентификаторам.
  - [photos.save](method/photos.save) — Метод сохраняет фотографии в альбом после их успешной [загрузки на сервер](api/upload/album-photos).
- [5.76](reference/version/5.76) — * Прекращена поддержка ответов в XML-формате.



- [5.75](reference/version/5.75) — * Добавлен [новый формат](reference/objects/stats-format) ответа в методе [`stats.get`](stats.get).
* В настройках Callback-сервера и Long Poll API появилась возможность указывать версию API. От нее зависит формат получаемых событий.



  - [stats.get](method/stats.get) — Возвращает статистику сообщества или приложения.
- [5.74](reference/version/5.74) — * Добавлен новый формат [стикеров](reference/objects/sticker).
* Метод с [`docs.search`](docs.search) с параметром `search_own` теперь не возвращает массив `local`. Вместо этого в `items` сначала возвращаются документы пользователя, а потом документы из глобального поиска.
* Добавлена новая ошибка:  [`Ошибка 29: Rate limit reached`](reference/errors)


  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
- [5.73](reference/version/5.73) — * В объекте [`post`](reference/objects/post) возвращается поле `access_key`.



- [5.71](reference/version/5.71) — * Метод [`groups.getBanned`](groups.getBanned) возвращает информацию о сообществах из чёрного списка.



  - [groups.getBanned](method/groups.getBanned) — Возвращает список забаненных пользователей и сообществ в сообществе.
- [5.70](reference/version/5.70) — * В поле `action` объекта [сообщения](reference/objects/message) может возвращаться значение `chat_invite_user_by_link`.
* В объекте [сообщения](reference/objects/message) добавлено поле `update_time`.
* Методы [`wall.post`](wall.post), [`wall.editAdsStealth`](wall.editAdsStealth), [`wall.edit`](wall.edit), [`wall.repost`](wall.repost) могут возвращать новую ошибку `224` — превышен лимит рекламных записей.
* В Callback API добавлено новое событие — `message_edit`.


  - [wall.post](method/wall.post) — Метод позволяет:

* Создать запись на стене.
* Предложить запись на стене публичной страницы.
* Опубликовать существующую отложенную запись.

:::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

  - [wall.editAdsStealth](method/wall.editAdsStealth) — Позволяет отредактировать скрытую запись.
  - [wall.edit](method/wall.edit) — :::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

Редактирует запись на стене.
  - [wall.repost](method/wall.repost) — Метод позволяет сделать репост — скопировать запись на стену пользователя или сообщества.

  - [groups.getCallbackSettings](method/groups.getCallbackSettings) — Позволяет получить настройки уведомлений [Callback API](api/callback/getting-started) для сообщества.
  - [groups.setCallbackSettings](method/groups.setCallbackSettings) — Позволяет задать настройки уведомлений о событиях в [Callback API](api/callback/getting-started).
- [5.69](reference/version/5.69) — * Метод [`messages.getLongPollHistory`](messages.getLongPollHistory) возвращает информацию о сообществах в отдельном массиве `groups`. 
* Методы [`newsfeed.search`](newsfeed.search) и [`search.getHints`](search.getHints) возвращают в ответе поле `suggested_queries` с подсказками для поиска. 
* Метод [`messages.send`](messages.send) может вернуть новые ошибки `913` и `921`.
* Метод [`friends.getRequests`](friends.getRequests) возвращает новое поле `count_unread`.
* Метод [`search.getHints`](search.getHints) принимает новый параметр `offset`.
* В объекте [пользователя](reference/objects/user) и [сообщества](reference/objects/group) может возвращаться дополнительное поле `trending` («огонёк»).
* В поле `action` объекта [сообщения](reference/objects/message) могут возвращаться значения `chat_pin_message`, `chat_unpin_message`.
* В [Callback API](api/callback/getting-started) добавлены новые события — добавление пользователя в черный список и удаление из него, `user_block` и `user_unblock`.



- [5.68](reference/version/5.68) — * В объекте [записи на стене](reference/objects/post) добавлено поле `groups_can_post` с информацией о том, могут ли сообщества комментировать запись.
* Метод [`messages.send`](messages.send) возвращает массив статусов отправки при использовании параметра `user_ids` и вызове с ключом доступа сообщества.
* Методы [`groups.getCallbackServerSettings`](groups.getCallbackServerSettings), `groups.setCallbackServerSettings` и `groups.setCallbackServer` устарели. 
* В методах [`groups.setCallbackSettings`](groups.setCallbackSettings), [`groups.getCallbackSettings`](groups.getCallbackSettings) добавлен параметр `server_id`.



  - [messages.send](method/messages.send) — Метод отправляет сообщение.
  - [groups.getCallbackServerSettings](method/groups.getCallbackServerSettings)
- [5.67](reference/version/5.67) — 
* В метод `wall.createComment` добавлен новый параметр `from_group`. Он позволяет указать идентификатор сообщества, от лица которого будет опубликован комментарий. 

* Метод `messages.getChat` не добавляет в возвращаемые объекты [`chat`](reference/objects/chat) поле `users`, если оно пустое.


  - [wall.createComment](method/wall.createComment) — Добавляет комментарий к записи на стене.
  - [messages.getChat](method/messages.getChat) — Возвращает информацию о беседе.
- [5.66](reference/version/5.66) — В метод  `auth.signup` добавлен обязательный параметр `birthday`.




- [5.65](reference/version/5.65) — * В метод `auth.restore` добавлен обязательный параметр `last_name`.

* В метод `messages.getLongPollServer` добавлен параметр `lp_version`.

* Метод `ads.getCategories` возвращает результат в новом формате.

* Метод `wall.edit` больше нельзя использовать для редактирования рекламной записи, вместо него нужно использовать метод `wall.editAdsStealth`.

* Методы `audio.getAlbums`, `audio.addAlbum`, `audio.editAlbum`, `audio.deleteAlbum` и  `audio.moveToAlbum` устарели.



  - [audio.addAlbum](method/audio.addAlbum) — Создает пустой альбом аудиозаписей.
  - [audio.editAlbum](method/audio.editAlbum)
  - [audio.deleteAlbum](method/audio.deleteAlbum)
  - [messages.getLongPollServer](method/messages.getLongPollServer) — Возвращает данные, необходимые для [подключения к Long Poll серверу](api/user-long-poll/getting-started).
- [5.64](reference/version/5.64) — 
* В ответ метода `messages.getDialogs` добавлены поля `unanswered` и `important`. Они используются в объектах, описывающих сообщения сообществ.

* В ответ метода `groups.getCallbackSettings` добавлено поле `wall_repost`, которое содержит информацию о настройках уведомления о репосте.

* Метод `video.save` возвращает ошибку `15`, если в вызове указан параметр `wallpost = 1`, и приложение не запрашивало права доступа **wall**.



  - [groups.getCallbackSettings](method/groups.getCallbackSettings) — Позволяет получить настройки уведомлений [Callback API](api/callback/getting-started) для сообщества.
  - [video.save](method/video.save) — Метод получает адрес сервера, на который необходимо [загрузить](api/upload/video-in-profile) видео, а также данные этого видео.

:::note
**Примечание.** Приложение может вызвать этот метод не более 5&nbsp;000 раз в сутки.
:::
- [5.63](reference/version/5.63) — * В объекты, описывающие [запись на стене](reference/objects/post), добавлено поле `views`, которое содержит количество просмотров записи.

* В методы `wall.getComments` и `video.getComments` добавлен параметр `fields`.

* Метод `utils.getShortLink` возвращает новый тип объекта, описывающего ссылку. Этот объект содержит следующие поля:

    - `access_key` — ключ для доступа к приватной статистике ссылки.
    - `key` — содержательная часть ссылки, то есть та, что идёт после "vk.cc".
    - `url` — оригинальный URL.



  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [utils.getShortLink](method/utils.getShortLink) — Позволяет получить URL, сокращённый с помощью vk.cc.
  - [likes.getList](method/likes.getList) — Метод получает список идентификаторов пользователей, которые поставили у заданного объекта отметку «Нравится».
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
- [5.62](reference/version/5.62) — * Метод `messages.getHistoryAttachments` возвращает поле `message_id` для вложений. 

* Добавлено новое значение семейного положения `8 — «в гражданском браке»` в объекты, [описывающие пользователей](reference/objects/user).
  - [messages.getHistoryAttachments](method/messages.getHistoryAttachments) — Возвращает материалы диалога или беседы.
  - [users.get](method/users.get) — Метод позволяет получить информацию о пользователях.
  - [ads.createAds](method/ads.createAds) — Создает рекламные объявления.
- [5.61](reference/version/5.61) — * В объектах, [описывающих сообщества](reference/objects/group) появилось новое поле `cover`. 

* Параметр `filter` метода `account.getCounters` может принимать новое значение `friends_suggestions`.

* Метод `pages.get` теперь выполняет проверку на наличие прав администратора при использовании параметра `need_source`.



  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
  - [groups.getById](method/groups.getById) — Возвращает информацию о заданном сообществе или о нескольких сообществах.
  - [pages.get](method/pages.get) — Возвращает информацию о вики-странице.
- [5.60](reference/version/5.60) — * Метод `account.getInfo` возвращает поле `2fa_required` для аккаунтов с включенной двухфакторной аутентификацией. 

* В метод `photos.get` добавлено ограничение на значение параметра `feed`: не более месяца с текущей даты.

* Изменение в методах `wall.getById`, `wall.get` и `newsfeed.get`: в медиаложениях вида [`link`](reference/objects/link) поле `button` содержит объект  [нового формата](reference/objects/button).
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [photos.get](method/photos.get) — Возвращает список фотографий в альбоме.
- [5.59](reference/version/5.59) — Обновлены требования к размерам изображений в рекламных объявлениях. [Подробности](method/ads.getUploadURL).
  - [ads.createAds](method/ads.createAds) — Создает рекламные объявления.
  - [ads.getUploadURL](method/ads.getUploadURL) — Возвращает URL-адрес для загрузки фотографии рекламного объявления.

Подробности о загрузке изображений для объявлений смотрите на [отдельной странице](method/ads/upload-photo-ads).
  - [ads.updateAds](method/ads.updateAds) — Редактирует рекламные объявления.
- [5.58](reference/version/5.58) — * В возвращаемых объектах, описывающих [сообщества](reference/objects/group), появилось новое поле `is_messages_blocked`.

* В [Callback API](api/callback/getting-started) добавлены новые события: `message_allow` и `message_deny`. Метод [`groups.setCallbackSettings`](method/groups.setCallbackSettings) принимает два новых параметра, а метод [`groups.getCallbackSettings`](method/groups.getCallbackSettings) возвращает два новых поля, соответственно.
  - [groups.setCallbackSettings](method/groups.setCallbackSettings) — Позволяет задать настройки уведомлений о событиях в [Callback API](api/callback/getting-started).
  - [groups.getCallbackSettings](method/groups.getCallbackSettings) — Позволяет получить настройки уведомлений [Callback API](api/callback/getting-started) для сообщества.
  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
  - [groups.getById](method/groups.getById) — Возвращает информацию о заданном сообществе или о нескольких сообществах.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.getBanned](method/newsfeed.getBanned) — Возвращает список пользователей и групп, которые текущий пользователь скрыл из ленты новостей.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [newsfeed.getSuggestedSources](method/newsfeed.getSuggestedSources) — Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
  - [video.search](method/video.search) — Метод получает список видеозаписей в соответствии с заданными критериями поиска.
  - [video.getUserVideos](method/video.getUserVideos)
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
- [5.57](reference/version/5.57) — В возвращаемом объекте `app`, [описывающем приложение](reference/objects/app), изменились названия полей и размеры изображений иконок и баннеров.
  - [apps.get](method/apps.get) — Метод возвращает данные о приложениях.
  - [apps.getCatalog](method/apps.getCatalog) — Возвращает список приложений, доступных для пользователей сайта через каталог приложений.
- [5.56](reference/version/5.56) — Делать запросы к api.vk.com, начиная с этой версии, можно только по протоколу HTTPS. [Подробности перехода на поддержку HTTPS](https://vk.com/dev/https_only).
- [5.54](reference/version/5.54) — Если в параметрах вызова метода не была указана дата окончания, возвращаемые объекты, которые описывают [сообщество](reference/objects/group), теперь не содержат поле `finish_data`. Ранее это поле присутствовало в ответе и содержало по умолчанию, равное `start_date` + 2 часа.
  - [groups.getById](method/groups.getById) — Возвращает информацию о заданном сообществе или о нескольких сообществах.
  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
  - [groups.search](method/groups.search) — Осуществляет поиск сообществ по заданной подстроке.
  - [users.getSubscriptions](method/users.getSubscriptions)
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.getBanned](method/newsfeed.getBanned) — Возвращает список пользователей и групп, которые текущий пользователь скрыл из ленты новостей.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [newsfeed.getSuggestedSources](method/newsfeed.getSuggestedSources) — Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
  - [video.search](method/video.search) — Метод получает список видеозаписей в соответствии с заданными критериями поиска.
  - [video.getUserVideos](method/video.getUserVideos)
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
- [5.53](reference/version/5.53) — В объектах, [описывающих сообщества](reference/objects/group), следующие поля возвращаются только запросами с передачей `access_token`:

* `can_message`
* `ban_info`
* `can_post`
* `can_upload_doc`
* `can_upload_video`
* `can_see_all_posts`
* `can_create_topic`
* `is_favorite`
* `is_hidden_from_feed`
  - [groups.getById](method/groups.getById) — Возвращает информацию о заданном сообществе или о нескольких сообществах.
  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
  - [groups.search](method/groups.search) — Осуществляет поиск сообществ по заданной подстроке.
  - [users.getSubscriptions](method/users.getSubscriptions) — Возвращает список идентификаторов пользователей и публичных страниц, которые входят в список подписок пользователя.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.getBanned](method/newsfeed.getBanned) — Возвращает список пользователей и групп, которые текущий пользователь скрыл из ленты новостей.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [newsfeed.getSuggestedSources](method/newsfeed.getSuggestedSources) — Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
  - [video.search](method/video.search) — Метод получает список видеозаписей в соответствии с заданными критериями поиска.
  - [video.getUserVideos](method/video.getUserVideos)
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search) — Позволяет искать записи на стене в соответствии с заданными критериями.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
- [5.52](reference/version/5.52) — Методы, возвращающие информацию о медиавложениях [сообщений](reference/objects/attachments-message) и [записей](reference/objects/attachments-wall), теперь также возвращают медиавложения типов [`market`](reference/objects/attachments-message#Товар%20(type%20=%20market)) и [`market_album`](reference/objects/attachments-message#Подборка%20товаров%20(type%20=%20market_album)).
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
- [5.50](reference/version/5.50) — * Изменения в методе [ads.getAds](ads.getAds): 

    - Возвращаемое поле `impressions_limit` заменено двумя полями: `impressions_limit` и `impressions_limited`.

    - Изменено возвращаемое поле `ad_platform`.

    - Возвращаемое поле `disclaimer` заменено полями `disclaimer_medical`, `disclaimer_specialist`, `disclaimer_supplements`.

* Изменения в методах [ads.createAds](ads.createAds) и [ads.updateAds](ads.updateAds): 

    - Параметр `impressions_limit` в `ad_specification` заменён двумя параметрами: `impressions_limit` и `impressions_limited`.

    - Изменён параметр `ad_specification.ad_platform`.

    - Поле `disclaimer` в `ad_specification` заменено на поля  `disclaimer_medical`, `disclaimer_specialist`, `disclaimer_supplements`.

* Параметр `ad_specification.ad_format` метода [ads.createAds](ads.createAds) стал обязательным.

* Параметр `ad_format` метода [ads.getUploadURL](ads.getUploadURL)  стал обязательным.
  - [ads.getAds](method/ads.getAds) — Возвращает список рекламных объявлений.
  - [ads.createAds](method/ads.createAds) — Создает рекламные объявления.
  - [ads.updateAds](method/ads.updateAds) — Редактирует рекламные объявления.
  - [ads.getUploadURL](method/ads.getUploadURL) — Возвращает URL-адрес для загрузки фотографии рекламного объявления.

Подробности о загрузке изображений для объявлений смотрите на [отдельной странице](method/ads/upload-photo-ads).
- [5.49](reference/version/5.49) — Метод `account.setInfo` теперь принимает универсальные параметры `name` и `value` вместо раздельных параметров.
- [5.48](reference/version/5.48) — * Метод `messages.getHistory` принимает параметр `rev` вместе с `start_message_id` равный `0`. 

* Метод `friends.edit` возвращает ошибку `"Code: 100, Message: invalid list_ids"`, если указан неправильный `list_ids`.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
- [5.46](reference/version/5.46) — * Методы `messages.send` и `messages.sendSticker` теперь используют параметр `random_id` вместо `guid`. 

* Метод `account.getPushSettings` возвращает поле `peer_id` вместо параметров `chat_id` и `user_id`. 

* Метод `account.setSilenceMode` принимает параметр `peer_id` вместо параметров `chat_id` и `user_id`. 

* Метод `messages.getHistoryAttachments` возвращает товары, записи со стены и комментарии в виде ссылок.
  - [messages.send](method/messages.send) — Метод отправляет сообщение.
  - [messages.getHistoryAttachments](method/messages.getHistoryAttachments) — Возвращает материалы диалога или беседы.
- [5.45](reference/version/5.45) — В объекты, [описывающие медиавложения](reference/objects/attachments-message) с типом `link` в сообщениях, добавлены новые поля: 

* `caption`
* `is_external`
* `product`
* `application`
* `rating` 
* `button`
  - [messages.getHistoryAttachments](method/messages.getHistoryAttachments) — Возвращает материалы диалога или беседы.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
- [5.44](reference/version/5.44) — * Методы `docs.get`, `docs.getById` возвращают поле `preview` вместо полей `photo_100` и `photo_130`. 

* Метод `messages.searchDialogs` возвращает сообщества в результате поиска.


  - [docs.get](method/docs.get) — Возвращает расширенную информацию о документах пользователя или сообщества.
  - [docs.getById](method/docs.getById) — Возвращает информацию о документах по их идентификаторам.
- [5.43](reference/version/5.43) — * В методе `messages.get` введены ограничения на параметры `out`, `time_offset`, `filters`. Теперь их значения могут быть только положительными числами.

* В методе `messages.getById` параметр `message_ids` стал обязательным.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
- [5.42](reference/version/5.42) — * Метод `gifts.get` может вернуть отрицательный `from_id`. 

* Метод `notifications.get` возвращает уведомления об упоминаниях в описаниях фотографий.
  - [gifts.get](method/gifts.get) — Возвращает список полученных подарков пользователя.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.41](reference/version/5.41) — * Метод `notifications.get` возвращает уведомления о новых ответах к комментариям в товарах. 

* Метод `newsfeed.getComments` возвращает комментарии к товарам.

* Методы `wall.get`, `wall.search` и `wall.getById` теперь возвращают объекты [`market_album`](reference/objects/market-album) в [медиавложениях](reference/objects/attachments-message).
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
- [5.40](reference/version/5.40) — Добавлена поддержка параметра `fields` для профилей.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
- [5.39](reference/version/5.39) — Методы, возвращающие информацию о [медиавложениях](reference/objects/attachments-wall) с типом `link`, теперь возвращают поля `caption`, `is_external`, `product`, `application`, `rating` и `button`.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
- [5.38](reference/version/5.38) — * Методы `apps.get` и `apps.getCatalog` возвращают объект [photo](reference/objects/photo) для полей `screenshots`.

* В ответы методов `messages.getDialogs` и `messages.getHistory` добавлены поля `in_read` и `out_read`.

* В методы `messages.send`, `messages.sendSticker`, `messages.deleteDialog`, `messages.setActivity` и `messages.getHistory` добавлен параметр `peer_id`.
  - [messages.send](method/messages.send) — Метод отправляет сообщение.
  - [messages.deleteDialog](messages.deleteConversation) — Удаляет все личные сообщения в диалоге.
  - [messages.setActivity](method/messages.setActivity) — Изменяет статус набора текста пользователем в диалоге.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [apps.get](method/apps.get) — Метод возвращает данные о приложениях.
  - [apps.getCatalog](method/apps.getCatalog) — Возвращает список приложений, доступных для пользователей сайта через каталог приложений.
- [5.37](reference/version/5.37) — Для [медиавложений](reference/objects/attachments-wall) типа `link` вместо полей `image_src` и `image_big` возвращается объект [`photo`](reference/objects/photo).
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.search](method/wall.search)
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
- [5.36](reference/version/5.36) — * В метод `apps.get` добавлены параметры `app_ids`, `return_friends`. 

* В объект [`app`](reference/objects/app), который описывает приложения и который метод `apps.get` возвращает, добавлены поля `installed` и `screenshots`.
  - [apps.get](method/apps.get) — Метод возвращает данные о приложениях.
- [5.35](reference/version/5.35) — Добавлены методы для работы с активностями приложений.
- [5.34](reference/version/5.34) — Теперь метод `video.getComments` возвращает ошибку при запросе комментариев к видео, если доступ к этим комментариям ограничен.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
- [5.33](reference/version/5.33) — В методы, возвращающие комментарии, добавлен параметр `start_comment_id`, который указывает начальный комментарий для возврата.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [board.getComments](method/board.getComments) — Возвращает список сообщений в указанной теме.
- [5.32](reference/version/5.32) — Объект [приватности](api/privacy) теперь поддерживает возможное значение `friends_of_friends_only`.
- [5.31](reference/version/5.31) — Параметр `device_id` является обязательным. Изменён формат настроек приватности.
- [5.30](reference/version/5.30) — Изменён формат данных, [описывающих приватность](api/privacy).
  - [photos.createAlbum](method/photos.createAlbum) — Создает пустой альбом для фотографий.
  - [photos.editAlbum](method/photos.editAlbum) — Редактирует данные альбома для фотографий.
  - [photos.getAlbums](method/photos.getAlbums) — Возвращает список фотоальбомов пользователя или сообщества.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
  - [video.edit](method/video.edit) — Метод редактирует данные видеозаписи.
  - [video.getAlbums](method/video.getAlbums) — Возвращает список альбомов видеозаписей пользователя или сообщества.
  - [video.getAlbumById](method/video.getAlbumById) — Позволяет получить информацию об альбоме с видео.
  - [video.getAlbumsByVideo](method/video.getAlbumsByVideo) — Метод возвращает список альбомов, в которых находится видеозапись.
  - [video.addAlbum](method/video.addAlbum) — Создает пустой альбом видеозаписей.
  - [video.editAlbum](method/video.editAlbum) — Редактирует альбом с видео.
  - [video.save](method/video.save) — Метод получает адрес сервера, на который необходимо [загрузить](api/upload/video-in-profile) видео, а также данные этого видео.

:::note
**Примечание.** Приложение может вызвать этот метод не более 5&nbsp;000 раз в сутки.
:::
- [5.29](reference/version/5.29) — В метод `messages.getLongPollHistory` добавлен параметр `fields`.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
- [5.28](reference/version/5.28) — Изменён формат результата метода `friends.delete`.
- [5.27](reference/version/5.27) — В метод `notifications.get` добавлен новый параметры `start_from`. В возвращаемый методом объект добавлено поле `next_from`. 
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.26](reference/version/5.26) — Метод `newsfeed.getSuggestedSources` теперь возвращает результат в виде списка.
  - [newsfeed.getSuggestedSources](method/newsfeed.getSuggestedSources) — Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.
- [5.24](reference/version/5.24) — Изменения в методе `notifications.get`. Возвращаемое поле `items.type` может иметь новое значение `wall_publish`, которое означает, что предложенная запись размещена на стене.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.23](reference/version/5.23) — * При использовании параметра 'photo_sizes' метод `photos.saveOwnerPhoto` вернёт ссылки на все размеры фотографии.

* Метод `newsfeed.getComments` поддерживает параметр `last_comments_count`, который указывает какое количество комментариев к записям нужно вернуть.

* Параметр `filter` метода `groups.getMembers` теперь поддерживает значение `unsure`. Его можно использовать для получения информации о возможных участниках мероприятия, то есть тех, кто выбрал «Возможно пойду».
  - [photos.saveOwnerPhoto](method/photos.saveOwnerPhoto) — Метод сохраняет главную фотографию после её успешной [загрузки на сервер](api/upload/main-photo-in-profile).
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [groups.getMembers](method/groups.getMembers) — Возвращает список участников сообщества.
- [5.22](reference/version/5.22) — Убрано ошибочное разделение параметра `schools` на два. В запросах теперь снова используется один параметр `schools`. 
Список идентификаторов для этого параметра следует получать с помощью метода [`ads.getSuggestions`](method/ads.getSuggestions).
  - [ads.createAds](method/ads.createAds) — Создает рекламные объявления.
  - [ads.updateAds](method/ads.updateAds) — Редактирует рекламные объявления.
  - [ads.getAdsTargeting](method/ads.getAdsTargeting) — Возвращает параметры таргетинга рекламных объявлений
  - [ads.getTargetingStats](method/ads.getTargetingStats) — Возвращает размер целевой аудитории таргетинга, а также рекомендованные значения CPC и CPM.
- [5.21](reference/version/5.21) — Поле `uid` в ответе метода `video.getTags` заменено на `user_id`.
  - [video.getTags](method/video.getTags)
- [5.20](reference/version/5.20) — * Информация о вики-странице, [вложенной](reference/objects/attachments-wall#Вики-страница%20(type%20=%20page)) в [пост](reference/objects/post), теперь возвращает в виде [объекта вики-страницы](reference/objects/wiki-page). 

* В метод `pages.get` добавлен параметр `need_source`. Кроме того, по умолчанию метод больше не возвращает поле `source`.
  - [pages.get](method/pages.get) — Возвращает информацию о вики-странице.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getReposts](method/wall.getReposts) — Позволяет получать список репостов заданной записи.
- [5.19](reference/version/5.19) — * В объекте, описывающем [сообщество](reference/objects/group), изменился тип полей `start_date` и `finish_date` со строкового на числовой.

* Методы, работающие с новостями, при установленном фильтре `friend` возвращают поле `user_id` вместо `uid`.

* В методе `fave.getLinks` изображения возвращаются в полях `photo_50` и `photo_100` вместо `image_src` и `image_middle`.
  - [groups.getById](method/groups.getById) — Возвращает информацию о заданном сообществе или о нескольких сообществах.
  - [groups.get](method/groups.get) — Возвращает список сообществ указанного пользователя.
  - [groups.search](method/groups.search) — Осуществляет поиск сообществ по заданной подстроке.
  - [groups.getInvites](method/groups.getInvites) — Данный метод возвращает список приглашений в сообщества и встречи текущего пользователя.
  - [newsfeed.getSuggestedSources](method/newsfeed.getSuggestedSources) — Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getReposts](method/wall.getReposts) — Позволяет получать список репостов заданной записи.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
- [5.18](reference/version/5.18) — Заменены возвращаемые переменные: `reply_to_uid` на `reply_to_user`, `reply_to_cid` на `reply_to_comment`.
  - [widgets.getComments](method/widgets.getComments) — Получает список комментариев к странице, оставленных через [Виджет комментариев](widgets/comments).
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.17](reference/version/5.17) — Новые возможные значения в поле `items.type`, которое возвращает метод `notifications.get`: `mention_comment_photo` и `mention_comment_video`.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.16](reference/version/5.16) — Параметр `schools` разделён на два: `schools` и `universities`. Теперь `id` этих объектов такие же, как и в методах `database`.
  - [ads.createAds](method/ads.createAds) — Создает рекламные объявления.
  - [ads.updateAds](method/ads.updateAds) — Редактирует рекламные объявления.
  - [ads.getAdsTargeting](method/ads.getAdsTargeting) — Возвращает параметры таргетинга рекламных объявлений
  - [ads.getTargetingStats](method/ads.getTargetingStats) — Возвращает размер целевой аудитории таргетинга, а также рекомендованные значения CPC и CPM.
- [5.15](reference/version/5.15) — * В метод `newsfeed.search` добавлен параметр `extended`, при передаче которого возвращаются полные результаты со всеми необходимыми для вывода данными о сообществах и пользователях.

* В методе `friends.areFriends` изменён алгоритм генерации поля `sign`. Теперь он учитывает `id` пользователя.

* Объекты в массиве `notes`, который возвращают методы `newsfeed.get` и `newsfeed.getRecommeded`, теперь содержат поля `id` и `comments`.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [friends.areFriends](method/friends.areFriends) — Метод возвращает информацию о том, добавлен ли текущий пользователь в друзья указанных пользователей.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
- [5.14](reference/version/5.14) — * В метод `messages.getDialogs` добавлен параметр `unread`. Если он использован в вызове, метод вернёт информацию о диалогах с непрочитанными входящими сообщениями. Возвращаемый объект будет содержать поле `unread_dialogs`, которое указывает количество таких диалогов (если оно больше нуля). Для каждого диалога будет возвращено поле `unread`, которое содержит количество непрочитанных входящих сообщений (если оно больше нуля).

* Изменения в методе `messages.getHistory`.

    * Параметр `rev` игнорируется, если в вызове используется `start_message_id`.

    * Значение параметра `start_message_id` и его связь с `offset` изменены. 

    * Если `start_message_id` больше нуля, то в возвращаемое значение будет добавлено поле `unread`, которое указывает количество непрочитанных входящих сообщений (если оно больше нуля), а также поле `skipped`, которое содержит количество пропущенных сообщений (если оно больше нуля).
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
- [5.13](reference/version/5.13) — Методы `newsfeed.getComments`, `newsfeed.get`, `newsfeed.getRecommended` и `newsfeed.search` используют пару значений `start_from`-`next_from` для постраничного вывода элементов.
* `start_from` — параметр вызова, который указывает начало диапазона возвращаемых элементов. 
* `next_from` — значение, которое приходит в результатах вызова метода и которое обозначает начало следующего диапазона.
Для постраничного вывода надо передать значение `next_from` из предыдущего вызова в параметр `start_from` в последующем вызове.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
- [5.12](reference/version/5.12) — * Методы `audio.get` и `video.get` возвращают более подробную информацию об ошибках.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
- [5.11](reference/version/5.11) — В случае успешной смены имени метод `account.saveProfileInfo` возвращает поле `name_request`, которое содержит объект, описывающий замену. Поле `status` этого объекта равно `success`.
- [5.10](reference/version/5.10) — * В методе `messages.get` для параметра `filters` разрешены только значения `0` (все входящие или все исходящие сообщения, по полю `out`) и `8` (важные сообщения), остальные значения игнорируются.

* Метод `messages.markAsNew` больше не поддерживается.
- [5.9](reference/version/5.9) — * В методе `newsfeed.getComments` поле `cid` было переименовано в `id`.

* Метод `notifications.get` возвращает объект `video` в новом формате.

* Метод `friends.getLists` возвращает список в виде объекта с полем `count`, а поле `list_id` в ответе заменено на `id`.

* Метод `board.getTopics` возвращает информацию об опросах в новом формате.

* В объектах, которые описывают альбомы и которые возвращаются методами `audio.getAlbums` и `video.getAlbums`, поле `album_id` было заменено на `id`.

* Методы `audio.getRecommendations`, `friends.getSuggestions`, `groups.getMembers` возвращают данные в форме списка. 

* В объектах заметок, которые возвращает метод `places.getCheckins`, поле `user_id` было заменено на `uid`.

  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
  - [friends.getLists](method/friends.getLists) — Возвращает список меток друзей пользователя.
  - [video.getAlbums](method/video.getAlbums) — Возвращает список альбомов видеозаписей пользователя или сообщества.
  - [friends.getSuggestions](method/friends.getSuggestions) — Возвращает список профилей пользователей, которые могут быть друзьями текущего пользователя.
  - [groups.getMembers](method/groups.getMembers) — Возвращает список участников сообщества.
- [5.8](reference/version/5.8) — Поля `city` и `country` объекта, который [описывает пользователя](reference/objects/user), теперь содержат объект, а не идентификатор.
  - [users.get](method/users.get) — Метод позволяет получить информацию о пользователях.
  - [users.search](method/users.search) — Возвращает список пользователей в соответствии с заданным критерием поиска.
  - [friends.get](method/friends.get) — Возвращает список идентификаторов друзей пользователя или расширенную информацию о друзьях пользователя (при использовании параметра `fields`).
- [5.7](reference/version/5.7) — Переименование полей в объектах, которые включены в возвращаемый объект `copy_history`:
* `owner_id` переименовано в `to_id`. 
* `reply_to` переименовано в `reply_post_id`.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
- [5.6](reference/version/5.6) — Поле `post_type` в [возвращаемом объекте](reference/objects/post) использует значение `post` вместо `copy` для репостов.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
- [5.5](reference/version/5.5) — Для группируемых оповещений, например, когда пользователи оценили, поделились, подписались, в поле `feedback` кроме идентификаторов последних пользователей, совершивших действие, возвращается также полное количество пользователей, совершивших это действие за последние сутки.

  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.4](reference/version/5.4) — * В объекте [описывающем пользователя](reference/objects/user), поля `photo` и `photo_medium_rec` переименованы в `photo_50` и `photo_100`.

* Во вложении `wall` в сообщениях поля `from` и `copy_owner` возвращают объект [пользователя](reference/objects/user) или [сообщества](reference/objects/group), вместо массива.
  - [board.getTopics](method/board.getTopics) — Возвращает список тем в обсуждениях указанной группы.
  - [board.getComments](method/board.getComments) — Возвращает список сообщений в указанной теме.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getReposts](method/wall.getReposts) — Позволяет получать список репостов заданной записи.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
- [5.3](reference/version/5.3) — В возвращаемом объекте, описывающем [вики-страницу](reference/objects/wiki-page), поле `pid` переименовано в `id`, поля `edited` и `created` имеют новый формат.
  - [pages.get](method/pages.get) — Возвращает информацию о вики-странице.
- [5.2](reference/version/5.2) — В возвращаемом объекте `items.feedback` поле `owner_id` заменено на `from_id`. Также, был исправлен баг со строкой в `owner_id`.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.1](reference/version/5.1) — * Исправлен тип прикрепления `photos_list` (было `photo_list`). 
* В объектах, которые возвращает метод `video.getUserVideos`, добавлены поля `photo_160`, `photo_320`.
* В объектах, которые возвращает метод `photos.getTags` удалены устаревшие поля `uid` и `tag_id`.
* В методе `notifications.getу возвращаемых объектов, которые описывают темы, поле `tid` заменено на `id`.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [video.getUserVideos](method/video.getUserVideos)
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [5.0](reference/version/5.0) — Большое обновление, затрагивающее почти все методы API ВКонтакте. 

**[Посмотреть список изменений](reference/roadmap#Список%20изменений)**
- [4.104](reference/version/4.104) — Возвращаемые объекты, которые описывают [медиавложения](reference/objects/attachments-wall), поддерживают новый тип вложений `photos_list`.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
- [4.103](reference/version/4.103) — Метод `likes.isLiked` поддерживает новые формат ответа — объект с полями `liked` и `copied`.
  - [likes.isLiked](method/likes.isLiked) — Проверяет, находится ли объект в списке **Мне нравится** заданного пользователя.
- [4.102](reference/version/4.102) — [Возвращаемые объекты](reference/objects/post) содержат информацию о репостах в новом формате. Кроме того, методы возвращают информацию о последующих репостах.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
- [4.101](reference/version/4.101) — Если к записи прикреплён альбом, ссылка на альбом не передаётся в тексте записи.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
- [4.100](reference/version/4.100) — При получении сообщения о смене или удалении фотографии, диалоговое окно больше не содержит пояснение действия.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
- [4.99](reference/version/4.99) — Новый метод  `audio.setBroadcast` добавляет информацию об аудиозаписи в строку статуса пользователя или администрируемых им сообществ.
- [4.98](reference/version/4.98) — Первый элемент возвращаемого массива теперь содержит число возвращаемых альбомов.
  - [photos.getAlbums](method/photos.getAlbums) — Возвращает список фотоальбомов пользователя или сообщества.
- [4.97](reference/version/4.97) — В возвращаемых объектах удалены поля `online` и `reply_count`.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
- [4.96](reference/version/4.96) — Первый элемент возвращаемого массива содержит количество результатов.
  - [video.search](method/video.search) — Метод получает список видеозаписей в соответствии с заданными критериями поиска.
- [4.95](reference/version/4.95) — * Изменён объект, [описывающий комментарии](reference/objects/comment). 
* Все методы возвращают информацию о комментариях в единообразной форме.
  - [photos.getAllComments](method/photos.getAllComments) — Возвращает отсортированный в антихронологическом порядке список всех комментариев к конкретному альбому или ко всем альбомам пользователя.
  - [photos.editComment](method/photos.editComment) — Изменяет текст комментария к фотографии.
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [video.editComment](method/video.editComment) — Изменяет текст комментария к видеозаписи.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
- [4.94](reference/version/4.94) — Информация о ссылках, прикрепленных к личным сообщениям, теперь возвращается в виде [объекта](reference/objects/attachments-message).
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
- [4.93](reference/version/4.93) — В возвращаемом объекте поле `users` переименовано в `items`, а `uid` в `item`.
  - [likes.getList](method/likes.getList) — Метод получает список идентификаторов пользователей, которые поставили у заданного объекта отметку «Нравится».
- [4.92](reference/version/4.92) — Первые элемент возвращаемого массива содержит количество возвращаемых результатов.
- [4.91](reference/version/4.91) — Изменено значение возвращаемого поля `uid`. Теперь оно указывает отправителя сообщения.
  - [messages.getHistory](method/messages.getHistory) — Возвращает историю сообщений для указанного диалога.
- [4.9](reference/version/4.9) — * Изменён формат описания местоположений. 
* Начиная с этой версии в ответах не будут возвращаться поля, оставленные для совместимости.
  - [wall.getReposts](method/wall.getReposts) — Позволяет получать список репостов заданной записи.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [newsfeed.getMentions](method/newsfeed.getMentions) — Возвращает список записей пользователей на своих стенах, в которых упоминается указанный пользователь.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
  - [newsfeed.get](method/newsfeed.get) — :::note
**27 августа 2025 года мы отключили фильтр `friend` и источник `list`**

[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа списка новостей для текущего пользователя.
  - [newsfeed.getRecommended](method/newsfeed.getRecommended) — :::note
**С 27 августа 2025 гогда метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Получает список новостей, рекомендованных пользователю.
- [4.8](reference/version/4.8) — Ответ метода содержит информацию о подарке в виде [объекта](reference/objects/gift), а не документа.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
- [4.7](reference/version/4.7) — Изменяет формат описания комментариев в возвращаемых объектах, делая его аналогичным формату, используемому в других методах.
  - [notifications.get](method/notifications.get) — Возвращает список оповещений об ответах других пользователей на записи текущего пользователя.
- [4.6](reference/version/4.6) — Помечает анонимные опросы полем `anonymous`, не добавляя информации к заголовкам публичных опросов.
  - [polls.getById](method/polls.getById) — Возвращает детальную информацию об опросе по его идентификатору.
- [4.5](reference/version/4.5) — Изменён формат результатов методов `subscriptions.get` и `subscriptions.getFollowers`. Первый элемент возвращаемого массива указывает количество возвращаемых элементов.
- [4.4](reference/version/4.4) — Методы `newsfeed.getComments` и `wall.getComments` возвращают информацию об объектах, прикреплённых  к комментариям.
  - [newsfeed.getComments](method/newsfeed.getComments) — :::note
**С 27 августа 2025 года метод не работает**

Удалите его из кода, чтобы избежать ошибок.
[Подробнее](https://vk.com/@vkappsdev-obnovlyaem-rabotu-metodov-api-wallpost-walledit-i-newsfeed)
:::

Возвращает данные, необходимые для показа раздела комментариев в новостях пользователя.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
- [4.3](reference/version/4.3) — Возвращает результат в виде объекта, содержащего информацию [пользователях](reference/objects/user) и [сообществах](reference/objects/group), необходимых для отображения найденных записей.
  - [newsfeed.search](method/newsfeed.search) — Возвращает результаты поиска по статусам. Новости возвращаются в порядке от более новых к более старым.
- [4.2](reference/version/4.2) — Изменён формат поля `chat_active` в возвращаемом объекте. Теперь оно представлено массивом, а не строкой.
  - [messages.getById](method/messages.getById) — Возвращает сообщения по их идентификаторам.
  - [messages.search](method/messages.search) — Возвращает список найденных личных сообщений текущего пользователя по введенной строке поиска.
  - [messages.getLongPollHistory](method/messages.getLongPollHistory) — Возвращает обновления в личных сообщениях пользователя.
- [4.1](reference/version/4.1) — Первый элемент возвращаемого массива содержит количество возвращаемых изображений.
  - [photos.get](method/photos.get) — Возвращает список фотографий в альбоме.
- [4.0](reference/version/4.0) — Параметр `count` должен быть положительным числом. Параметр `offset` должен быть неотрицательным.
