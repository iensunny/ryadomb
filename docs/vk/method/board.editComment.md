# board.editComment

> Источник: [https://dev.vk.ru/ru/method/board.editComment](https://dev.vk.ru/ru/method/board.editComment)
Редактирует одно из сообщений в обсуждении сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `string` | да | Идентификатор сообщества, в котором размещено обсуждение. |
| `topic_id` | `string` | да | Идентификатор обсуждения. |
| `comment_id` | `string` | да | Идентификатор комментария в обсуждении. |
| `message` | `string` | нет | Новый текст комментария (является обязательным, если не задан параметр `attachments`). |
| `attachments` | `string` | нет | Новый список объектов, приложенных к комментарию и разделённых символом `","`. Поле `attachments` представляется в формате:<br>```<br><type><owner_id>_<media_id>,<type><owner_id>_<media_id><br>```<br>`<type>` — тип медиа-вложения:<br>* `photo` — фотография <br>* `video` — видеозапись <br>* `audio` — аудиозапись <br>* `doc` — документ<br>`<owner_id>` — идентификатор владельца медиа-вложения <br>`<media_id>` — идентификатор медиа-вложения. <br>Например:<br>```<br>photo100172_166443618,photo66748_265827614<br>```<br>Параметр является обязательным, если не задан параметр `message`. |

## Результат

После успешного выполнения возвращает `1`.

## Права доступа

`groups_ex`

## Типы ключа

`is_standalone`

## Связанные методы

- [board.createComment](method/board.createComment)
- [board.deleteComment](method/board.deleteComment)
