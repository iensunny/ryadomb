# messages.markAsAnsweredConversation

> Источник: [https://dev.vk.ru/ru/method/messages.markAsAnsweredConversation](https://dev.vk.ru/ru/method/messages.markAsAnsweredConversation)
Помечает беседу как отвеченную либо снимает отметку.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | Идентификатор беседы. |
| `answered` | `checkbox` | нет | `1` - беседа отмечена отвеченной, `0` - неотвеченной. |
| `group_id` | `integer` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`
