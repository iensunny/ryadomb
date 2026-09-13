# VK Bridge | VKWebAppViewRestore

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppViewRestore](https://dev.vk.ru/ru/bridge/VKWebAppViewRestore)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppViewRestore'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppViewRestore

Мобильное приложение ВКонтакте для Android или iOS отправляет `VKWebAppViewRestore`, когда пользователь возвращается в игру или мини-приложение, после того как ранее переключился из него.

## Пример

#### Как подписаться на событие

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppViewRestore') {
    // Действия при восстановлении 
    // экрана игры или мини-приложения
  }
});
```

#### Как обработать событие

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

Пример обработки также можно найти в разделе [Обработка событий сворачивания и восстановления экрана игры](games/how-to/handle-minimize-and-restore-events).

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS |
| Одноклассники | – |

## Параметры

—

## Результат

`VKWebAppViewRestore` сигнализирует, что пользователь вернулся в мини-приложение или игру, после того как ранее перешёл из него в другое приложение. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppViewRestore",
    data: { }
  }
}
```

## Примечания

* Событие `VKWebAppViewRestore` является сигналом того, что мини-приложение или игра переходят в рабочий режим из фонового. Подробнее — в разделе [Работа VK Bridge в фоновом режиме](bridge/background-mode).

* Если мини-приложение или игра находятся в кеше приложений, платформа ВКонтакте вернёт пользователя на экран, который был активен при переходе из приложения.

## Материалы по теме

* [Работа VK Bridge в фоновом режиме](bridge/background-mode)

* [Обработка событий сворачивания и восстановления экрана игры](games/how-to/handle-minimize-and-restore-events)

* [Работа кеша мини-приложений](mini-apps/development/cache)

* [Работа кеша игр](games/development/cache)

* [VKWebAppViewHide](bridge/VKWebAppViewHide)

* [VKWebAppChangeFragment](bridge/VKWebAppChangeFragment)
