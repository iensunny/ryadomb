# VK Games | Монетизация | Реклама в играх | Баннерная реклама

> Источник: [https://dev.vk.ru/ru/games/monetization/ad/banners](https://dev.vk.ru/ru/games/monetization/ad/banners)
<!-- ---
title: 'VK Games | Монетизация | Реклама в играх | Баннерная реклама'
is_hidden: false
is_search_available: true
menu: 'main_menu'
type: 'page' 
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Баннерная реклама

Вы можете добавить баннерную рекламу в свою игру, чтобы получать доход от показа рекламных объявлений. Баннеры размещаются в нижней или верхней части экрана, не перекрывая игровой процесс и не отвлекая игрока от основной активности. Размер баннера автоматически подстраивается под ориентацию и размеры экрана, а также под выбранную тему.

Баннерная реклама доступна на всех платформах: в мобильных приложениях для Android и iOS, в мобильной и десктопной версиях сайтов ВКонтакте и Одноклассники.



Материалы для баннеров поступают из рекламной сети VK. Разработчик игры не может влиять на то, какие материалы будут показаны. Разработчик также не может повлиять на то, показать или скрыть какие-либо компоненты баннера.

## Как добавить рекламные баннеры

Чтобы отобразить или скрыть рекламные баннеры, а также узнать информацию об их состоянии, используйте события библиотеки [VK Bridge](bridge/overview):

* [`VKWebAppShowBannerAd`](bridge/VKWebAppShowBannerAd) — отобразить баннерную рекламу в игре.
* [`VKWebAppCheckBannerAd`](bridge/VKWebAppCheckBannerAd) — проверить, показана ли баннерная реклама, открытая событием [`VKWebAppShowBannerAd`](bridge/VKWebAppShowBannerAd).
* [`VKWebAppHideBannerAd`](bridge/VKWebAppHideBannerAd) — скрыть рекламу в игре.
* [`VKWebAppBannerAdUpdated`](bridge/VKWebAppBannerAdUpdated) — подпишитесь, чтобы получить информацию об обновлении баннерной рекламы.
* [`VKWebAppBannerAdClosedByUser`](bridge/VKWebAppBannerAdClosedByUser) — подпишитесь, чтобы знать, когда пользователь закрыл рекламу через кнопку закрытия в баннере.

:::note
**Важно!**
Если игра доступна на разных платформах, при разработке проверьте отображение баннеров для каждой из них.
:::

## Как получить выплаты

Подробнее о монетизации — в разделе [Вывод средств](games/monetization/withdrawal/overview).

## Примеры отображения

Внешний вид баннеров зависит от типа устройства, темы оформления и ориентации экрана. На рекламном баннере отображается:

* Изображение.
* Значок рекламной сети.
* Возрастные ограничения.
* Заголовок, описание и ссылка на сайт рекламодателя.
* Кнопка для управления рекламой.
* Кнопка для перехода на сайт рекламодателя.

Некоторые из компонентов могут отсутствовать, если они не настроены в параметрах рекламного объявления.

Чтобы настроить отображение рекламных баннеров в игре, используйте [`VKWebAppShowBannerAd`](bridge/VKWebAppShowBannerAd). Ниже собраны примеры отображения баннеров, а в таблицах указаны параметры VK Bridge, которые нужно передать.

### Десктопная версия сайта

<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-web-top.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-web-bottom.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-web-left-horizontal.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-web-right-vertical.png -->

:::carousel
![alt=Рекламный баннер в верхней части экрана на всю ширину;title=Рекламный баннер в верхней части экрана на всю ширину](1d948985e48d0d99fd9803a50d1a2768ad2fecff2d6140f82adff40e "-2253145703359692236")
![alt=Рекламный баннер в нижней части экрана на всю ширину;title=Рекламный баннер в нижней части экрана на всю ширину](0d4caa0f39f8ac04a33e8d54c9563e8c7a3cbad2a0df744dd6e03a04 "-7738710207718458098")
![alt=Горизонтальный рекламный баннер слева;title=Горизонтальный рекламный баннер слева](5505e15faf2389aad2dc734f2af6a942acd114df3d9bcaa73ff0b8a4 "-8718192974917392486")
![alt=Вертикальный рекламный баннер справа;title=Вертикальный рекламный баннер справа](764604642e5780b78efd7a40b1cc0b5b81d9a697ee7f951a37b4d365 "-5386947877762093089")
:::

| Вид баннера | Параметры VK Bridge |
|---|---|
| Рекламный баннер в верхней части экрана на всю ширину | `banner_location: 'top'` |
| Рекламный баннер в нижней части экрана на всю ширину | `banner_location: 'bottom'` |
| Горизонтальный рекламный баннер слева | `layout_type: 'overlay'`&#x0d;&#x0a;`banner_align: 'left'`&#x0d;&#x0a;`orientation: 'horizontal'` |
| Вертикальный рекламный баннер справа | `layout_type: 'overlay'`&#x0d;&#x0a; `banner_align: 'right'`&#x0d;&#x0a;`orientation: 'vertical'` |

### Мобильное приложение

<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-mobile-dark-top.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-mobile-dark-bottom.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-mobile-vertical.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-mobile-horizontal-regular.png -->
<!-- exclusions/_images/ru/games/monetization/ad/banner-ad-mobile-horizontal-compact.png -->

:::carousel
![alt=Рекламный баннер сверху по ширине экрана (тёмная тема);title=Рекламный баннер сверху по ширине экрана (тёмная тема)](3bd5135483033791367653402c723ab1391081b48a196717aa6f803d "6350731533085009772")
![alt=Рекламный баннер снизу по ширине экрана (тёмная тема);title=Рекламный баннер снизу по ширине экрана (тёмная тема)](3aa051e3c7c56e2ded1e3f9f4aa8a800a732efb188c9b722b293c558 "-744652061762492225")
![alt=Рекламный баннер справа в горизонтальной ориентации устройства;title=Рекламный баннер справа в горизонтальной ориентации устройства](68578c538467d34a6b3ecc5a42a1d1ceef1f2dc6e6a9e7f82ca88002 "-7222367035675843902")
![alt=Рекламный баннер стандартного размера в горизонтальной ориентации устройства;title=Рекламный баннер стандартного размера в горизонтальной ориентации устройства](d1efd54667dfd8d90f09790940d344a4614363c869e11297956e3da0 "-8723544357386878723")
![alt=Рекламный баннер уменьшенной высоты в горизонтальной ориентации устройства;title=Рекламный баннер уменьшенной высоты в горизонтальной ориентации устройства](e095206317f837c932871d0a34c9f3a6c220023b90a2b647774c5730 "2056978635550021392")
:::

| Вид баннера | Параметры VK Bridge |
|---|---|
| Рекламный баннер сверху по ширине экрана (тёмная тема) | `banner_location: 'top'` |
| Рекламный баннер снизу по ширине экрана (тёмная тема) | `banner_location: 'bottom'` |
| Рекламный баннер справа в горизонтальной ориентации устройства | `layout_type: 'resize'`&#x0d;&#x0a;`orientation: 'vertical'` |
| Рекламный баннер стандартного размера в горизонтальной ориентации устройства | `banner_location: 'top'`&#x0d;&#x0a;`height_type: 'regular'` |
| Рекламный баннер уменьшенной высоты в горизонтальной ориентации устройства | `banner_location: 'top'`&#x0d;&#x0a;`height_type: 'compact'` |

## Материалы по теме

* [Баннерная реклама в мини-приложениях](mini-apps/monetization/ad/banners)
* [`VKWebAppShowBannerAd`](bridge/VKWebAppShowBannerAd)
* [`VKWebAppCheckBannerAd`](bridge/VKWebAppCheckBannerAd)
* [`VKWebAppBannerAdUpdated`](bridge/VKWebAppBannerAdUpdated)
* [`VKWebAppHideBannerAd`](bridge/VKWebAppHideBannerAd)
* [`VKWebAppBannerAdClosedByUser`](bridge/VKWebAppBannerAdClosedByUser)
* [Вывод средств](games/monetization/withdrawal/overview)
