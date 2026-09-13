# messages.getLastActivity

> Источник: [https://dev.vk.ru/ru/method/messages.getLastActivity](https://dev.vk.ru/ru/method/messages.getLastActivity)
Метод получает текущий статус и дату последней активности пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `integer` | да | **Обязательный параметр.** Идентификатор пользователя, информацию о последней активности которого требуется получить. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `online` | `integer` | Текущий статус пользователя. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `1` — в сети.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `0` — не в сети. |
| `time` | `integer` | Дата и время последней активности пользователя в секундах ([Unix Timestamp](https://www.unixtimestamp.com/)). |

Пример ответа:

```JSON
{
  "response": {
    "online": 0,
    "time": 1668001949
  }
}
```

## Права доступа

`messages_ex`

## Типы ключа

`is_standalone`
