# VK Bridge | События жизненного цикла | VKWebAppLocationChanged

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppLocationChanged](https://dev.vk.ru/ru/bridge/VKWebAppLocationChanged)
<!-- ---
title: 'VK Bridge | Навигация | VKWebAppLocationChanged'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppLocationChanged

`VKWebAppLocationChanged` отправляется платформой при изменении значения хеша после символа `#` через событие [`VKWebAppSetLocation`](bridge/VKWebAppSetLocation).

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppLocationChanged') {
    // Логика мини-приложения
  }
});
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Mobile Web, Web |
| Одноклассники | – |

## Параметры

— 

## Результат

`VKWebAppLocationChanged` сигнализирует, что хеш изменён. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `location` | `string` | Хеш — строка после символа `#` в URL вида `vk.com/app6909581#`. |

 В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppLocationChanged",
    data: {
      location: "fragment"
    }
  }
}
```

## Пример обработки события

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
