# VK Bridge | VKWebAppBannerAdUpdated

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppBannerAdUpdated](https://dev.vk.ru/ru/bridge/VKWebAppBannerAdUpdated)
<!-- ---
title: 'VK Bridge | Монетизация | Баннеры | VKWebAppBannerAdUpdated'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppBannerAdUpdated

`VKWebAppBannerAdUpdated` отправляется платформой, если в игре или мини-приложении обновилась баннерная реклама.

* [Баннерная реклама в играх](games/monetization/ad/banners)
* [Баннерная реклама в мини-приложениях](mini-apps/monetization/ad/banners)

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppBannerAdUpdated') {
    // Логика мини-приложения
  }
});
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

—

## Результат

`VKWebAppBannerAdUpdated` сигнализирует, что произошло обновление баннерной рекламы или получена ошибка. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если баннерная реклама обновлена.&#x0d;&#x0a;`false` — в ином случае.|
| `banner_width` | `integer` | Ширина отображённого баннера в пикселях.|
| `banner_height` | `integer` | Высота отображённого баннера в пикселях.|
| `banner_location` | `string` | Расположение отображённого баннера по вертикали.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `top` — баннер прижат к верху экрана приложения.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bottom` — баннер прижат к низу экрана приложения. |
| `banner_align` | `string` | Расположение отображённого баннера по горизонтали.&#x0d;&#x0a;&#x0d;&#x0a;Используется при следующих условиях:&#x0d;&#x0a; &nbsp;&nbsp; &bull; Поле `layout_type` равно `overlay`.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;— и —&#x0d;&#x0a; &nbsp;&nbsp; &bull; Игра запущена в десктопной версии сайта.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— или —&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Игра запущена на мобильном устройстве,&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;которое работает в горизонтальной ориентации.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `left` — баннер прижат к левому краю экрана.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `right` — баннер прижат к правому краю экрана.&nbsp;&#x0d;&#x0a; &nbsp;&nbsp; &bull; `center` — баннер расположен по центру экрана. &#x0d;&#x0a;&#x0d;&#x0a;Если значение `layout_type` равно `resize`, параметр не возвращается.|
| `orientation` | `string` | Ориентация отображённого баннера.&#x0d;&#x0a;&#x0d;&#x0a;Используется только для игр, работающих в десктопной версии сайта.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vertical` — баннер вытянут по вертикали. Изображение расположено сверху.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `horizontal` — баннер вытянут по горизонтали. Изображение расположено слева. |
| `layout_type` | `string` | Тип фона отображённого баннера.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `resize` —  экран игры или мини-приложения уменьшен на размер баннера.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `overlay` — баннер расположен поверх экрана игры или мини-приложения. |
| `error_type` | `string` | Тип ошибки. |
| `error_data` | `object` | Дополнительные данные ошибки. |

В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppBannerAdUpdated",
    data: {
      "result" : true,
      "banner_width": 100,
      "banner_height": 64,
      "banner_location": "bottom",
      "banner_align": "left",
      "orientation": "horizontal",
      "layout_type": "overlay"
    }
  }
}
```

## Пример обработки события

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [Баннерная реклама в мини-приложении](mini-apps/monetization/ad/banners)
* [Как добавить баннерную рекламу в мини-приложение](mini-apps/monetization/ad/implementation#Баннерная%20реклама)
* [Баннерная реклама в игре](games/monetization/ad/banners)
* [Как добавить баннерную рекламу в игру](games/monetization/ad/implementation#Баннерная%20реклама)
* [VKWebAppBannerAdClosedByUser](bridge/VKWebAppBannerAdClosedByUser)
