# VK Bridge | VKWebAppSetLocation

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSetLocation](https://dev.vk.ru/ru/bridge/VKWebAppSetLocation)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppSetLocation'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSetLocation

`VKWebAppSetLocation` устанавливает новое значение хеша — строки после символа `#` в URL мини-приложения или игры вида `https://vk.com/app123#some-value`. Это значение используется для навигации внутри приложений и передачи параметров. Для обработки изменений в хеше используйте событие [`VKWebAppChangeFragment`](bridge/VKWebAppChangeFragment).

## Пример

```JavaScript
bridge.send('VKWebAppSetLocation', {
  location: 'fragment'
  })
  .then((data) => { 
    if (data.width) {
      // Новое значение хеша установлено
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
| Одноклассники | Android, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `location` &#x0d;&#x0a;*обязательное* | `string` | Новое значение хеша. Символ `#` в поле указывать не нужно. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSetLocationResult` и `VKWebAppSetLocationFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`.

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSetLocationResult`

Сигнализирует, что новое значение хеша установлено. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSetLocationResult",
    data: { }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSetLocationFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppSetLocation](https://vk.cc/bZfgkh)

## Материалы по теме

* [VKWebAppChangeFragment](bridge/VKWebAppChangeFragment)
