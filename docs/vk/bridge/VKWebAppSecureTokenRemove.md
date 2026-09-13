# VK Bridge | VKWebAppSecureTokenRemove

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenRemove](https://dev.vk.ru/ru/bridge/VKWebAppSecureTokenRemove)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Аутентификация | VKWebAppSecureTokenRemove'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSecureTokenRemove

`VKWebAppSecureTokenRemove` удаляет ключ доступа, который был сохранён для [аутентификации пользователя с помощью биометрии](mini-apps/development/biometrics-authentication), из защищённого хранилища.

## Пример

```JavaScript
bridge.send('VKWebAppSecureTokenRemove')
  .then((data) => { 
    if (data.result) {
      // Ключ доступа удалён из защищённого хранилища
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

* С помощью [событий](#События) `VKWebAppSecureTokenRemoveResult` и `VKWebAppSecureTokenRemoveFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если ключ доступа был удалён из защищённого хранилища. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSecureTokenRemoveResult`

Сигнализирует, что ключ доступа был удалён из защищённого хранилища. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSecureTokenRemoveResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSecureTokenRemoveFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой, или о том, что биометрия недоступна на устройстве.

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
