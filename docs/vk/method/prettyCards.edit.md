# prettyCards.edit

> Источник: [https://dev.vk.ru/ru/method/prettyCards.edit](https://dev.vk.ru/ru/method/prettyCards.edit)
Редактирует карточку карусели.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | да | Идентификатор владельца карточки. |
| `card_id` | `string` | да | Идентификатор карточки. |
| `photo` | `string` | нет | Новая фотография. Подробнее см. метод [`prettyCards.create`](method/prettyCards.create). |
| `title` | `string` | нет | Новый заголовок. |
| `link` | `string` | нет | Новая ссылка. Подробнее см. метод [`prettyCards.create`](method/prettyCards.create). |
| `price` | `string` | нет | Новая цена. Подробнее см. метод [`prettyCards.create`](method/prettyCards.create). |
| `price_old` | `string` | нет | Обновлённая старая цена. Подробнее см. метод [`prettyCards.create`](method/prettyCards.create). |
| `button` | `string` | нет | Новая кнопка. Подробнее см. метод [`prettyCards.create`](method/prettyCards.create). |

## Результат

Возвращает структуру с информаций об обновлённой карточке.
*  `owner_id` — идентификатор владельца карточки,
*  `card_id` — идентификатор карточки.

## Права доступа

`ads`

## Ошибки

- 1900
