# users.getFollowers

> Источник: [https://dev.vk.ru/ru/method/users.getFollowers](https://dev.vk.ru/ru/method/users.getFollowers)
Возвращает список идентификаторов пользователей, которые являются подписчиками пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `user_id` | `positive` | нет | Идентификатор пользователя. |
| `offset` | `positive` | нет | Смещение, необходимое для выборки определенного подмножества подписчиков. |
| `count` | `positive` | нет | Количество подписчиков, информацию о которых нужно получить. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения: <br>* `about`,<br>* `activities`, <br>* `bdate`, <br>* `blacklisted`,<br>* `blacklisted_by_me`<br>* `books`,<br>* `can_post`, <br>* `can_see_all_posts`,<br>* `can_see_audio`,<br>* `can_send_friend_request`,<br>* `can_write_private_message`, <br>* `career`, <br>* `city`,<br>* `common_count`, <br>* `connections`,<br>* `contacts`, <br>* `country`,<br>* `crop_photo`, <br>* `domain`, <br>* `education`, <br>* `exports`, <br>* `followers_count`,<br>* `friend_status`,<br>* `games`, <br>* `has_mobile`,<br>* `has_photo`, <br>* `home_town`,<br>* `interests`, <br>* `is_favorite`, <br>* `is_friend`, <br>* `is_hidden_from_feed`,<br>* `last_seen`,<br>* `lists`, <br>* `maiden_name`,<br>* `military`, <br>* `movies`, <br>* `music`, <br>* `nickname`,<br>* `occupation`, <br>* `online`,<br>* `personal`, <br>* `photo_100`,<br>* `photo_200`, <br>* `photo_200_orig`,<br>* `photo_400_orig`, <br>* `photo_50`,<br>* `photo_id`,<br>* `photo_max`, <br>* `photo_max_orig`,<br>* `quotes`,<br>* `relation`,<br>* `relatives`, <br>* `schools`,<br>* `screen_name`, <br>* `sex`,<br>* `site`,<br>* `status`,<br>* `timezone`, <br>* `tv`, <br>* `universities`, <br>* `verified`,<br>* `wall_comments`. |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователя. <br>Возможные значения: <br>* именительный – `nom`,<br>* родительный – `gen`,<br>* дательный – `dat`,<br>* винительный – `acc`,<br>* творительный – `ins`,<br>* предложный – `abl`.<br> По умолчанию `nom`. |

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив объектов [`user`](reference/objects/user) в поле `items`.

Идентификаторы пользователей в списке отсортированы в порядке убывания времени их добавления.

## Типы ключа

`allow_from_server`
