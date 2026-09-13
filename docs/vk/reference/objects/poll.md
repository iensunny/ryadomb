# Опрос

> Источник: [https://dev.vk.ru/ru/reference/objects/poll](https://dev.vk.ru/ru/reference/objects/poll)
Объект, описывающий опрос, содержит следующие поля:

## `id`
`integer`
Идентификатор опроса для получения информации о нем через метод [`polls.getById`](method/polls.getById).

## `owner_id`
`integer`
Идентификатор владельца опроса.

## `created`
`integer`
Дата создания в формате Unixtime.

## `question`
`string`
Текст вопроса.

## `votes`
`integer`
Количество голосов.

## `answers`
`array`
Массив объектов, которые содержат информацию о вариантах ответа. Каждый объект содержит следующие поля:
*  `id` (`integer`) — идентификатор ответа; 
*  `text` (`string`) — текст ответа; 
*  `votes` (`integer`) — число проголосовавших за этот ответ; 
*  `rate` (`number`) — рейтинг ответа. 

## `anonymous`
`boolean`
Является ли опрос анонимным.

## `multiple`
`boolean`
Допускает ли опрос выбор нескольких вариантов ответа.

## `answer_ids`
`array`
Идентификаторы вариантов ответа, выбранных текущим пользователем.

## `end_date`
`integer`
Дата завершения опроса в Unixtime. `0`, если опрос бессрочный.

## `closed`
`boolean`
Является ли опрос завершенным.

## `is_board`
`boolean`
Прикреплён ли опрос к обсуждению.

## `can_edit`
`boolean`
Можно ли отредактировать опрос.

## `can_vote`
`boolean`
Можно ли проголосовать в опросе.

## `can_report`
`boolean`
Можно ли пожаловаться на опрос.

## `can_share`
`boolean`
Можно ли поделиться опросом.

## `author_id`
`integer`
Идентификатор автора опроса.

## `photo`
`object`
Фотография — фон сниппета опроса. Объект [фотографии](reference/objects/photo).

## `background`
`object`
Фон сниппета опроса. Объект, который содержит поля:
* `id` (`integer`) — идентификатор фона.
* `type` (`string`) — тип фона. Возможные значения: `gradient`, `tile`.
* `angle` (`integer`) — (для `type` = `gradient`) угол градиента по оси X.
* `color` (`string`) — HEX-код замещающего цвета (без #).
* `width` (`integer`) — (для `type` = `tile`) ширина плитки паттерна.
* `height` (`integer`) — (для `type` = `tile`) высота плитки паттерна.
* `images` (`array`) — (для `type` = `tile`) изображение плитки паттерна. Массив объектов .
* `points` (`array`) — (для `type` = `gradient`) точки градиента. Массив объектов, каждый из которых содержит поля `position` (`number`) — положение точки — и `color` (`string`) — HEX-код цвета точки.


## `friends`
`array`
Идентификаторы 3 друзей, которые проголосовали в опросе.
