# apps.getSnippets

> Источник: [https://dev.vk.ru/ru/method/apps.getSnippets](https://dev.vk.ru/ru/method/apps.getSnippets)
Метод возвращает информацию о сниппетах [мини-приложения](mini-apps/development/snippets) или [игры](games/promotion/game-mechanics/snippets), созданных с помощью [`apps.addSnippet`](method/apps.addSnippet).

—

## Результат

Метод возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `items` &#x0d;&#x0a; | `array[object]` | Массив объектов, содержащих информацию о сниппетах. |

#### Поля объекта, содержащего информацию о сниппетах

| Поле | Тип | Описание |
| --- | --- | --- |
| `vk_ref` | `array[string]` | Массив с информацией об области действия сниппета. | 
| `group_id` | `array[integer]` | Cписок идентификаторов сообществ, в которых сниппет может быть отображён. |
| `hash` | `array[string]` | Cписок хешей, которые могут использоваться для запуска мини-приложения или игры.&#x0d;&#x0a;&#x0d;&#x0a;Хеш — подстрока из URL после символа `#`. Сниппет будет отображён, если ссылка на мини-приложение или игру содержит хеш, который упомянут в этом массиве. &#x0d;&#x0a;&#x0d;&#x0a;**Важно.** Значения чувствительны к регистру.&#x0d;&#x0a;&#x0d;&#x0a;В массиве можно указать значения с маской — символом `*`. Маска означает любое количество символов или пустую подстроку. Например, значение `join*` соответствует следующим ссылкам:&#x0d;&#x0a; &nbsp;&bull;&nbsp; `https://vk.com/app123#join_invite`&#x0d;&#x0a; &nbsp;&bull;&nbsp; `https://vk.com/app123#join_msg`&#x0d;&#x0a; &nbsp;&bull;&nbsp; `https://vk.com/app123#join`&#x0d;&#x0a;&#x0d;&#x0a;Элемент массива без `*` соответствует ссылкам, в которых хеш точно совпадает со значением элемента. Например, `join` соответствует ссылке `https://vk.com/app123#join`, но не `https://vk.com/app123#join_invite`. &#x0d;&#x0a;&#x0d;&#x0a; Максимальная длина — 100 символов. |
| `snippet_id` | `integer` | Идентификатор сниппета. |
| `title` | `string` | Заголовок сниппета. Если значение пустое, поле не возвращается.|
| `description` | `string` | Описание сниппета. Если значение пустое, поле не возвращается. | 
| `image_url`  | `string` | URL изображения сниппета. Размер изображения&nbsp;— 1120&times;630&nbsp;px. Если значение пустое, поле не возвращается. |
|`small_image_url` | `string` | URL малого изображения сниппета. Размер изображения — 150&times;150&nbsp;px. Если значение пустое, поле не возвращается. |
| `button` | `string` | Текст кнопки сниппета. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `open` — «Открыть».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `buy` — «Купить».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `buy_ticket` — «Купить билет».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `join` — «Записаться».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `get_in_touch` — «Связаться».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `fill` — «Заполнить».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `go` — «Перейти».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `play` — «Играть».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet;`help` — «Помочь».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet;`create` — «Создать».&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet;`subscribe` — «Подписаться». |

Пример ответа:

```JSON
{
  "response": {
    "items": [
      {
        "vk_ref": [
          "snippet_im"
        ],
        "group_id": [],
        "hash": [
          "snippet_hash"
        ],
        "snippet_id": 28,
        "title": "Snippet name",
        "description": "Snippet description.",
        "expired_at": 1685524647,
        "image_url": "https://sun9-61.userapi.com/loty6bo1ASv0IU2ZgXXLcQbspXKn6AyISgW9ag/XfH8-1_d1h8.jpg",
        "button": "open"
      },
      {
        "vk_ref": [
          "snippet_im"
        ],
        "group_id": [],
        "hash": [
          "snippet_hash"
        ],
        "snippet_id": 29,
        "title": "Snippet name",
        "description": "Snippet description.",
        "expired_at": 1685631635,
        "image_url": "https://sun9-61.userapi.com/loty6bo1ASv0IU2ZgXXLcQbspXKn6AyISgW9ag/XfH8-1_d1h8.jpg",
        "button": "open"
      }
    ]
  }
}
```

## Типы ключа

`secure`
