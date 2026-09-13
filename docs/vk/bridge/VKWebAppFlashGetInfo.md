# VK Bridge | VKWebAppFlashGetInfo

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppFlashGetInfo](https://dev.vk.ru/ru/bridge/VKWebAppFlashGetInfo)
<!-- ---
title: 'VK Bridge | Мобильные устройства | Фонарик | VKWebAppFlashGetInfo'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppFlashGetInfo

`VKWebAppFlashGetInfo` получает информацию о фонарике на устройстве.

## Пример

```JavaScript
bridge.send('VKWebAppFlashGetInfo')
  .then((data) => { 
    if (data.is_available) {
      // Данные о фонарике получены
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

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppFlashGetInfoResult` и `VKWebAppFlashGetInfoFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `is_available` &#x0d;&#x0a;*обязательное* | `boolean` | Информация о том, доступна ли работа с фонариком. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — работа с фонариком доступна.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — работа с фонариком недоступна. |
| `level` | `float` | Уровень яркости фонарика. Диапазон значений: от `0` до `1`. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppFlashGetInfoResult`

Сигнализирует, что данные о фонарике получены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppFlashGetInfoResult",
    data: {
      is_available: true,
      level: 0.5
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppFlashGetInfoFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppFlashGetInfo](https://vk.cc/bZfrEB)
