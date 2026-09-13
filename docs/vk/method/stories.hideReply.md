# stories.hideReply

> Источник: [https://dev.vk.ru/ru/method/stories.hideReply](https://dev.vk.ru/ru/method/stories.hideReply)
Скрывает ответ на историю.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | да | Идентификатор владельца истории (ответной). |
| `story_id` | `positive` | да | Идентификатор истории (ответной). |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`ex`, `stories`

## Типы ключа

`group_access`, `is_standalone`
