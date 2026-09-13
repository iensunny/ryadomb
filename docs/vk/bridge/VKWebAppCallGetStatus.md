# VK Bridge | VKWebAppCallGetStatus

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCallGetStatus](https://dev.vk.ru/ru/bridge/VKWebAppCallGetStatus)
<!-- ---
title: 'VK Bridge | Звонки | VKWebAppCallGetStatus'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCallGetStatus

`VKWebAppCallGetStatus` используется при [интеграции звонков](mini-apps/development/calls-integration) в мини-приложение. Событие получает информацию о состоянии текущего активного звонка.

## Пример

```JavaScript
bridge.send('VKWebAppCallGetStatus')  
  .then((data) => { 
    if (data.result) {
      // Информация о состоянии активного звонка получена
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
| ВКонтакте | Android, iOS, Web |
| Одноклассники | – |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppCallGetStatusResult` и `VKWebAppCallGetStatusFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `is_active` | `bool` | Состояние звонка. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — звонок активен.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — звонок завершён. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppCallGetStatusResult`

Сигнализирует, что статус звонка получен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppCallGetStatusResult",
    "data": {
        "is_active": true,
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppCallGetStatusFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [Интеграция звонков](mini-apps/development/calls-integration)
* [VKWebAppCallFinished](bridge/VKWebAppCallFinished)
* [VKWebAppCallLeft](bridge/VKWebAppCallLeft)
