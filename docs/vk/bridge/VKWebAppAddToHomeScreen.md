# VK Bridge | VKWebAppAddToHomeScreen

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAddToHomeScreen](https://dev.vk.ru/ru/bridge/VKWebAppAddToHomeScreen)
<!-- ---
title: 'VK Bridge | Социальные механики и взаимодействие | VKWebAppAddToHomeScreen'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAddToHomeScreen

`VKWebAppAddToHomeScreen` показывает окно с предложением добавить ярлык мини-приложения или игры на экран устройства. Чтобы убедиться, что ярлык ещё не был добавлен, вызовите событие [`VKWebAppAddToHomeScreenInfo`](bridge/VKWebAppAddToHomeScreenInfo).

## Пример

```JavaScript
bridge.send('VKWebAppAddToHomeScreen')
  .then((data) => { 
    if (data.result) {
      // Ярлык мини-приложения или игры добавлен на экран устройства
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
| ВКонтакте | Android |
| Одноклассники | – |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAddToHomeScreenResult` и `VKWebAppAddToHomeScreenFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.
* `User denied`, если пользователь запретил доступ.

### Объект `Promise`

Если вызов к платформе прошёл успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если ярлык мини-приложения или игры добавлен на главный экран устройства. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAddToHomeScreenResult`

Сигнализирует, что ярлык мини-приложения или игры добавлен на главный экран устройства. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAddToHomeScreenResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAddToHomeScreenFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Смотри раздел [Обработка событий-результатов](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [Добавление игры на главный экран Android-устройства](games/promotion/game-mechanics/add-to-home-screen)

* [VKWebAppAddToHomeScreenInfo](bridge/VKWebAppAddToHomeScreenInfo)
