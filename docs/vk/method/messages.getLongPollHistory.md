# messages.getLongPollHistory

> Источник: [https://dev.vk.ru/ru/method/messages.getLongPollHistory](https://dev.vk.ru/ru/method/messages.getLongPollHistory)
Возвращает обновления в личных сообщениях пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `ts` | `positive` | нет | Последнее значение параметра `ts`, полученное от Long Poll сервера или с помощью метода [`messages.getLongPollServer`](method/messages.getLongPollServer). |
| `pts` | `positive` | нет | Последнее значение параметра `new_pts`, полученное от Long Poll сервера, используется для получения действий, которые хранятся всегда. |
| `preview_length` | `positive` | нет | Количество символов, по которому нужно обрезать сообщение. Укажите `0`, если вы не хотите обрезать сообщение. (по умолчанию сообщения не обрезаются). |
| `onlines` | `checkbox` | нет | `1` — возвращать в числе прочих события **8** и **9** (пользователь стал онлайн/оффлайн). Учитывается только при использовании `ts`. |
| `fields` | `string` | нет | Список дополнительных полей профилей, которые необходимо вернуть. См. [подробное описание](reference/objects/user).<br>Доступные значения: <br>* `about`, <br>* `activities`, <br>* `bdate`, <br>* `books`, <br>* `can_post`, <br>* `can_see_all_posts`, <br>* `can_see_audio`, <br>* `can_write_private_message`, <br>* `career`,<br>* `city`, <br>* `common_count`, <br>* `connections`, <br>* `contacts`, <br>* `counters`, <br>* `country`, <br>* `domain`,<br>* `education`, <br>* `friend_status`,<br>* `games`, <br>* `has_mobile`, <br>* `interests`, <br>* `last_seen`,<br>* `maiden_name`, <br>* `military`, <br>* `movies`, <br>* `music`, <br>* `occupation`,<br>* `online`,<br>* `online_mobile`, <br>* `personal`, <br>* `photo_100`, <br>* `photo_200`, <br>* `photo_200_orig`, <br>* `photo_400_orig`, <br>* `photo_50`, <br>* `photo_id`,  <br>* `photo_max`, <br>* `photo_max_orig`, <br>* `quotes`, <br>* `relation`, <br>* `relatives`, <br>* `schools`, <br>* `screen_name`, <br>* `sex`, <br>* `site`, <br>* `status`,  <br>* `timezone`, <br>* `tv`, <br>* `universities`, |
| `events_limit` | `positive` | нет | Лимит по количеству всех событий в истории. Обратите внимание, параметры `events_limit` и `msgs_limit` применяются совместно. Число результатов в ответе ограничивается первым достигнутым лимитом. |
| `msgs_limit` | `positive` | нет | Лимит по количеству событий с сообщениями в истории. Обратите внимание, параметры `events_limit` и `msgs_limit` применяются совместно. Число результатов в ответе ограничивается первым достигнутым лимитом. |
| `max_msg_id` | `positive` | нет | Максимальный идентификатор сообщения среди уже имеющихся в локальной копии. Необходимо учитывать как сообщения, полученные через методы API (например [`messages.getDialogs`](method/messages.getDialogs), [`messages.getHistory`](method/messages.getHistory)), так и данные, полученные из Long Poll сервера (события с кодом **4**). |
| `group_id` | `integer` | нет | Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |
| `lp_version` | `positive` | нет | Версия [Long Poll](api/user-long-poll/getting-started). |
| `last_n` | `positive` | нет |  |
| `credentials` | `checkbox` | нет |  |
| `extended` | `checkbox` | нет |  |

## Результат

Возвращает объект, который содержит поля `history`, `messages`, а также `groups` — массив [объектов сообществ](reference/objects/group) и `profiles` — массив [объектов пользователей](reference/objects/user).
Поле `history` представляет из себя массив, аналогичный полю `updates`, получаемому от Long Poll сервера, за некоторыми исключениями: для событий с кодом **4** (добавление нового сообщения) отсутствуют все поля, кроме первых трёх, а также отсутствуют события с кодами **8**, **9** (друг появился/пропал из сети) и **61**, **62** (набор текста в диалоге/беседе). 
Поле `messages` представляет из себя массив личных сообщений – объектов `message`, которые встречались среди событий с кодом **4** (добавление нового сообщения) из поля `history`. Каждый объект `message` содержит набор полей, описание которых доступно [здесь](reference/objects/message). Первый элемент массива представляет собой общее количество сообщений. 

### Ограничения

В случае, если `ts` слишком старый (больше суток), а `max_msg_id` не передан, метод может вернуть ошибку **10** (Internal server error).

Если количество событий превышает значение `events_limit` или количество событий с сообщениями превышает значение `msgs_limit`, ответ содержит дополнительное поле `more` со значением `1` — это означает, что нужно запросить оставшиеся данные с помощью запроса с параметром `max_msg_id`. Обратите внимание, что параметры `events_limit` и `msgs_limit` применяются совместно — число объектов в результате не превышает значения меньшего из этих параметров.

Ошибки с кодами **907** и **908** означают, что нужно получить новое значение `pts` (`ts`) и вызвать метод повторно с новыми значениями, поскольку данных для переданных значений не существует.

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 907
- 908
- 36
- 927
- 936
- 990
- 1017
