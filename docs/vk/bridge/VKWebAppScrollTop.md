# VK Bridge | VKWebAppScrollTop

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppScrollTop](https://dev.vk.ru/ru/bridge/VKWebAppScrollTop)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppScrollTop'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppScrollTop

`VKWebAppScrollTop` возвращает текущую позицию прокрутки от верха родительского окна мини-приложения.

## Пример

```JavaScript
bridge.send('VKWebAppScrollTop')
  .then((data) => { 
    if (data.scrollTop) {
      // Возвращается текущая позиция прокрутки сверху
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

* С помощью [событий](#События) `VKWebAppScrollTopResult` и `VKWebAppScrollTopFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `scrollTop` | `number` | Текущая позиция прокрутки от верха родительского окна в пикселях. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppScrollTopResult`

Сигнализирует, что события начали отправляться. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppScrollTopResult",
    data: {
      scrollTop: "100"
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppScrollTopFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
