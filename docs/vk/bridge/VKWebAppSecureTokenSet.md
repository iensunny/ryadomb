# VK Bridge | VKWebAppSecureTokenSet

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenSet](https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenSet)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Аутентификация | VKWebAppSecureTokenSet'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSecureTokenSet

`VKWebAppSecureTokenSet` сохраняет произвольную строку в защищённое хранилище на устройстве пользователя. Получить строку из хранилища можно с помощью события [`VKWebAppSecureTokenGet`](bridge/VKWebAppSecureTokenGet).

Сохранённое значение используется в качестве ключа доступа к данным приложения после успешной [аутентификации пользователя по биометрии](mini-apps/development/biometrics-authentication).

## Пример

```JavaScript
bridge.send('VKWebAppSecureTokenSet', {
  token: 'le93@1YpW73&1'
  })
  .then((data) => { 
    if (data.result) {
      // Произвольная строка сохранена в качестве ключа доступа
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

| Поле | Тип | Описание |
| --- | --- | --- |
| `token` &#x0d;&#x0a;*обязательное* | `string` | Произвольная строка, которую необходимо сохранить в качестве ключа доступа. Если у вас несколько мини-приложений, то строка должна быть уникальна для каждого из них. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSecureTokenSetResult` и `VKWebAppSecureTokenSetFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если произвольная строка была сохранена в качестве ключа доступа. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSecureTokenSetResult`

Сигнализирует, что произвольная строка была сохранена в качестве ключа доступа. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSecureTokenSetResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSecureTokenSetFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой, или о том, что биометрия недоступна на устройстве.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Рекомендации

* Чтобы сохранение и получение ключа работало корректно, сначала разрешите вход в мини-приложение c помощью биометрии, используя событие [`VKWebAppSecureTokenRequestAccess`](bridge/VKWebAppSecureTokenRequestAccess).
* Чтобы получить сохранённую строку, используйте событие [`VKWebAppSecureTokenGet`](bridge/VKWebAppSecureTokenGet).

## Материалы по теме

* [Аутентификация с помощью биометрии](mini-apps/development/biometrics-authentication)
* [`VKWebAppSecureTokenGet`](bridge/VKWebAppSecureTokenGet)
* [`VKWebAppSecureTokenRequestAccess`](bridge/VKWebAppSecureTokenRequestAccess)
