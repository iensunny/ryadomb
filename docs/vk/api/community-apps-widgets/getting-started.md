# Интеграция | Сообщества и пользователи | Виджеты сообществ

> Источник: [https://dev.vk.ru/ru/api/community-apps-widgets/getting-started](https://dev.vk.ru/ru/api/community-apps-widgets/getting-started)
<!-- ---
title: 'Интеграция | Сообщества и пользователи | Виджеты сообществ'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Виджеты сообществ

Виджет — это блок с информацией из [плагина](plugins/overview): например, список ресторанов или кинотеатров, результаты футбольного матча или киберспортивного поединка, перечень цен на услуги или объекты недвижимости. Блок с виджетом отображается в верхней части сообщества и доступен как в полной версии сайта, так и в мобильных клиентах.

Установка виджетов доступна из плагинов, которые поддержали у себя эту возможность. Например: «Рассылки», «Тесты», «Пожертвования», «Заявки» и «Анкеты». Все они доступны в официальном каталоге плагинов: [vk.com/community_apps](https://vk.com/community_apps).

![title=Виджет «Cover List (обложки)»](fd4cd42b0be3920c6faa6149686dc4dada4f512187801c21963b73d8 "-3225928841457391826") 

В виджете можно отображать список матчей, таблицу, цитату и многое другое. Подробное описание всех доступных типов виджетов — в разделе [Виджеты приложений сообществ](reference/objects/app-widget).

## Установка виджета

1. Перед установкой виджета пользователь должен добавить плагин в сообщество. Чтобы добавить плагин, используйте событие VK Bridge [`VKWebAppAddToCommunity`](bridge/VKWebAppAddToCommunity).

1. Чтобы установить виджет, используйте событие VK Bridge [`VKWebAppShowCommunityWidgetPreviewBox`](bridge/VKWebAppShowCommunityWidgetPreviewBox). 

## Обновление виджета

Если вы хотите, чтобы виджет плагина в сообществе обновлялся динамически:

1. Получите для плагина ключ доступа сообщества с правом доступа `app_widget` при помощи события VK Bridge [`VKWebAppGetCommunityToken`](bridge/VKWebAppGetCommunityToken).

1. Чтобы обновить виджет, со стороны сервера вызовите метод API [`appWidgets.update`](method/appWidgets.update). В качестве аргументов он принимает:
   * `type` (`string`) — тип виджета. Может принимать значения `text`, `list`, `table`, `tiles`, `compact_list`, `cover_list`, `match`, `matches`, `donation`.
   * `code` (`string`) — код виджета. Аналог параметра`code` в методе [`execute`](method/execute).

Подробнее о синтаксисе методов API — в разделе [Формат запросов](api/api-requests).

Обновлять данные виджета можно не чаще 1 раза в 30 секунд.

![](17f7a1e5eb162050c08187cbfbdf32c7e5ff38658f6dc172fc835796 "-280353333192164762")

## Код виджета

`code` должен возвращать JSON-объект, описывающий виджет. Элементы виджета могут содержать только внутренние ссылки на vk.com (кроме away.php) и vk.me. 

В общем случае параметр `code` выглядит так:

```JSON
return {
    '''widget'''
};
```

Структура объекта `widget` зависит от типа виджета. Подробное описание объекта — в разделе [Приложение](widgets/app).

Чтобы скрыть виджет у пользователя, передайте в `code` значение `return false`.
 
Внутри `code` можно использовать ограниченный набор методов API, по умолчанию используется версия API 5.100.

* [`users.get`](method/users.get)
* [`users.getSubscriptions`](method/users.getSubscriptions)
* [`users.getFollowers`](method/users.getFollowers)
* [`wall.get`](method/wall.get)
* [`wall.search`](method/wall.search)
* [`photos.getAlbums`](method/photos.getAlbums)
* [`photos.get`](method/photos.get)
* [`photos.getById`](method/photos.getById)
* [`photos.search`](method/photos.search)
* [`friends.get`](method/friends.get)
* [`widgets.getComments`](method/widgets.getComments)
* [`widgets.getPages`](method/widgets.getPages)
* [`wall.getById`](method/wall.getById)
* [`wall.getReposts`](method/wall.getReposts)
* [`wall.getComments`](method/wall.getComments)
* [`groups.isMember`](method/groups.isMember)
* [`groups.getById`](method/groups.getById)
* [`groups.getMembers`](method/groups.getMembers)
* [`board.getTopics`](method/board.getTopics)
* [`board.getComments`](method/board.getComments)
* [`likes.getList`](method/likes.getList)
* [`apps.getCatalog`](method/apps.getCatalog)
* [`apps.get`](method/apps.get)



## Базовые переменные

Переменная `Args` содержит в себе данные, которые могут пригодиться для отрисовки виджета:

*  `Args.uid` — идентификатор текущего пользователя.
*  `Args.platform` — тип платформы, с которой открыта группа:
   *  `web`
   *  `mobile`
   *  `android`
   *  `iphone`
*  `Args.lang` — идентификатор языка пользователя:
   *  `0` — русский
   *  `1` — украинский
   *  `2` — белорусский
   *  `3` — английский
   *  `4` — испанский
   *  `5` — финский
   *  `6` — немецкий
   *  `7` — итальянский

## Изображения в виджете

:::note
26 мая 2025 года мы обновили механизм загрузки изображений в виджеты. Изменения затронут только новые загрузки — существующие изображения продолжат отображаться в виджетах. Чтобы добавлять новые картинки, обновите код вашего плагина.
:::

В виджет можно загрузить изображения из нескольких источников:
* Коллекция приложения. Такие изображения можно использовать в разных сообществах.
* Коллекция сообщества. Такие изображения можно использовать только в том сообществе, где установлен плагин.

Изображения должны быть загружены в утроенном размере: например, для картинки с конечным размером 160&times;160&nbsp;px нужно загружать изображение размером 480&times;480&nbsp;px.

### Как загрузить изображение

1. Получите адрес сервера для загрузки с помощью одного из методов:
   * [`appWidgets.getAppImageUploadServer`](method/appWidgets.getAppImageUploadServer), чтобы получить адрес сервера для коллекции приложения.
   * [`appWidgets.getGroupImageUploadServer`](method/appWidgets.getGroupImageUploadServer), чтобы получить адрес сервера для коллекции сообщества.

1. Загрузите изображение на сервер с помощью POST-запроса, например:

   ```bash
   curl -X POST 'https://pu.vk.com/gu/photo/v2/upload' \
     -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
     -F 'file=@C:/path/file-name.png'
   ```

   Пример ответа:

   ```json
   {
      "sha": "7ab...e9d9",
      "secret": "-123...59",
      "meta": {
         "height": "480",
         "kid": "8039ef17bf7feb673b91f90370302480",
         "width": "480"
      },
      "hash": "12ab3cde4ecc16e11cd26d992941ed3c",
      "server": "917608",
      "group_id": 123456789,
      "request_id": "ZSfNEUcvOpP7-KOiOtXsH2AJUQghnw",
      "app_id": 1234567
   }
   ```

1. Полученный ответ преобразуйте в строку в кодировке Base64:

   ```
   ewogICAgICAic2hhIjogIjdhYi4uLmU5ZDkiLAogICAgICAic2VjcmV0IjogIi0xMjMuLi41OSIsCiAgICAgICJtZXRhIjogewogICAgICAgICAiaGVpZ2h0IjogIjQ4MCIsCiAgICAgICAgICJraWQiOiAiODAzOWVmMTdiZjdmZWI2NzNiOTFmOTAzNzAzMDI0ODAiLAogICAgICAgICAid2lkdGgiOiAiNDgwIgogICAgICB9LAogICAgICAiaGFzaCI6ICIxMmFiM2NkZTRlY2MxNmUxMWNkMjZkOTkyOTQxZWQzYyIsCiAgICAgICJzZXJ2ZXIiOiAiOTE3NjA4IiwKICAgICAgImdyb3VwX2lkIjogMTIzNDU2Nzg5LAogICAgICAicmVxdWVzdF9pZCI6ICJaU2ZORVVjdk9wUDctS09pT3RYc0gyQUpVUWdobnciLAogICAgICAiYXBwX2lkIjogMTIzNDU2Nwp9
   ```

1. Сохраните изображение с помощью одного из методов:
   * [`appWidgets.saveAppImage`](method/appWidgets.saveAppImage), чтобы сохранить изображение в коллекцию приложения.
   * [`appWidgets.saveGroupImage`](method/appWidgets.saveGroupImage), чтобы сохранить изображение в коллекцию сообщества.

   Пример запроса:

   ```bash
   curl -X POST 'https://api.vk.ru/method/appWidgets.saveGroupImage' \
      -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
      -F 'image=ewogICAgICAic2hhIjogIjdhYi4uLmU5ZDkiLAogICAgICAic2VjcmV0IjogIi0xMjMuLi41OSIsCiAgICAgICJtZXRhIjogewogICAgICAgICAiaGVpZ2h0IjogIjQ4MCIsCiAgICAgICAgICJraWQiOiAiODAzOWVmMTdiZjdmZWI2NzNiOTFmOTAzNzAzMDI0ODAiLAogICAgICAgICAid2lkdGgiOiAiNDgwIgogICAgICB9LAogICAgICAiaGFzaCI6ICIxMmFiM2NkZTRlY2MxNmUxMWNkMjZkOTkyOTQxZWQzYyIsCiAgICAgICJzZXJ2ZXIiOiAiOTE3NjA4IiwKICAgICAgImdyb3VwX2lkIjogMTIzNDU2Nzg5LAogICAgICAicmVxdWVzdF9pZCI6ICJaU2ZORVVjdk9wUDctS09pT3RYc0gyQUpVUWdobnciLAogICAgICAiYXBwX2lkIjogMTIzNDU2Nwp9' \
      -F 'v=:version'
   ```

   Пример ответа:
   ```json
   {
      "response": {
         "id": "230800838_2928790",
         "type": "160x160",
         "images": [
               {
                  "url": "https://sun9-57.userapi.com/impg/erBe1xJQnREHiMOldZKVcX4xx5dDcqnpPBLp2Q/VWgINQxx1JY.jpg?size=160x160&quality=90&sign=3cc317d49b6e977b56034db0d5ccf8bc&c_uniq_tag=WtnZKW2e7a0LSvYWObRe_myHaK2gnrGChY-QvKUS5Aw",
                  "width": 160,
                  "height": 160
               },
               {
                  "url": "https://sun9-57.userapi.com/impg/erBe1xJQnREHiMOldZKVcX4xx5dDcqnpPBLp2Q/VWgINQxx1JY.jpg?size=320x320&quality=90&sign=e865d489181ceab1a3291e7e7957803c&c_uniq_tag=k5wB6LnFpyoxqT8TSJqQSeN2nYQcFfZMcvFjtROaG0M",
                  "width": 320,
                  "height": 320
               },
               {
                  "url": "https://sun9-57.userapi.com/erBe1xJQnREHiMOldZKVcX4xx5dDcqnpPBLp2Q/VWgINQxx1JY.jpg",
                  "width": 480,
                  "height": 480
               }
         ]
      }
   }
   ```

### Изображения из фотографии профиля

Вы также можете использовать внутри виджета квадратное изображение главной фотографии профиля пользователя, сообщества или других приложений. Чтобы использовать такое изображение, передайте в [поле `icon_id`](reference/objects/app-widget) одно из значений:
* `id<123456>` — для фотографии профиля пользователя.
* `club<123456>` — для фотографии сообщества.
* `app<123456>` — для иконки приложения. 

В этом случае во всех аналогичных полях виджета также должны использоваться главные фотографии пользователя, сообщества или приложения соответственно.
