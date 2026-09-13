# VK Bridge | VKWebAppDeviceMotionStop

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppDeviceMotionStop](https://dev.vk.ru/ru/bridge/VKWebAppDeviceMotionStop)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Положение в пространстве | VKWebAppDeviceMotionStop'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppDeviceMotionStop

`VKWebAppDeviceMotionStop` прекращает [отслеживание данных о положении мобильного устройства в пространстве](bridge/VKWebAppDeviceMotionStart).

## Пример

```JavaScript
bridge.send('VKWebAppDeviceMotionStop')
  .then((data) => { 
    if (data.result) {
      // Отслеживание данных о положении в пространстве прекращено
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

* С помощью [событий](#События) `VKWebAppDeviceMotionStopResult` и `VKWebAppDeviceMotionStopFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если отслеживание данных о положении в пространстве прекращено. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppDeviceMotionStopResult`

Сигнализирует, что отслеживание данных о положении в пространстве прекращено. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppDeviceMotionStopResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppDeviceMotionStopFailed`

Информирует, что при взаимодействии с платформой произошла ошибка или не удалось остановить отслеживание данных.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
