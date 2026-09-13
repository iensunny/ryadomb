# video.deleteComment

> Источник: [https://dev.vk.ru/ru/method/video.deleteComment](https://dev.vk.ru/ru/method/video.deleteComment)
Удаляет комментарий к видеозаписи.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | нет | Идентификатор пользователя или сообщества, которому принадлежит видеозапись. |
| `comment_id` | `integer` | да | Идентификатор комментария. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`video`

## Связанные методы

- [video.createComment](method/video.createComment)
- [video.restoreComment](method/video.restoreComment)
- [video.editComment](method/video.editComment)
