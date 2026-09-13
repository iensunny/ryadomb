# messages.setChatPhoto

> Источник: [https://dev.vk.ru/ru/method/messages.setChatPhoto](https://dev.vk.ru/ru/method/messages.setChatPhoto)
Метод сохраняет обложку беседы после её успешной [загрузки на сервер](api/upload/main-photo-in-chat).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `file` | `text` | да | **Обязательный параметр.** Фотография в формате `multipart/form-data`. Параметр возвращается в результате [загрузки фотографии на сервер](api/upload/main-photo-in-chat). |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `message_id` | `integer` | Идентификатор отправленного системного сообщения. |
| `chat` | `object` | [Объект группового чата](reference/objects/chat). |

Пример ответа:

```JSON
{
  "response":{
    "message_id":6,
    "chat":{
      "admin_id":-218252175,
      "id":1,
      "type":"chat",
      "members_count":2,
      "photo_100":"https:\/\/sun1.userapi.com\/sun1-99\/s\/v1\/s2\/qca7xiltqwyAxlTuKSTZuXo0WwUBL871xSYll3e-wQrEtli-IMY2h27fTpwiHO48NPIyvq7sLfowbHbk7G5Nq98.jpg",
      "photo_200":"https:\/\/sun1.userapi.com\/sun1-91\/s\/v1\/s2\/cPnmm9ZqzzFFXOiIBhsbKITg8RplB0e2uBtUERP1yxlliKS-SrF1bVNiKptonmXZ5QdLMysDb_qjs2DhJpGtyeY.jpg",
      "photo_50":"https:\/\/sun1.userapi.com\/sun1-28\/s\/v1\/ig2\/4UuKyiSvJN4kluu_taiSuG3wzeMoIdRrz0GLXR55hC1jnXVPT0JuYqdDXVvHCkQ3HgPbcyjUOBRINx2XDSibsOGI.jpg?size=50x0&quality=96&crop=428,0,1704,1704&ava=1",
      "title":"Тестирование Персика",
      "users":[
        -218252175,
        743784474
      ],
      "is_default_photo":false
    }
  }
}
```

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 22
- 1160
- 925
- 945
- 1017
