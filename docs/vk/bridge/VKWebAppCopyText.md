# VK Bridge | VKWebAppCopyText

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCopyText](https://dev.vk.ru/ru/bridge/VKWebAppCopyText)
<!-- ---
title: 'VK Bridge | Текст и медиафайлы | VKWebAppCopyText'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCopyText

`VKWebAppCopyText` копирует переданный текст в буфер обмена.

## Пример

```JavaScript
bridge.send('VKWebAppCopyText', {
  text: 'Этот текст будет скопирован в буфер обмена.'
  })
  .then((data) => { 
    if (data.result) {
      // Текст скопирован в буфер обмена
    } else {
      // Ошибка
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
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `text` &#x0d;&#x0a;*обязательное* | `string` | Текст, который будет размещён в буфере обмена. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppCopyTextResult` и `VKWebAppCopyTextFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если текст был скопирован в буфер обмена. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppCopyTextResult`

Сигнализирует, что текст скопирован в буфер обмена. В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppCopyTextResult",
    data: {
      "status": "success",
      "payload": {
        "name": "value"
      }
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppCopyTextFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppCopyText](https://vk.cc/bZfsNa)
