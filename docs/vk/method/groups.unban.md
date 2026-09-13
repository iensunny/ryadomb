# groups.unban

> Источник: [https://dev.vk.ru/ru/method/groups.unban](https://dev.vk.ru/ru/method/groups.unban)
Убирает пользователя или группу из черного списка сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | да | Идентификатор сообщества. |
| `owner_id` | `integer` | нет | Идентификатор пользователя или группы, которого нужно убрать из черного списка. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`groups_ex`

## Типы ключа

`is_standalone`

## Связанные методы

- [groups.ban](method/groups.ban)
- [groups.getBanned](method/groups.getBanned)
