# market.editOrder

> Источник: [https://dev.vk.ru/ru/method/market.editOrder](https://dev.vk.ru/ru/method/market.editOrder)
Редактирует заказ.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `integer` | да | Идентификатор пользователя. |
| `order_id` | `positive` | да | Идентификатор заказа. |
| `merchant_comment` | `string` | нет | Комментарий продавца. |
| `status` | `positive` | нет | Статус заказа. Возможные значения:<br>*  `0` - новый;<br>*  `1` - согласуется;<br>*  `2` - собирается;<br>*  `3` - доставляется;<br>*  `4` - выполнен;<br>*  `5` - отменен;<br>*  `6` - возвращен. |
| `track_number` | `string` | нет | Трек-номер. |
| `payment_status` | `string` | нет | Статус платежа. Возможные значения:<br>*  `not_paid` - не оплачен;<br>*  `paid` - оплачен;<br>*  `returned` - возвращен. |
| `delivery_price` | `positive` | нет | Стоимость доставки. |
| `width` | `positive` | нет | Ширина. |
| `length` | `positive` | нет | Длина. |
| `height` | `positive` | нет | Высота. |
| `weight` | `positive` | нет | Вес. |
| `comment_for_user` | `string` | нет | Комментарий для пользователя. |
| `receipt_link` | `string` | нет | Ссылка на электронный чек. |

## Результат

В случае успешного выполнения возвращает `1`.

## Права доступа

`market`

## Типы ключа

`group_access`

## Ошибки

- 1427
- 1429
- 1430
- 1456
