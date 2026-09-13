# groups.getById

> Источник: [https://dev.vk.ru/ru/method/groups.getById](https://dev.vk.ru/ru/method/groups.getById)
Возвращает информацию о заданном сообществе или о нескольких сообществах.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_ids` | `string` | нет | Идентификаторы или короткие имена сообществ. Максимальное число идентификаторов — 500. |
| `group_id` | `string` | нет | Идентификатор или короткое имя сообщества. |
| `fields` | `string` | нет | Список дополнительных полей, которые необходимо вернуть. Например: <br>* `activity`;<br>* `ban_info`;<br>* `can_post`;<br>* `can_see_all_posts`;<br>* `city`;<br>* `contacts`;<br>* `counters`;<br>* `country`;<br>* `cover`;<br>* `description`;<br>* `finish_date`;<br>* `fixed_post`;<br>* `links`;<br>* `market`;<br>* `members_count`;<br>* `place`;<br>* `site`;<br>* `start_date`;<br>* `status`;<br>* `verified`;<br>* `wiki_page`.<br>Полный список полей доступен [на этой странице](reference/objects/group). <br>> Обратите внимание, для получения некоторых полей требуется право доступа `groups`. Подробнее смотрите [описание полей объекта `group`](reference/objects/group). |

## Результат

После успешного выполнения возвращает массив [объектов](reference/objects/group), описывающих сообщества.

## Типы ключа

`allow_from_server`, `group_access`
