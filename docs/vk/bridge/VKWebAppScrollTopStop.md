# VK Bridge | VKWebAppScrollTopStop

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppScrollTopStop](https://dev.vk.ru/ru/bridge/VKWebAppScrollTopStop)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppScrollTopStop'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppScrollTopStop

`VKWebAppScrollTopStop` останавливает отправку событий, начатых событием [`VKWebAppScrollTopStart`](bridge/VKWebAppScrollTopStart), из родительского окна в мини-приложение.

## Пример

```JavaScript
bridge.send('VKWebAppScrollTopStop')
  .then((data) => { 
    if (data.result) {
      // Отправка событий остановлена
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

* С помощью [событий](#События) `VKWebAppScrollTopStopResult` и `VKWebAppScrollTopStopFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если отправка событий остановлена;&#x0d;&#x0a;`false` — в ином случае. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppScrollTopStopResult`

Сигнализирует, что отправка событий остановлена. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
   "detail":{
      "type":"VKWebAppScrollTopStopResult",
      "data":{
         "result":true
      }
   }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppScrollTopStopFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
