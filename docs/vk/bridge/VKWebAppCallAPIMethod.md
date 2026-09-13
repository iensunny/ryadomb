# VK Bridge | VKWebAppCallAPIMethod

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCallAPIMethod](https://dev.vk.ru/ru/bridge/VKWebAppCallAPIMethod)
<!-- ---
title: 'VK Bridge | Служебные | VKWebAppCallAPIMethod'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCallAPIMethod

С помощью `VKWebAppCallAPIMethod` вы можете отправлять запросы к [API ВКонтакте](reference) и [API Одноклассников](https://apiok.ru/ext/) из клиентской части вашего приложения.

:::note
**Важно!** Не вызывайте с помощью этого события методы с [сервисным ключом доступа](api/access-token/getting-started#Сервисный%20ключ%20доступа). Этот ключ используется для отправки API-запросов с сервера приложения. Передавать и хранить его в клиентской части приложения небезопасно.
:::

## Пример

```JavaScript
bridge.send('VKWebAppCallAPIMethod', {
  method: 'users.get',
  params: {
    user_ids: '743784474,743784479',
    v: ':version',
    access_token: 'ключ_доступа_пользователя'
  }})
  .then((data) => { 
    if (data.response) {
      // Метод API выполнен
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
| `method` &#x0d;&#x0a;*обязательное* | `string` | Имя вызываемого [метода API](method). |
| `params` &#x0d;&#x0a;*обязательное* | `object` | Параметры метода API. Возможные поля:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `access_token` (`string`) — ключ доступа пользователя с соответствующими правами, полученный с помощью события [`VKWebAppGetAuthToken`](bridge/VKWebAppGetAuthToken).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `v` (`string`) — версия API, используемая для запроса (последняя доступная версия: `:version`).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; другие обязательные параметры метода API. |
| `use_local` | `boolean` | Определяет, к API какой площадки отправляется запрос. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — к API площадки, которая использует SDK, например [API Одноклассников](https://apiok.ru/ext/).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — к [API Вконтакте](reference). Значение по умолчанию.|

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppCallAPIMethodResult` и `VKWebAppCallAPIMethodFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `response` | `array[object]` | Результат выполнения метода API. Описание структуры объекта `response` можно найти на странице соответствующего метода. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppCallAPIMethodResult`

Сигнализирует, что метод API выполнен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppCallAPIMethodResult",
    data: {
      response: [
        {
          id: 743784474,
          first_name: "Персик",
          last_name: "Рыжий",
          can_access_closed: true,
          is_closed: false
        },
        {
          id: 743784479,
          first_name: "Сеня",
          last_name: "Хомяк",
          can_access_closed: true,
          is_closed: false
        }
      ]
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppCallAPIMethodFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppCallAPIMethod](https://vk.cc/bZfnNu)

## Материалы по теме

* [API-вызовы в мини-приложениях](mini-apps/development/api-calls)
* [API-вызовы в играх](games/development/api-calls)
