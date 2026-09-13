# video.addAlbum

> Источник: [https://dev.vk.ru/ru/method/video.addAlbum](https://dev.vk.ru/ru/method/video.addAlbum)
Создает пустой альбом видеозаписей.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | нет | Идентификатор сообщества (если необходимо создать альбом в сообществе). |
| `title` | `string` | нет | Название альбома. |
| `privacy` | `string` | нет | Настройки доступа к альбому в [специальном формате](reference/objects/privacy).<br>Приватность доступна для альбомов с видео в профиле пользователя. |

## Результат

После успешного выполнения возвращает  идентификатор созданного альбома в поле `album_id`.

## Права доступа

`video`

## Ошибки

- 204
- 302

## Связанные методы

- [video.editAlbum](method/video.editAlbum)
- [video.deleteAlbum](method/video.deleteAlbum)
- [video.addToAlbum](method/video.addToAlbum)
