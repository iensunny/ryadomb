# bugtracker.removeCompanyGroupMember

> Источник: [https://dev.vk.ru/ru/method/bugtracker.removeCompanyGroupMember](https://dev.vk.ru/ru/method/bugtracker.removeCompanyGroupMember)
Исключает [сотрудника](vk-testers/employees) из группы доступа [компании](vk-testers/company).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `company_id` | `positive` | да | Идентификатор компании. Его можно найти в ссылке на страницу компании, например:<br>`https://vk.com/bugs_mng?company_id=3`<br> |
| `user_id` | `integer` | да | Идентификатор пользователя. |
| `company_group_id` | `positive` | да | Идентификатор группы доступа. Его можно найти в ссылке на страницу группы, например:<br>`https://vk.com/bugs_mng?act=group_members&company_id=3&group_id=65`<br> |

## Результат

При успешном выполнении возвращает `1`.

Пример ответа:

```JSON
{
  "response": 1
}
```

## Типы ключа

`user_access_hidden`

## Ошибки

- 104
- 103

> Работает с [ключом доступа](vk-testers/access-tokens) компании.
