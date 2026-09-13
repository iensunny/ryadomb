# VK Bridge | VKWebAppCallLeft

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppCallLeft](https://dev.vk.ru/ru/bridge/VKWebAppCallLeft)
<!-- ---
title: 'VK Bridge | Звонки | VKWebAppCallLeft'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppCallLeft

`VKWebAppCallLeft` используется при [интеграции звонков](mini-apps/development/calls-integration) в мини-приложение. Событие отправляется платформой, если пользователь вышел из звонка.

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppCallLeft') {
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

`VKWebAppCallLeft` сигнализирует, что пользователь покинул звонок. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `reason` | `string` | Сообщение о причине, по которой пользователь вышел из звонка. Сейчас возвращается только значение `general` — неопределённая причина. |

 В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    "type": "VKWebAppCallLeft",
    "data": {
      "reason": "general"
    }
  }
}
```

## Пример обработки события

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [VKWebAppCallFinished](bridge/VKWebAppCallFinished)
* [Интеграция звонков](mini-apps/development/calls-integration)
