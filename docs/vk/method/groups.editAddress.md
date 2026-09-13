# groups.editAddress

> Источник: [https://dev.vk.ru/ru/method/groups.editAddress](https://dev.vk.ru/ru/method/groups.editAddress)
Метод редактирует адрес в сообществе. Чтобы получить список адресов, вызовите метод [`groups.getAddresses`](method/groups.getAddresses).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | **Обязательный параметр.** Идентификатор сообщества, в которое добавляется адрес. |
| `address_id` | `positive` | да | **Обязательный параметр.** Идентификатор адреса. |
| `title` | `string` | нет | **Необязательный параметр.** Заголовок адреса. |
| `address` | `string` | нет | **Необязательный параметр.** Адрес.<br>Пример:<br>```<br>Город Санкт-Петербург, Невский проспект, дом 28.<br>``` |
| `additional_address` | `string` | нет | **Необязательный параметр.** Дополнительное описание адреса.<br>Пример:<br>```<br>Второй этаж, налево.<br>``` |
| `country_id` | `positive` | нет | **Необязательный параметр.** Идентификатор страны. Чтобы получить идентификатор, вызовите метод [`database.getCountries`](method/database.getCountries). |
| `city_id` | `positive` | нет | **Необязательный параметр.** Идентификатор города. Чтобы получить идентификатор, вызовите метод [`database.getCities`](method/database.getCities). |
| `metro_id` | `positive` | нет | **Необязательный параметр.** Идентификатор станции метро. Чтобы получить идентификатор, вызовите метод [`database.getMetroStations`](method/database.getMetroStations). |
| `latitude` | `string` | нет | **Необязательный параметр.** Географическая широта отметки в градусах. Диапазон значений: от `-90` до `90`. |
| `longitude` | `string` | нет | **Необязательный параметр.** Географическая долгота отметки в градусах. Диапазон значений: от `-180` до `180`. |
| `phone` | `string` | нет | **Необязательный параметр.** Номер телефона, привязанный к адресу. |
| `work_info_status` | `string` | нет | **Необязательный параметр.** Тип расписания. Возможные значения:<br>* `no_information` — нет информации о расписании.<br>* `temporarily_closed` — временно закрыто.<br>* `always_opened` — открыто круглосуточно.<br>* `forever_closed` —  закрыто навсегда.<br>* `timetable` —  открыто в указанные часы работы. Для этого типа расписания необходимо передать параметр `timetable`. |
| `timetable` | `text` | нет | **Необязательный параметр.** Расписание в формате JSON. Время передается в минутах от 0 часов. Возможные значения:<br>* `mon` — понедельник.<br>* `tue` — вторник.<br>* `wed` — среда.<br>* `thu` — четверг.<br>* `fri` — пятница.<br>* `sat` — суббота.<br>* `sun` — воскресенье.<br>Пометки времени:<br>* `open_time` — начало рабочего дня.<br>* `close_time` — конец рабочего дня.<br>* `break_open_time` — начало перерыва.<br>* `break_close_time` — конец перерыва.<br>Пример значения параметра:<br>```JSON<br>{<br>  "mon": {<br>    "open_time": 1080,<br>    "close_time": 1380<br>  },<br>  "tue": {<br>    "open_time": 1080,<br>    "close_time": 1380<br>  },<br>  "wed": {<br>    "open_time": 1080,<br>    "close_time": 1320<br>  },<br>  "thu": {<br>    "open_time": 1080,<br>    "close_time": 1320<br>  },<br>  "fri": {<br>    "open_time": 1080,<br>    "close_time": 1320<br>  },<br>  "sat": {<br>    "open_time": 1080,<br>    "close_time": 1320,<br>    "break_open_time": 1200,<br>    "break_close_time": 1230<br>  }<br>}<br>``` |
| `is_main_address` | `checkbox` | нет | Информация о том, является ли адрес основным. Возможные значения:<br>* `1` — адрес является основным.<br>* `0` — адрес не является основным.<br>:::note<br>**Примечание.** Информация об основном адресе сразу показывается в сообществе. Чтобы получить информацию об остальных адресах, нужно перейти к списку адресов.<br>::: |



## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `id` | `integer` | Идентификатор адреса. |
| `title` | `string` | Заголовок адреса. |
| `address` | `string` | Адрес. |
| `additional_address` | `string` | Дополнительное описание адреса. |
| `country_id` | `integer` | Идентификатор страны. |
| `city_id` | `integer` | Идентификатор города. |
| `metro_station_id` | `integer` | Идентификатор станции метро. |
| `latitude` | `integer` | Географическая широта отметки в градусах. |
| `longitude` | `integer` | Географическая долгота отметки в градусах. |
| `work_info_status` | `integer` | Тип расписания. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `no_information` — нет информации о расписании.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `temporarily_closed` — временно закрыто.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `always_opened` — открыто круглосуточно.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `forever_closed` —  закрыто навсегда.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `timetable` —  открыто в указанные часы работы. |
| `time_offset` | `integer` | Смещение времени в минутах относительно времени по UTC+0. |

Пример ответа:

```JSON
{
  "response": {
    "id": 56704,
    "title": "Точка встречи parkrun",
    "address": "Сосновский лесопарк",
    "additional_address": "Парковая дорожка между футбольным полем и спортивной площадкой",
    "country_id": 1,
    "city_id": 2,
    "metro_station_id": 189,
    "latitude": 60.017941,
    "longitude": 30.365817,
    "work_info_status": "no_information",
    "time_offset": 180
  }
}
```

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 260
- 104
- 706
