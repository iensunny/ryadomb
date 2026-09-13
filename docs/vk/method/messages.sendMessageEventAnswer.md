# messages.sendMessageEventAnswer

> Источник: [https://dev.vk.ru/ru/method/messages.sendMessageEventAnswer](https://dev.vk.ru/ru/method/messages.sendMessageEventAnswer)
Отправляет событие с действием, которое произойдет при нажатии на callback-кнопку.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `event_id` | `string` | да | Случайная строка, которая возвращается в событии `message_event`. |
| `user_id` | `integer` | да | Идентификатор пользователя. |
| `peer_id` | `integer` | да | Идентификатор диалога со стороны сообщества. |
| `event_data` | `text` | нет | Объект действия, которое должно произойти после нажатия на кнопку. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `user_access_hidden`, `is_standalone`
