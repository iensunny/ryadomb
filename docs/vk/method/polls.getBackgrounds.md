# polls.getBackgrounds

> Источник: [https://dev.vk.ru/ru/method/polls.getBackgrounds](https://dev.vk.ru/ru/method/polls.getBackgrounds)
Возвращает варианты фонового изображения для опросов.

## Результат

Возвращает массив объектов, описывающих фоновое изображение опроса. Каждый из объектов содержит поля:
* `type` (`string`) — тип фона. Возможные значения: `gradient` или `tile`.
* `angle` (`string`) — (для `type` = `gradient`) угол градиента по оси X.
* `color` (`string`) — HEX-код замещающего цвета (без `#`).
* `width` (`integer`) — (для `type` = `tile`) ширина плитки паттерна.
* `height` (`integer`) — (для `type` = `tile`) высота плитки паттерна.
* `points` (`array`) — (для `type` = `gradient`) точки градиента. Массив объектов, каждый из которых содержит поля `position` (`number`) — положение точки — и `color` (`string`) — HEX-код цвета точки.
* `id`  (`integer`)  — идентификатор фона.

## Права доступа

`ex`

## Типы ключа

`vk_apps`, `is_standalone`
