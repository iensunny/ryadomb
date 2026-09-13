# Медиавложения в личных сообщениях

> Источник: [https://dev.vk.ru/ru/reference/objects/attachments-message](https://dev.vk.ru/ru/reference/objects/attachments-message)
Информация о медиавложениях в личных сообщениях возвращается в виде массива `attachments`. Каждый элемент массива представляет собой объект с двумя полями. Первое поле — `type` (`string`) содержит тип вложения (`photo`,`video`,`audio` и т.д.). Название второго поля совпадает со значением, переданным в `type`. Второе поле содержит объект, представляющий медиавложение. Структура объекта в этом поле зависит от его типа.

Пример объекта `attachments` для двух вложений (фото и аудио):

```JSON
[
  {
    "type": "photo",
    "photo": <объект photo>
  },
  {
    "type": "audio",
    "audio": <объект audio>
  }
]
```

> Каждый объект может содержать дополнительное поле `access_key` — ключ доступа к контенту.
> [Подробнее об `access_key`](reference/objects)

## Возможные значения поля `type`

| `type` | Объект | Ссылка&nbsp;на&nbsp;описание&nbsp;&nbsp;&nbsp; |
|---|---|---|
| `photo`| Фотография | [/objects/photo](reference/objects/photo) |
| `video` | Видеозапись | [/objects/video](reference/objects/video) |
| `audio` | Аудиозапись | [/objects/audio](reference/objects/audio) |
| `audio_message` | Голосовое сообщение | [/objects/audio-message](reference/objects/audio-message) |
| `doc`  | Документ | [/objects/doc](reference/objects/doc) |
| `link` | Ссылка | [/objects/link](reference/objects/link) |
| `market` | Товар | [/objects/market](reference/objects/market) |
| `market_album` | Подборка товаров | [/objects/photo](reference/objects/market_album) |
| `wall` | Запись на стене. Во вложении возвращается объект [записи на стене](reference/objects/post). Обратите внимание, вместо поля `owner_id` возвращается `to_id`.| [/objects/wall](reference/objects/wall) |
| `wall_reply` | Комментарий на стене.&#x0a; Во вложении возвращается объект [комментария на стене](reference/objects/comment) с дополнительными полями:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `post_id`(`integer`) — идентификатор записи, к которой оставлен комментарий;&#x0d;&#x0a; &nbsp;&nbsp; &bullet;  `owner_id`(`integer`) — идентификатор владельца стены, на которой оставлен комментарий. | [/objects/wall_reply](reference/objects/wall_reply) |
| `sticker` | Стикер | [/objects/photo](reference/objects/photo) |
| `gift-item` | Подарок | [/objects/gift-item](reference/objects/gift-item) |
| `call` | Звонок.&#x0a; Возвращается для версии 5.80 и выше. | [/objects/call](reference/objects/call) |
