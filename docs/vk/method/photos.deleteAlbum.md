# photos.deleteAlbum

> Источник: [https://dev.vk.ru/ru/method/photos.deleteAlbum](https://dev.vk.ru/ru/method/photos.deleteAlbum)
Удаляет указанный альбом для фотографий у текущего пользователя

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `album_id` | `positive` | да | Идентификатор альбома. |
| `group_id` | `positive` | нет | Идентификатор сообщества, в котором размещен альбом. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`photos_ex`

## Типы ключа

`is_standalone`

## Ошибки

- 114

## Связанные методы

- [photos.createAlbum](method/photos.createAlbum)
- [photos.editAlbum](method/photos.editAlbum)
