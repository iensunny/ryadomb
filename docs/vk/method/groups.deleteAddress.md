# groups.deleteAddress

> Источник: [https://dev.vk.ru/ru/method/groups.deleteAddress](https://dev.vk.ru/ru/method/groups.deleteAddress)
Удаляет адрес сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | ID группы. |
| `address_id` | `positive` | да | ID адреса. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 260
- 104
