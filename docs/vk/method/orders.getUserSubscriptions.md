# orders.getUserSubscriptions

> Источник: [https://dev.vk.ru/ru/method/orders.getUserSubscriptions](https://dev.vk.ru/ru/method/orders.getUserSubscriptions)
Получает список активных подписок пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `positive` | да | Идентификатор пользователя, подписки которого необходимо получить. |

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив объектов, описывающих подписку, в поле `items`. Каждый объект массива `items` содержит следующие поля:

* `id` (`integer`) — идентификатор подписки.
* `item_id` (`string`) — идентификатор товара в приложении.
* `status` (`string`) — статус подписки. Возможные значения:
   * `active` — подписка активна.
* `price` (`integer`) — стоимость подписки.
* `period` (`integer`) — период подписки.
* `create_time` (`integer`) — дата создания в `unixtime`.
* `update_time` (`integer`) — дата обновления в `unixtime`.
* `period_start_time` (`integer`) — дата начала периода в `unixtime`.
* `next_bill_time` (`integer`) — дата следующего платежа в `unixtime` (если `status` = `active`).
* `trial_expire_time` (`integer`) — дата истечения триал-периода (если есть).
* `pending_cancel` (`boolean`, [`true`]) — `true`, если подписка ожидает отмены.
* `cancel_reason` (`string`) — причина отмены (если есть). Возможные значения:
   * `user_decision` — по инициативе пользователя;
   * `app_decision` — по инициативе приложения;
   * `payment_fail` — из-за проблемы с платежом;
   * `unknown` — причина неизвестна.
* `test_mode` (`boolean`, [`true`]) — `true`, если используется тестовый режим.

## Типы ключа

`secure`
