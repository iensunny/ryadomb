# bugtracker.getProductBuildUploadServer

> Источник: [https://dev.vk.ru/ru/method/bugtracker.getProductBuildUploadServer](https://dev.vk.ru/ru/method/bugtracker.getProductBuildUploadServer)
Получает ссылку для загрузки сборки приложения в [продукт](vk-testers/product).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `product_id` | `positive` | да | Идентификатор продукта. Его можно найти в ссылке на страницу продукта, например:<br>`https://vk.com/bugs?act=product&id=17`<br> |

## Результат

При успешном выполнении в поле `upload_url` возвращает ссылку для загрузки сборки. Подробнее о загрузке сборок в продукты смотрите в разделе [Загрузка и публикация тестовых сборок](vk-testers/product-builds).

Пример ответа:

```JSON
{
  "upload_url": "{ссылка_для_загрузки_сборки}" 
}
```

## Типы ключа

`user_access_hidden`

## Ошибки

- 104

> Работает с [ключом доступа](vk-testers/access-tokens) компании и продукта.
