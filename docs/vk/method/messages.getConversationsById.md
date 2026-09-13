# messages.getConversationsById

> Источник: [https://dev.vk.ru/ru/method/messages.getConversationsById](https://dev.vk.ru/ru/method/messages.getConversationsById)
Позволяет получить беседу по её идентификатору.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_ids` | `integer` | да | Идентификаторы назначений, разделённые запятой.<br>Для пользователя:<br>* `id` пользователя.<br>Для групповой беседы:<br>* `2000000000` + `id` беседы.<br>Для сообщества:<br>* `-id` сообщества.<br>Максимум — 100 идентификаторов. |
| `extended` | `checkbox` | нет | `1` — возвращать дополнительные поля. |
| `fields` | `string` | нет | Дополнительные поля [пользователей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть в ответе. |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

Возвращает общее число результатов в поле `count` (`integer`) и массив объектов [бесед](reference/objects/conversation) в поле `items`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 927
- 917
- 936
- 1017
