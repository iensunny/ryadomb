# VK Bridge | VKWebAppStorageSet

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppStorageSet](https://dev.vk.ru/ru/bridge/VKWebAppStorageSet)
<!-- ---
title: 'VK Bridge | Хранилище VK Storage | VKWebAppStorageSet'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppStorageSet

`VKWebAppStorageSet` задаёт значение переменной, название которой передано в метод, и помещает её в хранилище VK Storage. Пары «ключ — значение» могут храниться бессрочно и не привязаны к устройству или браузеру пользователя.

* Чтобы получить переменные и их значения, используйте события [`VKWebAppStorageGet`](bridge/VKWebAppStorageGet) и [`VKWebAppStorageGetKeys`](bridge/VKWebAppStorageGetKeys).
* Чтобы удалить переменную из хранилища, передайте пустое значение при вызове метода `VKWebAppStorageSet`.

## Ограничения

Для сохранения быстродействия приложения введено ограничение: можно создать не более 1 000 переменных и совершить не более 1 000 вызовов в час на каждого пользователя. 

## Преимущества использования

* Переменные хранятся бессрочно.
* Разработчику не нужно писать дополнительный код в серверной части игры или мини-приложения, чтобы хранить небольшие порции данных между сессиями.
* В отличие от [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API), переменные привязаны к идентификатору пользователя `user_id`, а не к устройству и браузеру.
* Не теряются данные при обновлении хостинга статики. 
    
    > При использовании хостинга статики URL приложения будет динамическим и домен будет изменяться после каждого развёртывания. Значения в [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) привязаны к домену, на котором находился пользователь. Поэтому мы не рекомендуем использовать localStorage для долгосрочного хранения данных.
    >
    >* [Хостинг статики для мини-приложений](mini-apps/development/hosting/overview)
    >* [Хостинг статики для игр](games/development/hosting/overview)

## Пример

```JavaScript
bridge.send('VKWebAppStorageSet', {
   key: 'example',
   value: 'example_value'
  })
  .then((data) => { 
    if (data.result) {
      // Значение переменной задано
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
| `key` &#x0d;&#x0a;*обязательное* | `string` | Название переменной. Допустимые символы названия переменной: `[a-zA-Z_\-0-9]`. Максимальная длина названия переменной: 100 символов. |
| `value` &#x0d;&#x0a;*необязательное* | `string` | Значение переменной. Сохраняются только первые 4096 символов, для сериализованной строки — 2236 символов.&#x0d;&#x0a;&#x0d;&#x0a;Чтобы удалить переменную, не передавайте параметр или передайте пустую строку. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppStorageSetResult` и `VKWebAppStorageSetFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если значение переменной задано. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppStorageSetResult`

Сигнализирует, что значение переменной задано. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppStorageSetResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppStorageSetFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

При превышении лимитов будут переданы следующие ошибки:

* Превышен лимит на количество сохранённых переменных в час — `"103: Out of limits: you can store only 5000 global keys and 1000 keys for a user"`.
* Превышен лимит на количество запросов в час — `"9: Flood control: too many requests in one hour"`.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppStorageSet](https://vk.cc/bZfuKd)

## Материалы по теме

* [Хостинг статики для мини-приложений](mini-apps/development/hosting/overview)
* [Хостинг статики для игр](games/development/hosting/overview)
* [Событие VKWebAppStorageGet](bridge/VKWebAppStorageGet)
* [Событие VKWebAppStorageGetKeys](bridge/VKWebAppStorageGetKeys)
