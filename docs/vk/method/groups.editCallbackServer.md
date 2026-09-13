# groups.editCallbackServer

> Источник: [https://dev.vk.ru/ru/method/groups.editCallbackServer](https://dev.vk.ru/ru/method/groups.editCallbackServer)
Редактирует данные сервера для [Callback API](api/callback/getting-started) в сообществе.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `server_id` | `positive` | да | Идентификатор сервера, данные которого нужно отредактировать. |
| `url` | `string` | да | Новый URL сервера. |
| `title` | `string` | да | Новое название сервера. |
| `secret_key` | `string` | нет | Новый секретный ключ сервера. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 104
