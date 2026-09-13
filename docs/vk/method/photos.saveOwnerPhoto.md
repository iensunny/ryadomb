# photos.saveOwnerPhoto

> Источник: [https://dev.vk.ru/ru/method/photos.saveOwnerPhoto](https://dev.vk.ru/ru/method/photos.saveOwnerPhoto)
Метод сохраняет главную фотографию после её успешной [загрузки на сервер](api/upload/main-photo-in-profile).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `server` | `string` | нет | **Обязательный параметр.** Идентификатор сервера, на который загружены фотографии. Параметр возвращается в результате [загрузки фотографий на сервер](api/upload/main-photo-in-profile). |
| `hash` | `string` | нет | **Обязательный параметр.** Хеш фотографий. Параметр возвращается в результате [загрузки фотографий на сервер](api/upload/main-photo-in-profile). |
| `photo` | `string` | нет | **Обязательный параметр.** Фотография в формате `multipart/form-data`. Параметр возвращается в результате [загрузки фотографий на сервер](api/upload/main-photo-in-profile). |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `photo_hash` | `string` | Хеш главной фотографии. |
| `photo_src` | `string` | Адрес, по которому располагается главная фотография. |
| `photo_src_big` | `string` | Адрес, по которому располагается главная фотография в большом размере. |
| `photo_src_small` | `string` | Адрес, по которому располагается главная фотография в маленьком размере. |

Пример ответа:

```JSON
{
  "response":{
    "photo_hash":"4e1840c08573ad56e7d081b1a9b09a9c",
    "photo_src":"https:\/\/sun9-west.userapi.com\/sun9-3\/s\/v1\/s2\/4s4v93OsX00AK0S1-LQRjx8jDVjEWOqdJl4IMO5k_BLVqjO3DHKO5WQRrl5Fx4GyQ5YAIUxdGZZ4rrbIsclV-YQ.jpg",
    "photo_src_big":"https:\/\/sun9-north.userapi.com\/sun9-86\/s\/v1\/s2\/XKGxWRmzzAgWbnQxZ3ZZywUxf9a575sliRNgZ90FrxopoN0clGM0xcsZ5XMib9zXZoXguAwj3ZFzSI-E8s4p5tU.jpg",
    "photo_src_small":"https:\/\/sun9-east.userapi.com\/sun9-26\/s\/v1\/s2\/Ls3iXFisu4g1Zt1oMh8DtS2_-YCvH6KqlV3czmOLT0Xpwm5q8UDbruMfgwu9ilufMEypqMTGV74OWnuuBKghlcA.jpg"
  }
}
```

## Ошибки

- 129
- 5701
- 5702
- 5703
- 5704
- 5705
- 5706
- 5708
- 5709
- 5710
- 703
- 13000
