# VK Bridge | VKWebAppStorageGet

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppStorageGet](https://dev.vk.ru/ru/bridge/VKWebAppStorageGet)
<!-- ---
title: 'VK Bridge | Хранилище VK Storage | VKWebAppStorageGet'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppStorageGet

`VKWebAppStorageGet` возвращает значения переменных, названия которых переданы в параметре `keys`. Чтобы задать значения переменных, используйте событие [`VKWebAppStorageSet`](bridge/VKWebAppStorageSet). 

## Пример

```JavaScript
bridge.send('VKWebAppStorageGet', {
  keys: [
    'example1',
    'example2',
    'example3'
  ]})
  .then((data) => { 
    if (data.keys) {
      // Значения получены
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
| `keys` &#x0d;&#x0a;*обязательное* | `array[string]` | Массив названий переменных, значения которых нужно получить. Допустимые символы названия переменной: `[a-zA-Z_\-0-9]`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppStorageGetResult` и `VKWebAppStorageGetFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `keys` | `array[object]` | Информация о переменных и их значениях. Поля объекта массива:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `key` (`string`) — название переменной.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `value` (`string`) — значение переменной. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppStorageGetResult`

Сигнализирует, что значения получены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppStorageGetResult",
    data: {
      keys: [
        {
          key: "example1",
          value: "example_value1"
        },
        {
          key: "example2",
          value: "example_value2"
        },
        {
          key: "example3",
          value: "example_value3"
        }
      ]
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppStorageGetFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

 [VKWebAppStorageGet](https://vk.cc/bZfuwL)
