# apps.removeUsersFromTestingGroups

> Источник: [https://dev.vk.ru/ru/method/apps.removeUsersFromTestingGroups](https://dev.vk.ru/ru/method/apps.removeUsersFromTestingGroups)
Метод удаляет указанных пользователей из групп тестировщиков мини-приложения.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_ids` | `string` | да | **Обязательный параметр**. Идентификаторы пользователей, которых необходимо удалить из группы тестировщиков, перечисленные через запятую. |

## Результат

Метод возвращает `1`, если пользователи удалены, и `0` в случае ошибки.

```JSON
{
  "response": 1
}
```

## Типы ключа

`allow_from_server`, `user_access_hidden`
