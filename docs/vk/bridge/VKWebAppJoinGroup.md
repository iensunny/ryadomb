# VK Bridge | Сообщества | VKWebAppJoinGroup

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppJoinGroup](https://dev.vk.ru/ru/bridge/VKWebAppJoinGroup)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppJoinGroup'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppJoinGroup

`VKWebAppJoinGroup` показывает окно с предложением вступить в сообщество.

## Пример 

```JavaScript
bridge.send('VKWebAppJoinGroup', {
  group_id: 166562603
  })
  .then((data) => { 
    if (data.result) {
      // Пользователь подписался на сообщество
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
| `group_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор сообщества. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppJoinGroupResult` и `VKWebAppJoinGroupFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.
* `User denied`, если пользователь закрыл окно с предложением вступить в сообщество.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если пользователь подписался на сообщество. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppJoinGroupResult`

Сигнализирует, что пользователь подписался на сообщество. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppJoinGroupResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppJoinGroupFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppJoinGroup](https://vk.cc/bZfpwU)
