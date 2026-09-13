# groups.getRequests

> Источник: [https://dev.vk.ru/ru/method/groups.getRequests](https://dev.vk.ru/ru/method/groups.getRequests)
Возвращает список заявок на вступление в сообщество.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `string` | да | Идентификатор сообщества (указывается без знака «минус»). |
| `offset` | `positive` | нет | Смещение, необходимое для выборки определенного подмножества результатов. По умолчанию — `0`. |
| `count` | `positive` | нет | Число результатов, которые необходимо вернуть. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения: <br>* `about`;<br>* `activities`;<br>* `bdate`;<br>* `books`;<br>* `can_post`;<br>* `can_see_all_posts`;<br>* `can_see_audio`;<br>* `can_write_private_message`;<br>* `city`;<br>* `common_count`;<br>* `connections`;<br>* `contacts`;<br>* `counters`;<br>* `country`;<br>* `domain`;<br>* `education`;<br>* `games`;<br>* `has_mobile`;<br>* `interests`;<br>* `last_seen`;<br>* `maiden_name`;<br>* `movies`;<br>* `music`;<br>* `occupation`;<br>* `online`;<br>* `online_mobile`;<br>* `photo_100`;<br>* `photo_200`;<br>* `photo_200_orig`;<br>* `photo_400_orig`;<br>* `photo_50`;<br>* `photo_max`;<br>* `photo_max_orig`;<br>* `quotes`;<br>* `relation`;<br>* `relatives`;<br>* `schools`;<br>* `screen_name`;<br>* `sex`;<br>* `site`;<br>* `status`;<br>* `timezone`;<br>* `tv`;<br>* `universities`. |

## Результат

Возвращает список идентификаторов [пользователей](reference/objects/user), отправивших заявки на вступление в сообщество.

Если было передано значение в параметре `fields`, возвращается список [объектов пользователей](reference/objects/user).

## Права доступа

`groups_ex`

## Типы ключа

`is_standalone`
