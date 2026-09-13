# video.deleteAlbum

> Источник: [https://dev.vk.ru/ru/method/video.deleteAlbum](https://dev.vk.ru/ru/method/video.deleteAlbum)
Удаляет альбом видеозаписей.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | нет | Идентификатор сообщества (если альбом, который необходимо удалить, принадлежит сообществу). |
| `album_id` | `positive` | да | Идентификатор альбома. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`video`

## Ошибки

- 204

## Связанные методы

- [video.addAlbum](method/video.addAlbum)
- [video.editAlbum](method/video.editAlbum)
