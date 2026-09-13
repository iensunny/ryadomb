# bugtracker.addCompanyMembers

> Источник: [https://dev.vk.ru/ru/method/bugtracker.addCompanyMembers](https://dev.vk.ru/ru/method/bugtracker.addCompanyMembers)
Добавляет [сотрудников](vk-testers/employees) в [компанию](vk-testers/company).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_ids` | `string` | да | Список идентификаторов сотрудников, перечисленных через запятую. |
| `company_id` | `positive` | да | Идентификатор компании. Его можно найти в ссылке на страницу компании, например:<br>`https://vk.com/bugs_mng?company_id=3`<br> |

## Результат

Метод возвращает `1` после успешного выполнения или массив с ошибками добавления отдельных пользователей.

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
