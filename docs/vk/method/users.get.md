# users.get

> Источник: [https://dev.vk.ru/ru/method/users.get](https://dev.vk.ru/ru/method/users.get)
Метод позволяет получить информацию о пользователях.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_ids` | `string` | нет | Перечисленные через запятую идентификаторы пользователей или их короткие имена (`screen_name`). По умолчанию — идентификатор текущего пользователя. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения:<br>* `activities`,<br>* `about`, <br>* `blacklisted`,<br>* `blacklisted_by_me`,<br>* `books`,<br>* `bdate`,<br>* `can_be_invited_group`,<br>* `can_post`,<br>* `can_see_all_posts`,<br>* `can_see_audio`,<br>* `can_send_friend_request`, <br>* `can_write_private_message`, <br>* `career`,<br>* `common_count`,<br>* `connections`,<br>* `contacts`,<br>* `city`,<br>* `crop_photo`,<br>* `domain`,<br>* `education`,<br>* `exports`,<br>* `followers_count`,<br>* `friend_status`,<br>* `has_photo`,<br>* `has_mobile`,<br>* `home_town`,<br>* `photo_100`,<br>* `photo_200`,<br>* `photo_200_orig`,<br>* `photo_400_orig`,<br>* `photo_50`,<br>* `sex`,<br>* `site`,<br>* `schools`,<br>* `screen_name`,<br>* `status`,<br>* `verified`,<br>* `games`,<br>* `interests`,<br>* `is_favorite`,<br>* `is_friend`,<br>* `is_hidden_from_feed`,<br>* `last_seen`,<br>* `maiden_name`,<br>* `military`,<br>* `movies`,<br>* `music`,<br>* `nickname`,<br>* `occupation`,<br>* `online`,<br>* `personal`,<br>* `photo_id`,<br>* `photo_max`,<br>* `photo_max_orig`,<br>* `quotes`,<br>* `relation`,<br>* `relatives`,<br>* `timezone`,<br>* `tv`,<br>* `universities`,<br>* `is_verified `. |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователя. <br>Возможные значения: <br>* именительный – `nom`,<br>* родительный – `gen`,<br>* дательный – `dat`,<br>* винительный – `acc`,<br>* творительный – `ins`,<br>* предложный – `abl`. <br>По умолчанию `nom`. |
| `from_group_id` | `integer` | нет | Параметр устарел и больше не используется. |

Поля `counters`, `military` будут возвращены только в случае, если передан ровно один `user_id`.

## Результат

После успешного выполнения возвращает массив объектов [пользователей](reference/objects/user).

## Типы ключа

`allow_from_server`, `group_access`
