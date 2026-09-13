# ads.getTargetPixels

> Источник: [https://dev.vk.ru/ru/method/ads.getTargetPixels](https://dev.vk.ru/ru/method/ads.getTargetPixels)
Возвращает список пикселей ретаргетинга.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `account_id` | `integer` | да | Идентификатор рекламного кабинета. |
| `client_id` | `integer` | нет | **Только для рекламных агентств**. <br>Id клиента, в рекламном кабинете которого находятся пиксели. |

## Результат

Возвращает массив объектов, каждый из которых содержит следующие поля:

`target_pixel_id` 
`integer`
Идентификатор пикселя. 
 
 `name`
 `string`
 Название пикселя. 
 
 `last_updated`
 `integer` 
 Дата и время последнего использования пикселя в формате `unixtime`. 
 
 `domain`
 `string`
 Домен сайта, где размещен пиксель. 
 
 `category_id`
 `integer`
 Идентификатор категории сайта, где размещён пиксель смотрите раздел `interest_categories` метода [`ads.getSuggestions`](method/ads.getSuggestions). 
 
 `pixel`
 `string`
 Код для размещения на сайте рекламодателя.

## Права доступа

`ads`

## Ошибки

- 601
