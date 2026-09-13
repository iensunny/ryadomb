# VK Bridge | VKWebAppTrackEvent

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppTrackEvent](https://dev.vk.ru/ru/bridge/VKWebAppTrackEvent)
<!-- ---
title: 'VK Bridge | Монетизация | Аналитика | VKWebAppTrackEvent'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppTrackEvent

`VKWebAppTrackEvent` отправляет данные из мини-приложения или игры в [VK Рекламу](https://ads.vk.com). Чтобы данные отправлялись в систему аналитики [MyTracker](https://tracker.my.com/), она должна быть подключена отдельно.

:::note
**Обратите внимание!** Трекинг приложений в системе MyTracker находится в стадии бета-тестирования и доступен только активным клиентам, которые уже используют MyTracker для аналитики приложений на других платформах. Подробнее о подключении MyTracker — в [документации](https://docs.tracker.my.com/ru/tracking/platforms/vk-mini-apps).
:::

## Пример

```JavaScript
bridge.send('VKWebAppTrackEvent', {
    event_name: 'game_event',
    custom_user_id: '743784479',
    event_params: {
      level: 5,
      mode: 123
    }
  })
  .then((data) => {
    if (data.result) {
      // Данные отправлены 
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
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `event_name` &#x0d;&#x0a;*обязательное* | `string` | Название события. Событие — это заранее определённое в коде действие, например покупка через приложение или авторизация пользователя в игре.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; [События в VK Рекламе](https://ads.vk.com/help/general/network/vkwebapptrackevent) &#x0d;&#x0a; &nbsp;&nbsp; &bullet; [События в MyTracker](https://docs.tracker.my.com/ru/tracking/platforms/vk-mini-apps/#events) |
| `custom_user_id` &#x0d;&#x0a;*необязательное* | `string` | Идентификатор пользователя мини-приложения или игры, например [ID профиля ВКонтакте](https://vk.com/faq18062). |
| `event_params` &#x0d;&#x0a;*необязательное* | `object` | Параметры события `event_name`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppTrackEventResult` и `VKWebAppTrackEventFailed`.

Подробнее о проверке результатов при вызовах VK Bridge — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если данные были отправлены в MyTracker. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppTrackEventResult`

Сигнализирует, что данные отправлены в MyTracker. В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppTrackEventResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppTrackEventFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
