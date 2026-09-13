# messages.getByConversationMessageId

> Источник: [https://dev.vk.ru/ru/method/messages.getByConversationMessageId](https://dev.vk.ru/ru/method/messages.getByConversationMessageId)
Возвращает сообщения по conversation_message_id.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | Идентификатор назначения.<br>Для пользователя:<br>* `id`  пользователя.<br>Для групповой беседы:<br>* `2000000000` + `id` беседы.<br>Для сообщества:<br>* `-id` сообщества. |
| `conversation_message_ids` | `integer` | да | Идентификаторы сообщений. Максимум **100** идентификаторов. |
| `extended` | `checkbox` | нет | `1` — возвращать дополнительные поля. |
| `fields` | `string` | нет | Дополнительные поля [пользователей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть в ответе. |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив объектов, описывающих  [сообщения](reference/objects/message), в поле `items`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 1017
