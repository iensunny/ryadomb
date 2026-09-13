# stories.getReplies

> Источник: [https://dev.vk.ru/ru/method/stories.getReplies](https://dev.vk.ru/ru/method/stories.getReplies)
Позволяет получить ответы на историю.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | да | Идентификатор владельца истории. |
| `story_id` | `positive` | да | Идентификатор истории. |
| `access_key` | `string` | нет | Ключ доступа для приватного объекта. |
| `extended` | `checkbox` | нет | `1` — возвращать дополнительную информацию о профилях и сообществах. |
| `fields` | `string` | нет | Дополнительные поля [профилей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть в ответе. |

## Результат

После успешного выполнения возвращает объект, содержащий число историй в поле `count` и массив объектов [блока ленты историй](reference/objects/story-feed-item) в поле `items`.

Если был задан параметр `extended`=`1`, дополнительно возвращает массив объектов  [пользователей](reference/objects/user) в поле `profiles` и объектов [сообществ](reference/objects/group) в поле `groups` (`array`).

## Права доступа

`ex`, `stories`

## Типы ключа

`group_access`, `vk_apps`, `is_standalone`
