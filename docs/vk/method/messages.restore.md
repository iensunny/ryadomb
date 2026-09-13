# messages.restore

> Источник: [https://dev.vk.ru/ru/method/messages.restore](https://dev.vk.ru/ru/method/messages.restore)
Восстанавливает удаленное сообщение.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `message_id` | `positive` | да | Идентификатор сообщения, которое нужно восстановить. |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Связанные методы

- [messages.delete](method/messages.delete)
