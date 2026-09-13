# wall.closeComments

> Источник: [https://dev.vk.ru/ru/method/wall.closeComments](https://dev.vk.ru/ru/method/wall.closeComments)
Выключает комментирование записи.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | да | целое число, **обязательный параметр** |
| `post_id` | `positive` | да | положительное число, **обязательный параметр** |

## Результат

Возвращает `1` в случае успеха.

## Права доступа

`wall_ex`

## Типы ключа

`group_access`, `is_standalone`
