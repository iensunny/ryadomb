# market.editProperty

> Источник: [https://dev.vk.ru/ru/method/market.editProperty](https://dev.vk.ru/ru/method/market.editProperty)
Редактирует свойство товара.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | да | Идентификатор сообщества. |
| `property_id` | `positive` | да | Идентификатор свойства. |
| `title` | `string` | да | Название свойства. |

## Результат

В случае успешного выполнения возвращает 1.

## Права доступа

`market`

## Ошибки

- 1411
- 1421
- 1424
- 1438
