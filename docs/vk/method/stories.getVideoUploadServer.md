# stories.getVideoUploadServer

> Источник: [https://dev.vk.ru/ru/method/stories.getVideoUploadServer](https://dev.vk.ru/ru/method/stories.getVideoUploadServer)
Метод получает адрес сервера для [загрузки изображения в историю](api/upload/story-in-profile).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `add_to_news` | `checkbox` | нет | **Необязательный параметр.** Информация о том, разместить ли историю в личных сообщениях или в новостях профиля. Возможные значения:<br>* `1` — разместить историю в новостях профиля.<br>* `0` — разместить историю в личных сообщениях. Значение используется по умолчанию.<br>**Обязательный параметр**, если не передан параметр `user_ids`. |
| `user_ids` | `string` | нет | **Необязательный параметр.** Идентификаторы пользователей, которые будут видеть историю (для отправки в личном сообщении), перечисленные через запятую.<br>**Обязательный параметр**, если не передан параметр `add_to_news`. |
| `reply_to_story` | `string` | нет | **Необязательный параметр.** Идентификатор истории, в ответ на которую создаётся новая история. |
| `link_text` | `string` | нет | **Необязательный параметр.** Текст ссылки для перехода из истории (только для историй сообществ). Возможные значения:<br>* `to_store` — **В магазин**.<br>* `vote` — **Голосовать**.<br>* `more` — **Ещё**.<br>* `book` — **Забронировать**.<br>* `order` — **Заказать**.<br>* `enroll` — **Записаться**.<br>* `fill` — **Заполнить**.<br>* `signup` — **Зарегистрироваться**.<br>* `buy` — **Купить**.<br>* `ticket` — **Купить билет**.<br>* `write` — **Написать**.<br>* `open` — **Открыть**.<br>* `learn_more` — **Подробнее**. Значение используется по умолчанию.<br>* `view` — **Посмотреть**.<br>* `go_to` — **Перейти**.<br>* `contact` — **Связаться**.<br>* `watch` — **Смотреть**.<br>* `play` — **Слушать**.<br>* `install` — **Установить**.<br>* `read` — **Читать**.<br>* `game` — **Играть**. |
| `link_url` | `string` | нет | **Необязательный параметр.** Адрес ссылки для перехода из истории. |
| `group_id` | `integer` | нет | **Необязательный параметр.** Идентификатор сообщества, в которое должна быть загружена история (при работе с ключом доступа пользователя). |
| `clickable_stickers` | `text` | нет | **Необязательный параметр.** Объект [кликабельного стикера](reference/objects/clickable-sticker). |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить изображение. |
| `user_ids` | `array[integer]` | Массив идентификаторов пользователей. |
| `peer_ids` | `array[integer]` | Массив идентификаторов назначений. |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/vu.vk.com\/c521236\/upload.exe2?act=add_video&mid=743784474&oid=743784474&fid=-1&tag=e0a5414f&hash=e160109dfd6fb957465d&swfupload=1&api=1&hash_extra=eyJzdG9yeSI6MSwidGltZSI6IjIwMjMwMTE4MTMiLCJhcGlfaWQiOjUxNTI0NTE5LCJ2IjoiNS4xMzEiLCJzdG9yaWVzX3VwbG9hZF9oYXNoIjoiZDA2ZTM3NDg3NGM2ZWVmM2VjMThmMDA2ZGIyYTNiMDJhMjcxYTA0ZGQxMzg2N2FmZWI0ZTc1Y2EwZGE4NGIxNCIsInN0b3JpZXNfYXN5bmMiOnRydWUsImxpdmVfY292ZXIiOmZhbHNlLCJsb25nX3N0b3J5IjpmYWxzZX0=",
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
