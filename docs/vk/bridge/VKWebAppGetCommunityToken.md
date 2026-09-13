# VK Bridge | VKWebAppGetCommunityToken

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetCommunityToken](https://dev.vk.ru/ru/bridge/VKWebAppGetCommunityToken)
<!-- ---
title: 'VK Bridge | Доступы и разрешения | VKWebAppGetCommunityToken'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetCommunityToken 

`VKWebAppGetCommunityToken` показывает окно с запросом прав доступа у пользователя и получает ключ доступа для работы с API от имени сообщества. Получить ключ доступа сообщества может только его администратор.

> **Совет.** Чтобы получить список идентификаторов администрируемых сообществ, вызовите метод [`groups.get`](method/groups.get) с параметром `filter=admin`. Для работы с этим методом необходим [ключ доступа пользователя](bridge/VKWebAppGetAuthToken) с правами `scope=groups`.

## Пример

```JavaScript
 bridge.send("VKWebAppGetCommunityToken", {
   app_id: 6909581,
   group_id: 166562603,
   scope: 'messages'
   })
  .then((data) => { 
    if (data.access_token) {
      // Ключ доступа сообщества получен
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
| `app_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор мини-приложения. |
| `group_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор сообщества. |
| `scope` &#x0d;&#x0a;*обязательное* | `string` | Список [прав доступа](api/privacy#Права%20доступа), перечисленных через запятую. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `stories` — доступ к историям.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `photos` — доступ к фотографиям.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `app_widget` — доступ к [виджетам сообществ](api/community-apps-widgets/getting-started).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `messages` — доступ к сообщениям сообщества.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `docs` — доступ к документам.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `manage` — доступ к администрированию сообщества. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppGetCommunityTokenResult` и `VKWebAppGetCommunityTokenFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `access_token` | `string` | Ключ доступа сообщества. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetCommunityTokenResult`

Сигнализирует, что ключ доступа сообщества получен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetCommunityTokenResult",
    data: {
      access_token: "cc9521551d93ddb290b32648a37a006d87438a67f953dd37e564eb6db1ec28f79d05c16e207f00a0" 
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetCommunityTokenFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppGetCommunityToken](https://vk.cc/bZfqzK)

## Материалы по теме

* [Ключ доступа сообщества](api/access-token/getting-started#Ключ%20доступа%20сообщества)

* [`VKWebAppGetAuthToken`](bridge/VKWebAppGetAuthToken)
