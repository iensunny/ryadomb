# messages.searchConversations

> Источник: [https://dev.vk.ru/ru/method/messages.searchConversations](https://dev.vk.ru/ru/method/messages.searchConversations)
Позволяет искать диалоги.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `q` | `string` | нет | Поисковой запрос. |
| `count` | `positive` | нет | Максимальное число результатов для получения. |
| `extended` | `checkbox` | нет | `1` — возвращать дополнительные поля. |
| `fields` | `string` | нет | Дополнительные поля [пользователей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть в ответе. |
| `group_id` | `positive` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

В ответе возвращаются:

* `count` — количество результатов, удовлетворяющих запросу.
* `items` — массив объектов [диалогов](reference/objects/conversation). 

Если в запросе параметр `extended`= `true`, дополнительно в ответе возвращаются:

* `profiles` — массив объектов [пользователей](reference/objects/user).
* `group` — массив объектов [сообществ](reference/objects/group).

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`
