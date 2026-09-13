# apps.getCatalog

> Источник: [https://dev.vk.ru/ru/method/apps.getCatalog](https://dev.vk.ru/ru/method/apps.getCatalog)
Возвращает список приложений, доступных для пользователей сайта через каталог приложений.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `sort` | `string` | нет | Способ сортировки приложений. <br>Возможные значения:<br>* `popular_today` — популярные за день;<br>* `visitors` — по посещаемости;<br>* `create_date` — по дате создания приложения;<br>* `growth_rate` — по скорости роста;<br>* `popular_week` — популярные за неделю.<br>По умолчанию: `popular_today`. |
| `offset` | `positive` | нет | Смещение, необходимое для выборки определенного подмножества приложений. |
| `count` | `positive` | да | Количество приложений, информацию о которых необходимо вернуть. |
| `platform` | `string` | нет | Платформа, для которой необходимо вернуть приложения. <br>Возможные значения:<br>* `ios` — iOS;<br>* `android` — Android;<br>* `winphone` — Windows Phone;<br>* `web` — приложения на vk.com;<br>* `html5` — Direct Games.<br>По умолчанию: `web`. |
| `extended` | `checkbox` | нет | `1` — возвращать дополнительные поля приложений. Если указан `extended` – `count` не должен быть больше **100**. |
| `return_friends` | `checkbox` | нет | `1` – возвращать список друзей, установивших это приложение. По умолчанию: `0`.<br>Параметр учитывается только при передаче `access_token`. |
| `fields` | `string` | нет | Список дополнительных полей, которые необходимо вернуть для [профилей пользователей](reference/objects/user).<br>Доступные значения: <br>* `bdate`,<br>* `can_post`,<br>* `can_see_all_posts`,<br>* `can_see_audio`,<br>* `can_write_private_message`,<br>* `city`,<br>* `common_count`,<br>* `connections`,<br>* `contacts`,<br>* `counters`,<br>* `country`,<br>* `domain`,<br>* `education`,<br>* `has_mobile`,<br>* `last_seen`,<br>* `lists`,<br>* `online`,<br>* `online_mobile`,<br>* `photo_100`,<br>* `photo_200`,<br>* `photo_200_orig`,<br>* `photo_400_orig`,<br>* `photo_50`,<br>* `photo_max`,<br>* `photo_max_orig`,<br>* `relation`,<br>* `relatives`,<br>* `schools`,<br>* `screen_name`,<br>* `sex`,<br>* `site`,<br>* `status`,<br>* `timezone`,<br>* `universities`.<br>Параметр учитывается только при `return_friends` = `1`. |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователей. <br>Возможные значения:<br>* именительный – `nom`,<br>* родительный – `gen`,<br>* дательный – `dat`,<br>* винительный – `acc`,<br>* творительный – `ins`,<br>* предложный – `abl`.<br>По умолчанию: `nom`.<br>Параметр учитывается только при `return_friends` = `1`. |
| `q` | `string` | нет | Поисковая строка для поиска по каталогу приложений. |
| `genre_id` | `positive` | нет | Идентификатор жанра. |
| `filter` | `string` | нет | `installed` — возвращает список установленных приложений (только для мобильных приложений),<br>`featured` — возвращает список приложений, установленных в «Выбор редакции» (только для мобильных приложений). |

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив [объектов, описывающих приложения](reference/objects/app), в поле `items`.

К методу можно делать не более **60** запросов в минуту с одного IP или id.

## Типы ключа

`allow_from_server`
