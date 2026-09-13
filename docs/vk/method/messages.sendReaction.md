# messages.sendReaction

> Источник: [https://dev.vk.ru/ru/method/messages.sendReaction](https://dev.vk.ru/ru/method/messages.sendReaction)
Метод установки реакции на сообщение

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | peer_id переписки: <br>* user_id &mdash; для личных чатов. <br>* group_id &mdash; для чатов с сообществом.<br>* 2&nbsp;000&nbsp;000&nbsp;000 + id_чата &mdash; для чатов. |
| `cmid` | `positive` | да | Conversation message id: Порядковый номер сообщения в чате |
| `reaction_id` | `positive` | да | Номер реакции |

## Результат

Возвращает {result: 1} при успешной отправке реакции или сообщение об ошибке

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 1009
- 1010
- 1011
- 995

Добавляет или изменяет ранее добавленную реакцию на сообщение по id переписки и номеру сообщения
