# Интеграция | Публикации | Загрузка файлов | Обложка для подборки товаров

> Источник: [https://dev.vk.ru/ru/api/upload/main-photo-in-market](https://dev.vk.ru/ru/api/upload/main-photo-in-market)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Обложка для подборки товаров'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка обложки для подборки товаров

Допустимые форматы: JPG, PNG, GIF.

Ограничения:

* Размер не менее 1280&times;720&nbsp;px.
* Сумма высоты и ширины не более 14&nbsp;000 пикселей.
* Файл объёмом не более 50 Мбайт.
* Соотношение сторон не менее 1:20.

## Получение адреса

Чтобы получить адрес для загрузки фотографии подборки, вызовите метод [`photos.getMarketAlbumUploadServer`](method/photos.getMarketAlbumUploadServer).

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.getMarketAlbumUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'group_id=218252175' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.ru\/c855312\/ss2189\/upload.php?_query=eyJhY3QiOiJtYXJrZXRfYWxidW0iLCJnaWQiOjIxODI1MjE3NSwiYWlkIjotNTMsImFwaV91cGxvYWQiOjEsImFwaV93cmFwIjp7InNlcnZlciI6OTk5LCJwaG90byI6IntyZXN1bHR9IiwiZ2lkIjoyMTgyNTIxNzUsImhhc2giOiI5MmMyZDgxMzE3NzgzODMyMTM3NTBjZDYwM2I4N2EzZSJ9LCJtaWQiOjc0Mzc4NDQ3NCwic2VydmVyIjo4NTUzMTIsIl9vcmlnaW4iOiJodHRwczpcL1wvYXBpLnZrLmNvbSIsIl9zaWciOiIxYTUwZTc1OWUzOGUxMjdmOTU2MmFjZDlhNTYyNDNhZCJ9"
  }
}
```

## Передача файла

### Запрос

Чтобы передать файлы, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `file`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'photo=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ>'
```

:::note
**Примечание.** Чтобы отправить корректный запрос, удалите экранирование (символ `\`) из параметра `upload_url`. 
:::

Пример запроса:

```bash
curl -X POST 'https://pu.vk.ru/c855312/ss2189/upload.php?_query=eyJhY3QiOiJtYXJrZXRfYWxidW0iLCJnaWQiOjIxODI1MjE3NSwiYWlkIjotNTMsImFwaV91cGxvYWQiOjEsImFwaV93cmFwIjp7InNlcnZlciI6OTk5LCJwaG90byI6IntyZXN1bHR9IiwiZ2lkIjoyMTgyNTIxNzUsImhhc2giOiI5MmMyZDgxMzE3NzgzODMyMTM3NTBjZDYwM2I4N2EzZSJ9LCJtaWQiOjc0Mzc4NDQ3NCwic2VydmVyIjo4NTUzMTIsIl9vcmlnaW4iOiJodHRwczpcL1wvYXBpLnZrLmNvbSIsIl9zaWciOiIxYTUwZTc1OWUzOGUxMjdmOTU2MmFjZDlhNTYyNDNhZCJ9' \
  -F 'file=@/Users/persik/Downloads/image1.png'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `server` | `integer` | Идентификатор сервера, на который загружена фотография. |
| `photo` | `string` | Информация о загруженной фотографии. |
| `gid` | `integer` | Идентификатор сообщества, фотографию подборки товаров которого нужно загрузить. |
| `hash` | `string` | Хеш фотографии. |

Пример ответа:

```JSON
{
  "server":999,
  "photo":"eyJwaG90byI6IntcInBob3RvXCI6XCJkOGRjYTQ0MzI0OnlcIixcInNpemVzXCI6W10sXCJraWRcIjpcIjYzMzM5YmNlOWFhNzExMGIxMTg3MDlkMjA4ZjRmNjA1XCIsXCJkZWJ1Z1wiOlwieHl5XCIsXCJzaXplczJcIjpbW1wic1wiLFwiY2Q3ZTkyMzhjMmM5ODY3NWQwOTgzOTY5YjEwOTdmNzczOTNkZTM5NjQ5YzIwNGEwZTkyMDI0ZGVcIixcIi0zMDYwNjg5MzU4OTc4MTM0MzU5XCIsMTQ1LDk2XSxbXCJtXCIsXCJlOWFjNGFhZjdjYzBmNmZhMjAwYzEwZmU2Mjk2YWI3NDA5YTcxMjBjNDY5ZTdjZTNlNzE0MWZjMFwiLFwiMTYyODA2MjA2NzIyNzAxNTgyXCIsMjkwLDE5M10sW1wieFwiLFwiMzgxMGJjZGNhZTBiM2ExOTdiNWU4MzdjN2Q2ZWMzN2YwN2JjNDA5N2FhYzY2ZTA3NzliMTNiNmJcIixcIjQ4MDY1MDA5ODEzMDA4NjMzNDRcIiw1ODAsMzg2XSxbXCJ5XCIsXCJmNjc3N2I1ZmIxZTJjZDI1ODNkNjgzOWFmY2NhNThhMWRiZTdmYTkzYTM5NDI4YjcxNDg3ZDMzZFwiLFwiNDE0NTAyNTY5NjgyNjc2NzE4NlwiLDk2Miw2NDBdXSxcInVybHNcIjpbXSxcInVybHMyXCI6W1wielg2U09NTEpoblhRbURscHNRbF9kems5NDVaSndnU2c2U0FrM2dcXFwvcVU1S2hqNF9odFUuanBnXCIsXCI2YXhLcjN6QTl2b2dEQkQtWXBhcmRBbW5FZ3hHbm56ajV4UWZ3QVxcXC9Ebm52NW1GblFnSS5qcGdcIixcIk9CQzgzSzRMT2hsN1hvTjhmVzdEZndlOFFKZXF4bTRIZWJFN2F3XFxcL2NDRUJNeTBmdEVJLmpwZ1wiLFwiOW5kN1g3SGl6U1dEMW9PYV9NcFlvZHZuLXBPamxDaTNGSWZUUFFcXFwvVXJjNTlPZ1doamsuanBnXCJdfSIsImJ3YWN0IjoibWFya2V0X2FsYnVtIiwic2VydmVyIjo4NTUzMTIsIm1pZCI6NzQzNzg0NDc0LCJfc2lnIjoiZjJiMzg4MzAyOTJkZThlOGJkOTZlNjI2ZjJlZmMzNTIifQ",
  "gid":218252175,
  "hash":"92c2d8131778383213750cd603b87a3e"
}
```

## Сохранение результата

Чтобы сохранить главную фотографию, вызовите метод [`photos.saveMarketAlbumPhoto`](method/photos.saveMarketAlbumPhoto) с параметрами, полученными на предыдущем этапе.

:::note
**Примечание.** На данном этапе фотография сохранится в системный альбом. Чтобы опубликовать её, выполните инструкции этапа [Публикация фотографии](#Публикация%20фотографии).
:::

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.saveMarketAlbumPhoto' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'photo=eyJwaG90byI6IntcInBob3RvXCI6XCJkOGRjYTQ0MzI0OnlcIixcInNpemVzXCI6W10sXCJraWRcIjpcIjYzMzM5YmNlOWFhNzExMGIxMTg3MDlkMjA4ZjRmNjA1XCIsXCJkZWJ1Z1wiOlwieHl5XCIsXCJzaXplczJcIjpbW1wic1wiLFwiY2Q3ZTkyMzhjMmM5ODY3NWQwOTgzOTY5YjEwOTdmNzczOTNkZTM5NjQ5YzIwNGEwZTkyMDI0ZGVcIixcIi0zMDYwNjg5MzU4OTc4MTM0MzU5XCIsMTQ1LDk2XSxbXCJtXCIsXCJlOWFjNGFhZjdjYzBmNmZhMjAwYzEwZmU2Mjk2YWI3NDA5YTcxMjBjNDY5ZTdjZTNlNzE0MWZjMFwiLFwiMTYyODA2MjA2NzIyNzAxNTgyXCIsMjkwLDE5M10sW1wieFwiLFwiMzgxMGJjZGNhZTBiM2ExOTdiNWU4MzdjN2Q2ZWMzN2YwN2JjNDA5N2FhYzY2ZTA3NzliMTNiNmJcIixcIjQ4MDY1MDA5ODEzMDA4NjMzNDRcIiw1ODAsMzg2XSxbXCJ5XCIsXCJmNjc3N2I1ZmIxZTJjZDI1ODNkNjgzOWFmY2NhNThhMWRiZTdmYTkzYTM5NDI4YjcxNDg3ZDMzZFwiLFwiNDE0NTAyNTY5NjgyNjc2NzE4NlwiLDk2Miw2NDBdXSxcInVybHNcIjpbXSxcInVybHMyXCI6W1wielg2U09NTEpoblhRbURscHNRbF9kems5NDVaSndnU2c2U0FrM2dcXFwvcVU1S2hqNF9odFUuanBnXCIsXCI2YXhLcjN6QTl2b2dEQkQtWXBhcmRBbW5FZ3hHbm56ajV4UWZ3QVxcXC9Ebm52NW1GblFnSS5qcGdcIixcIk9CQzgzSzRMT2hsN1hvTjhmVzdEZndlOFFKZXF4bTRIZWJFN2F3XFxcL2NDRUJNeTBmdEVJLmpwZ1wiLFwiOW5kN1g3SGl6U1dEMW9PYV9NcFlvZHZuLXBPamxDaTNGSWZUUFFcXFwvVXJjNTlPZ1doamsuanBnXCJdfSIsImJ3YWN0IjoibWFya2V0X2FsYnVtIiwic2VydmVyIjo4NTUzMTIsIm1pZCI6NzQzNzg0NDc0LCJfc2lnIjoiZjJiMzg4MzAyOTJkZThlOGJkOTZlNjI2ZjJlZmMzNTIifQ' \
  -F 'group_id=218252175' \
  -F 'server=999' \
  -F 'hash=92c2d8131778383213750cd603b87a3e' \
  -F 'v=:version'
```

### Ответ

```JSON
{
   "response":[
      {
         "album_id":-53,
         "date":1673950671,
         "id":457239026,
         "owner_id":-218252175,
         "sizes":[
            {
               "height":96,
               "type":"s",
               "width":145,
               "url":"https:\/\/sun9-west.userapi.com\/sun9-2\/s\/v1\/if2\/UA1wwTgNPZhQEobJN1h0hVkCiZFLz3FOsnITvWfpcN2XTUy46H-HvKeWOC8wrMg63GzxvrQ8RyMX6irHudftOj2f.jpg?size=145x96&quality=96&type=none"
            },
            {
               "height":193,
               "type":"m",
               "width":290,
               "url":"https:\/\/sun9-west.userapi.com\/sun9-2\/s\/v1\/if2\/C2SS5to1QEXJJObX-V7M0ybwP4YjAS2kAjxNbBnTB_N0y_0CHHAezXv5OKvFk3w-4h4LyJyDzM3SJy6jozVwB1KM.jpg?size=290x193&quality=96&type=none"
            },
            {
               "height":386,
               "type":"x",
               "width":580,
               "url":"https:\/\/sun9-west.userapi.com\/sun9-2\/s\/v1\/if2\/exEyFacsDve2wtG5Vo5plkIEuze91TB-LQruxwEAqKPiEfb0GQXxeer8YM0X5Pr1n4eSK1A6geCLS1yXyxZ0qojl.jpg?size=580x386&quality=96&type=none"
            },
            {
               "height":640,
               "type":"y",
               "width":962,
               "url":"https:\/\/sun9-west.userapi.com\/sun9-2\/s\/v1\/if2\/4CJocOe2pbHAu2vUP2UdT4Njh7c1TjgXDZVR3guLU2IQh1wJsvt_KjSjd20kbn_l1Cz9BxbGvbOHHVFYMT2eewKU.jpg?size=962x640&quality=96&type=none"
            }
         ],
         "text":"",
         "user_id":100,
         "has_tags":false
      }
   ]
}
```

## Публикация фотографии

Чтобы прикрепить фотографию к подборке товаров, вызовите метод [`market.addAlbum`](method/market.addAlbum) или [`market.editAlbum`](method/market.editAlbum). В поле `photo_id` укажите идентификатор фотографии.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/market.editAlbum' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'owner_id=-218252175' \
  -F 'album_id=1' \
  -F 'title=Тестирование подборки' \
  -F 'photo_id=457239026' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":1
}
```
