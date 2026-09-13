# photos.getOwnerCoverPhotoUploadServer

> Источник: [https://dev.vk.ru/ru/method/photos.getOwnerCoverPhotoUploadServer](https://dev.vk.ru/ru/method/photos.getOwnerCoverPhotoUploadServer)
Метод получает адрес сервера для [загрузки обложки](api/upload/main-photo-in-group) сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | **Обязательный параметр.** Идентификатор сообщества. |
| `crop_x` | `positive` | нет | **Необязательный параметр.** Координата `X` верхнего левого угла для обрезки фотографии. |
| `crop_y` | `positive` | нет | **Необязательный параметр.** Координата `Y` верхнего левого угла для обрезки фотографии. |
| `crop_x2` | `positive` | нет | **Необязательный параметр.** Координата `X` нижнего правого угла для обрезки изображения. |
| `crop_y2` | `positive` | нет | **Необязательный параметр.** Координата `Y` нижнего правого угла для обрезки изображения. |

## Результат

Метод возвращает объект. Поле объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить фотографию. |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.com\/c534336\/ss2248\/upload.php?_query=eyJhY3QiOiJvd25lcl9jb3ZlciIsIm9pZCI6LTIxODI1MjE3NSwiYXBpIjp0cnVlLCJhcGlfd3JhcCI6eyJoYXNoIjoiMzhmYTEwMThiNGI5ODUxYzZjIiwicGhvdG8iOiJ7cmVzdWx0fSJ9LCJmb3JjZV9taW5fc2l6ZXMiOmZhbHNlLCJtaWQiOjc0Mzc4NDQ3NCwic2VydmVyIjo1MzQzMzYsIl9vcmlnaW4iOiJodHRwczpcL1wvYXBpLnZrLmNvbSIsIl9zaWciOiJkNWU5NjQ1MDhiZTM3YWEwMDUyZmJmZTljMWRhZjhjYyJ9&_crop=0,0,911,911"
  }
}
```

## Права доступа

`photos`

## Типы ключа

`group_access`

## Ошибки

- 703
- 13000
