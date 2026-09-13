# groups.addCallbackServer

> Источник: [https://dev.vk.ru/ru/method/groups.addCallbackServer](https://dev.vk.ru/ru/method/groups.addCallbackServer)
Добавляет сервер для [Callback API](api/callback/getting-started) в сообщество.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `url` | `string` | да | URL сервера. |
| `title` | `string` | да | Название сервера. |
| `secret_key` | `string` | нет | Секретный ключ. |

## Результат

После успешного выполнения возвращает идентификатор добавленного сервера в поле `server_id` (`integer`).

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 2000
