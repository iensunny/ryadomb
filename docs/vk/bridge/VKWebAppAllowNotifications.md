# VK Bridge | VKWebAppAllowNotifications

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAllowNotifications](https://dev.vk.ru/ru/bridge/VKWebAppAllowNotifications)
<!-- ---
title: 'VK Bridge | Социальные механики и взаимодействие | VKWebAppAllowNotifications'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAllowNotifications

:::note
**Важно!** Событие станет доступно пользователям после того, как ваше приложение пройдёт модерацию.

* [Модерация мини-приложений](mini-apps/settings/moderation)
* [Модерация игр](games/settings/moderation)
:::

`VKWebAppAllowNotifications` показывает окно с запросом разрешения на отправку уведомлений от мини-приложения или игры.  

* [Уведомления в мини-приложениях](mini-apps/promotion/social-mechanics/notifications/overview)
* [Уведомления в играх](games/promotion/game-mechanics/notifications/overview)

<!--exclusions/_images/bridge/vkwebappallownotifications.png-->
![alt=Запрос разрешения;title=Запрос разрешения](1b1163b9f1aaaf1df1613a9f70b2cf87e97b5f69851bc6fb96ba1e15 "-3316713437909855651")

> Обратите внимание, если пользователь выключил уведомления от игр и мини-приложений в настройках, то он не сможет их получать даже после выдачи разрешения.

## Пример

```JavaScript
bridge.send('VKWebAppAllowNotifications')
  .then((data) => { 
    if (data.result) {
      // Разрешение на отправку уведомлений мини-приложением или игрой получено
    } else {
      // Ошибка
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

— 

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAllowNotificationsResult` и `VKWebAppAllowNotificationsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.
* `User denied`, если пользователь закрыл окно с запросом разрешения на отправку уведомлений от мини-приложения или игры.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если разрешение на отправку уведомлений мини-приложением или игрой получено. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAllowNotificationsResult`

Сигнализирует, что разрешение на отправку уведомлений мини-приложением или игрой получено. В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppAllowNotificationsResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAllowNotificationsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppAllowNotifications](https://vk.cc/bZfspS)

## Материалы по теме

* [Уведомления в мини-приложениях](mini-apps/promotion/social-mechanics/notifications/overview)
* [Уведомления в играх](games/promotion/game-mechanics/notifications/overview)
* [VKWebAppDenyNotifications](bridge/VKWebAppDenyNotifications)
