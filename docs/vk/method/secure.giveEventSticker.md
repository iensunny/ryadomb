# secure.giveEventSticker

> Источник: [https://dev.vk.ru/ru/method/secure.giveEventSticker](https://dev.vk.ru/ru/method/secure.giveEventSticker)
Выдает пользователю стикер и открывает игровое достижение.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_ids` | `integer` | да | Список ID пользователей которым нужно открыть достижение. |
| `achievement_id` | `positive` | да | ID игрового достижения на платформе игр. |

## Результат

Возвращает список результатов выполнения в виде списка объектов:

```
{
  "user_id": int,
  "status": string
}
```

`status` может принимать значения:

* `OK` — операция успешна.
* `ERROR_ACHIEVEMENT_ALREADY_OPENED` — стикер уже выдан пользователю.
* `ERROR_UNKNOWN_ERROR` — непредвиденная ошибка.

## Типы ключа

`secure`
