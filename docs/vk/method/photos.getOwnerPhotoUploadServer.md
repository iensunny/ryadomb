# photos.getOwnerPhotoUploadServer

> Источник: [https://dev.vk.ru/ru/method/photos.getOwnerPhotoUploadServer](https://dev.vk.ru/ru/method/photos.getOwnerPhotoUploadServer)
Метод получает адрес сервера для [загрузки главной фотографии](api/upload/main-photo-in-profile) на страницу пользователя или сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | нет | **Необязательный параметр.** Идентификатор пользователя или сообщества. Идентификатор сообщества должен начинаться со знака&nbsp;`-`. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить фотографию. |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.com\/c521232\/ss2215\/upload.php?_query=eyJhY3QiOiJvd25lcl9waG90byIsInNhdmUiOjEsImFwaV93cmFwIjp7InNlcnZlciI6OTk5LCJwaG90byI6IntyZXN1bHR9IiwibWlkIjo3NDM3ODQ0NzQsImhhc2giOiI3NDQ4ZjkzZjQwNWRmZDVjNDQ0ZjVkNGFhYmI4NDk0MiIsIm1lc3NhZ2VfY29kZSI6MiwicHJvZmlsZV9haWQiOi02fSwib2lkIjo3NDM3ODQ0NzQsIm1pZCI6NzQzNzg0NDc0LCJzZXJ2ZXIiOjUyMTIzMiwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6IjhhNmFhYzQ2Y2FkN2FhYTlmMTBjYTVjNzY1M2VlNjgyIn0"
  }
}
```

## Ошибки

- 703
- 13000
