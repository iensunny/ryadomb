# VK Bridge | VKWebAppAddToHomeScreenInfo

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAddToHomeScreenInfo](https://dev.vk.ru/ru/bridge/VKWebAppAddToHomeScreenInfo)
<!-- ---
title: 'VK Bridge | Социальные механики и взаимодействие | VKWebAppAddToHomeScreenInfo'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAddToHomeScreenInfo

`VKWebAppAddToHomeScreenInfo` получает информацию о добавлении ярлыка мини-приложения или игры на главный экран устройства. Чтобы добавить ярлык на главный экран устройства, вызовите событие [`VKWebAppAddToHomeScreen`](bridge/VKWebAppAddToHomeScreen).

## Пример

```JavaScript
bridge.send('VKWebAppAddToHomeScreenInfo')
  .then((data) => { 
    if (data.is_added_to_home_screen) {
      // Информация получена
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

* С помощью [событий](#События) `VKWebAppAddToHomeScreenInfoResult` и `VKWebAppAddToHomeScreenInfoFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если вызов к платформе прошёл успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `is_feature_supported` | `boolean` | Информация о том, можно ли добавить ярлык мини-приложения или игры на главный экран устройства. |
| `is_added_to_home_screen` | `boolean` | Информация о том, установлен ли ярлык мини-приложения или игры на главном экране устройства. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAddToHomeScreenInfoResult`

Сигнализирует, что информация о добавлении ярлыка мини-приложения или игры на главный экран устройства получена. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAddToHomeScreenInfoResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAddToHomeScreenInfoFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppAddToHomeScreenInfo](https://vk.cc/bZfrp6)

## Материалы по теме

* [Добавление игры на главный экран Android-устройства](games/promotion/game-mechanics/add-to-home-screen)

* [VKWebAppAddToHomeScreen](bridge/VKWebAppAddToHomeScreen)
