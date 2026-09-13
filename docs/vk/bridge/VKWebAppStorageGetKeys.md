# VK Bridge | Секция Storage | VKWebAppStorageGetKeys

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppStorageGetKeys](https://dev.vk.ru/ru/bridge/VKWebAppStorageGetKeys)
<!-- ---
title: 'VK Bridge | Хранилище VK Storage | VKWebAppStorageGetKeys'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppStorageGetKeys

`VKWebAppStorageGetKeys` возвращает названия переменных, сохранённых событием [`VKWebAppStorageSet`](bridge/VKWebAppStorageSet).

## Пример

```JavaScript
bridge.send('VKWebAppStorageGetKeys', {
  count: 20,
  offset: 0
  })
  .then((data) => { 
    if (data.keys) {
      // Названия переменных получены
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
| `count` &#x0d;&#x0a;*обязательное* | `integer` | Количество переменных, названия которых необходимо получить. |
| `offset` &#x0d;&#x0a;*обязательное* | `integer` | Смещение для возвращения названий переменных относительно начала списка. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppStorageGetKeysResult` и `VKWebAppStorageGetKeysFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `keys` | `array[string]` | Названия переменных. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppStorageGetKeysResult`

Сигнализирует, что названия переменных получены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppStorageGetKeysResult",
    data: {
      keys: [
        "example1",
        "example2",
        "example3"
      ]
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppStorageGetKeysFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppStorageGetKeys](https://vk.cc/bZfuSa)
