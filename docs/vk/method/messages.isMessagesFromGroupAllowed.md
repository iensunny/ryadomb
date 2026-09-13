# messages.isMessagesFromGroupAllowed

> Источник: [https://dev.vk.ru/ru/method/messages.isMessagesFromGroupAllowed](https://dev.vk.ru/ru/method/messages.isMessagesFromGroupAllowed)
Возвращает информацию о том, разрешена ли отправка сообщений от сообщества пользователю.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `user_id` | `positive` | да | Идентификатор пользователя. |

## Результат

Возвращает объект с единственным полем `is_allowed` (`integer`). Если отправка сообщений разрешена, поле содержит `1`, иначе — `0`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 943
