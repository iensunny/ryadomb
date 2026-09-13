# messages

> Источник: [https://dev.vk.ru/ru/method/messages](https://dev.vk.ru/ru/method/messages)

> Методы для работы с личными сообщениями.

:::note
**Важно!** Методы `messages` можно вызвать с ключом доступа пользователя, полученным в Standalone-приложении через [`Implicit Flow`](api/access-token/implicit-flow-user) с правом доступа `messages`, если вы запрашивали его ранее. Для новых приложений это право не выдаётся.
:::

Для моментального получения входящих сообщений используйте [LongPoll сервер](api/user-long-poll/getting-started). 

Информация об ограничении Messages API находится в [Roadmap](reference/roadmap#Ограничение%20Messages%20API).
 
**Обратите внимание:** методы для работы со звонками перенесены в новую секцию [calls](method/calls). Старые методы звонков из секции messages были помечены устаревшими и могут быть удалены в будущих версиях API.
Методы для работы с личными сообщениями.

:::note
**Важно!** Методы `messages` можно вызвать с ключом доступа пользователя, полученным в Standalone-приложении через [`Implicit Flow`](api/access-token/implicit-flow-user) с правом доступа `messages`, если вы запрашивали его ранее. Для новых приложений это право не выдаётся.
:::

Для моментального получения входящих сообщений используйте [LongPoll сервер](api/user-long-poll/getting-started). 

Информация об ограничении Messages API находится в [Roadmap](reference/roadmap#Ограничение%20Messages%20API).
 
**Обратите внимание:** методы для работы со звонками перенесены в новую секцию [calls](method/calls). Старые методы звонков из секции messages были помечены устаревшими и могут быть удалены в будущих версиях API.

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
