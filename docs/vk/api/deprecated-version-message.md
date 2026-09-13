# Сообщение "Deprecated version"

> Источник: [https://dev.vk.ru/ru/api/deprecated-version-message](https://dev.vk.ru/ru/api/deprecated-version-message)
<!-- Обрати внимание! На эту страницу есть ссылка извне. Если будешь перемещать страницу, не забудь сделать редирект.-->

:::note
1 декабря 2024 года мы отключили использование старых версий API, поэтому рекомендуем перейти на актуальную версию [5.199](reference/version/5.199). Если этого не сделать, приложения и чат-боты, добавленные в сообщество, могут начать работать неправильно.
:::

ВКонтакте отправляет это сообщение в ответе вашему серверу, когда обнаруживает, что сервер ожидает устаревшую версию API.

```JSON
{
    "group_id": 12345,
    "type": "wall_post_new",
    "event_id": "bcac94ca00d2f069fb6badb4cf0441dac637dcfc",
    "v": "5.80",
    "object": {
        "warning": "You are using a deprecated API version. It will be disabled soon. Read more here: https://dev.vk.com/api/deprecated-version-message"
    }
}

```

:::note
**Обратите внимание!** Начиная с версии [5.101](https://dev.vk.com/ru/reference/version/5.103), у события `message_new` меняется формат: вместо `{ object: message }` будет приходить `{ object: { message, client_info } }`. Учтите это при переходе на актуальную версию.
:::

## Callback API

О том, как изменить версию API, читайте в [инструкции](api/callback/getting-started#Через%20API%20ВКонтакте).

Если у вас нет доступа к сообществу, вы можете изменить версию API, отправив в ответ на уведомление о любом событии сообщение `version 5.199`. Вместо 5.199 можно указать другую актуальную версию.

## LongPoll API

Чтобы изменить версию API, используйте метод  [`groups.setLongPollSettings`](method/groups.setLongPollSettings). Укажите нужную версию API в параметре `api_version`. 

## Материалы по теме

* [Версии API ВКонтакте](reference/versions)

* [Callback API](api/callback/getting-started)

* [Bots Long Poll API](api/bots-long-poll/getting-started)
