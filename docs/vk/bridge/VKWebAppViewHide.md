# VK Bridge | VKWebAppViewHide

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppViewHide](https://dev.vk.ru/ru/bridge/VKWebAppViewHide)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppViewHide'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppViewHide

Мобильное приложение ВКонтакте для Android или iOS отправляет `VKWebAppViewHide`, когда пользователь сворачивает мини-приложение или игру или переходит в другое приложение на мобильном устройстве.

## Пример

#### Как подписаться на событие

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppViewHide') {
    // Действия при переключении
    // из игры или мини-приложения
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

`VKWebAppViewHide` сигнализирует, что игра или мини-приложение стало невидимо пользователю: он переключился в другое приложение или вернулся на главный экран. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppViewHide",
    data: { }
  }
}
```

## Примечание

Событие `VKWebAppViewHide` является сигналом того, что мини-приложение или игра переходят в фоновый режим. В этом режиме платформа не обрабатывает вызовы событий VK Bridge, а также не отправляет события мини-приложению или игре. Подробнее — в разделе [Работа VK Bridge в фоновом режиме](bridge/background-mode).

## Материалы по теме

* [Работа VK Bridge в фоновом режиме](bridge/background-mode)

* [Обработка событий сворачивания и восстановления экрана игры](games/how-to/handle-minimize-and-restore-events)

* [Работа кеша мини-приложений](mini-apps/development/cache)

* [Работа кеша игр](games/development/cache)

* [VKWebAppViewRestore](bridge/VKWebAppViewRestore)
