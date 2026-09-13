# photos.saveMarketAlbumPhoto

> Источник: [https://dev.vk.ru/ru/method/photos.saveMarketAlbumPhoto](https://dev.vk.ru/ru/method/photos.saveMarketAlbumPhoto)
Метод сохраняет фотографию подборки товаров сообщества после её успешной [загрузки на сервер](api/upload/main-photo-in-market).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | **Обязательный параметр.** Идентификатор сообщества, для подборки товаров которого нужно загрузить фотографию. |
| `photo` | `string` | да | **Обязательный параметр.** Фотография в формате `multipart/form-data`. Параметр возвращается в результате [загрузки фотографии на сервер](api/upload/main-photo-in-market). |
| `server` | `positive` | да | **Обязательный параметр.** Идентификатор сервера, на который загружена фотография. Параметр возвращается в результате [загрузки фотографии на сервер](api/upload/main-photo-in-market). |
| `hash` | `string` | да | **Обязательный параметр.** Хеш фотографии. Параметр возвращается в результате [загрузки фотографии на сервер](api/upload/photo-in-market). |

## Результат

Метод возвращает массив объектов [фотографии](reference/objects/photo).

Пример ответа:

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

## Права доступа

`market`, `photos`

## Ошибки

- 121
- 129
- 1438
