# VK Bridge | VKWebAppCallJoin

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCallJoin](https://dev.vk.ru/ru/bridge/VKWebAppCallJoin)
<!-- ---
title: 'VK Bridge | Звонки | VKWebAppCallJoin'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCallJoin

`VKWebAppCallJoin` используется при [интеграции звонков](mini-apps/development/calls-integration) в мини-приложение. Событие подключает пользователя к звонку по ссылке. Перед подключением пользователь видит окно с возможностью присоединиться к звонку.

![alt=Окно подключения к звонку;title=Окно подключения к звонку;](5c3b3d4e389fb91a1c48982dd0df516b61baf65032a6fa86388c3147 "-3197411902833050106")

## Пример

```JavaScript
bridge.send('VKWebAppCallJoin', {
  join_link: 'hg0IXLVD7txQyFKMTLt2Zy4P6HmuXxcKGcfF0A8GznU' 
  })
  .then((data) => { 
    if (data.result) {
      // Пользователь присоединился к звонку
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

| Поле | Тип | Описание |
| --- | --- | --- |
| `join_link` &#x0d;&#x0a;*обязательное* | `string` | Ссылка для подключения к звонку. Ссылку на звонок возвращает событие [`VKWebAppCallStart`](bridge/VKWebAppCallStart). |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppCallJoinResult` и `VKWebAppCallJoinFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если пользователь присоединился к звонку. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppCallJoinResult`

Сигнализирует, что метод API выполнен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppCallJoinResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppCallJoinFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

* Если пользователь уже находится в звонке, возвращается ошибка c кодом `13:Сustom error`.
* Если пользователь не предоставил необходимые доступы ВКонтакте, возвращается код ошибки `11 Access denied`.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [Интеграция звонков](mini-apps/development/calls-integration)
* [VKWebAppCallStart](bridge/VKWebAppCallStart)
