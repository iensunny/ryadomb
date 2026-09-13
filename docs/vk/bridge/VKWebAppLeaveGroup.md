# VK Bridge | VKWebAppLeaveGroup

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppLeaveGroup](https://dev.vk.ru/ru/bridge/VKWebAppLeaveGroup)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppLeaveGroup'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppLeaveGroup

`VKWebAppLeaveGroup` показывает окно с предложением отписаться от сообщества.

## Пример

```JavaScript
bridge.send('VKWebAppLeaveGroup', {
  group_id: 166562603
  })
  .then((data) => { 
    if (data.result) {
      // Пользователь отписался от сообщества
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

* С помощью [событий](#События) `VKWebAppLeaveGroupResult` и `VKWebAppLeaveGroupFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.
* `User denied`, если пользователь закрыл окно с предложением отписаться от сообщества.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если пользователь отписался от сообщества. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppLeaveGroupResult`

Сигнализирует, что пользователь отписался от сообщества. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppLeaveGroupResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppLeaveGroupFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppLeaveGroup](https://vk.cc/bZfpTr)
