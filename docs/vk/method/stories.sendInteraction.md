# stories.sendInteraction

> Источник: [https://dev.vk.ru/ru/method/stories.sendInteraction](https://dev.vk.ru/ru/method/stories.sendInteraction)
Отправляет фидбек на историю.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `access_key` | `string` | да | Ключ доступа пользователя, полученный при подписке. Возвращает событие [`VKWebAppSubscribeStoryApp`](bridge/VKWebAppSubscribeStoryApp). |
| `message` | `string` | нет | Текст фидбека. |
| `is_broadcast` | `checkbox` | нет | Возможные значения:<br>*  `0` —  фидбек виден только отправителю и автору истории;<br>*  `1` —  фидбек виден всем зрителям истории и автору. |
| `is_anonymous` | `checkbox` | нет | Возможные значения:<br>*  `0` — автор фидбека не  анонимный;<br>*  `1` —  автор фидбека  анонимный. |
| `unseen_marker` | `checkbox` | нет |  |

## Типы ключа

`secure`
