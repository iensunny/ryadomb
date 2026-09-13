# messages.getImportantMessages

> Источник: [https://dev.vk.ru/ru/method/messages.getImportantMessages](https://dev.vk.ru/ru/method/messages.getImportantMessages)
Возвращает список важных сообщений пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `count` | `positive` | нет | Максимальное число результатов, которые нужно получить. |
| `offset` | `positive` | нет | Смещение, необходимое для выборки определенного подмножества результатов. |
| `start_message_id` | `positive` | нет | Идентификатор сообщения, начиная с которого нужно возвращать список. |
| `preview_length` | `positive` | нет | Количество символов, после которого сообщение будет обрезано. По умолчанию сообщения не обрезаются. |
| `fields` | `string` | нет | Список дополнительных полей для [пользователей](reference/objects/user) и [сообществ](reference/objects/group). |
| `extended` | `checkbox` | нет | `1` — возвращать дополнительные поля для [пользователей](reference/objects/user) и [сообществ](reference/objects/group). |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`
