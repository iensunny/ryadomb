# photos.getWallUploadServer

> Источник: [https://dev.vk.ru/ru/method/photos.getWallUploadServer](https://dev.vk.ru/ru/method/photos.getWallUploadServer)
Метод получает адрес сервера для [загрузки фотографии на стену](api/upload/wall-photo) пользователя или сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | нет | **Необязательный параметр.** Идентификатор сообщества, на стену которого нужно загрузить фотографии (без знака `-`). |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `album_id` | `integer` | Идентификатор альбома, в который нужно загрузить фотографии. |
| `upload_url` | `string` | Адрес, по которому нужно загрузить фотографии. |
| `user_id` | `integer` | Идентификатор пользователя или сообщества, на стену которого будут загружены фотографии. |

Пример ответа:

```JSON
{
  "response":{
    "album_id":-14
    "upload_url":"https://pu.vk.com/c856312/ss2152/upload.php?act=do_add&mid=743784474&aid=-14&gid=0&hash=bd9a7f37b8af6c5e486a3762a4c7b797&rhash=f4c2595ded6f9b3e8954567d4f8eae57&swfupload=1&api=1&wallphoto=1"
    "user_id":743784474
  }
}
```

## Права доступа

`photos`
