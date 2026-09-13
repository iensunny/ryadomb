# bugtracker.removeCompanyMember

> Источник: [https://dev.vk.ru/ru/method/bugtracker.removeCompanyMember](https://dev.vk.ru/ru/method/bugtracker.removeCompanyMember)
Удаляет [сотрудника](vk-testers/employees) из [компании](vk-testers/company) и из всех групп доступа в этой компании.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `integer` | да | <br>Идентификатор пользователя.<br> |
| `company_id` | `positive` | да | Идентификатор компании. Его можно найти в ссылке на страницу компании, например:<br>`https://vk.com/bugs_mng?company_id=3`<br> |

## Результат

При успешном выполнении возвращает `1`. В случае ошибки возвращает список идентификаторов пользователей, которые не были удалены из компании.

Пример ответа:

```JSON
{
  "response": 1
}
```

## Типы ключа

`user_access_hidden`

## Ошибки

- 103

> Работает с [ключом доступа](vk-testers/access-tokens) компании.
