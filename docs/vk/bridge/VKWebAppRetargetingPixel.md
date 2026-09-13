# VK Bridge | VKWebAppRetargetingPixel

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppRetargetingPixel](https://dev.vk.ru/ru/bridge/VKWebAppRetargetingPixel)
<!-- ---
title: 'VK Bridge | Монетизация | Аналитика | VKWebAppRetargetingPixel'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppRetargetingPixel

`VKWebAppRetargetingPixel` добавляет пользователя в аудиторию ретаргетинга. Параметры соответствуют параметрам `event` и `audience` при подключении пикселя в [мобильном приложении](mini-apps/development/pixel/pixel-placement#Подключение%20событий%20в%20мобильном%20приложении).

## Пример

```JavaScript
bridge.send('VKWebAppRetargetingPixel', {
  pixel_code: 'VK-RTRG-447253-dUuM',
  event: 'click-to-button'
  })
  .then((data) => { 
    if (data.result) {
      // Пользователь добавлен в аудиторию ретаргетинга
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
| ВКонтакте | Android (с версии клиента 6.1), iOS, Mobile Web, Web |
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `pixel_code` &#x0d;&#x0a;*обязательное* | `string` | Код пикселя. Например: `VK-RTRG-447253-dUuM`. Код пикселя можно найти в [рекламном кабинете](https://vk.com/ads?act=retargeting&show=pixels). |
| `event` &#x0d;&#x0a;*необязательное* | `string` | Идентификатор события, пользовательское правило пикселя. См. [возможные значения](bridge/VKWebAppConversionHit#Возможные%20значения%20конверсионных%20действий). |
| `target_group_id` &#x0d;&#x0a;*необязательное* | `integer` | Идентификатор группы ретаргетинга, в которую нужно добавить пользователя.  |
| `price_list_id` &#x0d;&#x0a;*необязательное* | `integer` | Идентификатор прайс-листа. Используется для динамического ретаргетинга продуктов. |
| `products_event` &#x0d;&#x0a;*необязательное* | `string` | Тип продуктового события.  Используется для динамического ретаргетинга продуктов. |
| `products_params` &#x0d;&#x0a;*необязательное* | `string` | Параметры товара. Используется для динамического ретаргетинга продуктов. |

:::note
**Примечание.** При создании пикселя в рекламном кабинете можно указывать только идентификатор мини-приложения (поле **Разрешённый Mini App id**). Указывать домен или поддомен не обязательно.
:::

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppRetargetingPixelResult` и `VKWebAppRetargetingPixelFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, пользователь добавлен в аудиторию ретаргетинга. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppRetargetingPixelResult`

Сигнализирует, что пользователь добавлен в аудиторию ретаргетинга. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppRetargetingPixelResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppRetargetingPixelFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Примеры соответствия для Open API

Если вы использовали Opеn API (`openapi.js`), ваш код на JavaScript по-прежнему будет работать. Но в будущем мы прекратим поддержку Opеn API, поэтому рекомендуем использовать события VK Bridge так, как показано ниже. 

### `VK.Retargeting.Event`

#### Open API

```JavaScript
VK.Retargeting.Event('purchase');
```

#### VK Bridge

```JavaScript
bridge.send('VKWebAppRetargetingPixel', {
  pixel_code: 'VK-Boo-427253-dUuM',
  event: 'purchase'
});
```

### `VK.Retargeting.Hit`

#### Open API

```JavaScript
VK.Retargeting.Hit();
```

#### VK Bridge

```JavaScript
bridge.send('VKWebAppRetargetingPixel', {
  pixel_code: 'VK-Boo-427253-dUuM'
});
```

### `VK.Retargeting.Add`

#### Open API

```JavaScript
VK.Retargeting.Add(8839163);
```

#### VK Bridge

```JavaScript
bridge.send('VKWebAppRetargetingPixel', {
  pixel_code: 'VK-Boo-427253-dUuM',
  target_group_id: 8839163
});
```

### `VK.Retargeting.ProductEvent`

#### Open API

```JavaScript
VK.Retargeting.ProductEvent(12345 /* PRICE_LIST_ID */, 'view_product', {
  'total_price': 34899
});
```

#### VK Bridge

```JavaScript
bridge.send('VKWebAppRetargetingPixel', {
  pixel_code: 'VK-Boo-427253-dUuM',
  price_list_id: 12345,
  products_event: 'view_product',
  products_params: {
    total_price: 34899
  }
});
```
