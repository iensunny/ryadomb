# groups.getAddresses

> Источник: [https://dev.vk.ru/ru/method/groups.getAddresses](https://dev.vk.ru/ru/method/groups.getAddresses)
Метод возвращает адрес указанного сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | **Обязательный параметр.** Идентификатор сообщества. |
| `address_ids` | `integer` | нет | **Необязательный параметр.** Идентификаторы адресов, информацию о которых необходимо вернуть, перечисленные через запятую. |
| `latitude` | `string` | нет | **Необязательный параметр.** Географическая широта отметки в градусах. Диапазон значений: от `-90` до `90`. |
| `longitude` | `string` | нет | **Необязательный параметр.** Географическая долгота отметкив градусах. Диапазон значений: от `-180` до `180`. |
| `offset` | `positive` | нет | **Необязательный параметр.** Смещение для возвращения адресов чёрного списка относительно начала списка.  |
| `count` | `positive` | нет | **Необязательный параметр.** Количество адресов, которое необходимо вернуть. Значение по умолчанию: `10`. |
| `fields` | `string` | нет | **Необязательный параметр.** Список дополнительных полей [сообществ](reference/objects/group), которые необходимо вернуть. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `count` | `integer` | Число результатов. |
| `items` | `array[object]` | Массив объектов [адресов](reference/objects/address). |

Пример ответа:

```JSON
{
  "response": {
    "count": 1,
    "items": [
      {
        "id": 53461,
        "additional_address": "Праздничные дни: 09:00 - 22:00",
        "address": "улица Тверитина, 45",
        "city_id": 49,
        "country_id": 1,
        "city": {
          "id": 49,
          "title": "Екатеринбург"
        },
        "country": {
          "id": 1,
          "title": "Россия"
        },
        "latitude": 56.821658,
        "longitude": 60.624082,
        "phone": "+7 (343) 311-01-23",
        "timetable": {
          "fri": {
            "close_time": 1380,
            "open_time": 420,
            "break_close_time": 0,
            "break_open_time": 0
          },
          "mon": {
            "close_time": 1380,
            "open_time": 420,
            "break_close_time": 0,
            "break_open_time": 0
          },
          "sat": {
            "close_time": 1320,
            "open_time": 540,
            "break_close_time": 0,
            "break_open_time": 0
          },
          "sun": {
            "close_time": 1320,
            "open_time": 540,
            "break_close_time": 0,
            "break_open_time": 0
          },
          "thu": {
            "close_time": 1380,
            "open_time": 420,
            "break_close_time": 0,
            "break_open_time": 0
          },
          "tue": {
            "close_time": 1380,
            "open_time": 420,
            "break_close_time": 0,
            "break_open_time": 0
          },
          "wed": {
            "close_time": 1380,
            "open_time": 420,
            "break_close_time": 0,
            "break_open_time": 0
          }
        },
        "title": "BF_ ПАРКОВЫЙ",
        "work_info_status": "timetable"
      }
    ]
  }
}
```

## Типы ключа

`allow_from_server`

## Ошибки

- 125
- 260
