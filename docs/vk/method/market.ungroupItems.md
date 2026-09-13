# market.ungroupItems

> Источник: [https://dev.vk.ru/ru/method/market.ungroupItems](https://dev.vk.ru/ru/method/market.ungroupItems)
Разделяет группу товаров на несколько товаров.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | да | Идентификатор сообщества |
| `item_group_id` | `positive` | да | Идентификатор товарной группы |

## Результат

В случае успешного выполнения возвращает 1.

## Права доступа

`market`

## Ошибки

- 1409
- 1411
- 1438
