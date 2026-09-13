# Стикер

> Источник: [https://dev.vk.ru/ru/reference/objects/sticker](https://dev.vk.ru/ru/reference/objects/sticker)
Объект, описывающий стикер, содержит следующие поля:

## `product_id`

`integer`
Идентификатор набора. 



## `sticker_id`
`integer`
Идентификатор стикера.

## `animation_url`
`string`
URL анимации стикера.

## `is_allowed`
`boolean`
Информация о том, доступен ли стикер.

## Версии API ниже 5.190

### `images`
`array`
Изображения для стикера (с прозрачным фоном). Массив, каждый объект в котором содержит поля:
* `url` (`string`) — URL копии изображения.
* `width` (`integer`) — ширина копии в пикселях.
* `height` (`integer`) — высота копии в пикселях.

### `images_with_background`
`array`
Изображения для стикера (с непрозрачным фоном). Массив, каждый объект в котором содержит поля:
* `url` (`string`) — URL копии изображения.
* `width` (`integer`) — ширина копии в пикселях.
* `height` (`integer`) — высота копии в пикселях.
