# groups.setUserNote

> Источник: [https://dev.vk.ru/ru/method/groups.setUserNote](https://dev.vk.ru/ru/method/groups.setUserNote)
Позволяет создать или отредактировать заметку о пользователе в рамках переписки пользователя с сообществом

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `user_id` | `positive` | да | Идентификатор пользователя. |
| `note` | `string` | нет | Содержимое заметки, максимальная длина — 96 символов. |

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`
