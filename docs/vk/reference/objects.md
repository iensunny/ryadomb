# Cправочник API | Объекты | Список объектов

> Источник: [https://dev.vk.ru/ru/reference/objects](https://dev.vk.ru/ru/reference/objects)
<!-- ---
title: 'Справочник API | Объекты | Список объектов'
is_hidden: false
is_search_available: true
menu: 'api_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Список объектов

Некоторые объекты используются сразу в целых группах методов. Ниже представлены ссылки на страницы с подробным описанием структуры таких объектов.

## Ключ доступа к данным (`access_key`)

При получении объектов, прямого доступа к которым может не быть, например, фотографий или видео в новостях, вместе с объектами приходит поле `access_key`, которое необходимо передавать при получении этих объектов напрямую или при совершении с ними действий. 

Например, поле `access_key` принимают методы: [`video.get`](method/video.get), [`photos.getById`](method/photos.getById). 

`access_key` нужно добавить к строковому идентификатору объекта через символ подчёркивания:

```
123456_654312_6d103522bc13b790c5
```

## Основные объекты

 | Объект | Пример использования |
 |---|---|
 |[Пользователь](reference/objects/user) | [`users.get`](method/users.get) |
 |[Сообщество](reference/objects/group) | [`groups.get`](method/groups.get) |
 |[Запись на стене](reference/objects/post)| [`wall.get`](method/wall.get) |
 |[Комментарий на стене](reference/objects/comment)| [`wall.getComments`](method/wall.getComments) |
 |[Личное сообщение](reference/objects/message)| [`messages.getById`](method/messages.getById) |
 |[Беседа](reference/objects/conversation)| [`messages.getConversationsById`](method/messages.getConversationsById) |
 |[Чат](reference/objects/chat)| [`messages.getChat`](method/messages.getChat) |
 |[Вики-страница](reference/objects/wiki-page)| [`pages.get`](method/pages.get) |
 |[Товар](reference/objects/market-item)| [`market.get`](method/market.get) |
 |[Подборка товаров](reference/objects/market-album)| [`market.getAlbums`](method/market.getAlbums) |
 |[Заказ](reference/objects/market-order)| [`market.getOrders`](method/market.getOrders) |
 |[Обсуждение](reference/objects/topic)| [`board.getTopics`](method/board.getTopics) |
 |[Комментарий в обсуждении](reference/objects/comment-topic)| [`board.getComments`](method/board.getComments) |
 |[Приложение](reference/objects/app)| [`apps.get`](method/apps.get) |
 |[Опрос](reference/objects/poll)| [`polls.getById`](method/polls.getById) |
 |[Данные статистики](reference/objects/stats-format)| [`stats.get`](method/stats.get) |
 |[Адрес](reference/objects/address)| [`groups.getAddresses`](method/groups.getAddresses) |

## Медиаконтент и вложения

| Объект | Пример использования |
|---|---|
|[Фотография](reference/objects/photo)  | [`photos.get`](method/photos.get)|
|[Аудиозапись](reference/objects/audio) | — |
|[Видеозапись](reference/objects/video) | [`video.get`](method/video.get)|
|[Файл](reference/objects/doc) | [`docs.get`](method/docs.get) |
|[Медиавложения в записях на стене](reference/objects/attachments-wall) | [`wall.get`](method/wall.get)|
|[Медиавложения в личных сообщениях](reference/objects/attachments-message)| [`messages.getById`](method/messages.getById) |
|[Прикрепленная ссылка](reference/objects/link)|[`wall.get`](method/wall.get)|
|[Стикер](reference/objects/sticker)| [`messages.getById`](method/messages.getById) |
|[Подарок](reference/objects/gift-item)|[`gifts.get`](method/gifts.get)|
|[Геометка](reference/objects/geo)| [`messages.getById`](method/messages.getById) |
|[Виджеты приложений сообществ](reference/objects/app-widget)|[`appWidgets.update`](method/appWidgets.update)|
|[История](reference/objects/story)|[`stories.get`](method/stories.get)|
|[Блок ленты историй](reference/objects/story-feed-item)|[`stories.get`](method/stories.get)|
|[Кликабельный стикер в истории](reference/objects/clickable-sticker)| [`stories.getPhotoUploadServer`](method/stories.getPhotoUploadServer)|
|[Граффити](reference/objects/graffiti) | — |
|[Звонок](reference/objects/call) | — |



## Вспомогательные объекты и наборы значений

|Объект | Пример использования|
|---|---|
|[Жанры аудиозаписей](reference/objects/audio-genres)| — |
|[Источник записи](reference/objects/post-source)| [`wall.getById`](method/wall.getById)|
|[Кнопка](reference/objects/button)| — |
|[Место](reference/objects/place)| — |
|[Настройки приватности](reference/objects/privacy)| [`photos.getAlbums`](method/photos.getAlbums)|
|[Приложение из магазина](reference/objects/application)| — |
|[Продукт](reference/objects/product)| — |
|[Рейтинг продукта](reference/objects/rating)| — |
|[Формат описания размеров фотографии](reference/objects/photo-sizes)|[`photos.get`](method/photos.get)|
|[Цена](reference/objects/price)| — |
|[Эпизод подкаста](reference/objects/podcast-episode)| — |
