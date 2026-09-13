# messages.deleteChatPhoto

> Источник: [https://dev.vk.ru/ru/method/messages.deleteChatPhoto](https://dev.vk.ru/ru/method/messages.deleteChatPhoto)
Позволяет удалить фотографию мультидиалога.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `chat_id` | `positive` | да | Идентификатор беседы. |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

После успешного выполнения возвращает объект, содержащий следующие поля:
* `message_id` — идентификатор отправленного системного сообщения;
* `chat` — [объект мультидиалога](reference/objects/chat).

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 925
- 945
- 1017

## Связанные методы

- [messages.setChatPhoto](method/messages.setChatPhoto)
