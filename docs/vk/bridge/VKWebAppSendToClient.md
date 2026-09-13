# VK Bridge | VKWebAppSendToClient

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSendToClient](https://dev.vk.ru/ru/bridge/VKWebAppSendToClient)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppSendToClient'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSendToClient

`VKWebAppSendToClient` показывает окно с предложением открыть мини-приложение или игру на привязанном к аккаунту мобильном устройстве.

## Пример

```JavaScript
bridge.send('VKWebAppSendToClient')
  .then((data) => {
    if (data.result) {
      // Мини-приложение или игра запущены на мобильном устройстве
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
| ВКонтакте | Mobile Web, Web |
| Одноклассники | – |
## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `fragment` &#x0d;&#x0a;*необязательное* | `string` | Хеш — строка после символа `#` в URL вида `vk.com/app6909581#`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSendToClientResult` и `VKWebAppSendToClientFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если мини-приложение или игра запущены на мобильном устройстве. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSendToClientResult`

Сигнализирует, что мини-приложение или игра запущены на мобильном устройстве. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSendToClientResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSendToClientFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppSendToClient](https://vk.cc/bZfu1G)
