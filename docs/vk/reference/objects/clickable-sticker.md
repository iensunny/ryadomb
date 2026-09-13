# Cправочник API | Объекты | Медиаконтент и вложения | Кликабельный стикер в истории

> Источник: [https://dev.vk.ru/ru/reference/objects/clickable-sticker](https://dev.vk.ru/ru/reference/objects/clickable-sticker)
<!-- ---
title: 'Cправочник API | Объекты | Медиаконтент и вложения | Кликабельный стикер в истории'
is_hidden: false
is_search_available: true
menu: 'api_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Кликабельный стикер в истории

Объект, описывающий кликабельный стикер. В объекте истории доступно поле `clickable_stickers`. Объект стикера вклеивается разработчиком на клиенте самостоятельно, на сервер передаются только координаты. 

## Поля объекта `clickable_stickers`

### `original_width`
`integer`
Ширина оригинального фото или видео.

### `original_height`
`integer`
Высота оригинального фото или видео.

### `clickable_stickers`
`array`
Массив объектов кликабельных стикеров.

## Объект `hashtag`

### `hashtag`
`string`, обязательный
Текст хештега.

### `style`
`string`
Стиль хештега. По умолчанию: `blue_gradient`. Возможные значения: `transparent`, `blue_gradient`.

## Объект `mention`

### `mention`
`string`, обязательный
Текст в формате упоминания: для профилей людей `"[name](id123)"`, для групп/сообщ./событий - `"[name](club123)"`.

### `style`
`string`
Стиль упоминания. По умолчанию: `red_gradient`. Возможные значения: `transparent`, `red_gradient`.

## Объект `music`

### Объект `audio`
Подробнее — в разделе [Аудиозапись](/reference/objects/audio).

### audio_start_time
`integer`
Время начала воспроизведения аудиозаписи.

### style
`string`
Стиль отображения аудиозаписи. Возможные значения: 
* `album` — большое изображение альбома и название аудиозаписи. 
* `horizontal` — малое изображение альбома и название аудиозаписи.
* `header_meta` — без изображений, только название аудиозаписи в верхней части истории.

## Объект `place`

### `place_id`
`integer`, обязательный
ID места.

### `title`
`string`, обязательный
Название места.

### `category_id`
`integer`
ID категории места.

### `style`
`string`
Стиль. По умолчанию: `blue`. Возможные значения: `transparent`, `blue`, `green`, `white`.

## Объект `link`

### `link`
`string`, обязательный
Ссылка на контент.

### `tooltip_text_key`
`string`
Ключ на строку, которая будет отображаться на клиенте при клику на тултип
Варианты тултипов сейчас:
* ` tooltip_open_post'`,
* ` tooltip_open_photo'`,
*  `'tooltip_open_page'`,
*  `'tooltip_open_default'`(подставится, если не передать).

## Объект `time`

### `style`
`integer`
Стиль стикера времени: `black`,`white`, `green`, `text`, `date`
По умолчанию: `date`.

### `timestamp_ms`
`long`
Unix timestamp в милисекундах.

### `date`
`string`
Дата (альтернатива `timestamp_ms`) в формате 
`yyyy:MM:ddHH:mm:ss` (такой формат выбран для унификации даты из [`exif` полей](https://ru.wikipedia.org/wiki/EXIF).

### `title`
`string`
Верхний тайтл стикера, используется только для стиля `date`

## Объект `question`

### `question`
`string`, обязательный
Текст вопроса.

### `button` (`question_button`)
`string`, обязательный
Текст кнопки.

### `style`
`string`
Cтиль стикера ("light"/"impressive").
`light` – кнопка будет иметь цвет `color`, фон будет белый.
`Impressive` – кнопка будет белой, фон будет иметь цвет `color`.
На клиенте default: `light`.

### `color`
`string`
Основной цвет. Hex строка в RGB (например "3f8ae0")
На клиенте default: "3f8ae0"

## Объект `text`

### `text`
`string`, обязательный
Текст, может содержать упоминания/хештеги в форматах указанных с соответствующих объектах.

### `style`
`string`
Стиль текста (названия взяты по стате): `classic`, `cursive`, `marker`, `italics`, `typewriter`, `poster`, `retro`.

### `background_style`
`string`
Стиль фона/обводки, значения: `none`, `alpha`, `solid`, `sticker`, `neon`
Применимость стиля фона зависит от исходного стиля текста
По умолчанию: `none`.

### `alignment`
`string`
Выравнивание: `center`, `left`, `right`.

### `selection_color`
`string`
Цвет в формате: #ff0000. 
Если `background_style` задан `none`, то значение будет определять цвет текста. Иначе будет означать цвет применяемый к стилю

Поддерживаемые стили фона относительно стиля текста

### `'classic `
`none`, `solid`, `alpha`, `sticker`.

### `'cursive `
`none`, `solid`.

### `'marker`
`none`, `neon`.

### `'italics `
`none`, `solid`.

### `'typewriter `
`none`, `solid`.

### `'poster `
`none`, `solid`.

### `'retro `
`none`, `solid`.

## Объект `emoji`

### `emoji`
`string`, обязательный
[Символ emoji](reference/emoji).

## Объект `sticker`

### `sticker_id`
`integer`, обязательный
ID стикера.

### `pack_id`
`integer`, обязательный
ID набора стикера.

## Объект `market_item`

### `title`
`string`, обязательный
Текст для заголовка товара.

### `product_id`
`integer`
ID продукта для VK товаров.

### `owner_id`
`integer`
ID владельца для VK товаров.

### `link`
`string`
Ссылка на товар AliExpress.

## Объект `app`

`app_id`
`integer`, обязательный
ID приложения, является обязательным т.к передача может происходить по ссылке, не напрямую через VK Mini Apps.

`app_context`
`string`
Если апп открывается из истории, то в параметрах запуска в `vk_ref` будет значение (проставляется на бекенде): `story{owner_id}_{story_id}_{access_key}_{sticker_id}_{context}`. Максимум 500 символов.

## Объект `poll`

`poll_id`
`integer`, обязательный
ID опроса.

`poll_owner_id`
`integer`
ID владельца.

`is_board`
`boolean`
Из обсуждений ли опрос.

## Общие поля для всех типов стикеров

`type`
`string`, обязательный
Тип стикера. Возможные значения:
* `mention` — упоминание;
* `hashtag` — хэштег.

`clickable_area`
`array`, обязательный
Массив точек с координатами кликабельной области. Каждый элемент — объект с двумя координатами точки x, y (int). Желательно передавать прямоугольную область из четырех точек.

`style`
`string`
Визуальный стиль стикера. Возможные значения:
* `transparent` — прозрачный;
* `underline` — подчеркнутый (только для Android).

## Опциональные поля, в зависимости от типа стикера

### `type=mention`
`mention`
`string`
Содержит строку в формате упоминания ВКонтакте, например: `[id1|name]` или `[club1|name]`.

### `type=hashtag`
`hashtag`
`string`
Содержит строку в формате хештега. Должна обязательно начинаться с символа #.



```json
{
  "original_height": 2001,
  "original_width": 1125,
  "clickable_stickers": [
    {
      "type": "mention",
      "clickable_area": [
        {
          "x": 425,
          "y": 853
        },
        {
          "x": 825,
          "y": 1210
        },
        {
          "x": 699,
          "y": 1351
        },
        {
          "x": 299,
          "y": 993
        }
      ],
      "mention": "[club22822305|@team]",
      "style": "red_gradient"
    },
    {
      "type": "hashtag",
      "clickable_area": [
        {
          "x": 269,
          "y": 525
        },
        {
          "x": 663,
          "y": 377
        },
        {
          "x": 711,
          "y": 505
        },
        {
          "x": 317,
          "y": 653
        }
      ],
      "hashtag": "#hello",
      "style": "blue_gradient"
    }
  ]
}
```
