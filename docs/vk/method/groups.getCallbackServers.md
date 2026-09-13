# groups.getCallbackServers

> Источник: [https://dev.vk.ru/ru/method/groups.getCallbackServers](https://dev.vk.ru/ru/method/groups.getCallbackServers)
Получает информацию о серверах для [Callback API](api/callback/getting-started) в сообществе.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества. |
| `server_ids` | `integer` | нет | Идентификаторы серверов, данные о которых нужно получить. По умолчанию возвращаются все серверы. |

## Результат

Возвращает число серверов в поле `count` (`integer`) и массив объектов `items` с данными о серверах. Каждый объект массива `items` содержит поля:
* `id` (`integer`) — идентификатор сервера;
* `title` (`string`) — название сервера;
* `creator_id` (`integer`) — идентификатор пользователя, который добавил сервер (может содержать `0`);
* `url` (`string`) — URL сервера;
* `secret_key` (`string`) — секретный ключ;
* `status` (`string`) — статус сервера. Возможные значения:
   * `unconfigured` — адрес не задан;
   * `failed` — подтвердить адрес не удалось;
   * `wait` — адрес ожидает подтверждения;
   * `ok` — сервер подключен.

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`
