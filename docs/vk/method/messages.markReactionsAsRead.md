# messages.markReactionsAsRead

> Источник: [https://dev.vk.ru/ru/method/messages.markReactionsAsRead](https://dev.vk.ru/ru/method/messages.markReactionsAsRead)
Отмечает прочитанными все реакции на сообщениях с заданными cmids

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | peer_id переписки: <br>* user_id &mdash; для личных чатов. <br>* group_id &mdash; для чатов с сообществом.<br>* 2&nbsp;000&nbsp;000&nbsp;000 + id_чата &mdash; для чатов. |
| `cmids` | `integer` | нет | conversation_message_id сообщений, для которого нужно отметить реакции прочитанными |

## Права доступа

`messages_ex`

## Типы ключа

`is_standalone`
