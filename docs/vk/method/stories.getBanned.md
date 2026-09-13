# stories.getBanned

> Источник: [https://dev.vk.ru/ru/method/stories.getBanned](https://dev.vk.ru/ru/method/stories.getBanned)
Возвращает список источников историй, скрытых из ленты текущего пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `extended` | `checkbox` | нет | `1` — возвращать расширенную информацию о пользователях и сообществах. |
| `fields` | `string` | нет | Дополнительные поля [пользователей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть. |

## Результат

После успешного выполнения возвращает общее количество скрытых источников в поле `count` (`integer`) и их идентификаторы в массиве `items`. 
Если `extended = 1`, `items` содержит два поля:

### `profiles`
`array`
Массив объектов, описывающих [пользователей](reference/objects/user). 

### `groups`
`array`
Массив объектов, описывающих [сообщества](reference/objects/group).

## Права доступа

`ex`, `stories`

## Типы ключа

`is_standalone`
