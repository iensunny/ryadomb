# bugtracker.addCompanyGroupsMembers

> Источник: [https://dev.vk.ru/ru/method/bugtracker.addCompanyGroupsMembers](https://dev.vk.ru/ru/method/bugtracker.addCompanyGroupsMembers)
Добавляет [сотрудников](vk-testers/employees) в группы доступа [компании](vk-testers/company).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `company_id` | `positive` | да | Идентификатор компании. Его можно найти в ссылке на страницу компании, например:<br>`https://vk.com/bugs_mng?company_id=3`<br> |
| `user_ids` | `string` | да | Список идентификаторов сотрудников, перечисленных через запятую. |
| `company_group_ids` | `integer` | да | Список идентификаторов групп, перечисленных через запятую. |

## Результат

Метод возвращает `1` после успешного выполнения. В случае ошибки возвращает пары `"группа" : "пользователь"`, которые не удалось добавить.

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
