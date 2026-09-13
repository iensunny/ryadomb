# Интеграция | Публикации | Загрузка файлов | Обложка сообщества

> Источник: [https://dev.vk.ru/ru/api/upload/main-photo-in-group](https://dev.vk.ru/ru/api/upload/main-photo-in-group)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Обложка сообщества'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка обложки сообщества

Допустимые форматы: JPG, PNG, GIF.

Ограничения:

* Минимальный размер фотографии — 795&times;265&nbsp;px.
* Рекомендуемый размер — 1590&times;530&nbsp;px.
* Сумма высоты и ширины не более 14&nbsp;000 пикселей.
* Файл объёмом не более 50 Мбайт.
* Соотношение сторон не менее 1:20.
* В сутки можно загрузить не более 1&nbsp;500 обложек.

## Получение адреса

Чтобы получить адрес для загрузки фотографии, вызовите метод [`photos.getOwnerCoverPhotoUploadServer`](photos.getOwnerCoverPhotoUploadServer).

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.getOwnerCoverPhotoUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'group_id=218252175' \
  -F 'crop_x=0' \
  -F 'crop_y=0' \
  -F 'crop_x2=911' \
  -F 'crop_y2=911' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.ru\/c534336\/ss2248\/upload.php?_query=eyJhY3QiOiJvd25lcl9jb3ZlciIsIm9pZCI6LTIxODI1MjE3NSwiYXBpIjp0cnVlLCJhcGlfd3JhcCI6eyJoYXNoIjoiMzhmYTEwMThiNGI5ODUxYzZjIiwicGhvdG8iOiJ7cmVzdWx0fSJ9LCJmb3JjZV9taW5fc2l6ZXMiOmZhbHNlLCJtaWQiOjc0Mzc4NDQ3NCwic2VydmVyIjo1MzQzMzYsIl9vcmlnaW4iOiJodHRwczpcL1wvYXBpLnZrLmNvbSIsIl9zaWciOiJkNWU5NjQ1MDhiZTM3YWEwMDUyZmJmZTljMWRhZjhjYyJ9&_crop=0,0,911,911"
  }
}
```

## Передача файла

### Запрос

Чтобы передать файл, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `photo`.
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
curl -X POST 'https://pu.vk.ru/c534336/ss2248/upload.php?_query=eyJhY3QiOiJvd25lcl9jb3ZlciIsIm9pZCI6LTIxODI1MjE3NSwiYXBpIjp0cnVlLCJhcGlfd3JhcCI6eyJoYXNoIjoiMzhmYTEwMThiNGI5ODUxYzZjIiwicGhvdG8iOiJ7cmVzdWx0fSJ9LCJmb3JjZV9taW5fc2l6ZXMiOmZhbHNlLCJtaWQiOjc0Mzc4NDQ3NCwic2VydmVyIjo1MzQzMzYsIl9vcmlnaW4iOiJodHRwczpcL1wvYXBpLnZrLmNvbSIsIl9zaWciOiJkNWU5NjQ1MDhiZTM3YWEwMDUyZmJmZTljMWRhZjhjYyJ9&_crop=0,0,911,911' \
  -F 'photo=@/Users/persik/Downloads/document.pdf'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `hash` | `string` | Хеш фотографии. |
| `photo` | `string` | Информация о загруженной фотографии. |

Пример ответа:

```JSON
{
   "hash":"38fa1018b4b9851c6c",
   "photo":"eyJvaWQiOi0yMTgyNTIxNzUsImRhdGEiOlsie1wicGhvdG9cIjpcIjVlYjFhYWUyZWN4XCIsXCJzaXplc1wiOltdLFwic2l6ZXMyXCI6W1tcInhcIixcIjI3ZDNiNWFiMDY5NGQ0MmZlMmM4NWQ2MTQ0ODAzNzg2YmQyM2U2ZjIyZmI3MDFmYTUwZGUyZjBjXCIsXCIxMDE5MzQzMDA2Njc0NTA3MTE2XCIsOTExLDYwNl0sW1wieVwiLFwiNzEyMmIzNzIyYWQzZTBiNWMzYjFmNjFkYWRlYjdkNmU4ZGEwYTI4NzllNTIwYTJlN2VjZGU1MThcIixcIi03NTA1NjkyMDk1MTUwODU0NTM0XCIsMTgyMiwxMjEzXSxbXCJvXCIsXCJkOTcwOTQ1NDY0NzM0MWIyNzdiYzk0ZTk2NWVjMzYwNzRjNzQ3ZjkyZDIwOTgwM2UwYzk5NGExYVwiLFwiLTgyNjUzNDY3OTQ0MTc1MTcwMDNcIiwyNTYwLDE3MDRdLFtcImJcIixcIjk5NGRlYTE5ZjU1YTM5ZGJmMDcxMWQyOTBmYmEzN2FkYjM2YzExYWE2MGVjMzY5MTk3ZWYwMTc3XCIsXCItMTQ2MDIxNjQyNzg1MTQwMjAyN1wiLDE4MjIsNzI4XSxbXCJjXCIsXCIwNzY5MTZmZmEyNTU4ZmMxZDc2M2U4YjdhY2RkYjYwMjgzYzRlMTY1Y2MwNTJiYjRlMTI0MjNjNlwiLFwiLTEwODA1NTY2NDIxNjE0MTQ4OFwiLDEwODAsMzYwXSxbXCJhXCIsXCJkY2RhZjVmMTAwMTEzOWU4NDFlYWI1NmUxYjM1OGE1YzY3MDYwMzgyNDYwYWM1ZWZkNDZhY2UxYVwiLFwiMTgxNzI2MzEyMTQ3MDU0MzE3OVwiLDkxMSwzNjRdLFtcImRcIixcIjk4M2E5ZTBkZDhiM2E4MGZlM2ZhMWMxNTY5N2IwN2M5YTQ5ZjJkOWEyMWQ1NjcwNWMzMGY0NzY4XCIsXCItODkyMTAzMjkyOTkwNDI1MDc5NVwiLDQwMCwxMzRdLFtcImVcIixcIjBhOWMwOTBlZDQwMDJkNGZjYmNmOTc5ZWJhY2MxNDAxODcwYjJhNTcxZGYwOTgzYjE1Njg1OTc3XCIsXCI3ODIzNTA3ODA2ODE1Njk2OTU3XCIsMjAwLDY3XV0sXCJ1cmxzXCI6W10sXCJ1cmxzMlwiOltcIm1VM3FHZlZhT2R2d2NSMHBEN28zcmJOc0VhcGc3RGFSbC04QmR3XFxcLzFUUzZPdVZFdk9zLmpwZ1wiLFwiQjJrV182SlZqOEhYWS1pM3JOMjJBb1BFNFdYTUJTdTA0U1FqeGdcXFwvVUpGdEp2SWJnUDQuanBnXCIsXCIzTnIxOFFBUk9laEI2clZ1R3pXS1hHY0dBNEpHQ3NYdjFHck9HZ1xcXC9TMVdyUWk0M09Cay5qcGdcIixcIm1EcWVEZGl6cUFfai1od1ZhWHNIeWFTZkxab2gxV2NGd3c5SGFBXFxcL1ZiQi0zOUFmTW9RLmpwZ1wiLFwiQ3B3SkR0UUFMVV9MejVlZXVzd1VBWWNMS2xjZDhKZzdGV2haZHdcXFwvUGJpLVN1YXVrbXcuanBnXCJdLFwic2VydmVyXCI6NTM0MzM2LFwia2lkXCI6XCI2MzMzOWJjZTlhYTcxMTBiMTE4NzA5ZDIwOGY0ZjYwNVwifSIsIjAsMCw5MTEsMzY0IiwwLCIyNTYwLDE3MDQiLCI5MTEsNjA2Il0sImJ3YWN0Ijoib3duZXJfY292ZXIiLCJzZXJ2ZXIiOjUzNDMzNiwibWlkIjo3NDM3ODQ0NzQsIl9zaWciOiIwY2MwNGI5YzQyYzczOWZmZmY0YjY5Njk4YzU5Yjc5YSJ9"
}
```

## Сохранение результата

Чтобы сохранить обложку сообщества, вызовите метод [`photos.saveOwnerCoverPhoto`](method/photos.saveOwnerCoverPhoto) с параметрами, полученными на предыдущем этапе.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.saveOwnerCoverPhoto' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'photo=eyJvaWQiOi0yMTgyNTIxNzUsImRhdGEiOlsie1wicGhvdG9cIjpcIjVlYjFhYWUyZWN4XCIsXCJzaXplc1wiOltdLFwic2l6ZXMyXCI6W1tcInhcIixcIjI3ZDNiNWFiMDY5NGQ0MmZlMmM4NWQ2MTQ0ODAzNzg2YmQyM2U2ZjIyZmI3MDFmYTUwZGUyZjBjXCIsXCIxMDE5MzQzMDA2Njc0NTA3MTE2XCIsOTExLDYwNl0sW1wieVwiLFwiNzEyMmIzNzIyYWQzZTBiNWMzYjFmNjFkYWRlYjdkNmU4ZGEwYTI4NzllNTIwYTJlN2VjZGU1MThcIixcIi03NTA1NjkyMDk1MTUwODU0NTM0XCIsMTgyMiwxMjEzXSxbXCJvXCIsXCJkOTcwOTQ1NDY0NzM0MWIyNzdiYzk0ZTk2NWVjMzYwNzRjNzQ3ZjkyZDIwOTgwM2UwYzk5NGExYVwiLFwiLTgyNjUzNDY3OTQ0MTc1MTcwMDNcIiwyNTYwLDE3MDRdLFtcImJcIixcIjk5NGRlYTE5ZjU1YTM5ZGJmMDcxMWQyOTBmYmEzN2FkYjM2YzExYWE2MGVjMzY5MTk3ZWYwMTc3XCIsXCItMTQ2MDIxNjQyNzg1MTQwMjAyN1wiLDE4MjIsNzI4XSxbXCJjXCIsXCIwNzY5MTZmZmEyNTU4ZmMxZDc2M2U4YjdhY2RkYjYwMjgzYzRlMTY1Y2MwNTJiYjRlMTI0MjNjNlwiLFwiLTEwODA1NTY2NDIxNjE0MTQ4OFwiLDEwODAsMzYwXSxbXCJhXCIsXCJkY2RhZjVmMTAwMTEzOWU4NDFlYWI1NmUxYjM1OGE1YzY3MDYwMzgyNDYwYWM1ZWZkNDZhY2UxYVwiLFwiMTgxNzI2MzEyMTQ3MDU0MzE3OVwiLDkxMSwzNjRdLFtcImRcIixcIjk4M2E5ZTBkZDhiM2E4MGZlM2ZhMWMxNTY5N2IwN2M5YTQ5ZjJkOWEyMWQ1NjcwNWMzMGY0NzY4XCIsXCItODkyMTAzMjkyOTkwNDI1MDc5NVwiLDQwMCwxMzRdLFtcImVcIixcIjBhOWMwOTBlZDQwMDJkNGZjYmNmOTc5ZWJhY2MxNDAxODcwYjJhNTcxZGYwOTgzYjE1Njg1OTc3XCIsXCI3ODIzNTA3ODA2ODE1Njk2OTU3XCIsMjAwLDY3XV0sXCJ1cmxzXCI6W10sXCJ1cmxzMlwiOltcIm1VM3FHZlZhT2R2d2NSMHBEN28zcmJOc0VhcGc3RGFSbC04QmR3XFxcLzFUUzZPdVZFdk9zLmpwZ1wiLFwiQjJrV182SlZqOEhYWS1pM3JOMjJBb1BFNFdYTUJTdTA0U1FqeGdcXFwvVUpGdEp2SWJnUDQuanBnXCIsXCIzTnIxOFFBUk9laEI2clZ1R3pXS1hHY0dBNEpHQ3NYdjFHck9HZ1xcXC9TMVdyUWk0M09Cay5qcGdcIixcIm1EcWVEZGl6cUFfai1od1ZhWHNIeWFTZkxab2gxV2NGd3c5SGFBXFxcL1ZiQi0zOUFmTW9RLmpwZ1wiLFwiQ3B3SkR0UUFMVV9MejVlZXVzd1VBWWNMS2xjZDhKZzdGV2haZHdcXFwvUGJpLVN1YXVrbXcuanBnXCJdLFwic2VydmVyXCI6NTM0MzM2LFwia2lkXCI6XCI2MzMzOWJjZTlhYTcxMTBiMTE4NzA5ZDIwOGY0ZjYwNVwifSIsIjAsMCw5MTEsMzY0IiwwLCIyNTYwLDE3MDQiLCI5MTEsNjA2Il0sImJ3YWN0Ijoib3duZXJfY292ZXIiLCJzZXJ2ZXIiOjUzNDMzNiwibWlkIjo3NDM3ODQ0NzQsIl9zaWciOiIwY2MwNGI5YzQyYzczOWZmZmY0YjY5Njk4YzU5Yjc5YSJ9' \
  -F 'hash=38fa1018b4b9851c6c' \
  -F 'v=:version'
```

### Ответ

```JSON
{
   "response":{
      "images":[
         {
            "url":"https:\/\/sun9-east.userapi.com\/sun9-26\/s\/v1\/if2\/Mni2GyylYCr29hIht90Hm-wORG-kqQDYI5xHCuMzaQPsboFbXyy0KMpx5mAOjit0Vii8v3c8kv4Mn5XnVVr9XGLr.jpg?size=200x80&quality=95&crop=0,0,911,364&type=cover_group",
            "width":200,
            "height":67
         },
         {
            "url":"https:\/\/sun9-east.userapi.com\/sun9-26\/s\/v1\/if2\/kAbza3O55NCG1z85nhJh9cf1J4VhgPQG9kpWIaVyy5iPmhj4MW53T6B6F7LcsqA4HI9FY_I8DXDLHWbMzUnZ0fU2.jpg?size=400x160&quality=95&crop=0,0,911,364&type=cover_group",
            "width":400,
            "height":134
         },
         {
            "url":"https:\/\/sun9-east.userapi.com\/sun9-26\/s\/v1\/if2\/jISd7b26ICGB-d2zwCICktzIqwoSssjmxANNtDnn7RTK3uxlNC37Ys4nHw0EuSTMBsb1lOK3DwFjpAuWbRo4YiKX.jpg?size=911x364&quality=95&crop=0,0,911,364&type=cover_group",
            "width":795,
            "height":265
         },
         {
            "url":"https:\/\/sun9-east.userapi.com\/sun9-26\/s\/v1\/if2\/rpm-mQ-FVmdJyNIFIhGp1tSd31cN2FD_gQuf6g1KRwYEcSs8yuU-peJnutIwZofCdre2vdmBODtER44z4WqaGsd8.jpg?size=1080x432&quality=95&crop=0,0,911,364&type=cover_group",
            "width":1080,
            "height":360
         },
         {
            "url":"https:\/\/sun9-east.userapi.com\/sun9-26\/s\/v1\/if2\/-e-NafJqKpegWOE1AbemQpCT2IuOf-disLL8AWLEhWWqMOM0Xcou3pyS8Dvc0pAH4hvkjbJ74l9iLfR0-Bt71Lwl.jpg?size=1920x768&quality=95&crop=0,0,911,364&type=cover_group",
            "width":1590,
            "height":530
         }
      ]
   }
}
```
