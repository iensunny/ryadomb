# appWidgets.update

> Источник: [https://dev.vk.ru/ru/method/appWidgets.update](https://dev.vk.ru/ru/method/appWidgets.update)
Позволяет обновить [виджет приложения сообщества](api/community-apps-widgets/getting-started).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `code` | `text` | да | Код виджета. Подробное описание — в разделе [Виджеты сообществ](api/community-apps-widgets/getting-started). |
| `type` | `string` | да | Тип виджета. Список всех доступных типов — в разделе [Виджеты приложений сообществ](reference/objects/app-widget). |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`app_widget`

## Типы ключа

`group_access`, `user_access_hidden`

## Ошибки

- 12
- 19
- 210
- 212
- 125
