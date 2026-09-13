# video.editAlbum

> Источник: [https://dev.vk.ru/ru/method/video.editAlbum](https://dev.vk.ru/ru/method/video.editAlbum)
Редактирует альбом с видео.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | нет | Идентификатор сообщества (если нужно отредактировать альбом, принадлежащий сообществу). |
| `album_id` | `positive` | да | Идентификатор альбома. |
| `title` | `string` | нет | Новое название для альбома. |
| `privacy` | `string` | нет | Уровень доступа к альбому в [специальном формате](reference/objects/privacy).<br>Приватность доступна для альбомов с видео в профиле пользователя. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`video`

## Ошибки

- 204

## Связанные методы

- [video.addAlbum](method/video.addAlbum)
- [video.deleteAlbum](method/video.deleteAlbum)
