# stories.delete

> Источник: [https://dev.vk.ru/ru/method/stories.delete](https://dev.vk.ru/ru/method/stories.delete)
Удаляет историю.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | нет | Идентификатор владельца истории.<br> |
| `story_id` | `positive` | нет | Идентификатор истории. |
| `stories` | `string` | нет |  |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`ex`, `stories`

## Типы ключа

`group_access`, `vk_apps`, `is_standalone`
