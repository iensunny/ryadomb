# VK Bridge | VKWebAppCallFinished

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCallFinished](https://dev.vk.ru/ru/bridge/VKWebAppCallFinished)
<!-- ---
title: 'VK Bridge | Звонки | VKWebAppCallFinished'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCallFinished

`VKWebAppCallFinished` используется при [интеграции звонков](mini-apps/development/calls-integration) в мини-приложение. Отправляется платформой, если пользователь, создавший звонок, завершил его.

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppCallFinished') {
    // Логика мини-приложения
  }
});
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Web |
| Одноклассники | – |

## Параметры

— 

## Результат

`VKWebAppCallFinished` сигнализирует, что пользователь, начавший звонок, завершил его для всех. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    "type": "VKWebAppCallFinished",
    "data": {}
  }
}
```

## Пример обработки события

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Рекомендации

После того как мини-приложение получит событие `VKWebAppCallFinished` от платформы, вам нужно передать эту информацию в серверную часть вашего мини-приложения и больше не отправлять пользователям ссылку на завершившийся звонок.

## Материалы по теме

* [VKWebAppCallLeft](bridge/VKWebAppCallLeft)
* [Интеграция звонков](mini-apps/development/calls-integration)
