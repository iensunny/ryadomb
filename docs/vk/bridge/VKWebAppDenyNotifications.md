# VK Bridge | VKWebAppDenyNotifications

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppDenyNotifications](https://dev.vk.ru/ru/bridge/VKWebAppDenyNotifications)
<!-- ---
title: 'VK Bridge | Социальные механики и взаимодействие | VKWebAppDenyNotifications'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppDenyNotifications

:::note
**Важно!** Событие станет доступно пользователям после того, как ваше приложение пройдёт модерацию.

* [Модерация мини-приложений](mini-apps/settings/moderation)
* [Модерация игр](games/settings/moderation)
:::

`VKWebAppDenyNotifications` отключает уведомления от мини-приложения или игры. 

* [Уведомления в мини-приложениях](mini-apps/promotion/social-mechanics/notifications/overview)
* [Уведомления в играх](games/promotion/game-mechanics/notifications/overview)

## Пример

```JavaScript
bridge.send('VKWebAppDenyNotifications')
  .then((data) => { 
    if (data.result) {
      // Уведомления от мини-приложения или игры отключены
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

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`;

* С помощью [событий](#События) `VKWebAppDenyNotificationsResult` и `VKWebAppDenyNotificationsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если уведомления отключены от мини-приложения или игры. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppDenyNotificationsResult`

Сигнализирует, что уведомления отключены от мини-приложения или игры. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppDenyNotificationsResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppDenyNotificationsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppDenyNotifications](https://vk.cc/bZft1F)

## Материалы по теме

* [Уведомления в мини-приложениях](mini-apps/promotion/social-mechanics/notifications/overview)
* [Уведомления в играх](games/promotion/game-mechanics/notifications/overview)
* [VKWebAppAllowNotifications](bridge/VKWebAppAllowNotifications)
