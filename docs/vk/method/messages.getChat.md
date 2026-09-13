# messages.getChat

> Источник: [https://dev.vk.ru/ru/method/messages.getChat](https://dev.vk.ru/ru/method/messages.getChat)
Возвращает информацию о беседе.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `chat_id` | `positive` | нет | Идентификатор беседы. |
| `chat_ids` | `integer` | нет | Список идентификаторов бесед. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть.<br>Доступные значения: <br>* `nickname`, <br>* `screen_name`, <br>* `sex`, <br>* `bdate`, <br>* `city`, <br>* `country`, <br>* `timezone`, <br>* `photo_50`, <br>* `photo_100`, <br>* `photo_200_orig`, <br>* `has_mobile`, <br>* `contacts`, <br>* `education`, <br>* `online`, <br>* `counters`, <br>* `relation`, <br>* `last_seen`, <br>* `status`, <br>* `can_write_private_message`, <br>* `can_see_all_posts`, <br>* `can_post`, <br>* `universities`. |
| `name_case` | `string` | нет | Падеж для склонения имени и фамилии пользователя. Возможные значения:<br>* `nom` — именительный, <br>* `gen` — родительный,<br>* `dat` — дательный,<br>* `acc` — винительный,<br>* `ins` — творительный,<br>* `abl` — предложный. <br>По умолчанию: `nom`. |

## Результат

После успешного выполнения возвращает объект (или список объектов) [мультидиалога](reference/objects/chat).

Если был задан параметр `fields`, поле `users` содержит список объектов [пользователей](reference/objects/user) с дополнительным полем `invited_by`, содержащим идентификатор пользователя, пригласившего в беседу.

## Права доступа

`messages_ex`

## Типы ключа

`is_standalone`

## Ошибки

- 945
- 946
- 983
- 984
- 1012
- 925
- 1017
