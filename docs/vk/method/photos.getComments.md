# photos.getComments

> Источник: [https://dev.vk.ru/ru/method/photos.getComments](https://dev.vk.ru/ru/method/photos.getComments)
Возвращает список комментариев к фотографии.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `string` | нет | Идентификатор пользователя или сообщества, которому принадлежит фотография.<br>> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком `«-»` — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1). |
| `photo_id` | `integer` | да | Идентификатор фотографии. |
| `need_likes` | `checkbox` | нет | `1` — будет возвращено дополнительное поле `likes`. По умолчанию: `0`. |
| `start_comment_id` | `positive` | нет | Идентификатор комментария, начиная с которого нужно вернуть список (подробности см. ниже). |
| `offset` | `integer` | нет | Смещение, необходимое для выборки определенного подмножества комментариев. По умолчанию: `0`. |
| `count` | `positive` | нет | Количество комментариев, которое необходимо получить. |
| `skip_before_id` | `positive` | нет | Идентификатор последнего полученного комментания, при подгрузке более новых комментариев. (этот и более старые комментарии получены не будут) |
| `skip_after_id` | `positive` | нет | Идентификатор последнего полученного комментания, при подгрузке более старых комментариев. (этот и более новые комментарии получены не будут) |
| `sort` | `string` | нет | Порядок сортировки комментариев. <br>Возможные значения:<br>* `asc` — от старых к новым;<br>* `desc` — от новых к старым. |
| `access_key` | `string` | нет | Ключ доступа к фотографии. |
| `extended` | `checkbox` | нет | `1` — в ответе будут возвращены дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. По умолчанию: `0`. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения: <br>* `about`,<br>* `activities`,<br>* `bdate`,<br>* `blacklisted`,<br>* `blacklisted_by_me`,<br>* `books`,<br>* `can_post`,<br>* `can_see_all_posts`,<br>* `can_see_audio`,<br>* `can_send_friend_request`,<br>* `can_write_private_message`,<br>* `career`,<br>* `city`,<br>* `common_count`,<br>* `connections`,<br>* `contacts`,<br>* `country`,<br>* `crop_photo`,<br>* `domain`,<br>* `education`,<br>* `exports`,<br>* `followers_count`,<br>* `friend_status`,<br>* `games`,<br>* `has_mobile`,<br>* `has_photo`,<br>* `home_town`,<br>* `interests`,<br>* `is_favorite`,<br>* `is_friend`,<br>* `is_hidden_from_feed`,<br>* `last_seen`,<br>* `lists`,<br>* `maiden_name`,<br>* `military`,<br>* `movies`,<br>* `music`,<br>* `nickname`,<br>* `occupation`,<br>* `online`,<br>* `personal`,<br>* `photo_100`,<br>* `photo_200`,<br>* `photo_200_orig`,<br>* `photo_400_orig`,<br>* `photo_50`,<br>* `photo_id`,<br>* `photo_max`,<br>* `photo_max_orig`,<br>* `quotes`,<br>* `relation`,<br>* `relatives`,<br>* `schools`,<br>* `screen_name`,<br>* `sex`,<br>* `site`,<br>* `status`,<br>* `timezone`,<br>* `tv`,<br>* `universities`,<br>* `verified`,<br>* `wall_comments`. |

Если был передан параметр `start_comment_id`, будет найдена позиция комментария в списке (или ближайший к нему более ранний). Начиная с этой позиции будет возвращено `count` комментариев. Смещение `offset` в этом случае будет отсчитываться от этой позиции (оно может быть отрицательным).

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив объектов [комментариев](reference/objects/comment) в поле `items`.

Если был задан параметр `extended`=`1`, возвращает число результатов в поле `count`, отдельно массив объектов [комментариев](reference/objects/comment) в поле `items`, [пользователей](reference/objects/user) в поле `profiles` и [сообществ](reference/objects/group) в поле `groups`.

Если был задан параметр `need_like`=`1`, у объектов комментариев возвращается дополнительное поле `likes`:
* `count` — число пользователей, которым понравился комментарий;
* `user_likes` — наличие отметки `«Мне нравится»` от текущего пользователя (`1` — есть, `0` — нет)(`1` — есть, `0` — нет)`;
* `can_like` — информация о том, может ли текущий пользователь поставить отметку «Мне нравится» (`1` — может, `0` — не может).

Если был передан параметр `start_comment_id`, будет также возвращено поле `real_offset` – итоговое смещение данного подмножества комментариев (оно может быть отрицательным, если был указан отрицательный `offset`).

## Права доступа

`photos`
