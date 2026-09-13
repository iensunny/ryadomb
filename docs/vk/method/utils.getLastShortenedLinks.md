# utils.getLastShortenedLinks

> Источник: [https://dev.vk.ru/ru/method/utils.getLastShortenedLinks](https://dev.vk.ru/ru/method/utils.getLastShortenedLinks)
Получает список сокращённых ссылок для текущего пользователя.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `count` | `positive` | нет | Количество ссылок, которые необходимо получить. |
| `offset` | `positive` | нет | Сдвиг для получения определенного подмножества ссылок. |

## Результат

Возвращает количество ссылок в поле `count` (`integer`) и массив объектов `items`, описывающих ссылки. Каждый из объектов содержит следующие поля:

### `timestamp` 
`integer`
Время создания ссылки в `Unixtime`.
 
### `url` 
`string`
URL ссылки до сокращения.
 
### `short_url`
`string`
Сокращённый URL.
 
### `key`
`string`
Содержательная часть (символы после «vk.cc»).
 
### `views`
`integer `
Число переходов.
 
### `access_key`
`string`
 Ключ доступа к приватной статистике.
