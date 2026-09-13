# Интеграция | Публикации | Загрузка файлов | Видеозапись в профиле

> Источник: [https://dev.vk.ru/ru/api/upload/video-in-profile](https://dev.vk.ru/ru/api/upload/video-in-profile)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Видеозапись в профиле'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка видеозаписи в профиль

Допустимые форматы: AVI, MP4, 3GP, MPEG, MOV, MP3, FLV, WMV.

#### Получение адреса

Чтобы получить адрес для загрузки видеофайла, вызовите метод [`video.save`](method/video.save).

:::note
**Примечание.** Если вы хотите загрузить видеофайл с внешнего видеохостинга, передайте адрес страницы с видео в параметре `link`. Достаточно просто обратиться по адресу `upload_url`.
:::

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/video.save' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "access_key":"494cb27d4cde22a64d",
    "description":"",
    "owner_id":743784474,
    "title":"Без названия",
    "upload_url":"https:\/\/ovu.mycdn.me\/upload.do?sig=19da50bad37997e70b47ee8fc7cf7d46e0c3bcda&expires=1674180630536&clientType=14&appId=512000384397&id=4470582224922&userId=0&cid=3469028887066&vkOwnerId=743784474&vkVideoId=456239017&vkUserId=743784474&vkVideoHash=10cfb5cdb16d08f957&saveOriginal=1",
    "video_id":456239017
  }
}
```

#### Передача файла

### Запрос

Чтобы передать файлы, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `video_file`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'video_file=@<ПОЛНЫЙ_ПУТЬ_К_ВИДЕОЗАПИСИ>'
```

:::note
**Примечание.** Чтобы отправить корректный запрос, удалите экранирование (символ `\`) из параметра `upload_url`. 
:::

Пример запроса:

```bash
curl -X POST 'https://ovu.mycdn.me/upload.do?sig=19da50bad37997e70b47ee8fc7cf7d46e0c3bcda&expires=1674180630536&clientType=14&appId=512000384397&id=4470582224922&userId=0&cid=3469028887066&vkOwnerId=743784474&vkVideoId=456239017&vkUserId=743784474&vkVideoHash=10cfb5cdb16d08f957&saveOriginal=1' \
  -F 'video_file=@/Users/persik/Downloads/video.mp4'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `video_hash` | `string` | Хеш видеозаписи. |
| `size` | `integer` | Размер видеозаписи в байтах. |
| `direct_link` | `string` | Прямая ссылка на видеозапись. |
| `owner_id` | `integer` | Идентификатор владельца видеозаписи. |
| `video_id` | `integer` | Идентификатор видеозаписи. |

Пример ответа:

```JSON
{
  "video_hash":"10cfb5cdb16d08f957",
  "size":5066371,
  "direct_link":"https://vkvd54.mycdn.me/?expires=1674296195043&srcIp=188.19.152.175&pr=40&srcAg=UNKNOWN&ms=45.136.22.144&type=4&sig=czidIRH_XCM&ct=27&urls=45.136.21.197&clientType=14&appId=512000384397&id=3469028887066",
  "owner_id":743784474,
  "video_id":456239017
}
```

#### Сохранение результата

Сохранение видеофайла не требуется. После загрузки видеозапись проходит обработку и в списке видеозаписей может появиться спустя некоторое время.
