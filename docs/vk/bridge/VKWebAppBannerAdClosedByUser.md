# VK Bridge | VKWebAppBannerAdClosedByUser

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppBannerAdClosedByUser](https://dev.vk.ru/ru/bridge/VKWebAppBannerAdClosedByUser)
<!-- ---
title: 'VK Bridge | Монетизация | Баннеры | VKWebAppBannerAdClosedByUser'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppBannerAdClosedByUser

`VKWebAppBannerAdClosedByUser` отправляется платформой, если пользователь закрыл баннер рекламы в игре или мини-приложении, нажав кнопку на баннере.

* [Баннерная реклама в играх](games/monetization/ad/banners)
* [Баннерная реклама в мини-приложениях](mini-apps/monetization/ad/banners)

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppBannerAdClosedByUser') {
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

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

`VKWebAppBannerAdClosedByUser` сигнализирует, что баннер закрыт пользователем. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `banner_width` | `integer` | Ширина скрытого баннера в пикселях. |
| `banner_height` | `integer` | Высота скрытого баннера в пикселях. |
| `banner_location` | `string` | Расположение скрытого баннера по вертикали.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `top` — баннер был прижат к верху экрана приложения.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bottom` — баннер был прижат к низу экрана приложения. |
| `banner_align` | `string` | Расположение баннера по горизонтали.&#x0d;&#x0a;&#x0d;&#x0a;Используется при следующих условиях:&#x0d;&#x0a; &nbsp;&nbsp; &bull; Поле `layout_type` равно `overlay`.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;— и —&#x0d;&#x0a; &nbsp;&nbsp; &bull; Игра запущена в десктопной версии сайта.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— или —&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Игра запущена на мобильном устройстве,&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;которое работает в горизонтальной ориентации.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `left` — баннер прижат к левому краю экрана.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `right` — баннер прижат к правому краю экрана.&nbsp;&#x0d;&#x0a; &nbsp;&nbsp; &bull; `center` — баннер расположен по центру экрана. &#x0d;&#x0a;&#x0d;&#x0a;Если значение `layout_type` равно `resize`, параметр не возвращается.|
| `orientation` | `string` | Ориентация скрытого баннера.&#x0d;&#x0a;&#x0d;&#x0a;Используется только для игр, работающих в десктопной версии сайта.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vertical` — баннер был вытянут по вертикали. Изображение расположено сверху.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `horizontal` — баннер был вытянут по горизонтали. Изображение расположено слева. |
| `layout_type` | `string` | Тип фона баннера.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `resize` — экран игры или мини-приложения был уменьшен на размер баннера.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `overlay` — баннер был расположен поверх экрана игры или мини-приложения. |

В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppBannerAdClosedByUser",
    data: {
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
* [VKWebAppBannerAdUpdated](bridge/VKWebAppBannerAdUpdated)
