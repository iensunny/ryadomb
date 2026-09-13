# VK Bridge | VKWebAppScrollTopStart

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppScrollTopStart](https://dev.vk.ru/ru/bridge/VKWebAppScrollTopStart)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppScrollTopStart'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppScrollTopStart

`VKWebAppScrollTopStart` начинает отправлять события о прокрутке родительского окна в мини-приложение. Чтобы остановить отправку событий, вызовите событие [`VKWebAppScrollTopStop`](bridge/VKWebAppScrollTopStop).

## Пример

```JavaScript
bridge.send('VKWebAppScrollTopStart')
  .then((data) => { 
    if (data.result) {
      // События отправляются
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
| ВКонтакте | Web |
| Одноклассники | Web |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppScrollTopStartResult` и `VKWebAppScrollTopStartFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если события начали отправляться. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppScrollTopStartResult`

Сигнализирует, что события начали отправляться. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
   "detail":{
      "type":"VKWebAppScrollTopStartResult",
      "data":{
         "result":true
      }
   }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppScrollTopStartFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
