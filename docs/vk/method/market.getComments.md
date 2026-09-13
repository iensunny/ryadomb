# market.getComments

> Источник: [https://dev.vk.ru/ru/method/market.getComments](https://dev.vk.ru/ru/method/market.getComments)
Возвращает список комментариев к товару.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | да | Идентификатор владельца товара.<br>> Обратите внимание, идентификатор сообщества в параметре `owner_id` необходимо указывать со знаком «`-`» — например, `owner_id`=`-1` соответствует идентификатору сообщества [ВКонтакте API](https://vk.com/apiclub) (club1). |
| `item_id` | `positive` | да | Идентификатор товара. |
| `need_likes` | `checkbox` | нет | `1` — возвращать информацию о лайках. |
| `start_comment_id` | `positive` | нет | Идентификатор комментария, начиная с которого нужно вернуть список (подробности см. ниже). |
| `offset` | `positive` | нет | Сдвиг, необходимый для получения конкретной выборки результатов. |
| `count` | `positive` | нет | Число комментариев, которые необходимо получить. |
| `sort` | `string` | нет | Порядок сортировки комментариев (`asc` — от старых к новым, `desc` - от новых к старым). |
| `extended` | `checkbox` | нет | `1` — комментарии в ответе будут возвращены в виде пронумерованных объектов, дополнительно будут возвращены списки объектов `profiles`, `groups`. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения: <br>* `sex`; <br>* `bdate`; <br>* `city`; <br>* `country`; <br>* `photo_50`; <br>* `photo_100`; <br>* `photo_200_orig`; <br>* `photo_200`; <br>* `photo_400_orig`; <br>* `photo_max`; <br>* `photo_max_orig`; <br>* `photo_id`; <br>* `online`; <br>* `online_mobile`; <br>* `domain`; <br>* `has_mobile`; <br>* `contacts`; <br>* `connections`; <br>* `site`; <br>* `education`; <br>* `universities`; <br>* `schools`; <br>* `can_post`; <br>* `can_see_all_posts`; <br>* `can_see_audio`; <br>* `can_write_private_message`; <br>* `status`;<br>* `last_seen`;<br>* `common_count`;<br>* `relation`;<br>* `relatives`;<br>* `counters`;<br>* `screen_name`;<br>* `maiden_name`;<br>* `timezone`; <br>* `occupation`;<br>* `activities`;<br>* `interests`;<br>* `music`;<br>* `movies`;<br>* `tv`;<br>* `books`;<br>* `games`;<br>* `about`;<br>* `quotes`;<br>* `personal`;<br>* `friend_status`;<br>* `military`;<br>* `career`. |

Если был передан параметр `start_comment_id`, будет найдена позиция комментария в списке (или ближайший к нему более ранний). Начиная с этой позиции будет возвращено `count` комментариев. Смещение `offset` в этом случае будет отсчитываться от этой позиции (оно может быть отрицательным).

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив объектов комментариев в поле `items`.

## Права доступа

`market`

## Ошибки

- 1401
