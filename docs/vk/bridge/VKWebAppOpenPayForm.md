# VK Bridge | VKWebAppOpenPayForm

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppOpenPayForm](https://dev.vk.ru/ru/bridge/VKWebAppOpenPayForm)
<!-- ---
title: 'VK Bridge | Монетизация | Покупки | VKWebAppOpenPayForm'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppOpenPayForm

`VKWebAppOpenPayForm` показывает экран [VK Pay](pay/getting-started) для совершения платежа.

:::note
**Примечание.** Если пользователь ещё не завёл аккаунт VK Pay, при первом вызове ему будет предложено ввести данные для регистрации.
:::

## Пример

```JavaScript
bridge.send('VKWebAppOpenPayForm', {
    app_id: 6909581,
    action: 'pay-to-service',
    params: {
      user_id: 743784474
    }})
  .then((data) => {
    if (data.status) {
      // Экран VK Pay показан
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
| Одноклассники | – |

## Параметры

| Поле | Тип | Описание |
| --- | --- |---|
| `app_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор мини-приложения. |
| `action` &#x0d;&#x0a;*обязательное* | `string` | Тип перевода. Всегда `pay-to-service` — перевод в пользу юридического лица. |
| `params` &#x0d;&#x0a;*обязательное* | `object` | Параметры платёжного окна VK Pay. Параметры зависят от типа платежа `action`. Подробнее — в [инструкции по проведению платежа](pay/payment-form/payment-form-for-developers/payment-create#Шаг%203.%20Отправьте%20запрос%20на%20отображение%20платёжного%20окна%20VK%C2%A0Pay). |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppOpenPayFormResult` и `VKWebAppOpenPayFormFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение или игра запущены в фоновом режиме.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `status` | `boolean` | Информация о том, успешно ли выполнен платёж. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — платёж выполнен успешно.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — произошла ошибка. |
| `transaction_id` | `string` | Идентификатор транзакции в платёжной системе. Поле возвращается, если поле `status` имеет значение `true`. |
| `amount` | `string` | Сумма платежа. |
| `extra` | `string` | Дополнительные данные о продавце. Содержит данные объекта [`params.data`](pay/payment-form/payment-form-for-developers/payment-create#Объект%20data). |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppOpenPayFormResult`

Сигнализирует, что экран VK Pay показан. В обработчик события на стороне пользователя передаются следующие данные:

```JavaScript
{
  detail: {
    type: "VKWebAppOpenPayFormResult",
    data: {
      status: true,
      transaction_id: "1234ABCD-EEEE-5678-90FG-ABCDEF123456",
      amount: "120.5",
      extra: "{\"currency\":\"RUB\",\"merchant_data\":\"some_merchant_data\",\"merchant_sign\":\"some_sign\",\"order_id\":\"some_order_id\",\"ts\":1641999488}\""
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppOpenPayFormFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppOpenPayForm](https://vk.cc/bZfweB)

## Материалы по теме

* [Документация VK Pay](pay/getting-started)
* [Платёжное окно](pay/payment-form/general-description)
* [Продажа товаров в мини-приложениях](mini-apps/monetization/payments)
