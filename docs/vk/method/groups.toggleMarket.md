# groups.toggleMarket

> Источник: [https://dev.vk.ru/ru/method/groups.toggleMarket](https://dev.vk.ru/ru/method/groups.toggleMarket)
Переключает функционал раздела «Товаров» в выбранной группе.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор сообщества, в котором необходимо переключить функционал магазина. |
| `state` | `string` | да | Значение переключателя. <br>Возможные значения:<br>*  `none` — товары отключены;<br>*  `basic` — базовые товары;<br>*  `advanced` — расширенные товары. |
| `ref` | `string` | нет |  |
| `utm_source` | `string` | нет |  |
| `utm_medium` | `string` | нет |  |
| `utm_campaign` | `string` | нет |  |
| `utm_content` | `string` | нет |  |
| `utm_term` | `string` | нет |  |
| `promocode` | `string` | нет |  |

## Права доступа

`groups`

## Ошибки

- 1431
- 1432
