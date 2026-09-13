# orders.cancelSubscription

> Источник: [https://dev.vk.ru/ru/method/orders.cancelSubscription](https://dev.vk.ru/ru/method/orders.cancelSubscription)
Отменяет подписку.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `positive` | да | Идентификатор пользователя. |
| `subscription_id` | `positive` | да | Идентификатор подписки. |
| `pending_cancel` | `checkbox` | нет | `1` — отключить подписку по истечении текущего оплаченного периода;<br>`0` — отключить подписку сразу. |

## Результат

После успешного выполнения возвращает `1`. При отмене подписки на адрес обратного вызова будет отправлено [платёжное уведомление](api/payments/notifications/overview) с типом `subscription_status_change`.

## Типы ключа

`secure`

## Ошибки

- 1256
- 1257
