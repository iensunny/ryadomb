# messages.allowMessagesFromGroup

> Источник: [https://dev.vk.ru/ru/method/messages.allowMessagesFromGroup](https://dev.vk.ru/ru/method/messages.allowMessagesFromGroup)
Позволяет разрешить отправку сообщений от сообщества текущему пользователю.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `key` | `string` | нет | Произвольная строка. Этот параметр можно использовать для идентификации пользователя. Его значение будет возвращено в событии `message_allow` [Callback API](api/callback/getting-started). |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`messages_ex`

## Типы ключа

`is_standalone`

## Ошибки

- 943
