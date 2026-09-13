# newsfeed.getBanned

> Источник: [https://dev.vk.ru/ru/method/newsfeed.getBanned](https://dev.vk.ru/ru/method/newsfeed.getBanned)
Возвращает список пользователей и групп, которые текущий пользователь скрыл из ленты новостей.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `extended` | `checkbox` | нет | Если этот параметр равен `1`, возвращается дополнительная информация о пользователях и группах |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user). Доступные значения: <br>* `sex`<br>* `bdate`<br>* `city` <br>* `country` <br>* `photo_50` <br>* `photo_100` <br>* `photo_200_orig`<br>* `photo_200`<br>* `photo_400_orig` <br>* `photo_max`  <br>* `photo_max_orig`  <br>* `online`  <br>* `online_mobile`  <br>* `domain`  <br>* `has_mobile`  <br>* `contacts`  <br>* `connections`  <br>* `site`  <br>* `education`  <br>* `universities`  <br>* `schools`  <br>* `can_post`  <br>* `can_see_all_posts`  <br>* `can_see_audio`  <br>* `can_write_private_message`  <br>* `status`  <br>* `last_seen`  <br>* `common_count`  <br>* `relation`  <br>* `relatives`  <br>* `counters`  <br>* `screen_name`  <br>* `maiden_name`  <br>* `timezone`  <br>* `occupation`  <br>* `activities`  <br>* `interests`  <br>* `music`  <br>* `movies`  <br>* `tv`  <br>* `books`  <br>* `games`  <br>* `about`<br>* `quotes` |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователя. Возможные значения: <br>* именительный – `nom`;<br>* родительный – `gen`;<br>* дательный – `dat`;<br>* винительный – `acc`;<br>* творительный – `ins`;<br>* предложный – `abl`. <br>По умолчанию `nom`. |

## Результат

В случае успеха возвращает объект, в котором содержатся поля `groups` и `members` или `profiles`, в зависимости от параметра `extended`.

Если `extended`=`0`:
*  В поле `groups` содержится массив идентификаторов сообществ, которые пользователь скрыл из ленты новостей. В поле `members` содержится массив идентификаторов пользователей, которых пользователь скрыл из ленты новостей.

Если `extended`=`1`:
* В поле `groups` содержится массив [объектов с информацией о сообществах](reference/objects/group). В поле `profiles` содержится массив [объектов с информацией о пользователях](reference/objects/user).

## Права доступа

`wall_ex`

## Типы ключа

`is_standalone`
