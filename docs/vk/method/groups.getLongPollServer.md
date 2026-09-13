# groups.getLongPollServer

> Источник: [https://dev.vk.ru/ru/method/groups.getLongPollServer](https://dev.vk.ru/ru/method/groups.getLongPollServer)
Возвращает данные для подключения к [Bots Longpoll API](api/bots-long-poll/getting-started).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |

> **Обратите внимание.** При получении [ключа доступа сообщества](api/access-token/getting-started#Ключ%20доступа%20сообщества) в параметре `scope` укажите право доступа `manage`. Ключи доступа сообщества, не включающие этот `scope`, использовать для вызова метода не получится.

## Результат

Возвращает объект, который содержит следующие поля:
* `key` (`string`) — ключ;
* `server` (`string`) — URL сервера;
* `ts` (`string`) — timestamp.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`
