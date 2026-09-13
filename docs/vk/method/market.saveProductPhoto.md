# market.saveProductPhoto

> Источник: [https://dev.vk.ru/ru/method/market.saveProductPhoto](https://dev.vk.ru/ru/method/market.saveProductPhoto)

> Подготавливает изображение, загруженное с помощью [`market.getProductPhotoUploadServer`](method/market.getProductPhotoUploadServer), для добавления к товару сообщества. 
Подготавливает изображение, загруженное с помощью [`market.getProductPhotoUploadServer`](method/market.getProductPhotoUploadServer), для добавления к товару сообщества.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `upload_response` | `string` | нет | **Обязательный параметр.** Ответ с данными изображения, полученными при его [загрузке на серверы ВКонтакте](api/upload/photo-in-market#3.%20Сохраните%20изображение). Подробности — в разделе [Загрузка фотографии для товара](api/upload/photo-in-market). |

## Результат

Возвращает объект с полем `photo_id`, которое содержит идентификатор загруженного изображения. 

```JSON
{"response":
    {
        "photo_id":457239024
    }
}
```

В дальнейшем вы можете использовать этот идентификатор, чтобы прикрепить изображение к товару. Для этого укажите его в параметрах `main_photo_id` или `photo_ids` API-запросов [`market.add`](method/market.add) или [`market.edit`](method/market.edit).

## Права доступа

`market`

## Ошибки

- 1438

Подробности — в разделе [Загрузка фотографии для товара](api/upload/photo-in-market).
