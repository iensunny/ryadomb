# VK Bridge | Виброотклик (Taptic Engine) | VKWebAppTapticNotificationOccurred

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppTapticNotificationOccurred](https://dev.vk.ru/ru/bridge/VKWebAppTapticNotificationOccurred)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Виброотклик | VKWebAppTapticNotificationOccurred'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppTapticNotificationOccurred

`VKWebAppTapticNotificationOccurred` передаёт генератору виброотклика информацию о том, что задача или действие:

* Успешно выполнено.
* Не выполнено.
* Выдало предупреждение.

В ответ генератор может воспроизводить соответствующие параметру тактильные отклики. В iOS `VKWebAppTapticNotificationOccurred` вызывает [`notificationOccurred`](https://developer.apple.com/documentation/uikit/uinotificationfeedbackgenerator/2369826-notificationoccurred) в Taptic Engine.

## Пример

```JavaScript
bridge.send('VKWebAppTapticNotificationOccurred', {
  type: 'error'
  })
  .then((data) => { 
    if (data.result) {
      // Информация передана генератору
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
| `type` &#x0d;&#x0a;*обязательное* | `string` | Тип информации. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `error` — ошибка.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `success` — успех.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `warning` — предупреждение. |
| `disable_vibration_fallback`&#x0d;&#x0a;*необязательное* | `boolean` | Разрешение использовать вибрацию с постоянной амплитудой на устройствах, которые не поддерживают вибрацию с переменной амплитудой.&#x0d;&#x0a;&#x0d;&#x0a;Мобильные устройства могут вибрировать с переменной или постоянной амплитудой. Все iOS-устройства поддерживают вибрацию с переменной амплитудой и всегда используют эту возможность. Что касается Android, то поддержка переменной амплитуды может отсутствовать на некоторых устройствах.&#x0d;&#x0a;&#x0d;&#x0a;Параметр работает только на Android.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Если параметр равен `false`, то Android-устройство будет воспроизводить вибрацию даже если оно не поддерживает настройку силы вибрации. В этом случае оно проиграет вибрацию с постоянной амплитудой.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Если параметр равен `true`, то вибрация будет проиграна только на Android-устройствах с поддержкой переменной амплитуды. На остальных устройствах резервный способ — воспроизведение с постоянной амплитудой — использоваться не будет, то есть вибрация не будет воспроизведена.&#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию: `false`.|

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppTapticNotificationOccurredResult` и `VKWebAppTapticNotificationOccurredFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если информация передана генератору. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppTapticNotificationOccurredResult`

Сигнализирует, что информация передана генератору. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppTapticNotificationOccurredResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppTapticNotificationOccurredFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
