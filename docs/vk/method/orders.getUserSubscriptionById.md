# orders.getUserSubscriptionById

> Источник: [https://dev.vk.ru/ru/method/orders.getUserSubscriptionById](https://dev.vk.ru/ru/method/orders.getUserSubscriptionById)
Получает информацию о подписке по её идентификатору.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `positive` | да | Идентификатор пользователя. |
| `subscription_id` | `positive` | да | Идентификатор подписки. |

## Результат

Возвращает объект, описывающий подписку. Содержит следующие поля:
* `id` (`integer`) — идентификатор подписки.
* `item_id` (`string`) — идентификатор товара в приложении.
* `status` (`string`) — статус подписки. Возможные значения:
   * `chargeable` — неподтвержденная подписка;
   * `active` — подписка активна;
   * `cancelled` — подписка отменена.
* `price` (`integer`) — стоимость подписки.
* `period` (`integer`) — период подписки.
* `create_time` (`integer`) — дата создания в `unixtime`.
* `update_time` (`integer`) — дата обновления в `unixtime`.
* `period_start_time` (`integer`) — дата начала периода в `unixtime`.
* `next_bill_time` (`integer`) — дата следующего платежа в `unixtime` (если `status` = `active`).
* `trial_expire_time` (`integer`) — дата истечения триал-периода (если есть).
* `pending_cancel` (`boolean`, [`true`] — `true`, если подписка ожидает отмены.
* `cancel_reason` (`string`) — причина отмены (если есть). Возможные значения:
   * `user_decision` — по инициативе пользователя;
   * `app_decision` — по инициативе приложения;
   * `payment_fail` — из-за проблемы с платежом;
   * `unknown` — причина неизвестна.
* `test_mode` (`boolean`, [`true`]) — `true`, если используется тестовый режим.

## Типы ключа

`secure`

## Ошибки

- 1256
