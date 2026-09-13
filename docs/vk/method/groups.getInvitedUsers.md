# groups.getInvitedUsers

> Источник: [https://dev.vk.ru/ru/method/groups.getInvitedUsers](https://dev.vk.ru/ru/method/groups.getInvitedUsers)
Возвращает список пользователей, которые были приглашены в группу.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор группы, список приглашенных в которую пользователей нужно вернуть. |
| `offset` | `positive` | нет | Смещение, необходимое для выборки определённого подмножества пользователей. |
| `count` | `positive` | нет | Количество пользователей, информацию о которых нужно вернуть. |
| `fields` | `string` | нет | Список дополнительных полей, которые необходимо вернуть.<br>Доступные значения: <br>* `bdate`;<br>* `can_post`;<br>* `can_see_all_posts`;<br>* `can_write_private_message`;<br>* `city`;<br>* `contacts`;<br>* `country`;<br>* `domain`;<br>* `education`,<br>* `has_mobile`;<br>* `last_seen`;<br>* `nickname`;<br>* `online`;<br>* `photo_100`;<br>* `photo_200_orig`;<br>* `photo_50`;<br>* `relation`;<br>* `sex`;<br>* `status`;<br>* `timezone`;<br>* `universities`. |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователя. <br>Возможные значения:<br>* именительный – `nom`;<br>* родительный – `gen`;<br>* дательный – `dat`;<br>* винительный – `acc`;<br>* творительный – `ins`;<br>* предложный – `abl`.<br>По умолчанию `nom`. |

## Результат

Возвращает список объектов [пользователей](reference/objects/user).

## Права доступа

`groups_ex`

## Типы ключа

`is_standalone`
