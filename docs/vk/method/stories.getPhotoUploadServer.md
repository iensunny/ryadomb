# stories.getPhotoUploadServer

> Источник: [https://dev.vk.ru/ru/method/stories.getPhotoUploadServer](https://dev.vk.ru/ru/method/stories.getPhotoUploadServer)
Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `add_to_news` | `checkbox` | нет | **Необязательный параметр.** Информация о том, разместить ли историю в новостях. Возможные значения:<br>* `1` — разместить историю в новостях.<br>* `0` — не размещать историю в новостях. Значение используется по умолчанию.<br>**Обязательный параметр**, если не передан параметр `user_ids`. |
| `user_ids` | `string` | нет | **Необязательный параметр.** Идентификаторы пользователей, которые будут видеть историю (для отправки в личном сообщении), перечисленные через запятую.<br>**Обязательный параметр**, если не передан параметр `add_to_news`. |
| `reply_to_story` | `string` | нет | Идентификатор истории, в ответ на которую создаётся новая история. |
| `link_text` | `string` | нет | Текст ссылки для перехода из истории (только для историй сообществ). Возможные значения:<br>* `to_store` — **В магазин**.<br>* `vote` — **Голосовать**.<br>* `more` — **Ещё**.<br>* `book` — **Забронировать**.<br>* `order` — **Заказать**.<br>* `enroll` — **Записаться**.<br>* `fill` — **Заполнить**.<br>* `signup` — **Зарегистрироваться**.<br>* `buy` — **Купить**.<br>* `ticket` — **Купить билет**.<br>* `write` — **Написать**.<br>* `open` — **Открыть**.<br>* `learn_more` — **Подробнее**. Значение используется по умолчанию.<br>* `view` — **Посмотреть**.<br>* `go_to` — **Перейти**.<br>* `contact` — **Связаться**.<br>* `watch` — **Смотреть**.<br>* `play` — **Слушать**.<br>* `install` — **Установить**.<br>* `read` — **Читать**. |
| `link_url` | `string` | нет | Адрес ссылки для перехода из истории. |
| `group_id` | `integer` | нет | Идентификатор сообщества, в которое должна быть загружена история (при работе с ключом доступа пользователя). |
| `clickable_stickers` | `text` | нет | Объект [кликабельного стикера](reference/objects/clickable-sticker). |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить изображение. |
| `user_ids` | `array[integer]` | Массив идентификаторов пользователей, которые будут видеть историю (для отправки в личном сообщении). |
| `peer_ids` | `array[integer]` | Массив идентификаторов пользователей или сообществ, которые будут видеть видеоисторию (для отправки в личном сообщении). |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.com\/c857012\/ss2159\/upload.php?_query=eyJ0aW1lIjoiMjAyMzAxMTgxMyIsImFwaV9pZCI6NTE1MjQ1MTksImFwaSI6MSwidiI6IjUuMTMxIiwiYWN0IjoiZG9fYWRkIiwibWV0aG9kIjoic3RvcmllcyIsImFpZCI6LTgxLCJtaWQiOjc0Mzc4NDQ3NCwib2lkIjo3NDM3ODQ0NzQsImdpZCI6MCwic3Rvcmllc191cGxvYWRfaGFzaCI6ImExNDYzYWExYjIzNmRhMzg0ZTZhYWY5MDE4MjRjNzA4NDQwOGI4ZDZiZGUxNjE2Y2VlMjI3MzY2M2M0NWM1NmYiLCJzdG9yaWVzX2FzeW5jIjoxLCJzZXJ2ZXIiOjg1NzAxMiwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6ImQ1MmJiODljY2QyOTcyYjQ3OTc5NTkwYWMxM2Q1YmEwIn0",
    "user_ids":[],
    "peer_ids":[]
  }
}
```

## Права доступа

`ex`, `stories`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 900
- 1602
- 19
