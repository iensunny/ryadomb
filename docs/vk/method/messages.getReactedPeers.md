# messages.getReactedPeers

> Источник: [https://dev.vk.ru/ru/method/messages.getReactedPeers](https://dev.vk.ru/ru/method/messages.getReactedPeers)
Получить список пользователей и сообществ, которые поставили реакцию на сообщение

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | peer_id переписки: <br>* user_id &mdash; для личных чатов. <br>* group_id &mdash; для чатов с сообществом.<br>* 2&nbsp;000&nbsp;000&nbsp;000 + id_чата &mdash; для чатов. |
| `cmid` | `positive` | да | conversation_message_id сообщения, для которого нужно вернуть список отреагировавших |
| `reaction_id` | `positive` | нет | Если указать, будут возвращены только те пользователи, которые поставили эту реакцию |

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 1009
- 995
