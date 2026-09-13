# VK Bridge | VKWebAppAddToFavorites

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAddToFavorites](https://dev.vk.ru/ru/bridge/VKWebAppAddToFavorites)
<!-- ---
title: 'VK Bridge | Социальные механики и взаимодействие | VKWebAppAddToFavorites'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAddToFavorites

:::note
**Важно!** Событие станет доступно пользователям после того, как ваше приложение пройдёт модерацию.

* [Модерация мини-приложений](mini-apps/settings/moderation)
* [Модерация игр](games/settings/moderation)
:::

`VKWebAppAddToFavorites` показывает окно с предложением добавить мини-приложение или игру в избранное.

Ссылка на мини-приложение или игру появится в левом меню десктопной версии ВКонтакте. Также мини-приложение, добавленное в избранные, можно найти в меню **Сервисы** &rarr; **Избранное**.

<!--
exclusions/_images/bridge/fav-apps.png
exclusions/_images/bridge/fav-service.png
-->

:::carousel
![title=Избранные игры и мини-приложения в левом меню;](c49d2e2f01b953802f5964b08f7e5489edd573aa3f0bcc3bd434e8bb "-810126603281516152")
![title=Избранные мини-приложения в разделе «Избранное»;](c1a9290c7f0992361393035fcdcc5fa1471281838f62ba372c322399 "-2599197993497286204")
:::

## Пример

```JavaScript
bridge.send('VKWebAppAddToFavorites')
  .then((data) => { 
    if (data.result) {
      // Мини-приложение или игра добавлены в избранное
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
| Одноклассники | – |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAddToFavoritesResult` и `VKWebAppAddToFavoritesFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.
* `User denied`, если пользователь закрыл окно с предложением добавить мини-приложение или игру в избранное.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если мини-приложение или игра добавлены в избранное. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAddToFavoritesResult`

Сигнализирует, что данные мини-приложение или игра добавлены в избранное. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAddToFavoritesResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAddToFavoritesFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppAddToFavorites](https://vk.cc/bZfr9p)

## Материалы по теме

* [Добавление Web-игры в левое меню ВКонтакте](games/promotion/game-mechanics/add-to-menu)
