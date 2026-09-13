# Адрес

> Источник: [https://dev.vk.ru/ru/reference/objects/address](https://dev.vk.ru/ru/reference/objects/address)
Объект, описывающий адрес в сообществе. 
Доступен с версии 5.85. 

## `id`
`integer`
Идентификатор адреса. 



## `city_id`
`integer`
Идентификатор города. 

## `title`
`string`
Заголовок адреса. 

## `address`
`string`
Строка адреса. 

## `additional_address`
`string`
Описание адреса. 

## `latitude`
`number`
Географическая широта отметки, заданная в градусах (от -90 до 90). 

## `longitude`
`number`
Географическая долгота отметки, заданная в градусах (от -180 до 180). 

## `distance`
`integer`
Расстояние до цели в метрах. 

## `phone`
`string`
Номер телефона. 

## `time_offset`
`integer`
Смещение времени в минутах относительно UTC. 

## `metro_station_id`
`integer`
Идентификатор станции метрополитена. 

## `work_info_status`
`string`
Тип расписания. Возможные значения:
* `no_information` — нет информации о расписании;
* `temporarily_closed` — временно закрыто;
* `always_opened` — открыто круглосуточно;
* `forever_closed` —  закрыто навсегда;
* `timetable` —  открыто в указанные часы работы. Для этого типа расписания необходимо передать параметр `timetable`.


## `timetable`
`object`
Для типа расписания `timetable` можно передать расписание в формате JSON. Время передается в минутах от 0 часов. Ключ по дню означает, что день рабочий. `open_time`, `close_time` —  начало и конец рабочего дня. `break_open_time`, `break_close_time` - время перерыва.
