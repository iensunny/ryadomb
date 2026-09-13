# video.getPublicSectionFeed

> Источник: [https://dev.vk.ru/ru/method/video.getPublicSectionFeed](https://dev.vk.ru/ru/method/video.getPublicSectionFeed)
Метод позволяет получать ссылку на выбранный тематический фид.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `section_name` | `string` | да | Позволяет выбрать нужный фид.<br>Доступные значения: <br>- `trends`<br>- `sport`<br>- `cybersport`<br>- `for_kids`<br>- `politics` |
| `limit` | `integer` | нет | Позволяет выбрать количество видео в ответе.<br>Доступные значения:<br>- `20`<br>- `50` |
| `max_duration` | `integer` | нет | Позволяет выбрать максимальную длительность видео в ответе.<br>Доступные значения:<br>- `61`<br>- `122` |

> access_token необязателен.

## Результат

URL-ссылка на json файл, в котором содержится запрашиваемая информация.

## Типы ключа

`allow_from_server`
