# VK Bridge | VKWebAppSetSwipeSettings

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSetSwipeSettings](https://dev.vk.ru/ru/bridge/VKWebAppSetSwipeSettings)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppSetSwipeSettings'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSetSwipeSettings

`VKWebAppSetSwipeSettings` настраивает в мобильном приложении стандартное поведение жеста «смахнуть назад» (Swipe Back), как в браузере.

## Пример

```JavaScript
bridge.send('VKWebAppSetSwipeSettings', {
  history: true
  })
  .then((data) => { 
    if (data.result) {
      // Настройка применилась
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
| ВКонтакте | iOS |
| Одноклассники | iOS |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `history` &#x0d;&#x0a;*обязательное* | `bool` | Настройка жеста Swipe Back. Возможные значения:&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `true` — включает стандартное поведение жеста.&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `false` — выключает стандартное поведение жеста. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSetSwipeSettingsResult` и `VKWebAppSetSwipeSettingsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если настройка применилась. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSetSwipeSettingsResult`

Сигнализирует, что настройка применилась. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSetSwipeSettingsResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSetSwipeSettingsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
