# VK Bridge | VKWebAppSecureTokenGet

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenGet](https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenGet)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Аутентификация | VKWebAppSecureTokenGet'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSecureTokenGet

`VKWebAppSecureTokenGet` запускает [проверку биометрии](mini-apps/development/biometrics-authentication) и после её успешного прохождения возвращает ключ доступа из защищённого хранилища. Ключ доступа устанавливается с помощью события [`VKWebAppSecureTokenSet`](bridge/VKWebAppSecureTokenSet).

![alt=Окно проверки биометрии;title=Окно проверки биометрии](7c9f6af24aab1491e95e95b30c7822fdeb5aafe4e7dd9d17d256a07b "3783887181111224005")

## Пример

```JavaScript
bridge.send('VKWebAppSecureTokenGet')
  .then((data) => { 
    if (data.token) {
      // Ключ доступа получен
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

* С помощью [событий](#События) `VKWebAppSecureTokenGetResult` и `VKWebAppSecureTokenGetFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `token` | `string` | Ключ доступа из защищённого хранилища. Если на устройстве нет сохранённого ключа доступа, возвращается значение `null`. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSecureTokenGetResult`

Сигнализирует, что ключ доступа получен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSecureTokenGetResult",
    data: {
      result: {
        token: "le93@1YpW73&1"
      }
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSecureTokenGetFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой, или означает, что пользователь запретил использование биометрии.

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
