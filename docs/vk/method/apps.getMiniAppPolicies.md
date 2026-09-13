# apps.getMiniAppPolicies

> Источник: [https://dev.vk.ru/ru/method/apps.getMiniAppPolicies](https://dev.vk.ru/ru/method/apps.getMiniAppPolicies)
Метод получает ссылки, указанные в разделе [пользовательское соглашение и политика конфиденциальности](mini-apps/settings/general/legal-docs) мини-приложения.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `app_id` | `positive` | да | Идентификатор мини-приложения. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `privacy_policy` | `string` | Ссылка на политику конфиденциальности. |
| `terms` | `string` | Ссылка на пользовательское соглашение. |

Пример ответа:

```JSON
{
  "response":{
    "privacy_policy":"https://example.com",
    "terms":"https://example.com"
  }
}
```

## Типы ключа

`vk_apps`
