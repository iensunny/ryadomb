# Эпизод подкаста

> Источник: [https://dev.vk.ru/ru/reference/objects/podcast-episode](https://dev.vk.ru/ru/reference/objects/podcast-episode)
> Объект содержит все поля объекта [аудио](reference/objects/audio), а также поле `podcast_info` (`object`), описание полей которого приведено ниже:

## `cover`
`object`
Информация об обложке эпизода. Содержит поля:

## `sizes`
`array`
Массив с копиями изображения в разных размерах. Описание объекта находится [на отдельной странице](reference/objects/photo-sizes).

## `plays`
`integer`
Количество прослушиваний.

## `is_favorite`
`integer`, [`0`, `1`]
Наличие в закладках. Возможные значения:
* `0` — эпизод не находится в закладках;
* `1` — эпизод находится в закладках.

## `description`
`string`
Описание эпизода.
