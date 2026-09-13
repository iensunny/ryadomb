# Интеграция | Публикации | Загрузка файлов | История в личных сообщениях или в новостях профиля

> Источник: [https://dev.vk.ru/ru/api/upload/story-in-profile](https://dev.vk.ru/ru/api/upload/story-in-profile)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | История в профиле пользователя или сообщества'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# История в профиле пользователя или сообщества

## Изображение

Допустимые форматы: JPG, PNG, GIF.

Ограничения:

* Сумма высоты и ширины не более 14&nbsp;000 пикселей.
* Файл объёмом не более 10 Мбайт.

## Видеофайл

Допустимые форматы: H.264, AAC, MP4.

Ограничения:

* Максимальное разрешение 720&times;1280&nbsp;px.
* 30 fps.

## Получение адреса

### Изображение

Чтобы получить адрес для загрузки изображения, вызовите метод [`stories.getPhotoUploadServer`](method/stories.getPhotoUploadServer).

#### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/stories.getPhotoUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'v=:version'
```

#### Ответ

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.ru\/c857012\/ss2159\/upload.php?_query=eyJ0aW1lIjoiMjAyMzAxMTgxMyIsImFwaV9pZCI6NTE1MjQ1MTksImFwaSI6MSwidiI6IjUuMTMxIiwiYWN0IjoiZG9fYWRkIiwibWV0aG9kIjoic3RvcmllcyIsImFpZCI6LTgxLCJtaWQiOjc0Mzc4NDQ3NCwib2lkIjo3NDM3ODQ0NzQsImdpZCI6MCwic3Rvcmllc191cGxvYWRfaGFzaCI6ImExNDYzYWExYjIzNmRhMzg0ZTZhYWY5MDE4MjRjNzA4NDQwOGI4ZDZiZGUxNjE2Y2VlMjI3MzY2M2M0NWM1NmYiLCJzdG9yaWVzX2FzeW5jIjoxLCJzZXJ2ZXIiOjg1NzAxMiwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6ImQ1MmJiODljY2QyOTcyYjQ3OTc5NTkwYWMxM2Q1YmEwIn0",
    "user_ids":[],
    "peer_ids":[]
  }
}
```

### Видеофайл

Чтобы получить адрес для загрузки видеофайла, вызовите метод [`stories.getVideoUploadServer`](method/stories.getVideoUploadServer).

#### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/stories.getVideoUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'add_to_news=1' \
  -F 'v=:version'
```

#### Ответ

```JSON
{
  "response":{
    "upload_url":"https:\/\/vu.vk.ru\/c521236\/upload.exe2?act=add_video&mid=743784474&oid=743784474&fid=-1&tag=e0a5414f&hash=e160109dfd6fb957465d&swfupload=1&api=1&hash_extra=eyJzdG9yeSI6MSwidGltZSI6IjIwMjMwMTE4MTMiLCJhcGlfaWQiOjUxNTI0NTE5LCJ2IjoiNS4xMzEiLCJzdG9yaWVzX3VwbG9hZF9oYXNoIjoiZDA2ZTM3NDg3NGM2ZWVmM2VjMThmMDA2ZGIyYTNiMDJhMjcxYTA0ZGQxMzg2N2FmZWI0ZTc1Y2EwZGE4NGIxNCIsInN0b3JpZXNfYXN5bmMiOnRydWUsImxpdmVfY292ZXIiOmZhbHNlLCJsb25nX3N0b3J5IjpmYWxzZX0=",
    "user_ids":[],
    "peer_ids":[]
  }
}
```

## Передача файла

### Изображение

#### Запрос

Чтобы передать файлы, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `file`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'photo=@<ПОЛНЫЙ_ПУТЬ_К_ИЗОБРАЖЕНИЮ>'
```

:::note
**Примечание.** Чтобы отправить корректный запрос, удалите экранирование (символ `\`) из параметра `upload_url`. 
:::

Пример запроса:

```bash
curl -X POST 'https://pu.vk.ru/c857012/ss2159/upload.php?_query=eyJ0aW1lIjoiMjAyMzAxMTgxMyIsImFwaV9pZCI6NTE1MjQ1MTksImFwaSI6MSwidiI6IjUuMTMxIiwiYWN0IjoiZG9fYWRkIiwibWV0aG9kIjoic3RvcmllcyIsImFpZCI6LTgxLCJtaWQiOjc0Mzc4NDQ3NCwib2lkIjo3NDM3ODQ0NzQsImdpZCI6MCwic3Rvcmllc191cGxvYWRfaGFzaCI6ImExNDYzYWExYjIzNmRhMzg0ZTZhYWY5MDE4MjRjNzA4NDQwOGI4ZDZiZGUxNjE2Y2VlMjI3MzY2M2M0NWM1NmYiLCJzdG9yaWVzX2FzeW5jIjoxLCJzZXJ2ZXIiOjg1NzAxMiwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6ImQ1MmJiODljY2QyOTcyYjQ3OTc5NTkwYWMxM2Q1YmEwIn0' \
  -F 'file=@/Users/persik/Downloads/image.png'
```

#### Ответ

После успешной загрузки сервер возвращает JSON-объект и поле:

| Поле | Тип | Описание |
|---|---|---|
| `response` | `object` | Поле ответа. Содержит информацию о загруженном изображении (`upload_result`: `string`). |
| `_sig` | `string` | Подпись. |

Пример ответа:

```JSON
{
  "response":{
    "upload_result":"8de04bcefb6c95d571e7dffe6a37810ba1632e2cc44b4c802502aee068b4d5da"
  },
  "_sig":"9075c6bab6f63e53f50c543bcc9ccf39"
}
```

### Видеофайл

#### Запрос

Чтобы передать файлы, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `video_file`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'video_file=@<ПОЛНЫЙ_ПУТЬ_К_ВИДЕОФАЙЛУ>'
```

:::note
**Примечание.** Чтобы отправить корректный запрос, удалите экранирование (символ `\`) из параметра `upload_url`. 
:::

Пример запроса:

```bash
curl -X POST 'https://vu.vk.ru/c521236/upload.exe2?act=add_video&mid=743784474&oid=743784474&fid=-1&tag=e0a5414f&hash=e160109dfd6fb957465d&swfupload=1&api=1&hash_extra=eyJzdG9yeSI6MSwidGltZSI6IjIwMjMwMTE4MTMiLCJhcGlfaWQiOjUxNTI0NTE5LCJ2IjoiNS4xMzEiLCJzdG9yaWVzX3VwbG9hZF9oYXNoIjoiZDA2ZTM3NDg3NGM2ZWVmM2VjMThmMDA2ZGIyYTNiMDJhMjcxYTA0ZGQxMzg2N2FmZWI0ZTc1Y2EwZGE4NGIxNCIsInN0b3JpZXNfYXN5bmMiOnRydWUsImxpdmVfY292ZXIiOmZhbHNlLCJsb25nX3N0b3J5IjpmYWxzZX0=' \
  -F 'video_file=@/Users/persik/Downloads/video.mp4'
```

#### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `upload_result` | `string` | Информация о загруженном видеофайле. |

Пример ответа:

```JSON
{
  "response":{
    "upload_result":"02e1bf633f69e5aee8555ceaadd2574666d8d21522009921c607d6a00299f5f5"
  }
}
```

## Сохранение результата

Чтобы сохранить историю в профиле, вызовите метод [`stories.save`](method/stories.save) с параметрами, полученными на предыдущем этапе.

### Изображение

#### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/stories.save' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'upload_results=8de04bcefb6c95d571e7dffe6a37810ba1632e2cc44b4c802502aee068b4d5da' \
  -F 'v=:version'
```

#### Ответ

```JSON
{
  "response":{
    "count":1,
    "items":[
      {
        "id":456239020,
        "owner_id":743784474,
        "access_key":"story",
        "can_comment":0,
        "can_reply":0,
        "can_see":1,
        "can_like":false,
        "can_share":0,
        "can_hide":1,
        "date":1674040085,
        "expires_at":1674126485,
        "photo":{
          "album_id":-81,
          "date":1674039436,
          "id":457239029,
          "owner_id":743784474,
          "sizes":[
            {
              "height":50,
              "type":"s",
              "width":75,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/Vus7E6r8jZjgv5E9bnuM6fbvL9U_NP4-goegNOaEy8t4Z1DnzofjER9exwblecB6Hxb3EUbWv7lQvxdRaErZGoT3.jpg?size=75x50&quality=96&type=story"
            },
            {
              "height":87,
              "type":"m",
              "width":130,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/JTtJ-M4Y1Md4nbNyY6QNKBjs9xleCGkDwGw-NuMvLV0DKfQrPb_xN7QcfazSTrBcZ-_JzsJ21pTuLI7Slr8m9HcB.jpg?size=130x87&quality=96&type=story"
            },
            {
              "height":170,
              "type":"j",
              "width":256,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/Hjfmy4xk-cVp--EJs9ujERj2Q0nQHuJzwbCb2JUslIwLvYKyOf4Uf0B6XXIFRbYgLc-rqGnB8tjBkgYZXMuNlZZc.jpg?size=256x170&quality=96&type=story"},
            {
              "height":402,
              "type":"x",
              "width":604,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/2DBzUBeOMpydPcypQFkirgj6g9mzsj8le0qsrWQ_lPX3zNQN1229bLivxf26ya-91HF9D57exLSnkSnJwUxJdUBN.jpg?size=604x402&quality=96&type=story"
            },
            {
              "height":537,
              "type":"y",
              "width":807,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/Biye5eNVG4UA_ymuN60MU6Qp26yO7rYp0WB-ch55oxkaATpXs4Kmqqznz1keCYHg_BHyvPhyrSGyK3zRK29LoVKH.jpg?size=807x537&quality=96&type=story"
            },
            {
              "height":852,
              "type":"z",
              "width":1280,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/O-BkqGyWMw2ZKcOyYz8sH543Ihkws7mAn6x76JYh0mVW2MCR9x9eig_AS6gT6OLeySlvewx5oyri1Ejj0uNhJuKo.jpg?size=1280x852&quality=96&type=story"
            },
            {
              "height":1704,
              "type":"w",
              "width":2560,
              "url":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/o5klH0kpqicWBkDGQl_ch2j8VRpW69xrnq_PXw823wrMYc2qnXQLuDZeECtcKSaka1gfCpP9smoz7XwGAMDTk7vo.jpg?size=2560x1704&quality=96&type=story"
            }
          ],
          "text":"",
          "has_tags":false
        },
        "replies":{
          "count":0,
          "new":0
        },
        "is_one_time":false,
        "track_code":"story\/3AAQAc4sVUAaAs4bMaesA84sVUAaBAAFoAagB6AIAA==",
        "type":"photo",
        "views":0,
        "likes_count":0,
        "reaction_set_id":"reactions",
        "is_restricted":true,
        "no_sound":false,
        "can_ask":0,
        "can_ask_anonymous":0,
        "narratives_count":0,
        "can_use_in_narrative":false
      }
    ]
  }
}
```

### Видеофайл

#### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/stories.save' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'upload_results=02e1bf633f69e5aee8555ceaadd2574666d8d21522009921c607d6a00299f5f5' \
  -F 'v=:version'
```

#### Ответ

```JSON
{
  "response":{
    "count":1,
    "items":[
      {
        "id":456239021,
        "owner_id":743784474,
        "access_key":"story",
        "can_comment":0,
        "can_reply":0,
        "can_see":1,
        "can_like":false,
        "can_share":0,
        "can_hide":1,
        "date":1674040172,
        "expires_at":1674126572,
        "replies":{
          "count":0,
          "new":0
        },
        "is_one_time":false,
        "track_code":"story\/3AAQAc4sVUAaAs4bMaetA84sVUAaBAAFoAagB6AIAA==",
        "type":"video",
        "video":{
          "files":{
            "mp4_720":"https:\/\/sun1-57.userapi.com\/c521236\/9\/e61OTI3Oz80PT4_\/videos\/55e25b117a.720.mp4?extra=WxxCb2rGEMIaINAbNe07macOgEzM9fmcqC5RnUS38nBR61_-ckgINYOtXd5IgiDruZb28X06Gx-Zc7j2LvAywdhMyZGaRDsIJvguNcPlrQZDpoRMOyvQ0TA4-Y24mlUeHxEw-7JpRDuOo-4vpthltYm_YQ"
          },
          "access_key":"fab67897cc2d86fbb2",
          "can_add":0,
          "is_private":1,
          "date":1674039808,
          "description":"",
          "duration":11,
          "image":[
            {
              "url":"https:\/\/sun1-91.userapi.com\/-7hzRX2jVYzLYZD1sfABxQF031IsrmvPetPlzw\/QnNYgpXL2fw.jpg",
              "width":130,
              "height":96,
              "with_padding":1
            },
            {
              "url":"https:\/\/sun1-14.userapi.com\/dV60ChSAt1i552Bl04G8wg8FqxXfd_4N76hAwQ\/exEaGBLzyqM.jpg",
              "width":160,
              "height":120,
              "with_padding":1
            },
            {
              "url":"https:\/\/sun1-85.userapi.com\/VPFJVAK97nmaOPSMRYhub5UpTh-L4sBCvCYtug\/Rp-A0lgEEFk.jpg",
              "width":320,
              "height":240,
              "with_padding":1
            },
            {
              "url":"https:\/\/sun1-94.userapi.com\/-tkZER7lyDIn3haqk2TGqbOau3OXgZhKlNVv_Q\/pGNr-0engPw.jpg",
              "width":800,
              "height":450,
              "with_padding":1
            }
          ],
          "first_frame":[
            {
              "url":"https:\/\/sun9-north.userapi.com\/sun9-81\/s\/v1\/if2\/vyMoTg3ebOyOAnmrbaPbX3m_tuzgbkveHyzYawGUgOSND3OVqRMvGDTFRQ5V1tisfiao6uIcnRpqmi5UpI4GUtgz.jpg?size=800x1422&quality=96&type=video_first_frame",
              "width":800,
              "height":1422
            },
            {
              "url":"https:\/\/sun9-north.userapi.com\/sun9-81\/s\/v1\/if2\/Olrqh7sIQDUb7CvKBM3DWzEGPf_k4cL_Vk7vLRCurN2gNghSQbAWMTBHuhSjYw8n7xOJ-na3xeLmiRmbq9mp9cdh.jpg?size=320x569&quality=96&type=video_first_frame",
              "width":320,
              "height":569
            },
            {
              "url":"https:\/\/sun9-north.userapi.com\/sun9-81\/s\/v1\/if2\/DlqefBevWThK9_UwUJQtYGHo0-Pnc7W7zP_MRKwYhILHvhnN9KgSkOW7nRsRvI4wP_LcdACZiE9xkBTDubZAJNSL.jpg?size=160x284&quality=96&type=video_first_frame",
              "width":160,
              "height":284
            },
            {
              "url":"https:\/\/sun9-north.userapi.com\/sun9-81\/s\/v1\/if2\/RHhY6SiFC-NC922OrbilkftWyqRl9iLCQQMhwXZKeX0zY98fwnk0Ip1bHMGmWVKhQhqb0J3jByCFjVgL_KEHmWdA.jpg?size=130x231&quality=96&type=video_first_frame",
              "width":130,
              "height":231
            }
          ],
          "width":720,
          "height":1280,
          "id":456239018,
          "owner_id":743784474,
          "title":"vk stories",
          "player":"https:\/\/vk.ru\/video_ext.php?oid=743784474&id=456239018&hash=154c76e742c8af90&__ref=vk.api&api_hash=16740401738b0c82ef5458b2946d_G42DGNZYGQ2DONA",
          "type":"video",
          "views":0
        },
        "views":0,
        "likes_count":0,
        "reaction_set_id":"reactions",
        "is_restricted":true,
        "no_sound":false,
        "can_ask":0,
        "can_ask_anonymous":0,
        "narratives_count":0,
        "can_use_in_narrative":false
      }
    ]
  }
}
```
