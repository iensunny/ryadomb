# VK Bridge | VKWebAppSendPayload

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSendPayload](https://dev.vk.ru/ru/bridge/VKWebAppSendPayload)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppSendPayload'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSendPayload

`VKWebAppSendPayload` отправляет событие [`app_payload`](api/community-events/json-schema#Прочее), которое можно получить через [Bots Longpoll](api/bots-long-poll/getting-started) или [Callback API](api/callback/getting-started).

:::note
**Важно!** Перед вызовом события разрешите запуск приложения из сообщества. Подробнее — в разделе [Информация (настройки мини-приложений)](mini-apps/settings/general/information#Запуск%20приложения%20из%20сообщества).
:::

## Пример

``` JavaScript
bridge.send('VKWebAppSendPayload', {
  group_id: 166562603, 
  payload: {
    foo: 'bar'
  }})
  .then((data) => { 
    if (data.result) {
      // Событие отправлено
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | – |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `group_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор сообщества. |
| `payload` &#x0d;&#x0a;*обязательное* | `object` | Полезные данные в формате JSON. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSendPayloadResult` и `VKWebAppSendPayloadFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если событие отправлено. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSendPayloadResult`

Сигнализирует, что событие отправлено. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSendPayloadResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSendPayloadFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
