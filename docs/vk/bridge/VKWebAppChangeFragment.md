# VK Bridge | VKWebAppChangeFragment

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppChangeFragment](https://dev.vk.ru/ru/bridge/VKWebAppChangeFragment)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppChangeFragment'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppChangeFragment

Платформа ВКонтакте отправляет мини-приложению или игре событие `VKWebAppChangeFragment`, чтобы сообщить о смене значения после символа `#` в текущем URL мини-приложения или игры. Это может происходить, когда пользователь меняет адресную строку в браузере, в результате вызова события [`VKWebAppSetLocation`](bridge/VKWebAppSetLocation) и в других случаях.

ВКонтакте также отправляет это сообщение на Android и iOS, когда восстанавливает мини-приложение или игру из кеша.

* [Работа кеша мини-приложений](mini-apps/development/cache)
* [Работа кеша игр](games/development/cache)

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppChangeFragment') {
    // Обработка изменений в URL
  }
});
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | – |

## Параметры

—

## Обработка события

Символы после `#` в URL часто используются для навигации и передачи параметров. Используйте сообщение `VKWebAppChangeFragment`, чтобы ваше приложение могло обработать изменения.

При работе на Android и iOS платформа ВКонтакте сохраняет в кеше навигационное состояние последних открытых приложений. При восстановлении приложения из кеша платформа сначала отправит приложению `VKWebAppChangeFragment`, а потом — [`VKWebAppViewRestore`](bridge/VKWebAppViewRestore). Это позволяет приложению открыть нужный экран, пока восстановленный из кеша экран ещё не отобразился полностью.

## Результат

`VKWebAppChangeFragment` сигнализирует, что часть URL после символа `#` была изменена. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `location` | `string` | Строка после символа `#` в URL. Например, если текущий URL приложения `vk.com/app6909581#new-value`, то `location` будет содержать `new-value`. |

В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppChangeFragment",
    data: {
      location: "new-value"
    }
  }
}
```

## Пример обработки события

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [Работа кеша мини-приложений](mini-apps/development/cache)

* [Работа кеша игр](games/development/cache)

* [VKWebAppSetLocation](bridge/VKWebAppSetLocation)

* [VKWebAppViewRestore](bridge/VKWebAppViewRestore)

* [Обработка событий-результатов](bridge/getting-started#Обработка%20результата)
