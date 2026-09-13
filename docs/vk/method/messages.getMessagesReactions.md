# messages.getMessagesReactions

> Источник: [https://dev.vk.ru/ru/method/messages.getMessagesReactions](https://dev.vk.ru/ru/method/messages.getMessagesReactions)
Получить актуальные счётчики реакций на сообщения

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | peer_id переписки: <br>* user_id &mdash; для личных чатов. <br>* group_id &mdash; для чатов с сообществом.<br>* 2&nbsp;000&nbsp;000&nbsp;000 + id_чата &mdash; для чатов. |
| `cmids` | `string` | да | Список conversation_message_id сообщений, для которых нужно вернуть счётчики реакций. Максимальный размер: 100 |

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 995

По peer_id переписки и списка сообщений возвращает актуальные счётчики реакций для сообщений, у которых есть реакции. Если реакций не много, возвращает так же id пользователей и сообществ, поставивших реакции
