# apps.deleteSnippet

> Источник: [https://dev.vk.ru/ru/method/apps.deleteSnippet](https://dev.vk.ru/ru/method/apps.deleteSnippet)
Метод удаляет сниппет [мини-приложения](mini-apps/development/snippets) или [игры](games/promotion/game-mechanics/snippets).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `id` | `integer` | нет | **Обязательный параметр.** Идентификатор сниппета для удаления. |

## Результат

Метод возвращает `1`, если сниппет был удалён, и `0` в случае ошибки.

Пример ответа:

```JSON
{
  "response": 1
}
```

## Типы ключа

`secure`

## Ошибки

- 11006
