# Источник записи

> Источник: [https://dev.vk.ru/ru/reference/objects/post-source](https://dev.vk.ru/ru/reference/objects/post-source)
Объект `post_source`, описывающий способ размещения [записи на стене](reference/objects/post), содержит следующие поля:

## `type`
`string`
Тип источника. Возможные значения:
* `vk` — запись создана через основной интерфейс сайта [https://vk.com/](https://vk.com/);
* `widget` — запись создана через [виджет](widgets/overview) на стороннем сайте;
* `api` — запись создана приложением через API;
* `rss` — запись создана посредством импорта RSS-ленты со стороннего сайта;
* `sms` — запись создана посредством отправки SMS-сообщения на специальный номер.

## `platform`
`string`
Название платформы, если оно доступно. Возможные значения:
*  `android`;
*  `iphone`;
*  `wphone`.

## `data`
`string`
Тип действия (только для `type` = `vk` или `widget`). Возможные значения:
* `profile_activity` — изменение статуса под именем пользователя (для `type` = `vk`);
* `profile_photo` — изменение профильной фотографии пользователя (для `type` = `vk`);
* `comments` —  [виджет комментариев](widgets/comments) (для `type` = `widget`);
* `like` — [виджет «Мне нравится»](widgets/like) (для `type` = `widget`);
* `poll` — [виджет опросов](widgets/poll) (для `type` = `widget`).

## `url`
`string`
URL ресурса, с которого была опубликована запись.
