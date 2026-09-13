# photos.getChatUploadServer

> Источник: [https://dev.vk.ru/ru/method/photos.getChatUploadServer](https://dev.vk.ru/ru/method/photos.getChatUploadServer)
Метод получает адрес сервера для [загрузки обложки чата](api/upload/main-photo-in-chat).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `chat_id` | `positive` | да | **Обязательный параметр.** Идентификатор беседы, для которой нужно загрузить фотографию.<br>Если вы вызываете метод с ключом доступа сообщества, этот параметр равен `peer_id` — `2000000000`. `peer_id` нужной беседы можно узнать перебором бесед с помощью метода [`messages.getConversationsById`](method/messages.getConversationsById) либо с помощью Callback- или Longpoll-события `message_new`. |
| `crop_x` | `positive` | нет | **Необязательный параметр.** Координата `x` для обрезки фотографии (правый верхний угол). |
| `crop_y` | `positive` | нет | **Необязательный параметр.** Координата `y` для обрезки фотографии (правый верхний угол). |
| `crop_width` | `positive` | нет | **Необязательный параметр.** Ширина фотографии после обрезки в пикселях. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить обложку чата. |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.com\/c842430\/ss2085\/upload.php?_query=eyJhY3QiOiJvd25lcl9waG90byIsIm9pZCI6MjAwMDAwMDAwMSwic2F2ZSI6MSwic3F1YXJlIjoxLCJhcGlfd3JhcCI6eyJyZXNwb25zZSI6IntyZXN1bHR9In0sIm1pZCI6NzQzNzg0NDc0LCJzZXJ2ZXIiOjg0MjQzMCwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6ImM4ZjI4MTkzY2YwOGVhZTRiMDkyYzk1Yjk0ZmMyM2QxIn0"
  }
}
```

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`
