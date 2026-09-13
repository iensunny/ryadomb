# VK Bridge | VKWebAppGetAuthToken

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetAuthToken](https://dev.vk.ru/ru/bridge/VKWebAppGetAuthToken)
<!-- ---
title: 'VK Bridge | Доступы и разрешения | VKWebAppGetAuthToken'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetAuthToken

`VKWebAppGetAuthToken` отображает запрос на доступ к данным пользователя для мини-приложения или игры.

![alt=Мини-приложение запрашивает доступ к данным пользователя;title=Мини-приложение запрашивает доступ к данным пользователя](bff3df649cc625b99b1aaa522f07c0ab904f43cb6d893a60ccfdd097 "-3583967890873219494")

:::note
**Важно.** Адрес, с которого запрашивается доступ, должен совпадать с URL из настроек мини-приложения или игры. Чтобы получить этот адрес, библиотека VK Bridge использует значение `window.location`.  

* [Размещение (настройки мини-приложения)](mini-apps/settings/general/placement)
* [Размешение (настройки игры)](games/settings/general/placement)
:::

## Пример

```JavaScript
bridge.send('VKWebAppGetAuthToken', { 
  app_id: 6909581, 
  scope: 'friends,status'
  })
  .then( (data) => { 
    if (data.access_token) {
      // Ключ доступа пользователя получен
    }
  })
  .catch( (error) => {
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
| `app_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор мини-приложения или игры. |
| `scope` &#x0d;&#x0a;*обязательное* | `string` | Запрашиваемые права доступа и разрешения. Укажите одну или несколько констант ниже через запятую:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `friends` — доступ к списку друзей пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `photos` — доступ к фотографиям в профиле пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `video` — доступ к видео в профиле пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `stories` — доступ к историям, созданным пользователем.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `pages` — доступ к вики-страницам пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `status` — доступ к статусу пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `messages` — разрешение на использование API-запросов для работы с сообщениями пользователя. С 2019 года доступ не выдаётся. [Подробнее об ограничении доступа](reference/roadmap#Ограничение%20Messages%20API).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `wall` — возможность использовать API-запросы для работы со стеной пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `docs` — доступ к документам пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `groups` — доступ к информации о сообществах пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `stats` — доступ к статистике сообществ и приложений, которые администрирует пользователь.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `group_messages` — разрешение на отправку пользователю сообщений от лица сообщества, которое указано как официальное сообщество в настройках [мини-приложения](mini-apps/settings/general/information) или [игры](games/settings/general/information).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `market` — доступ к товарам, добавленным пользователем на платформу.&#x0d;&#x0a;&#x0d;&#x0a;Если вы передадите пустую строку в параметре `scope`, платформа вернёт ключ доступа для прав, запрошенных ранее.&#x0d;&#x0a;&#x0d;&#x0a;**Важно.** Если вы укажете неподдерживаемое значение в `scope`, произойдёт ошибка.&#x0d;&#x0a;&#x0d;&#x0a; |
| `append_local` &#x0d;&#x0a;*необязательное* | `boolean` | Указывает, для какой площадки нужно получить ключ. Возможные значения: &#x0d;&#x0a; &nbsp;&nbsp; &bullet;  `true` — получить ключ для площадки, которая использует SDK (например, Одноклассники). &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — получить ключ для ВКонтакте. Значение по умолчанию.&#x0d;&#x0a;&#x0d;&#x0a;Ключ доступа вернётся в ответе в поле `local_access_token`. |

## Результат

Если пользователь разрешает доступ к данным своего профиля, событие вернёт [ключ доступа](api/access-token/getting-started) для работы с API. Если пользователь отклоняет запрос, вернётся ошибка.

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAccessTokenReceived` и `VKWebAppAccessTokenFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `access_token` | `string` | Ключ доступа пользователя. |
| `local_access_token` | `string` | Ключ доступа для площадки, использующей SDK. |
| `scope` | `string` | Список прав доступа, которые пользователь выдал. Эта строка может отличаться от строки, переданной в поле `scope` при вызове события. |
| `expires` | `integer` | Дата и время в формате [Unix Timestamp](https://www.unixtimestamp.com/), когда время жизни ключа истечёт. |
| `status` | `boolean` | Индикатор, что событие выполнилось успешно (всегда `true`). |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAccessTokenReceived`

Сигнализирует, что ключ доступа пользователя получен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAccessTokenReceived",
    data: {
      access_token: "vk12XyJnfX7mG7PE1MBW...6KV4dcdjVjzwwwSDkX",
      expires: 1665151371,
      request_id: "5_u5w",
      scope: "docs",
      status: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAccessTokenFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

<!-- ## Особенности использования

Чтобы идентифицировать пользователя в мини-приложении, ключ доступа запрашивать не нужно, воспользуйтесь [подписью параметров запуска](mini-apps/development/launch-params). -->

## Песочница

[VKWebAppGetAuthToken](https://vk.cc/bZfnlf)

## Материалы по теме

* [API — Права доступа](api/privacy#Права%20доступа)

* [Игры — Права доступа](games/development/permissions)

* [API](api/getting-started)

* [`VKWebAppCheckAllowedScopes`](bridge/VKWebAppCheckAllowedScopes)

* [`VKWebAppGetCommunityToken`](bridge/VKWebAppGetCommunityToken)
