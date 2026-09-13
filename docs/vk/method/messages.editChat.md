# messages.editChat

> Источник: [https://dev.vk.ru/ru/method/messages.editChat](https://dev.vk.ru/ru/method/messages.editChat)
Изменяет название беседы.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `chat_id` | `positive` | да | Идентификатор беседы. |
| `title` | `string` | нет | Новое название для беседы. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 925
- 945
- 946
- 984
- 983
- 1012
- 1017

## Связанные методы

- [messages.createChat](method/messages.createChat)
- [messages.addChatUser](method/messages.addChatUser)
- [messages.removeChatUser](method/messages.removeChatUser)
- [messages.setChatPhoto](method/messages.setChatPhoto)
