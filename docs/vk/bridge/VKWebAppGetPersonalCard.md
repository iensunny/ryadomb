# VK Bridge | VKWebAppGetPersonalCard

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetPersonalCard](https://dev.vk.ru/ru/bridge/VKWebAppGetPersonalCard)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Пользователи | VKWebAppGetPersonalCard'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppGetPersonalCard

`VKWebAppGetPersonalCard` вызывает карточку контактов пользователя с полями, которые вы запросили. Мобильное приложение показывает экран с запросом доступа к выбранным данным.

**Карточка контактов** — это место, где пользователь сохраняет контактные данные (номер телефона, адрес, email), которыми он готов поделиться с сервисами сторонних разработчиков.

Данные в карточке контактов не связаны с данными профиля и живут независимо от них. При этом в интерфейсе вашего мини-приложения пользователь сможет выбрать, какие именно данные из карточки предоставить, или отредактировать данные прямо в процессе запроса доступов.

## Пример

```JavaScript
bridge.send('VKWebAppGetPersonalCard', {
  type: [
    'phone',
    'email',
    'address'
  ]})
  .then((data) => { 
    if (data.phone) {
      // Данные получены
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
| ВКонтакте | Android, iOS |
| Одноклассники | – |

## Параметры

| Поле | Тип | Описание |
|---|---|---|
| `type` &#x0d;&#x0a;*обязательное* | `array[string]` | Массив доступов. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `phone` — номер телефона пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `email` — электронный адрес пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `address` — физический адрес пользователя. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppGetPersonalCardResult` и `VKWebAppGetPersonalCardFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.
* `User denied`, если пользователь запретил доступ к данным.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `phone` | `string` | Номер телефона пользователя. |
| `email` | `string` | Электронный адрес пользователя. |
| `address` | `object` | Информация об адресе пользователя. Поля объекта:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `city` (`object`) —  город пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `country` (`object`) — страна пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `specified_address` (`string`) — точный адрес, указанный пользователем.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `postal_code` (`string`) — почтовый индекс.&#x0d;&#x0a;&#x0d;&#x0a; Поля объекта `country`:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `id` (`integer`) — идентификатор страны.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `title` (`string`) — название страны.&#x0d;&#x0a;&#x0d;&#x0a; Поля объекта `city`:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `id` (`integer`) — идентификатор города.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `title` (`string`) — название города. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetPersonalCardResult`

Сигнализирует, что данные получены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetPersonalCardResult",
    data: {
      phone: "79111234567",
      email: "persik_ryzhiy@mail.ru"
      address: {
        country: {
          id: 1,
          name: "Россия"
        },
        city: {
          id: 2,
          name: "Санкт-Петербург"
        },
        specified_address: "Невский пр., д. 28"
        postal_code: "191186"
      }
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetPersonalCardFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Особенности использования

Платформа ВКонтакте показывает окно подтверждения доступа к данным при каждом вызове события `VKWebAppGetPersonalCard`. Это помогает вашему приложению получать актуальные данные.

Если вашему приложению нужно использовать полученные данные несколько раз, сохраните их на стороне приложения и предоставьте возможность редактирования по запросу.

## Материалы по теме

* [VKWebAppGetEmail](bridge/VKWebAppGetEmail)

* [VKWebAppGetPhoneNumber](bridge/VKWebAppGetPhoneNumber)

* [VKWebAppGetUserInfo](bridge/VKWebAppGetUserInfo)
