# groups.deleteCallbackServer

> Источник: [https://dev.vk.ru/ru/method/groups.deleteCallbackServer](https://dev.vk.ru/ru/method/groups.deleteCallbackServer)
Удаляет сервер для [Callback API](api/callback/getting-started) из сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `server_id` | `positive` | да | Идентификатор сервера, который нужно удалить. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 104
