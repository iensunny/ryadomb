# video.getLongPollServer

> Источник: [https://dev.vk.ru/ru/method/video.getLongPollServer](https://dev.vk.ru/ru/method/video.getLongPollServer)
Позволяет получать данные о новых событиях трансляции в режиме реального времени.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | нет | Идентификатор пользователя или сообщества, которому принадлежит трансляция. |
| `video_id` | `positive` | да | Идентификатор трансляции. |

## Права доступа

`video`

## Ошибки

- 32
