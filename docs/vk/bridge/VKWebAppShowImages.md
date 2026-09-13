# VK Bridge | Общие события | VKWebAppShowImages

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppShowImages](https://dev.vk.ru/ru/bridge/VKWebAppShowImages)
<!-- ---
title: 'VK Bridge | Текст и медиафайлы | VKWebAppShowImages'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppShowImages

`VKWebAppShowImages` открывает нативный экран для просмотра изображений.

## Пример

```JavaScript
bridge.send('VKWebAppShowImages',{
  images: [
    'https://pp.userapi.com/c639229/v639229113/31b31/KLVUrSZwAM4.jpg',
    'https://pp.userapi.com/c639229/v639229113/31b94/mWQwkgDjav0.jpg',
    'https://pp.userapi.com/c639229/v639229113/31b3a/Lw2it6bdISc.jpg'
  ]
  })
  .then((data) => { 
    if (data.result) {
      // Нативный экран открыт
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
| Одноклассники | Android, iOS, Mobile Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `images` &#x0d;&#x0a;*обязательное* | `array[string]` | Массив строк, содержащих URL-адреса изображений. |
| `start_index` | `integer` | Индекс элемента массива `images`, с которого нужно начать отображение (положительное число, включая `0`). Индексация начинается с `0`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppShowImagesResult` и `VKWebAppShowImagesFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если нативный экран открыт. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppShowImagesResult`

Сигнализирует, что нативный экран открыт. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppShowImagesResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppShowImagesFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
