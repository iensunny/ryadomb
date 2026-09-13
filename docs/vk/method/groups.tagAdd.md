# groups.tagAdd

> Источник: [https://dev.vk.ru/ru/method/groups.tagAdd](https://dev.vk.ru/ru/method/groups.tagAdd)
Позволяет добавить новый тег в сообщество.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `tag_name` | `string` | да | Имя тега. |
| `tag_color` | `string` | нет | Цвет тега. Разрешается использовать следующие цвета: `4bb34b`, `5c9ce6`, `e64646`, `792ec0`, `63b9ba`, `ffa000`, `ffc107`, `76787a`, `9e8d6b`, `45678f`, `539b9c`, `454647`, `7a6c4f`, `6bc76b`, `5181b8`, `ff5c5c`, `a162de`, `7ececf`, `aaaeb3`, `bbaa84`. |

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`
