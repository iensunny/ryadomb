# video.search

> Источник: [https://dev.vk.ru/ru/method/video.search](https://dev.vk.ru/ru/method/video.search)
Метод получает список видеозаписей в соответствии с заданными критериями поиска.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `q` | `string` | нет | Строка поискового запроса, например `The Beatles`. Поиск по пустому запросу возможен только при наличии параметра `owner_id`. |
| `sort` | `integer` | нет | Критерии сортировки видеозаписей. Возможные значения:<br>* `0` — по дате добавления видеозаписей.<br>* `1` — по длительности.<br>* `2` — по релевантности. |
| `hd` | `integer` | нет | Информация о том, искать ли видеозаписи высокого качества. Возможные значения:<br>* `1` — искать видеозаписи высокого качества.<br>* `0` — не искать видеозаписи высокого качества. Значение используется по умолчанию. |
| `adult` | `checkbox` | нет | Фильтр «Безопасный поиск». Возможные значения:<br>* `1` — выключен.<br>* `0` — включён. |
| `live` | `checkbox` | нет |  |
| `filters` | `string` | нет | Список критериев, по которым требуется отфильтровать видеозаписи. Возможные значения:<br>* `vk` — возвращать только VK-видеозаписи.<br>* `youtube` — возвращать только YouTube-видеозаписи.<br>* `vimeo` — возвращать только Vimeo-видеозаписи.<br>* `short` — возвращать только короткие видеозаписи.<br>* `long` — возвращать только длинные видеозаписи. |
| `search_own` | `checkbox` | нет | Информация о том, выполнить ли поиск по списку видеозаписей пользователя. Возможные значения:<br>* `1` — искать по списку видеозаписей пользователя.<br>* `0` — не искать по списку видеозаписей пользователя. Значение используется по умолчанию. |
| `offset` | `positive` | нет | Смещение для возвращения видеозаписей относительно начала списка. |
| `longer` | `positive` | нет | Минимальное количество секунд, которое должно быть у возвращаемых видеозаписей. |
| `shorter` | `positive` | нет | Максимальное количество секунд, которое должно быть у возвращаемых видеозаписей. |
| `count` | `positive` | нет | Количество возвращаемых видеозаписей.<br>:::note<br>**Примечание.** Даже при использовании параметра `offset` для получения информации доступны только первые 500 видео.<br>::: |
| `extended` | `checkbox` | нет | Информация о том, вернуть ли дополнительные поля `profiles` и `groups`, содержащие информацию о пользователях и сообществах. Возможные значения:<br>* `1` — вернуть дополнительные поля.<br>* `0` — не возвращать дополнительные поля. Значение используется по умолчанию. |
| `owner_id` | `integer` | нет | Идентификатор владельца, по которому необходимо отфильтровать видеозаписи.<br>Параметр разрешён с версии 5.167. |
| `fields` | `string` | нет |  |

## Результат

Метод возвращает объект. Параметры объекта:

| Параметр | Тип | Описание |
| --- | --- | --- |
| `count` | `integer` | Количество видеозаписей. |
| `items` | `array[object]` | Массив объектов [видеозаписи](reference/objects/video). |
| `profiles` | `array[object]` | Массив объектов [пользователей](reference/objects/user). Параметр возвращается, если параметр `extended` имеет значение `1`. |
| `groups` | `array[object]` | Массив объектов [сообществ](reference/objects/group). Параметр возвращается, если параметр `extended` имеет значение `1`. |
| `files` | `string` | Ссылка на файл с видеозаписью, если ролик размещен на сервере ВКонтакте, или ссылка на внешний ресурс, если ролик встроен с какого-либо видеохостинга. Параметр возвращается, если в вашем приложении используется [прямая авторизация](api/direct-auth). |

Пример ответа с параметром `extended=0`:

```JSON
{
  "response": {
    "count": 1547445,
    "items": [
      {
        "can_comment": 0,
        "can_like": 1,
        "can_repost": 1,
        "can_subscribe": 1,
        "can_add_to_faves": 1,
        "can_add": 1,
        "comments": 0,
        "date": 1606742914,
        "description": "",
        "duration": 10802,
        "image": [
          {
            "url": "https://sun9-4.us...bb9/DiIKAZBCUrw.jpg",
            "width": 130,
            "height": 96,
            "with_padding": 1
          },
          {
            "url": "https://sun9-23.u...bb8/Z1daDIW3jkQ.jpg",
            "width": 160,
            "height": 120,
            "with_padding": 1
          }
        ],
        "width": 1280,
        "height": 720,
        "id": 456239101,
        "owner_id": -185310931,
        "title": "природа",
        "is_favorite": false,
        "player": "https://vk.com/vi...3a37c9_GI3DGOJXHE3Q",
        "added": 0,
        "track_code": "video_31eba2b6nVd8JlQi_Zlm8xQj3eEvIsvFCrQzGabs8VpQciX-dLz6Jj4XbJpfPpzJJxxSasuUKU7iBdOWeitEiyIRTaEC1Z5DoZ3s8Uh7mhZJE4LVGhT5",
        "type": "video",
        "views": 358,
        "likes": {
          "count": 3,
          "user_likes": 0
        },
        "reposts": {
          "count": 3,
          "user_reposted": 0
        }
      }
    ],
    "profiles": [],
    "groups": []
  }
}
```

Пример ответа с параметром `extended=1`:

```JSON
{
  "response": {
    "count": 1547445,
    "items": [
      {
        "can_comment": 0,
        "can_like": 1,
        "can_repost": 1,
        "can_subscribe": 1,
        "can_add_to_faves": 1,
        "can_add": 1,
        "comments": 0,
        "date": 1606742914,
        "description": "",
        "duration": 10802,
        "image": [
          {
            "url": "https://sun9-4.us...bb9/DiIKAZBCUrw.jpg",
            "width": 130,
            "height": 96,
            "with_padding": 1
          },
          {
            "url": "https://sun9-23.u...bb8/Z1daDIW3jkQ.jpg",
            "width": 160,
            "height": 120,
            "with_padding": 1
          }
        ],
        "width": 1280,
        "height": 720,
        "id": 456239101,
        "owner_id": -185310931,
        "title": "природа",
        "is_favorite": false,
        "player": "https://vk.com/vi...352959_GI3DGOJXHE3Q",
        "added": 0,
        "track_code": "video_b5f7b977SvdxSSj-fQWT1Z3VeyuVGPQlJUTe_du7E0nRe-gQ-y4thjN4EEbx__zsoDSbziD-fsecpVAcYxjGKKMYgE-NR0lq7YTbTMaSeZKv5CQfoC4",
        "type": "video",
        "views": 358,
        "likes": {
          "count": 3,
          "user_likes": 0
        },
        "reposts": {
          "count": 3,
          "user_reposted": 0
        }
      }
    ],
    "profiles": [],
    "groups": [
      {
        "id": 185310931,
        "name": "природа",
        "screen_name": "club185310931",
        "is_closed": 0,
        "type": "group",
        "photo_50": "https://sun9-52.u...1120,1120&ava=1",
        "photo_100": "https://sun9-52.u...1120,1120&ava=1",
        "photo_200": "https://sun9-52.u...1120,1120&ava=1" 
      }
    ]
  }
}
```

## Права доступа

`video`

## Ошибки

- 106
