# VK Bridge | VKWebAppShowBannerAd

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppShowBannerAd](https://dev.vk.ru/ru/bridge/VKWebAppShowBannerAd)
<!-- ---
title: 'VK Bridge | Монетизация | Баннеры | VKWebAppShowBannerAd'
is_hidden: true
is_search_available: false
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->


# VKWebAppShowBannerAd

`VKWebAppShowBannerAd` отображает баннерную рекламу в игре или мини-приложении. 

> Используйте это событие вместо устаревшего `VKWebAppGetAds`.

* [Баннерная реклама в играх](games/monetization/ad/banners)
* [Баннерная реклама в мини-приложениях](mini-apps/monetization/ad/banners)

Чтобы скрыть баннерную рекламу, используйте событие [`VKWebAppHideBannerAd`](bridge/VKWebAppHideBannerAd).

<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-web-top.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-web-left-horizontal.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-mobile-dark-top.png -->

:::carousel
![alt=Рекламный баннер в верхней части экрана в десктопной версии ВКонтакте;title=Рекламный баннер в верхней части экрана в десктопной версии ВКонтакте](1d948985e48d0d99fd9803a50d1a2768ad2fecff2d6140f82adff40e "-2253145703359692236")
![alt=Горизонтальный рекламный баннер слева в десктопной версии ВКонтакте;title=Горизонтальный рекламный баннер слева в десктопной версии ВКонтакте](5505e15faf2389aad2dc734f2af6a942acd114df3d9bcaa73ff0b8a4 "-8718192974917392486")
![alt=Рекламный баннер сверху по ширине экрана (тёмная тема) в мобильном приложении;title=Рекламный баннер сверху по ширине экрана (тёмная тема) в мобильном приложении](3bd5135483033791367653402c723ab1391081b48a196717aa6f803d "6350731533085009772")
:::



## Пример

```JavaScript
bridge.send('VKWebAppShowBannerAd', {
  banner_location: 'bottom'
  })
 .then((data) => { 
    if (data.result) {
      // Баннерная реклама отобразилась
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
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `banner_location` | `string` | Расположение баннера по вертикали.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `top` — баннер будет прижат к верху экрана приложения.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bottom` — баннер будет прижат к низу экрана приложения.&#x0d;&#x0a;&#x0d;&#x0a;По умолчанию используется `bottom`.&#x0d;&#x0a;&#x0d;&#x0a;Значение `top` работает только для игр, у которых в настройке [Отображение &rarr; Мобильный формат &rarr; Элементы управления](games/settings/general/display#Элементы%20управления) указано значение **Над окном**. |
| `banner_align`&#x0d;&#x0a;*необязательное* | `string` | Расположение баннера по горизонтали.&#x0d;&#x0a;&#x0d;&#x0a;Используется при следующих условиях:&#x0d;&#x0a; &nbsp;&nbsp; &bull; Поле `layout_type` равно `overlay`.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;— и —&#x0d;&#x0a; &nbsp;&nbsp; &bull; Игра запущена в десктопной версии сайта.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— или —&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Игра запущена на мобильном устройстве,&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;которое работает в горизонтальной ориентации.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `left` — баннер прижат к левому краю экрана.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `right` — баннер прижат к правому краю экрана.&nbsp;&#x0d;&#x0a; &nbsp;&nbsp; &bull; `center` — баннер расположен по центру экрана. Значение по умолчанию. &#x0d;&#x0a;&#x0d;&#x0a;Если значение `layout_type` равно `resize`, параметр не используется и не передаётся.|
| `height_type`&#x0d;&#x0a;*необязательное*| `string` | Компактность баннера. Применяется в играх с горизонтальной ориентацией в мобильном приложении и мобильной версии сайта.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `regular` — стандартный по высоте баннер.&nbsp;&#x0d;&#x0a; &nbsp;&nbsp; &bull; `compact` —  баннер с уменьшенной высотой.&#x0d;&#x0a;&#x0d;&#x0a;По умолчанию используется значение `regular`. Параметр игнорируется при использовании `banner_align`.|
| `orientation`&#x0d;&#x0a;*необязательное* | `string` | Ориентация баннера.&#x0d;&#x0a;&#x0d;&#x0a;Используется только для игр, работающих в десктопной версии сайта. На остальных платформах игнорируется.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vertical` — баннер вытянут по вертикали. Изображение расположено сверху.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `horizontal` — баннер вытянут по горизонтали. Изображение расположено слева.&#x0d;&#x0a;&#x0d;&#x0a;По умолчанию используется `horizontal`. |
| `layout_type`&#x0d;&#x0a;*необязательное* | `string` | Тип фона баннера.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `resize` —  экран игры или мини-приложения станет меньше на размер баннера.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `overlay` — баннер будет расположен поверх экрана игры или мини-приложения. Контент не будет сдвинут автоматически. Разработчики должны реализовать сдвиг самостоятельно. Значение работает, только когда поле `banner_location` равно `bottom`.&#x0d;&#x0a;&#x0d;&#x0a;По умолчанию используется `resize`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppShowBannerAdResult` и `VKWebAppShowBannerAdFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект с информацией об отображённом баннере:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если баннерная реклама отобразилась,&#x0d;&#x0a;`false` — в ином случае. |
| `banner_width` | `integer` | Ширина баннера в пикселях. |
| `banner_height` | `integer` | Высота баннера в пикселях. |
| `banner_location` | `string` | Расположение баннера по вертикали.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `top` — баннер прижат к верху экрана приложения.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bottom` — баннер прижат к низу экрана приложения. |
| `banner_align` | `string` | Расположение баннера по горизонтали.&#x0d;&#x0a;&#x0d;&#x0a;Используется при следующих условиях:&#x0d;&#x0a; &nbsp;&nbsp; &bull; Поле `layout_type` равно `overlay`.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;— и —&#x0d;&#x0a; &nbsp;&nbsp; &bull; Игра запущена в десктопной версии сайта.&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— или —&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Игра запущена на мобильном устройстве,&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;которое работает в горизонтальной ориентации.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `left` — баннер прижат к левому краю экрана.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `right` — баннер прижат к правому краю экрана.&nbsp;&#x0d;&#x0a; &nbsp;&nbsp; &bull; `center` — баннер расположен по центру экрана. &#x0d;&#x0a;&#x0d;&#x0a;Если значение `layout_type` равно `resize`, параметр не возвращается.|
| `height_type`| `string` | Компактность баннера. Используется в играх с горизонтальной ориентацией в мобильном приложении и мобильной версии сайта.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `regular` — стандартный по высоте баннер.&nbsp;&#x0d;&#x0a; &nbsp;&nbsp; &bull; `compact` —  баннер с уменьшенной высотой. |
| `orientation` | `string` | Ориентация баннера.&#x0d;&#x0a;&#x0d;&#x0a;Используется только для игр, работающих в десктопной версии сайта.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vertical` — баннер вытянут по вертикали. Изображение расположено сверху.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `horizontal` — баннер вытянут по горизонтали. Изображение расположено слева. |
| `layout_type` | `string` | Тип фона баннера.&#x0d;&#x0a;&#x0d;&#x0a;Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `resize` —  экран игры или мини-приложения уменьшен на размер баннера.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `overlay` — баннер расположен поверх экрана игры или мини-приложения. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppShowBannerAdResult`

Сигнализирует, что баннерная реклама отобразилась. В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppShowBannerAdResult",
    data:{
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

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppShowBannerAdFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой, или о том, что баннер не найден или уже показан.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [Баннерная реклама в мини-приложении](mini-apps/monetization/ad/banners)
* [Как добавить баннерную рекламу в мини-приложение](mini-apps/monetization/ad/implementation#Баннерная%20реклама)
* [Баннерная реклама в игре](games/monetization/ad/banners)
* [Как добавить баннерную рекламу в игру](games/monetization/ad/implementation#Баннерная%20реклама)
* [VKWebAppHideBannerAd](bridge/VKWebAppHideBannerAd)
