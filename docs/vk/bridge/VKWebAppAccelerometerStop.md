# VK Bridge | VKWebAppAccelerometerStop

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAccelerometerStop](https://dev.vk.ru/ru/bridge/VKWebAppAccelerometerStop)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Акселерометр | VKWebAppAccelerometerStop'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAccelerometerStop

`VKWebAppAccelerometerStop` прекращает [отслеживание данных акселерометра](bridge/VKWebAppAccelerometerStart).

## Пример

```JavaScript
bridge.send('VKWebAppAccelerometerStop')
  .then((data) => { 
    if (data.result) {
      // Отслеживание данных акселерометра прекращено
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
| Одноклассники | Android, iOS |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAccelerometerStopResult` и `VKWebAppAccelerometerStopFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если отслеживание данных акселерометра прекращено. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAccelerometerStopResult`

Сигнализирует, что отслеживание данных акселерометра прекращено. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAccelerometerStopResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAccelerometerStopFailed`

Информирует, что при взаимодействии с платформой произошла ошибка или не удалось остановить отслеживание данных акселерометра.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
