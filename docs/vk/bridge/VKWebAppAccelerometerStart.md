# VK Bridge | VKWebAppAccelerometerStart

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAccelerometerStart](https://dev.vk.ru/ru/bridge/VKWebAppAccelerometerStart)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Акселерометр | VKWebAppAccelerometerStart'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAccelerometerStart

`VKWebAppAccelerometerStart` включает отслеживание и приём данных акселерометра, установленного на мобильном устройстве. 

## Схема работы

1. Клиент вызывает `VKWebAppAccelerometerStart` для начала получения данных акселерометра.
1. Платформа отвечает:
   * Событием [`VKWebAppAccelerometerStartResult`](#VKWebAppAccelerometerStartResult) в случае успешного выполнения.
   * Событием [`VKWebAppAccelerometerStartFailed`](#VKWebAppAccelerometerStartFailed) в случае ошибки доступа к датчику.
1. Если на предыдущем шаге не было ошибки, платформа начинает отправлять поток событий [`VKWebAppAccelerometerChanged`](#VKWebAppAccelerometerChanged) с данными акселерометра.
1. На iOS поток событий с данными акселерометра может быть прерван. В этом случае платформа отправляет событие [`VKWebAppAccelerometerInterrupted`](#VKWebAppAccelerometerInterrupted).
1. Чтобы возобновить получение данных акселерометра, снова вызовите `VKWebAppAccelerometerStart`.

Чтобы прекратить отслеживание данных, вызовите [`VKWebAppAccelerometerStop`](bridge/VKWebAppAccelerometerStop).

## Пример

```JavaScript
bridge.send('VKWebAppAccelerometerStart', {
  refresh_rate: 500
  })
  .then((data) => { 
    if (data.result) {
      // Отслеживание данных акселерометра включено
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

| Поле | Тип | Описание |
| --- | --- | --- |
| `refresh_rate` &#x0d;&#x0a;*необязательное* | `integer` | Период обновления данных акселерометра в миллисекундах. Минимальное значение: `20`. Максимальное значение: `1000`. Значение по умолчанию: `1000`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью событий:
  * [`VKWebAppAccelerometerStartResult`](#VKWebAppAccelerometerStartResult)
  * [`VKWebAppAccelerometerStartFailed`](#VKWebAppAccelerometerStartFailed)

Подробнее о проверке результатов при вызовах VK Bridge — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`.

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAccelerometerStartResult`

Сигнализирует, что отслеживание данных акселерометра включено и мини-приложение может получать данные. В обработчик события на стороне пользователя передаются данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAccelerometerStartResult",
    data: {
      result: true
    }
  }
}
```

В качестве ответа платформа возвращает объект:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если отслеживание данных акселерометра включено. |

#### `VKWebAppAccelerometerStartFailed`

Информирует, что при взаимодействии с платформой произошла ошибка или что мини-приложение не может получить данные акселерометра.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

## Отслеживание данных

Чтобы получить текущее состояние акселерометра, подпишитесь на события:

* [`VKWebAppAccelerometerChanged`](#VKWebAppAccelerometerChanged) — отслеживает координаты устройства при его перемещении.
* [`VKWebAppAccelerometerInterrupted`](#VKWebAppAccelerometerInterrupted) — сообщает о том, что поток данных прервался. Событие доступно только для iOS.

#### `VKWebAppAccelerometerChanged`

Сигнализирует, что получены данные акселерометра. Акселерометр измеряет проекцию кажущегося ускорения — разницу между истинным и гравитационным ускорением. Таким образом определяется положение устройства относительно осей X, Y и Z. Знак числа обозначает направление перемещения.
``

![alt=Положение устройства относительно осей X, Y, Z;title=Положение устройства относительно осей X, Y, Z;](1cee804e29a182df781e5f00dec3b26447490dc34975e7ab7a59ab41 "-4623494985644253679")

В обработчик события на стороне пользователя передаются данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAccelerometerChanged",
    data: {
      x: -0.016759412,
      y: 6.3302693,
      z: 7.704541
    }
  }
}
```

В качестве ответа платформа возвращает объект с полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `x` | `float` | Проекция кажущегося ускорения на ось X в м/c&sup2;. |
| `y` | `float` | Проекция кажущегося ускорения на ось Y в м/c&sup2;. |
| `z` | `float` | Проекция кажущегося ускорения на ось Z в м/c&sup2;. |

#### `VKWebAppAccelerometerInterrupted`

Указывает на то, что поток событий `VKWebAppAccelerometerChanged` прерван и данные акселерометра больше не могут быть получены. Событие доступно только для iOS.

В обработчик события на стороне пользователя передаются данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAccelerometerInterrupted",
    data: {
      "message": "Received empty accelerometer data"
    }
  }
}
```

Чтобы продолжить отслеживание данных акселерометра, снова вызовите событие `VKWebAppAccelerometerStart`.
