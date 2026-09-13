# VK Bridge | VKWebAppSecureTokenRequestAccess

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenRequestAccess](https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenRequestAccess)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Аутентификация | VKWebAppSecureTokenRequestAccess'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSecureTokenRequestAccess

`VKWebAppSecureTokenRequestAccess` запрашивает у пользователя разрешение на использование биометрии в качестве способа [аутентификации пользователя в мини-приложении](mini-apps/development/biometrics-authentication). Пользователю будет показан запрос на использование биометрии: отпечатка пальца или лица.

![alt=Окно проверки биометрии;title=Окно проверки биометрии](7c9f6af24aab1491e95e95b30c7822fdeb5aafe4e7dd9d17d256a07b "3783887181111224005")

## Пример

```JavaScript
bridge.send('VKWebAppSecureTokenRequestAccess')
  .then((data) => { 
    if (data.result) {
      // Разрешение на использование биометрии получено
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

* С помощью [событий](#События) `VKWebAppSecureTokenRequestAccessResult` и `VKWebAppSecureTokenRequestAccessFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если разрешение на использование биометрии для аутентификации было получено. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSecureTokenRequestAccessResult`

Сигнализирует, что разрешение на использование биометрии для аутентификации было получено. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSecureTokenRequestAccessResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSecureTokenRequestAccessFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой, или о том, что биометрия недоступна на устройстве.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Рекомендации

* Отправляйте событие `VKWebAppSecureTokenRequestAccess`, прежде чем сохранять ключ доступа с помощью события [`VKWebAppSecureTokenSet`](bridge/VKWebAppSecureTokenSet).
* Чтобы проверить, доступна ли биометрия на устройстве и запрашивалось ли разрешение пользователя для аутентификации по биометрии в мини-приложении, используйте событие [`VKWebAppSecureTokenGetInfo`](bridge/VKWebAppSecureTokenGetInfo).

## Материалы по теме

* [Аутентификация с помощью биометрии](mini-apps/development/biometrics-authentication)
* [`VKWebAppSecureTokenSet`](bridge/VKWebAppSecureTokenSet)
* [`VKWebAppSecureTokenGet`](bridge/VKWebAppSecureTokenGet)
