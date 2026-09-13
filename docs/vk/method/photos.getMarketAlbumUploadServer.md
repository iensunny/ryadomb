# photos.getMarketAlbumUploadServer

> Источник: [https://dev.vk.ru/ru/method/photos.getMarketAlbumUploadServer](https://dev.vk.ru/ru/method/photos.getMarketAlbumUploadServer)
Метод получает адрес сервера для [загрузки фотографии подборки товаров](api/upload/main-photo-in-market) в сообществе.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | **Обязательный параметр.** Идентификатор сообщества, для которого необходимо загрузить фотографию подборки товаров. |

Минимальный размер фотографии — 1280x720 пикселей.

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить фотографию подборки товаров. |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.com\/c855312\/ss2189\/upload.php?_query=eyJhY3QiOiJtYXJrZXRfYWxidW0iLCJnaWQiOjIxODI1MjE3NSwiYWlkIjotNTMsImFwaV91cGxvYWQiOjEsImFwaV93cmFwIjp7InNlcnZlciI6OTk5LCJwaG90byI6IntyZXN1bHR9IiwiZ2lkIjoyMTgyNTIxNzUsImhhc2giOiI5MmMyZDgxMzE3NzgzODMyMTM3NTBjZDYwM2I4N2EzZSJ9LCJtaWQiOjc0Mzc4NDQ3NCwic2VydmVyIjo4NTUzMTIsIl9vcmlnaW4iOiJodHRwczpcL1wvYXBpLnZrLmNvbSIsIl9zaWciOiIxYTUwZTc1OWUzOGUxMjdmOTU2MmFjZDlhNTYyNDNhZCJ9"
  }
}
```

## Права доступа

`market`, `photos`

## Ошибки

- 1438
