# appWidgets.getGroupImageUploadServer

> Источник: [https://dev.vk.ru/ru/method/appWidgets.getGroupImageUploadServer](https://dev.vk.ru/ru/method/appWidgets.getGroupImageUploadServer)
Позволяет получить адрес для загрузки фотографии в коллекцию сообщества для виджетов приложений сообществ. Подробнее — в разделе [Изображения в виджете](https://dev.vk.com/ru/api/community-apps-widgets/getting-started#Изображения%20в%20виджете).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `image_type` | `string` | да | Тип изображения. Возможные значения:<br>   * `160x160`.<br>   * `160x240`.<br>   * `24x24`.<br>   * `510x128`.<br>   * `50x50`.<br>Изображения должны быть загружены в утроенном размере: например, для картинки с конечным размером 160x160 нужно загружать изображение размером 480x480. |

## Результат

Возвращает объект с единственным полем `upload_url`, содержащим URL для загрузки изображения.
Для загрузки изображения сгенерируйте `POST`-запрос с файлом в поле `file` на полученный адрес, а затем вызовите метод [`appWidgets.saveGroupImage`](method/appWidgets.saveGroupImage).

## Права доступа

`app_widget`

## Типы ключа

`group_access_only`
