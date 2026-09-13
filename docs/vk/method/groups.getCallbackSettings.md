# groups.getCallbackSettings

> Источник: [https://dev.vk.ru/ru/method/groups.getCallbackSettings](https://dev.vk.ru/ru/method/groups.getCallbackSettings)
Позволяет получить настройки уведомлений [Callback API](api/callback/getting-started) для сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | да | Идентификатор сообщества. |
| `server_id` | `positive` | нет | Идентификатор сервера. |

## Результат

После успешного выполнения возвращает объект, содержащий настройки уведомлений в формате «название события» : «статус» (`0` — уведомления о событии выключены, `1` — уведомления о событии включены). Объект содержит следующие поля:

|Поле| Описание|
|---|---|
 |`message_new` | Новое сообщение `integer`, [`0`, `1`] |
 |`message_reply` | Новое исходящее сообщение `integer`, [`0`, `1`] |
 |`message_edit` | Редактирование сообщения `integer`, [`0`, `1`] |
 |`message_allow` | Новая подписка на сообщения `integer`, [`0`, `1`] |
 |`message_deny` | Новый запрет сообщений `integer`, [`0`, `1`] |
 |`photo_new` | Добавление новой фотографии `integer`, [`0`, `1`] |
 |`audio_new` | Добавление новой аудиозаписи `integer`, [`0`, `1`] |
 |`video_new` | Добавление новой видеозаписи `integer`, [`0`, `1`] |
 |`wall_reply_new` | Добавление нового комментария на стене `integer`, [`0`, `1`] |
 |`wall_reply_edit` | Редактирование комментария на стене `integer`, [`0`, `1`] |
 |`wall_reply_delete` | Удаление комментария на стене `integer`, [`0`, `1`] |
 |`wall_post_new` | Добавление новой записи на стене `integer`, [`0`, `1`] |
 |`wall_repost` | Новый репост записи на стене `integer`, [`0`, `1`] |
 |`board_post_new` | Добавление нового комментария в обсуждении `integer`, [`0`, `1`] |
 |`board_post_edit` | Редактирование комментария в обсуждении `integer`, [`0`, `1`] |
 |`board_post_delete` | Удаление комментария в обсуждении `integer`, [`0`, `1`] |
 |`board_post_restore` | Восстановление комментария в обсуждении `integer`, [`0`, `1`] |
 | `photo_comment_new` | Добавление нового комментария к фото `integer`, [`0`, `1`] |
 | `photo_comment_edit` | Редактирование комментария к фото `integer`, [`0`, `1`] |
 | `photo_comment_delete` | Удаление комментария к фото `integer`, [`0`, `1`] |
 | `photo_comment_restore` | Восстановление комментария к фото `integer`, [`0`, `1`] |
 | `video_comment_new` | Добавление нового комментария к видео `integer`, [`0`, `1`] |
 | `video_comment_edit` | Редактирование комментария к видео `integer`, [`0`, `1`] |
 | `video_comment_delete` | Удаление комментария к видео `integer`, [`0`, `1`] |
 | `video_comment_restore` | Восстановление комментария к видео `integer`, [`0`, `1`] |
 | `market_comment_new` | Добавление нового комментария к товару `integer`, [`0`, `1`] |
 | `market_comment_edit` | Редактирование комментария к товару `integer`, [`0`, `1`] |
 | `market_comment_delete` | Удаление комментария к товару `integer`, [`0`, `1`] |
 | `market_comment_restore` | Восстановление удалённого комментария к товару `integer`, [`0`, `1`] |
 | `poll_vote_new` | Новый голос в публичном опросе `integer`, [`0`, `1`] |
 |`group_join` | Вступление в сообщество `integer`, [`0`, `1`] |
 |`group_leave` | Выход участника из сообщества `integer`, [`0`, `1`] |
 |`user_block` | Занесение пользователя в черный список `integer`, [`0`, `1`] |
 |`user_unblock` | Удаление пользователя из черного списка `integer`, [`0`, `1`] |
 |`group_change_settings` | Изменение настроек сообщества `integer`, [`0`, `1`] |
 |`group_change_photo` | Изменение главной фотографии `integer`, [`0`, `1`] |
 |`group_officers_edit` | Изменение руководства сообщества `integer`, [`0`, `1`] |
 |`donut_subscription_create` | Создание подписки `integer`, [`0`, `1`] |
 |`donut_subscription_prolonged` | Продление подписки `integer`, [`0`, `1`] |
 |`donut_subscription_expired` | Подписка истекла `integer`, [`0`, `1`] |
 |`donut_subscription_cancelled` | Отмена подписки `integer`, [`0`, `1`] |
 |`subscription_price_changed` | Изменение стоимости подписки `integer`, [`0`, `1`] |
 |`donut_money_withdraw` | Вывод денег `integer`, [`0`, `1`] |
 |`donut_money_withdraw_error` | Ошибка вывода денег `integer`, [`0`, `1`] |

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 104
