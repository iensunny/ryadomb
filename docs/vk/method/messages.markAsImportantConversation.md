# messages.markAsImportantConversation

> Источник: [https://dev.vk.ru/ru/method/messages.markAsImportantConversation](https://dev.vk.ru/ru/method/messages.markAsImportantConversation)
Помечает беседу как важную либо снимает отметку.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | Идентификатор беседы. |
| `important` | `checkbox` | нет | `1`, если сообщения необходимо пометить, как важные;<br>`0`, если необходимо снять пометку. |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`
