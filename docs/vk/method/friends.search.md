# friends.search

> Источник: [https://dev.vk.ru/ru/method/friends.search](https://dev.vk.ru/ru/method/friends.search)
Позволяет искать по списку друзей пользователей.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `positive` | да | Идентификатор пользователя, по списку друзей которого необходимо произвести поиск. |
| `q` | `string` | нет | Строка запроса. |
| `fields` | `string` | нет | Список дополнительных полей, которые необходимо вернуть.<br>Доступные значения: <br>* `bdate`;<br>* `can_post`;<br>* `can_see_all_posts`;<br>* `can_write_private_message`;<br>* `city`;<br>* `contacts` <br>* `country`<br>* `domain_`;<br>* `education`;<br>* `has_mobile`; <br>* `last_seen`;<br>* `nickname`; <br>* `online`;<br>* `photo_100`;<br>* `photo_200_orig`; <br>* `photo_50`; <br>* `relation`;<br>* `screen_name`;<br>* `sex`;<br>* `status`;<br>* `timezone`;<br>* `universities`. |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователя. Возможные значения: <br>* именительный – `nom`;<br>* родительный – `gen`;<br>* дательный – `dat`;<br>* винительный – `acc`;<br>* творительный – `ins`;<br>* предложный – `abl`. <br>По умолчанию `nom`. |
| `offset` | `positive` | нет | Смещение, необходимое для выборки определенного подмножества друзей. |
| `count` | `positive` | нет | Количество друзей, которое нужно вернуть. |

## Результат

После успешного выполнения метод  возвращает список объектов [пользователей](reference/objects/user).

## Права доступа

`friends`
