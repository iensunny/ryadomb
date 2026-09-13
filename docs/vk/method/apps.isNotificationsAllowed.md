# apps.isNotificationsAllowed

> Источник: [https://dev.vk.ru/ru/method/apps.isNotificationsAllowed](https://dev.vk.ru/ru/method/apps.isNotificationsAllowed)
Метод проверяет, разрешил ли пользователь присылать ему [уведомления](mini-apps/promotion/social-mechanics/notifications/overview) в мини-приложении.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `positive` | да | **Обязательный параметр**. Идентификатор пользователя. |

## Результат

Метод возвращает параметр включения уведомлений (`is_allowed`: `boolean`).

```JSON
{
  "response":{
    "is_allowed":true
  }
}
```

## Типы ключа

`allow_from_server`
