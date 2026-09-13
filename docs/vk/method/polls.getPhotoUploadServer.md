# polls.getPhotoUploadServer

> Источник: [https://dev.vk.ru/ru/method/polls.getPhotoUploadServer](https://dev.vk.ru/ru/method/polls.getPhotoUploadServer)
Возвращает адрес сервера для загрузки фоновой фотографии в опрос.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | нет | Идентификатор владельца опроса. |

## Результат

Возвращает объект с единственным полем `upload_url` (`string`), содержащим URL для загрузки фотографии.

## Права доступа

`wall_ex`

## Типы ключа

`vk_apps`, `is_standalone`
