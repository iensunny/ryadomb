# video.stopStreaming

> Источник: [https://dev.vk.ru/ru/method/video.stopStreaming](https://dev.vk.ru/ru/method/video.stopStreaming)
Завершает трансляцию.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | нет | идентификатор сообщества, в котором ведется трансляция |
| `video_id` | `positive` | нет | идентификатор трансляции. |

## Результат

Возвращает объект, который содержит следующие поля:
* **unique_viewers** (integer) — количество уникальных зрителей трансляции;

## Права доступа

`video`
