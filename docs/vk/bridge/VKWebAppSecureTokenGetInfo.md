# VK Bridge | Аутентификация | VKWebAppSecureTokenGetInfo

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenGetInfo](https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenGetInfo)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Аутентификация | VKWebAppSecureTokenGetInfo'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSecureTokenGetInfo

`VKWebAppSecureTokenGetInfo` возвращает информацию о том, доступно ли на устройстве использование биометрии: изображения лица или отпечатка пальца. 

В дальнейшем эти данные могут использоваться для [аутентификации пользователя в мини-приложении](mini-apps/development/biometrics-authentication).

## Пример

```JavaScript
bridge.send('VKWebAppSecureTokenGetInfo')
  .then((data) => { 
    if (data.available) {
      // Биометрия доступна на устройстве
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
| Одноклассники | iOS |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSecureTokenGetInfoResult` и `VKWebAppSecureTokenGetInfoFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `available` | `boolean` | Информация о том, доступно ли использование биометрических данных на устройстве. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — биометрия доступна.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — биометрия недоступна. |
| `access_requested` | `boolean` | Информация о том, запрашивало ли мини-приложение доступ к биометрии. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — доступ запрошен.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — доступ не запрошен. |
| `allowed` | `boolean` | Информация о том, получило ли мини-приложение разрешение на использование биометрии. Поле есть, если `accessRequested` = `true`. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — разрешение получено.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — разрешение не получено. |
| `stored` | `boolean` | Информация о том, есть ли сохранённый ключ доступа на устройстве. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — сохранённый ключ доступа есть на устройстве.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — сохранённый ключ доступа отсутствует на устройстве. |
| `type` | `string` | Если биометрия доступна на устройстве, то всегда возвращает значение `finger` независимо от типа доступной биометрии: отпечатка пальца или изображения лица.|
| `device_id` | `string` | Уникальный идентификатор устройства, с помощью которого можно сопоставить ключ доступа с устройством. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSecureTokenGetInfoResult`

Сигнализирует, что биометрия доступна на устройстве. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSecureTokenGetInfoResult",
    data: {
      available: true,
      access_requested: true,
      allowed: false,
      stored: false,
      type: "finger",
      device_id: "abceb6d87d4f65f2d5436573136720b9"
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSecureTokenGetInfoFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Рекомендации

* Чтобы сохранение и получение ключа работало корректно, сначала разрешите вход в мини-приложение c помощью биометрии, используя событие [`VKWebAppSecureTokenRequestAccess`](bridge/VKWebAppSecureTokenRequestAccess).
* Чтобы сохранить произвольную строку в качестве ключа доступа, используйте событие [`VKWebAppSecureTokenSet`](bridge/VKWebAppSecureTokenSet).

## Материалы по теме

* [Авторизация с помощью биометрии](mini-apps/development/biometrics-authentication)
* [`VKWebAppSecureTokenSet`](bridge/VKWebAppSecureTokenSet)
* [`VKWebAppSecureTokenRequestAccess`](bridge/VKWebAppSecureTokenRequestAccess)
