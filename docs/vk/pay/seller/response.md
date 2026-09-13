# Формат ответа

> Источник: [https://dev.vk.ru/ru/pay/seller/response](https://dev.vk.ru/ru/pay/seller/response)
[Платёжная система](pay/seller/general-description) возвращает ответ в формате JSON. 
Кодировка строк ответа — UTF–8.

При получении ответа необходимо [проверить](pay/seller/response/sign) его подпись. Данные ответа зависят от [запроса](pay/seller/general-description). 

В случае [ошибки запроса](#Структура%20заголовка%20header%20при%20ошибке%20обработки%20запроса) платёжная система вернёт в ответе [код и описание ошибки](pay/seller/request-create/errors).

**Пример ответа**

```JSON
{
  "version":"2-03-73","data":"eyJoZWFkZXIiOnsic3RhdHVzIjoiRVJST1IiLCJ0cyI6IjE3MjE2NjM3NTUiLCJlcnJvciI6eyJjb2RlIjoiRVJSX05PVF9GT1VORCIsIm1lc3NhZ2UiOiLQl9Cw0L/RgNC+0YjQtdC90L3QsNGPINGC0YDQsNC90LfQsNC60YbQuNGPINC90LUg0L3QsNC50LTQtdC90LAiLCJlcnJvcl9pZCI6IkUxMDlCMjc4LTQ4NDItMTFFRi05MkU5LUI3NjgyQTAzQTM2RiJ9fX0=","signature":"chlRZXQWloj9ubiKmrxX120+diWRtyS9RxekeVMCJrhdciWe0TD4QAZpfA7R9cCN+GpJLsTDhqBiBpRjXePXOxIJT+fuHICSZiAf6B27KGKsFkgk7aT+YDdaov6IVD1hoHHwY9++vJNi236nbIYRMhYgA6/RiXWCyXcPii8b1SS3eNW/9Nd3CLgFgO5lKZZA0EELnBXAwpRNFxmoLqE1eiSP38aEJhAvZZVn+QAaKx6rsRuc+ht0awQf+62NEb6rXYwtd3YDM0U+ArFPH3v6Y8U25ZEBLd4gat/pu7F741B4VngZCtQrBd6r17xS/64+V+dDaLsOnJaLxWQZ1rObkQ=="
}
```

## Основные поля ответа

| Поле | Описание |
|---|---|
|`version` | Актуальная версия API системы, включая минорные изменения. Например, если вы в запросе указали версию `2-03`, в ответе вернётся `2-03-72`.|
|`data` | Данные ответа в формате JSON, закодированные в BASE64-строку без разделителей. Содержат структуру с полями:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `header` — заголовок ответа. Структура `header` зависит от результата запроса: [успешно](#Структура%20заголовка%20header%20при%20успешной%20обработке%20запроса) или [неуспешно](#Структура%20заголовка%20header%20при%20ошибке%20обработки%20запроса). Если статус ответа – `ERROR`, содержит данные об ошибке. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `body` —  набор полей, которые зависят от запроса. Может возвращаться пустым.|
|`signature` | Подпись ответа — формируется на основе объекта `data` по аналогии [с подписью запроса](pay/seller/request-sign-creating). При получении ответа подпись необходимо [проверить](pay/seller/response/sign). |

## Структура заголовка `header` при успешной обработке запроса

При успешной обработке запроса заголовок `header` будет содержать поле `status` со значением `OK`.

| Поле | Тип | Описание |
|---|---|---|
|`status` | `string` | Результат запроса. В случае успеха принимает значение `OK`.|
|`ts` | `number` | Временная отметка формирования запроса. Формат: число, [Unix Timestamp](https://www.unixtimestamp.com/). &#x0d;&#x0a;Пример: `1714137378`|

**Пример JSON поля `header`**

```JSON
 "header": {
    "ts": 1721663752,
    "status": "OK"
  }
```

## Структура заголовка `header` при ошибке обработки запроса

При ошибке обработки запроса заголовок `header` будет содержать поле `status` со значением `ERROR` и объект `error` с кодом и описанием ошибки.

| Поле | Тип | Описание |
|---|---|---|
|`status` | `string` | Результат запроса. В случае успеха принимает значения: `ERROR`.|
|`ts` | `number` | Временная отметка формирования ответа в формате [Unix Timestamp](https://www.unixtimestamp.com/). &#x0d;&#x0a;Пример: `1721663755`|
|`error` | `object` | [Код и описание ошибки](pay/seller/request-create/errors) при ошибке запроса. Ошибка может быть общей или специфичной для этого запроса.  Содержит поля: &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `code` — код ошибки. Тип: `string`  &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `error_id` – идентификатор ошибки. Тип: `string` &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `message` — описание ошибки. Тип: `string` &#x0d;&#x0a;В случае ошибки в нескольких переданных параметрах `message` может содержать структуру со списком этих параметров в виде пары `ключ:значение`, где `ключ` – название некорректно переданного параметра в XPath-формате, `значение` – описание ошибки для этого параметра. |

**Пример JSON поля `header`**

```JSON
  "header": {
    "status": "ERROR",
    "ts": "1721663755",
    "error": {
      "code": "ERR_NOT_FOUND",
      "message": "Запрошенная транзакция не найдена",
      "error_id": "E109B278-4842-11EF-92E9-B7682A03A36F"
    }
  }
```
