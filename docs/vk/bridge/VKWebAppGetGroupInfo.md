# VK Bridge | VKWebAppGetGroupInfo

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetGroupInfo](https://dev.vk.ru/ru/bridge/VKWebAppGetGroupInfo)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppGetGroupInfo'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppGetGroupInfo

С помощью события `VKWebAppGetGroupInfo` вы можете получить данные об одном или нескольких сообществах.

## Пример

```JavaScript
bridge.send('VKWebAppGetGroupInfo', {
  group_id: 166562603
  })
  .then((data) => { 
    if (data.id) {
      // Данные о сообществе получены
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
| `group_id` или `group_ids` &#x0d;&#x0a;*обязательное* | `integer` или `string` | Объект или массив:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `group_id` — идентификатор сообщества, если требуется узнать информацию об одном сообществе.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `group_ids` — идентификаторы сообществ, указанные через запятую, если требуется узнать информацию о нескольких сообществах.&#x0d;&#x0a;&#x0d;&#x0a;[Где найти идентификатор сообщества?](https://vk.com/faq18062) |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppGetGroupInfoResult` и `VKWebAppGetGroupInfoFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект.

Содержимое ответа зависит от того, запрашивали вы информацию об одном сообществе или о нескольких.

#### Ответ с данными об одном сообществе

| Поле | Тип | Описание |
| --- | --- | --- |
| `id` | `integer` | Идентификатор сообщества, о котором была запрошена информация. |
| `name` | `string` | Название сообщества, о котором была запрошена информация. |
| `screen_name` | `string` | Короткий адрес сообщества. |
| `is_closed` | `integer` | Информация о том, является ли сообщество закрытым. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `0` — открытое.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `1` — закрытое.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `2` — частное. |
| `description` | `string` | Описание сообщества.&#x0d;&#x0a;&#x0d;&#x0a;**Обратите внимание:** платформа не включает это поле в результаты, если сообщество является частным. |
| `members_count` | `integer` | Количество участников сообщества.&#x0d;&#x0a;&#x0d;&#x0a;**Обратите внимание:** платформа не включает это поле в результаты, если сообщество является частным. |
| `photo_50` | `string` | URL квадратной фотографии сообщества с шириной 50 пикселей. Если у сообщества отсутствует фотография, возвращается `https://vk.com/images/community_50.png`. |
| `photo_100` | `string` | URL квадратной фотографии сообщества с шириной 100 пикселей. Если у сообщества отсутствует фотография, возвращается `https://vk.com/images/community_100.png`. |
| `photo_200` | `string` | URL квадратной фотографии сообщества с шириной 200 пикселей. Если у сообщества отсутствует фотография, возвращается `https://vk.com/images/community_200.png`. |
| `is_member` | `integer` | Информация о том, является ли пользователь, который работает с приложением, участником сообщества. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `1` — является.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `0` — не является.&#x0d;&#x0a;&#x0d;&#x0a;**Обратите внимание:** платформа не включает это поле в результаты, если сообщество является частным. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

#### Ответ с данными о нескольких сообществах

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `array[object]` | Массив с данными о запрашиваемых сообществах. Каждый элемент массива — [объект](#Ответ%20с%20данными%20об%20одном%20сообществе), содержащий информацию об одном сообществе из запрошенных. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetGroupInfoResult`

Сигнализирует, что данные о сообществе или сообществах были получены. Ниже — пример ответа, если запрашивались данные об одном сообществе:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetGroupInfoResult",
    data: {
      id: 166562603,
      name: "VK Mini Apps",
      screen_name: "vkappsdev",
      is_closed: 0,
      description: "Документация\n• VK Mini Apps и не только: dev.vk.com/guide\n• VKUI: vkcom.github.io/vkui-styleguide\n\nМакеты VKUI в Figma\n• figma.com/@vk\n\nБыстрое создание приложения\n• dev.vk.com/mini-apps/getting-started\n• npmjs.com/package/@vkontakte/create-vk-mini-app\n\nХостинг статики\n• npmjs.com/package/@vkontakte/vk-miniapps-deploy\n\nПолезные материалы\n• vk.com/@vkappsdev-poleznye-materialy\n• vk.com/@vkappsdev\n\nПесочница событий VK Bridge\n• vk.com/sandbox_app",
      members_count: 52104,
      photo_50: "https://sun1-95.userapi.com/s/v1/if1/SrTI7tgAv79jphLz5OHUTFRzURtWS0axJCL1cSIFzI5p8Ja7iJm1dKN-4SiGEdQJQOiBENHX.jpg?size=50x50&quality=96&crop=100,100,599,599&ava=1",
      photo_100: "https://sun1-95.userapi.com/s/v1/if1/7R1EtxtmMuhQSfGVD4Vt5Bzeq5TqHgpCCYG0hDi3RsIwfdOEiCht65OC_q1qOx1vfZIVHbn5.jpg?size=100x100&quality=96&crop=100,100,599,599&ava=1",
      photo_200: "https://sun1-95.userapi.com/s/v1/if1/MTmSdynigJoHXdY0krbacTurak0PmEfuhkT0c1aIKnRhgACEi1v0je0guGvhnnc1rZnQ6sZb.jpg?size=200x200&quality=96&crop=100,100,599,599&ava=1",
      is_member: 1
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetGroupInfoFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppGetGroupInfo](https://vk.cc/bZfonS)
