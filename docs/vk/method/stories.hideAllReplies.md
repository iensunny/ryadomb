# stories.hideAllReplies

> Источник: [https://dev.vk.ru/ru/method/stories.hideAllReplies](https://dev.vk.ru/ru/method/stories.hideAllReplies)
Скрывает все ответы автора за последние сутки на истории текущего пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | да | Идентификатор пользователя, ответы от которого нужно скрыть. |
| `group_id` | `positive` | нет |  |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`ex`, `stories`

## Типы ключа

`group_access`, `is_standalone`
