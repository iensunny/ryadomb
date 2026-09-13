# messages.deleteReaction

> Источник: [https://dev.vk.ru/ru/method/messages.deleteReaction](https://dev.vk.ru/ru/method/messages.deleteReaction)
Удаление ранее поставленной реакции

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | peer_id переписки: <br>* user_id &mdash; для личных чатов. <br>* group_id &mdash; для чатов с сообществом.<br>* 2&nbsp;000&nbsp;000&nbsp;000 + id_чата &mdash; для чатов. |
| `cmid` | `positive` | да | conversation_message_id - порядковый номер сообщения в чате |

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

По peer_id беседы и cmid сообщения удаляет реакцию, которую пользователь ранее поставил на это сообщение
