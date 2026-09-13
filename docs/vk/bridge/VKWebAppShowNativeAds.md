# VK Bridge | VKWebAppShowNativeAds

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppShowNativeAds](https://dev.vk.ru/ru/bridge/VKWebAppShowNativeAds)
<!-- ---
title: 'VK Bridge | Монетизация | Реклама | VKWebAppShowNativeAds'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppShowNativeAds

`VKWebAppShowNativeAds` показывает рекламу пользователям в играх и мини-приложениях. Параметры вызова задают вид желаемой рекламы.

Если на стороне пользователя нет рекламных материалов желаемого типа, то [VK&nbsp;Bridge](bridge/overview) запрашивает материалы и показывает рекламу после её получения.

* [Реклама в мини-приложениях](mini-apps/monetization/ad/overview)
* [Реклама в играх](games/monetization/ad/overview)

## Пример

```JavaScript
bridge.send('VKWebAppShowNativeAds', {
  ad_format: 'interstitial' /* Тип рекламы */
  })
  .then( (data) => { 
    if (data.result) {
      // Реклама была показана
    } else {
      // Ошибка
    }
  })
  .catch((error) => { console.log(error); });
```

#### Другие примеры

* [Реклама за вознаграждение](games/monetization/ad/implementation#Пример%20показа%20рекламы%20за%20вознаграждение)

* [Реклама между экранами](games/monetization/ad/implementation#Пример%20показа%20рекламы%20между%20экранами)

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

В качестве параметров события `VKWebAppShowNativeAds` передайте в [`bridge.send(...)`](bridge/getting-started#Вызов%20события) объект со следующими полями:

| Параметр | Тип | Описание |
| --- | --- | --- |
| `ad_format` | `string` | [Вид](games/monetization/ad/overview#Виды%20рекламы%20в%20играх) рекламы для показа. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `reward` — [реклама за вознаграждение](games/monetization/ad/overview#Реклама%20за%20вознаграждение).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `interstitial` — [реклама между экранами](games/monetization/ad/overview#Реклама%20между%20экранами). |
| `use_waterfall` | `boolean` | Применим только при `ad_format: 'reward'`. Сообщает, можно ли использовать рекламные материалы вида `interstitial` в случае отсутствия материалов вида `reward`.&#x0d;&#x0a;Значение по умолчанию: `true`. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppShowNativeAdsResult` и `VKWebAppShowNativeAdsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, то управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если реклама была показана, или `false` в ином случае. |

Если при обращении к платформе произошла ошибка, то управление передаётся в метод `catch`. Это происходит, например, если было задано некорректное значение в параметре `ad_format`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20результата), общий для всех методов VK Bridge.

### События

#### `VKWebAppShowNativeAdsResult`

Сигнализирует, что параметры вызова были корректны и что библиотека VK Bridge пытается отобразить рекламу пользователю.

В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: 
  {
    type: "VKWebAppShowNativeAdsResult",
    data:{
      result : true,
      request_id: 5 
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppShowNativeAdsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой, например при использовании некорректных значений параметров запроса. В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20результата), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Примечания

* Перед показом рекламы VK Bridge проверяет, есть ли предзагруженные рекламные материалы указанного типа. Если такие материалы есть, VK Bridge показывает их. Если предзагруженных материалов нет, то библиотека отправляет запрос на их загрузку и показывает полученный контент.

  В общем случае это может приводить к задержке при показе. Чтобы избежать её, используйте [предзагрузку рекламных материалов](games/monetization/ad/implementation).
  
  Запрос не гарантирует, что материалы будут загружены. Сбои в сети или проблемы на стороне рекламной платформы могут привести к тому, что контент не будет получен.

* Сразу после успешного показа рекламы VK Bridge отправляет запрос на предзагрузку следующей порции рекламных материалов.

## Песочница

* Игры: [VKWebAppShowNativeAds](https://vk.cc/bZfCRH)

* Мини-приложения: [VKWebAppShowNativeAds](https://vk.com/app6909581#VktXZWJBcHBTaG93TmF0aXZlQWRzQCU3QiUyMmFkX2Zvcm1hdCUyMiUzQSUyMnByZWxvYWRlciUyMiU3RA)

## Материалы по теме

* [Подробнее о работе с VK Bridge](bridge/getting-started)

* [Реклама в играх](games/monetization/ad/overview)

* [Реклама в мини-приложениях](mini-apps/monetization/ad/overview)

* [VKWebAppCheckNativeAds](bridge/VKWebAppCheckNativeAds)
