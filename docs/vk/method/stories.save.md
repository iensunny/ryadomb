# stories.save

> Источник: [https://dev.vk.ru/ru/method/stories.save](https://dev.vk.ru/ru/method/stories.save)
Метод сохраняет историю в профиле после её успешной [загрузки на сервер](api/upload/story-in-profile).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `upload_results` | `string` | нет | **Обязательный параметр.** История в формате `multipart/form-data`. Параметр возвращается в результате [загрузки истории на сервер](api/upload/story-in-profile). |
| `upload_results_json` | `text` | нет |  |
| `extended` | `checkbox` | нет |  |
| `fields` | `string` | нет |  |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `count` | `integer` | Количество загруженных историй. |
| `items` | `array[object]` | Массив объектов [историй](reference/objects/story-feed-item). |

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

## Права доступа

`ex`, `stories`

## Типы ключа

`group_access`, `vk_apps`, `is_standalone`
