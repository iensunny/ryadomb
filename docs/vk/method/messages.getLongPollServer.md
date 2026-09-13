# messages.getLongPollServer

> Источник: [https://dev.vk.ru/ru/method/messages.getLongPollServer](https://dev.vk.ru/ru/method/messages.getLongPollServer)
Возвращает данные, необходимые для [подключения к Long Poll серверу](api/user-long-poll/getting-started).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `need_pts` | `checkbox` | нет | `1` — возвращать поле `pts`, необходимое для работы метода [`messages.getLongPollHistory`](method/messages.getLongPollHistory) |
| `group_id` | `integer` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |
| `lp_version` | `positive` | нет | Версия для подключения к Long Poll. Актуальная версия: `3`.<br>Подробную информацию об изменениях в версиях Вы найдёте [на этой странице](api/user-long-poll/getting-started). |

## Результат

Возвращает объект, который содержит поля `key`, `server`, `ts`. 
Используя эти данные, Вы можете подключиться к серверу быстрых сообщений для мгновенного получения приходящих сообщений и других событий.

[Формат взаимодействия с LongPoll сервером](api/user-long-poll/getting-started).

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`
