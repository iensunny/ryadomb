# messages.getReactionsAssets

> Источник: [https://dev.vk.ru/ru/method/messages.getReactionsAssets](https://dev.vk.ru/ru/method/messages.getReactionsAssets)
Получение ассетов реакций

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `client_version` | `positive` | нет | Текущая версия ассетов на клиенте |

## Результат

version - актуальная версия ассетов

assets - дифф ассетов реакций между актуальной и переданной в client_version версиями, если client_version отсутствует - полный набор ассетов для актуальной версии

reaction_ids - массив id доступных реакций из актуальной версии ассетов, отсортированный по приоритету вывода в пикере реакций.

## Права доступа

`messages_ex`

## Типы ключа

`is_standalone`

## Ошибки

- 995
