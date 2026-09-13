# Геометка

> Источник: [https://dev.vk.ru/ru/reference/objects/geo](https://dev.vk.ru/ru/reference/objects/geo)
Объект, описывающий геометку, содержит следующие поля:

## `type`
`string`
Тип места.

## `coordinates`
`object`
Координаты места. Объект, который содержит поля:
*  `latitude` (`integer`) — географическая широта; 
*  `longitude` (`integer`) — географическая долгота.

## `place`

`object`

Информация о [месте](reference/objects/place), если она добавлена.

Если место добавлено как чекин в сообщество, объект `place` имеет дополнительные поля:
* `type` (`integer`) — тип чекина;
* `group_id` (`integer`) — идентификатор сообщества;
* `group_photo` (`string`) — URL миниатюры главной фотографии сообщества;
* `checkins` (`integer`) — количество чекинов;
* `updated` (`integer`) — время последнего чекина в Unixtime;
* `address` (`integer`) — адрес.
