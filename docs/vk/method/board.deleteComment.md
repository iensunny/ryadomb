# board.deleteComment

> Источник: [https://dev.vk.ru/ru/method/board.deleteComment](https://dev.vk.ru/ru/method/board.deleteComment)
Удаляет сообщение темы в обсуждениях сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `string` | да | Идентификатор сообщества. |
| `topic_id` | `string` | да | Идентификатор обсуждения. |
| `comment_id` | `string` | да | Идентификатор комментария в обсуждении. |

## Результат

После успешного выполнения, а также в том случае, если комментарий уже удален, возвращает `1`.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Связанные методы

- [board.restoreComment](method/board.restoreComment)
- [board.createComment](method/board.createComment)
- [board.editComment](method/board.editComment)
