# video.get

> Источник: [https://dev.vk.ru/ru/method/video.get](https://dev.vk.ru/ru/method/video.get)
Метод возвращает информацию о видеозаписях.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `owner_id` | `integer` | нет | **Необязательный параметр.** Идентификатор пользователя или сообщества, которому принадлежат видеозаписи. Идентификатор сообщества должен начинаться со знака&nbsp;`-`. |
| `videos` | `string` | нет | **Необязательный параметр.** Идентификаторы в формате `{owner_id}_{video_id}`, перечисленные через запятую. Идентификатор сообщества должен начинаться со знака&nbsp;`-`.<br>Пример: `-166562603_456239104,743784474_456239017`.<br>Некоторые видеозаписи закрыты приватностью и не могут быть получены без [ключа доступа](reference/objects). В этом случае отправьте идентификатор в формате `{owner_id}_{video_id}_{access_key}`.<br>Пример: `1_129207899_220df2876123d3542f,6492_135055734_e0a9bcc31144f67fbd`.<br>:::note<br>**Примечание.** Ключ доступа возвращается вместе с остальными данными видео в методах, которые возвращают закрытые приватностью видео, доступные в этом контексте. Например, это поле есть у видео, возвращаемых методом [`messages.getHistory`](method/messages.getHistory).<br>::: |
| `album_id` | `string` | нет | **Необязательный параметр.** Идентификатор альбома, видеозаписи которого нужно вернуть. Если параметр не передан, возвращаются видеозаписи из альбома **Добавленные**. |
| `count` | `positive` | нет | **Необязательный параметр.** Количество возвращаемых видеозаписей. |
| `offset` | `positive` | нет | **Необязательный параметр.** Смещение для возвращения видеозаписей относительно начала списка. |
| `extended` | `checkbox` | нет | **Необязательный параметр.** Информация о том, возвращать ли информацию о настройках приватности видеозаписей для текущего пользователя, а также дополнительные поля `profiles` и `groups`. Возможные значения:<br>* `1` — вернуть дополнительную информацию.<br>* `0` — не возвращать дополнительную информацию. |
| `fields` | `string` | нет | **Необязательный параметр.** Дополнительная информация о полях `profiles` и `groups`. Учитывается, если передан параметр `extended` со значением `1`. |
| `sort_album` | `integer` | нет | **Необязательный параметр.** Сортировка видеозаписей по дате добавления. Возможные значения:<br>* `0` — от новых к старым. <br>* `1` — от старых к новым. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `count` | `integer` | Количество видеозаписей. |
| `items` | `array[object]` | Массив объектов [видеозаписи](reference/objects/video) с дополнительным полем `comments`, содержащим число комментариев у видео. |

Если передан параметр `extended` со значением `1`, возвращаются дополнительные поля:

| Поле | Тип | Описание |
| --- | --- | --- |
| `privacy_view` | `string` | Настройки приватности в формате [настроек приватности](reference/objects/privacy). Приходит только для текущего пользователя. |
| `privacy_comment` | `string` | Настройки приватности в формате [настроек приватности](reference/objects/privacy). Приходит только для текущего пользователя. |
| `can_comment` | `boolean` | Информация о том, может ли пользователь комментировать видеозапись. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `1` — пользователь может комментировать видеозапись.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `0` — пользователь не может комментировать видеозапись. |
| `can_repost` | `boolean` | Информация о том, может ли пользователь поделиться видеозаписью с помощью функции «Рассказать друзьям». Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `1` — пользователь может поделиться  видеозаписью.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `0` — пользователь не может поделиться видеозаписью. |
| `likes` | `object` | Информация об отметках «Нравится». Поля объекта:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `user_likes` — поставил ли пользователь отметку.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `count` — количество отметок. |
| `repeat` | `boolean` | Информация о том, зациклить ли воспроизведение видеозаписи. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `1` — зациклить воспроизведение.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `0` — не зацикливать воспроизведение. |



Пример ответа:

```JSON
{
  "response":{
    "count":1
    "items":[
      {
        "adding_date":1671701038,
        "can_comment":0,
        "can_like":1,
        "can_repost":1,
        "can_subscribe":1,
        "can_add_to_faves":1,
        "can_add":1,
        "comments":0,
        "date":1671701032,
        "description":"",
        "duration":15,
        "image":[
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_s",
            "width":130,
            "height":96,
            "with_padding":1
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_m",
            "width":160,
            "height":120,
            "with_padding":1
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_l",
            "width":320,
            "height":240,
            "with_padding":1
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_x",
            "width":800,
            "height":450,
            "with_padding":1
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_w",
            "width":1280,
            "height":720
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_t",
            "width":320,
            "height":180
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_u",
            "width":720,
            "height":405
          }
        ],
        "first_frame":[
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_f",
            "width":720,
            "height":405
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_md",
            "width":480,
            "height":270
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_d",
            "width":240,
            "height":135
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_sm",
            "width":128,
            "height":72
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_w",
            "width":1280,
            "height":720
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_h",
            "width":960,
            "height":540
          },
          {
            "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_w",
            "width":1280,
            "height":720
          }
        ],
        "width":1920,
        "height":1080,
        "id":456242110,
        "owner_id":-22822305,
        "title":"Анимированные vmoji в VK Звонках",
        "is_favorite":false,
        "player":"https://vk.com/video_ext.php?oid=-22822305&id=456242110&hash=e037414127166efe&__ref=vk.api&api_hash=1677682946870d1f6fa590a9b323_HAZDCNJWG42DA",
        "added":0,
        "repeat":1,
        "type":"video",
        "views":19271183,
        "likes":{
          "count":15007,
          "user_likes":0
        },
        "reposts":{
          "count":137,
          "user_reposted":0
        }
      }
    ]
  }
}
```

Пример ответа с параметром `extended=1`:

```JSON
{
  "response":{
  "count":1,
  "items":[
    {
      "adding_date":1671701038,
      "can_comment":0,
      "can_like":1,
      "can_repost":1,
      "can_subscribe":1,
      "can_add_to_faves":1,
      "can_add":1,
      "comments":0,
      "date":1671701032,
      "description":"",
      "duration":15,
      "image":[
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_s",
          "width":130,
          "height":96,
          "with_padding":1
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_m",
          "width":160,
          "height":120,
          "with_padding":1
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_l",
          "width":320,
          "height":240,
          "with_padding":1
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_x",
          "width":800,
          "height":450,
          "with_padding":1
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_w",
          "width":1280,
          "height":720
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_t",
          "width":320,
          "height":180
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=1&type=39&tkn=3uLZ5s_T4TtRsvZfIwLngp8Qdjs&fn=vid_u",
          "width":720,
          "height":405
        }
      ],
      "first_frame":[
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_f",
          "width":720,
          "height":405
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_md",
          "width":480,
          "height":270
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_d",
          "width":240,
          "height":135
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_sm",
          "width":128,
          "height":72
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_w",
          "width":1280,
          "height":720
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_h",
          "width":960,
          "height":540
        },
        {
          "url":"https://i.mycdn.me/getVideoPreview?id=3376734079543&idx=0&type=39&tkn=WK9Wdwpqr6z6g9umM95aW3Ch3QM&fn=vid_w",
          "width":1280,
          "height":720
        }
      ],
      "width":1920,
      "height":1080,
      "id":456242110,
      "owner_id":-22822305,
      "title":"Анимированные vmoji в VK Звонках",
      "is_favorite":false,
      "player":"https://vk.com/video_ext.php?oid=-22822305&id=456242110&hash=e037414127166efe&__ref=vk.api&api_hash=16776826036e5b8c0303e6f9b28a_HAZDCNJWG42DA",
      "added":0,
      "repeat":1,
      "type":"video",
      "views":19271178,
      "likes":{
        "count":15007,
        "user_likes":0
      },
      "reposts":{
        "count":137,
        "user_reposted":0
      }
    }
  }
}
```

## Права доступа

`video`

## Ошибки

- 204

:::note
**Примечание.** Скрытые видеозаписи не будут отражаться в ответе метода. Может вернуться меньше видеозаписей, чем вы указали в параметре `count`.
:::
