# VK Bridge | VKWebAppCallStart

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCallStart](https://dev.vk.ru/ru/bridge/VKWebAppCallStart)
<!-- ---
title: 'VK Bridge | Звонки | VKWebAppCallStart'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCallStart

`VKWebAppCallStart` используется при [интеграции звонков](mini-apps/development/calls-integration) в мини-приложение. Событие создаёт ссылку, по которой к звонку могут присоединяться пользователи, запустившие мини-приложение.

## Пример

```JavaScript
bridge.send('VKWebAppCallStart')  
  .then((data) => { 
    if (data.result) {
      // Ссылка на звонок создана
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

* С помощью [событий](#События) `VKWebAppCallStartResult` и `VKWebAppCallStartFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `join_link` | `string` | URL, по которому можно подключить к звонку других участников с помощью события [`VKWebAppCallJoin`](bridge/VKWebAppCallJoin). |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppCallStartResult`

Сигнализирует, что метод API выполнен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppCallStartResult",
    data: {
        "join_link": "hg0IXLVD7txQyFKMTLt2Zy4P6HmuXxcKGcfF0A8GznU"
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppCallStartFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).


## Материалы по теме

* [Интеграция звонков](mini-apps/development/calls-integration)
* [VKWebAppCallJoin](bridge/VKWebAppCallJoin)
