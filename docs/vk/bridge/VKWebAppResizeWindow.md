# VK Bridge | Интерфейс и навигация | VKWebAppResizeWindow

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppResizeWindow](https://dev.vk.ru/ru/bridge/VKWebAppResizeWindow)
<!-- ---
title: 'VK Bridge | Внешний вид | VKWebAppResizeWindow'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppResizeWindow

`VKWebAppResizeWindow` изменяет ширину и высоту элемента `iframe`. 

## Пример

```JavaScript
bridge.send('VKWebAppResizeWindow', {
  width: 800,
  height: 1000
  })
  .then((data) => { 
    if (data.width) {
      // Ширина и высота элемента iframe изменены
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

| Поле | Тип | Описание                                                        |
| --- | --- | --- |
| `width` &#x0d;&#x0a;*необязательное* | `integer` | Ширина окна в пикселях. Диапазон значений: от `600` до `1000`.  |
| `height` &#x0d;&#x0a;*необязательное* | `string` | Высота окна в пикселях. Диапазон значений: от `500` до `10000`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppResizeWindowResult` и `VKWebAppResizeWindowFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `width` | `integer` | Ширина окна в пикселях. |
| `height` | `string` | Высота окна в пикселях. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppResizeWindowResult`

Сигнализирует, что ширина и высота элемента `iframe` изменены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppResizeWindowResult",
    data: {
      width: 800, 
      height: 1000 
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppResizeWindowFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppResizeWindow](https://vk.cc/bZfsxT)
