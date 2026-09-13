# VK Bridge | VKWebAppCheckAllowedScopes

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCheckAllowedScopes](https://dev.vk.ru/ru/bridge/VKWebAppCheckAllowedScopes)
<!-- ---
title: 'VK Bridge | Доступы и разрешения | VKWebAppCheckAllowedScopes'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCheckAllowedScopes

С помощью события `VKWebAppCheckAllowedScopes` вы можете проверить, есть ли у мини-приложения или игры, в которых вы вызываете событие, доступ к тем или иным данным пользователя или разрешение на выполнение действий над этими данными. 

## Пример

```JavaScript
bridge.send('VKWebAppCheckAllowedScopes', {
  scopes: 'friends,notify'
  })
  .then( (data) => { 
    if (data.result) {
      // Права доступа получены
    }
  })
  .catch( (error) => {
    // Ошибка
    console.log(error);
  });
```

#### Другой пример

* [Игры — Запрос прав во время выполнения](games/development/permissions#Запрос%20прав%20во%20время%20выполнения)

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `scopes` &#x0d;&#x0a;*обязательное* | `string` | Список прав для проверки. Указывайте их как строковые константы, перечисленные через запятую, например `'friends,notify'`. &#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `notify` — возможность отправлять пользователю уведомления.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `friends` — доступ к списку друзей пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `photos` — доступ к фотографиям в профиле пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `video` — доступ к видео в профиле пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `stories` — доступ к историям, созданным пользователем. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `pages` — доступ к вики-страницам пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `menu` — возможность добавить ссылку на мини-приложение или игру в меню, которое отображается в десктопной версии сайта ВКонтакте слева.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `status` — доступ к статусу пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `messages` — разрешение на использование API-запросов для работы с сообщениями пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `wall` — разрешение на использование API-запросов для работы со стеной пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `ads` — разрешение на использование API-запросов для работы с [рекламным API](method/ads).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `docs` — доступ к файлам и документам пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `groups` — доступ к информации о сообществах пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `notifications` — получить оповещения об ответах пользователю.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `stats` — доступ к статистике сообществ и приложений, которые администрирует пользователь.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `email` — доступ к адресу электронной почты пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `group_messages` — разрешение на отправку пользователю сообщений от лица сообщества, которое указано как официальное сообщество в настройках [мини-приложения](mini-apps/settings/general/information) или [игры](games/settings/general/information).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `market` — доступ к информации о товарах пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `phone` — доступ к номеру телефона пользователя.&#x0d;&#x0a;&#x0d;&#x0a;Следующие значения больше не используются. Результат их проверки&nbsp;— всегда `false`. Константы оставлены для обратной совместимости:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `adsweb`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `audio`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `exchange`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `offline`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `support`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `wallmenu` |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppCheckAllowedScopesResult` и `VKWebAppCheckAllowedScopesFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `array[object]` | Информация о том, есть ли у мини-приложения или игры права, которые вы указали в параметре [`scopes`](#Параметры) при вызове события.&#x0d;&#x0a;&#x0d;&#x0a;Каждый элемент массива — объект с информацией о наличии того или иного права. Этот объект содержит следующие поля:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `scope` (`string`) — право доступа. Для обозначения прав используются те же строковые константы, которые вы указываете в [параметре `scopes`](#Параметры).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `allowed` (`boolean`) — информация о том, есть ли право или нет. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppCheckAllowedScopesResult`

Сигнализирует, что информация о правах доступа получена. В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppCheckAllowedScopesResult",
    data: {
      "result": [
        {
          "scope": "friends",
          "allowed": true
        },
        {
          "scope": "notify",
          "allowed": false
        }
      ]
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppCheckAllowedScopesFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [API — Права доступа](api/privacy#Права%20доступа)

* [Игры — Права доступа](games/development/permissions)

* [API](api/getting-started)

* [`VKWebAppAllowMessagesFromGroup`](bridge/VKWebAppAllowMessagesFromGroup)

* [`VKWebAppAllowNotifications`](bridge/VKWebAppAllowNotifications)

* [`VKWebAppGetAuthToken`](bridge/VKWebAppGetAuthToken)
