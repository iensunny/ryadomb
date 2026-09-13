# newsfeed.getSuggestedSources

> Источник: [https://dev.vk.ru/ru/method/newsfeed.getSuggestedSources](https://dev.vk.ru/ru/method/newsfeed.getSuggestedSources)
Возвращает сообщества и пользователей, на которые текущему пользователю рекомендуется подписаться.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `offset` | `positive` | нет | Отступ, необходимый для выборки определенного подмножества сообществ или пользователей. |
| `count` | `positive` | нет | Количество сообществ или пользователей, которое необходимо вернуть. |
| `shuffle` | `checkbox` | нет | Перемешивать ли возвращаемый список. |
| `fields` | `string` | нет | Список дополнительных полей, которые необходимо вернуть. См. [возможные поля для пользователей](reference/objects/user) и [сообществ](reference/objects/group). |

## Результат

Список объектов [пользователей](reference/objects/user) и [групп](reference/objects/group).
