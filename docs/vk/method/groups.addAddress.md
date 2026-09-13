# groups.addAddress

> Источник: [https://dev.vk.ru/ru/method/groups.addAddress](https://dev.vk.ru/ru/method/groups.addAddress)
Позволяет добавить адрес в сообщество.
Список адресов может быть получен методом [`groups.getAddresses`](method/groups.getAddresses).

> Для того, чтобы воспользоваться этим методом, вы должны быть администратором сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества, в которое добавляется адрес. |
| `title` | `string` | да | Заголовок адреса. |
| `address` | `string` | да | Строка адреса.<br>`Невский проспект, дом 28.` |
| `additional_address` | `string` | нет | Дополнительное описание адреса.<br>`Второй этаж, налево.` |
| `country_id` | `positive` | да | Идентификатор страны. Для получения можно использовать [`database.getCountries`](method/database.getCountries). |
| `city_id` | `positive` | да | Идентификатор города. Для получения можно использовать [database.getCities](method/database.getCities). |
| `metro_id` | `positive` | нет | Идентификатор станции метро.  Для получения можно использовать [`database.getMetroStations`](method/database.getMetroStations). |
| `latitude` | `string` | да | Географическая широта отметки, заданная в градусах (от -90 до 90). |
| `longitude` | `string` | да | Географическая долгота отметки, заданная в градусах (от -180 до 180). |
| `phone` | `string` | нет | Номер телефона. |
| `work_info_status` | `string` | нет | Тип расписания. Возможные значения:<br>* `no_information` — нет информации о расписании;<br>* `temporarily_closed` — временно закрыто;<br>* `always_opened` — открыто круглосуточно;<br>* `forever_closed` —  закрыто навсегда;<br>* `timetable` —  открыто в указанные часы работы. Для этого типа расписания необходимо передать параметр `timetable`. |
| `timetable` | `text` | нет | Для типа `timetable` можно передать расписание в формате JSON. Время передается в минутах от 0 часов. Ключ по дню означает, что день рабочий. `open_time`, `close_time` — начало и конец рабочего дня. `break_open_time`, `break_close_time` —  время перерыва.<br>```JSON<br>{<br>  "mon": {<br>    "open_time": 1080,<br>    "close_time": 1380<br>  },<br>  "tue": {<br>    "open_time": 1080,<br>    "close_time": 1380<br>  },<br>  "wed": {<br>    "open_time": 1080,<br>    "close_time": 1320<br>  },<br>  "thu": {<br>    "open_time": 1080,<br>    "close_time": 1320<br>  },<br>  "fri": {<br>    "open_time": 1080,<br>    "close_time": 1320<br>  },<br>  "sat": {<br>    "open_time": 1080,<br>    "close_time": 1320,<br>    "break_open_time": 1200,<br>    "break_close_time": 1230<br>  }<br>}<br>``` |
| `is_main_address` | `checkbox` | нет | Установить адрес основным. Информация об основном адресе сразу показывается в сообществе. Для получения информации об остальных адресах нужно перейти к списку адресов. |

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 260
- 104
- 706
