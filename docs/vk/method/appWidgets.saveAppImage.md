# appWidgets.saveAppImage

> Источник: [https://dev.vk.ru/ru/method/appWidgets.saveAppImage](https://dev.vk.ru/ru/method/appWidgets.saveAppImage)
Позволяет сохранить изображение в коллекцию приложения для виджетов приложений сообществ после загрузки на сервер. Подробнее — в разделе [Изображения в виджете](api/community-apps-widgets/getting-started#Изображения%20в%20виджете).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `hash` | `string` | нет |  |
| `image` | `string` | да | Ответ, полученный после [загрузки изображения на сервер](method/appWidgets.getAppImageUploadServer). Параметр передается в кодировке base64.<br>Подробнее — в разделе [Как загрузить изображение](https://dev.vk.com/ru/api/community-apps-widgets/getting-started#Как%20загрузить%20изображение). |

## Результат

Возвращает объект, который содержит следующие поля:
* `id` (`string`) — идентификатор изображения.
* `type` (`string`) — тип изображения. Возможные значения:
   * `160x160`.
   * `160x240`.
   * `24x24`.
   * `510x128`.
   * `50x50`.
* `images ` (`array`) — массив копий изображения. Каждый объект в массиве содержит следующие поля:
   * `url` (`string`) — URL копии.
   * `width` (`integer`) — ширина в px.
   * `height` (`integer`) — высота в px.

## Типы ключа

`secure`

## Ошибки

- 129
