# Блок ленты историй

> Источник: [https://dev.vk.ru/ru/reference/objects/story-feed-item](https://dev.vk.ru/ru/reference/objects/story-feed-item)
Объект описывает блок ленты историй. Содержит следующие поля:

## `type`
`string`
Тип элемента ленты.

Возможные значения:
* `stories` —  история;
* `community_grouped_stories` —  сгруппированные истории сообществ;
* `app_grouped_stories` — сгруппированные истории мини-приложений.



## `stories`
`array`
Массив  [объектов истории](reference/objects/story).
## `grouped`
`array`
Массив [объектов блока ленты историй](reference/objects/story-feed-item).
## `app`
`object`
 [Объект приложения](reference/objects/app).
