# groups.getCallbackConfirmationCode

> Источник: [https://dev.vk.ru/ru/method/groups.getCallbackConfirmationCode](https://dev.vk.ru/ru/method/groups.getCallbackConfirmationCode)
Позволяет получить строку, необходимую для подтверждения адреса сервера в [Callback API](api/callback/getting-started).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |

## Результат

Возвращает строку, которую необходимо использовать в качестве ответа на уведомление с типом «confirmation» для подтверждения адреса сервера в Callback API.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`
