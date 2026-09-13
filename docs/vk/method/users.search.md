# users.search

> Источник: [https://dev.vk.ru/ru/method/users.search](https://dev.vk.ru/ru/method/users.search)
Возвращает список пользователей в соответствии с заданным критерием поиска.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `q` | `string` | нет | Строка поискового запроса. Например, `Вася Бабич`. |
| `sort` | `integer` | нет | Сортировка результатов. Возможные значения:<br>* `1` — по дате регистрации,<br>* `0` — по популярности. |
| `offset` | `positive` | нет | Смещение относительно первого найденного пользователя для выборки определенного подмножества. |
| `count` | `positive` | нет | Количество возвращаемых пользователей.<br>> Обратите внимание, даже при использовании параметра `offset` для получения информации доступны только первые 1000 результатов. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения: <br>* `about`,<br>* `activities`, <br>* `bdate`, <br>* `blacklisted`,<br>* `blacklisted_by_me`<br>* `books`,<br>* `can_post`, <br>* `can_see_all_posts`,<br>* `can_see_audio`,<br>* `can_send_friend_request`,<br>* `can_write_private_message`, <br>* `career`, <br>* `city`,<br>* `common_count`, <br>* `connections`,<br>* `contacts`, <br>* `country`,<br>* `crop_photo`, <br>* `domain`, <br>* `education`, <br>* `exports`, <br>* `followers_count`,<br>* `friend_status`,<br>* `games`, <br>* `has_mobile`,<br>* `has_photo`, <br>* `home_town`,<br>* `interests`, <br>* `is_favorite`, <br>* `is_friend`, <br>* `is_hidden_from_feed`,<br>* `last_seen`,<br>* `lists`, <br>* `maiden_name`,<br>* `military`, <br>* `movies`, <br>* `music`, <br>* `nickname`,<br>* `occupation`, <br>* `online`,<br>* `personal`, <br>* `photo_100`,<br>* `photo_200`, <br>* `photo_200_orig`,<br>* `photo_400_orig`, <br>* `photo_50`,<br>* `photo_id`,<br>* `photo_max`, <br>* `photo_max_orig`,<br>* `quotes`,<br>* `relation`,<br>* `relatives`, <br>* `schools`,<br>* `screen_name`, <br>* `sex`,<br>* `site`,<br>* `status`,<br>* `timezone`, <br>* `tv`, <br>* `universities`, <br>* `verified`,<br>* `wall_comments`. |
| `city` | `positive` | нет | Идентификатор города. |
| `city_id` | `positive` | нет | Идентификатор города для обратной совместимости. Используйте city |
| `country` | `positive` | нет | Идентификатор страны. |
| `country_id` | `positive` | нет | Идентификатор страны для обратной совместимости. Используйте country |
| `hometown` | `string` | нет | Название города строкой. |
| `university_country` | `positive` | нет | Идентификатор страны, в которой пользователи закончили ВУЗ. |
| `university` | `positive` | нет | Идентификатор ВУЗа. |
| `university_year` | `positive` | нет | Год окончания ВУЗа. |
| `university_faculty` | `positive` | нет | Идентификатор факультета. |
| `university_chair` | `positive` | нет | Идентификатор кафедры. |
| `sex` | `positive` | нет | Пол. Возможные значения:<br>*  `1` —  женщина,<br>*  `2` — мужчина,<br>*  `0` — любой (по умолчанию). |
| `status` | `positive` | нет | Семейное положение. Возможные значения:<br>* `1` — не женат (не замужем),<br>* `2` — встречается,<br>* `3` — помолвлен(-а),<br>* `4` — женат (замужем),<br>* `5` — всё сложно,<br>* `6` — в активном поиске,<br>* `7` — влюблен(-а),<br>* `8` — в гражданском браке. |
| `age_from` | `positive` | нет | Возраст, от. |
| `age_to` | `positive` | нет | Возраст, до. |
| `birth_day` | `positive` | нет | День рождения. |
| `birth_month` | `positive` | нет | Месяц рождения. |
| `birth_year` | `positive` | нет | Год рождения. |
| `online` | `checkbox` | нет | Учитывать ли статус «онлайн». Возможные значения:<br>* `1` — искать только пользователей онлайн,<br>* `0` — искать по всем пользователям. |
| `has_photo` | `checkbox` | нет | Учитывать ли наличие фото. Возможные значения:<br>* `1` — искать только пользователей с фотографией,<br>* `0` — искать по всем пользователям. |
| `school_country` | `positive` | нет | Идентификатор страны, в которой пользователи закончили школу. |
| `school_city` | `positive` | нет | Идентификатор города, в котором пользователи закончили школу. |
| `school_class` | `positive` | нет | Буква класса. |
| `school` | `positive` | нет | Идентификатор школы, которую закончили пользователи. |
| `school_year` | `positive` | нет | Год окончания школы. |
| `religion` | `string` | нет | Религиозные взгляды. |
| `company` | `string` | нет | Название компании, в которой работают пользователи. |
| `position` | `string` | нет | Название должности. |
| `group_id` | `integer` | нет | Идентификатор группы, среди пользователей которой необходимо проводить поиск. |
| `from_list` | `string` | нет | Разделы среди которых нужно осуществить поиск, перечисленные через запятую. <br>Возможные значения:<br>* `friends` — искать среди друзей,<br>* `subscriptions` — искать среди друзей и подписок пользователя. |
| `screen_ref` | `string` | нет | Реферер, откуда был вызван метод |
| `from_group_id` | `integer` | нет |  |

## Результат

После успешного выполнения возвращает объект, содержащий число результатов в поле `count` и массив [объектов, описывающих пользователей](reference/objects/user) в поле `items`.
