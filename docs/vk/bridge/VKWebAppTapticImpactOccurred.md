# VK Bridge | VKWebAppTapticImpactOccurred

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppTapticImpactOccurred](https://dev.vk.ru/ru/bridge/VKWebAppTapticImpactOccurred)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Виброотклик | VKWebAppTapticImpactOccurred'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppTapticImpactOccurred

`VKWebAppTapticImpactOccurred` вызывает вибрацию мобильного устройства. В iOS вызывает [`impactOccurred`](https://developer.apple.com/documentation/uikit/uiimpactfeedbackgenerator/2374287-impactoccurred) в Taptic Engine.

## Пример

```JavaScript
bridge.send('VKWebAppTapticImpactOccurred', {
  style: 'heavy'
  })
  .then((data) => { 
    if (data.result) {
      // Вибрация вызвана
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

В качестве параметра событие принимает объект, содержащий следующие поля:

| Поле | Тип | Описание |
| --- | --- | --- |
| `style` &#x0d;&#x0a;*обязательное* | `string` | Сила вибрации. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `light` — лёгкая.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `medium` — средняя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `heavy` — сильная.&#x0d;&#x0a;&#x0d;&#x0a;Некоторые Android-устройства поддерживают вибрацию только с одной амплитудой. На таких устройствах параметр `style` не будет иметь эффекта, а если параметр `disable_vibration_fallback` равен `true`, вибрация не будет проиграна совсем. |
| `disable_vibration_fallback`&#x0d;&#x0a;*необязательное* | `boolean` | Разрешение использовать вибрацию с постоянной амплитудой на устройствах, которые не поддерживают вибрацию с переменной амплитудой.&#x0d;&#x0a;&#x0d;&#x0a;Мобильные устройства могут вибрировать с переменной или постоянной амплитудой. Все iOS-устройства поддерживают вибрацию с переменной амплитудой и всегда используют эту возможность. Что касается Android, то поддержка переменной амплитуды может отсутствовать на некоторых устройствах.&#x0d;&#x0a;&#x0d;&#x0a;Параметр работает только на Android.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Если параметр равен `false`, то Android-устройство будет воспроизводить вибрацию даже если оно не поддерживает настройку силы вибрации. В этом случае оно проиграет вибрацию с постоянной амплитудой.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Если параметр равен `true`, то вибрация будет проиграна только на Android-устройствах с поддержкой переменной амплитуды. На остальных устройствах резервный способ — воспроизведение с постоянной амплитудой — использоваться не будет, то есть вибрация не будет воспроизведена.&#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию: `false`.|

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppTapticImpactOccurredResult` и `VKWebAppTapticImpactOccurredFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если вибрация вызвана. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppTapticImpactOccurredResult`

Сигнализирует, что вибрация вызвана. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppTapticImpactOccurredResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppTapticImpactOccurredFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
