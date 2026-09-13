# apps.removeTestingGroup

> Источник: [https://dev.vk.ru/ru/method/apps.removeTestingGroup](https://dev.vk.ru/ru/method/apps.removeTestingGroup)
Метод удаляет указанную группу тестировщиков мини-приложения.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | да | **Обязательный параметр**. Идентификатор группы тестировщиков. |

## Результат

Метод возвращает `1`, если группа удалена, и `0` в случае ошибки.

```JSON
{
  "response":1
}
```

## Типы ключа

`allow_from_server`, `user_access_hidden`
