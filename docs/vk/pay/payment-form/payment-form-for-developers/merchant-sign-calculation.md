# Как сформировать подпись продавца

> Источник: [https://dev.vk.ru/ru/pay/payment-form/payment-form-for-developers/merchant-sign-calculation](https://dev.vk.ru/ru/pay/payment-form/payment-form-for-developers/merchant-sign-calculation)
Подпись продавца `merchant_sign` передаётся как параметр внутри [JSON-объекта `data`](pay/payment-form/payment-form-for-developers/payment-create#Объект%20data) и гарантирует, что платёжное окно было сформировано с ведома продавца и он готов к получению платежа с указанной суммой и номером заказа, а также к начислению кешбэка в указанное время и в указанном размере.

`merchant_sign` — это SHA256-хеш от конкатенации строк `merchant_data` и `merchant_private_key`, где:

* `merchant_private_key` — приватный ключ продавца, который вы получаете после заключения договора с платёжной системой;
* `merchant_data` — BASE64-строка от JSON-объекта, который включает в себя параметры платёжного окна.

```
$merchant_sign = sha256($merchant_data.$merchant_private_key)
```

Чтобы сформировать подпись продавца:

1. [Сформируйте объект `merchant_data`](#Шаг%201.%20Сформируйте%20JSON-объект%20merchant_data).
2. [Закодируйте поле `data`](#Шаг%202.%20Закодируйте%20сформированный%20объект%20поле%20merchant_data%20в%20BASE64-строку).
3. [Сконкатенируйте поле `data` с приватным ключом](#Шаг%203.%20Сконкатенируйте%20полученную%20на%20предыдущем%20шаге%20BASE64-строку%20с%20приватным%20ключом%20продавца).
4. [Вычислите криптографический хеш SHA256 в HEX-представлении](#Шаг%204.%20От%20полученной%20после%20объединения%20строки%20вычислите%20криптографический%20хеш%20SHA256%20в%20HEX-представлении).

## Шаг 1. Сформируйте JSON-объект `merchant_data`

JSON-объект `merchant_data` включает в себя [параметры платёжного окна](pay/payment-form/payment-form-for-developers/payment-create#Параметры%20платежа): `amount`, `cashback`, `currency`, `order_id` и `ts`. Других параметров в `merchant_data` быть не должно.

**Пример JSON-объект `merchant_data`**

```JSON
{
  "order_id": "1554384451.84747666",
  "cashback": {
    "pay_time": 1554384571,
    "amount_percent": "30"
  },
  "ts": 1554384451,
  "amount": "1",
  "currency": "RUB"
}
```

## Шаг 2. Закодируйте сформированный объект поле `merchant_data` в BASE64-строку

**Пример поля `merchant_data`, закодированного в BASE64-строку**


```
    eyJvcmRlcl9pZCI6IjE1NTQzODQ0NTEuODQ3NDc2NjYiLCJjYXNoYmFjayI6eyJwYXlfdGltZSI6MTU1NDM4NDU3MSwiYW1vdW50X3BlcmNlbnQiOiIzMCJ9LCJ0cyI6MTU1NDM4NDQ1MSwiYW1vdW50IjoiMSIsImN1cnJlbmN5IjoiUlVCIn0= 
```

## Шаг 3. Сконкатенируйте полученную на предыдущем шаге BASE64-строку с приватным ключом продавца

Приватный ключ продавца `merchant_private_key`: 627fdbfa24232a5b62f9c295baa93f7db9752873.

**Пример конкатенации поля `data` и приватного ключа**

```
eyJvcmRlcl9pZCI6IjE1NTQzODQ0NTEuODQ3NDc2NjYiLCJjYXNoYmFjayI6eyJwYXlfdGltZSI6MTU1NDM4NDU3MSwiYW1vdW50X3BlcmNlbnQiOiIzMCJ9LCJ0cyI6MTU1NDM4NDQ1MSwiYW1vdW50IjoiMSIsImN1cnJlbmN5IjoiUlVCIn0=627fdbfa24232a5b62f9c295baa93f7db9752873 
```

## Шаг 4. От полученной после объединения строки вычислите криптографический хеш SHA256 в HEX-представлении

```
    86ebbd9e89f81e62db6e724707ace59b27fc4756 
```

Готово! Используйте полученное значение [при отправке запроса](pay/payment-form/payment-form-for-developers/payment-create#Шаг%203.%20Отправьте%20запрос%20на%20отображение%20платёжного%20окна%20VK%C2%A0Pay) в параметре [`params.data.merchant_sign`](pay/payment-form/payment-form-for-developers/payment-create#Объект%20data).
