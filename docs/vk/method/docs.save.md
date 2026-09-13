# docs.save

> Источник: [https://dev.vk.ru/ru/method/docs.save](https://dev.vk.ru/ru/method/docs.save)
Метод сохраняет файл после его успешной [загрузки на сервер](api/upload/document-in-profile).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `file` | `string` | да | **Обязательный параметр.** Файл в формате `multipart/form-data`. Параметр возвращается в результате [загрузки файла на сервер](api/upload/document-in-profile). |
| `title` | `string` | нет | Название файла. |
| `tags` | `string` | нет | Метки для поиска, которые будут добавлены к документу. |
| `return_tags` | `checkbox` | нет | `1` — добавить в ответ массив меток документа. |

## Результат

Метод возвращает объект:

| Поле | Тип | Описание |
|---|---|---|
| `type` | `string` | Тип файла. |
| `audio_message` | `object` | Объект [голосового сообщения](reference/objects/audio-message). |
| `doc` | `object` | Объект [других типов файлов](reference/objects/doc). |

Пример ответа:

```JSON
{
  "response":{
    "type":"doc",
    "doc":{
      "id":657626222,
      "owner_id":743784474,
      "title":"\\u041f\\u0435\\u0440\\u0432\\u044b\\u0435 \\u0448\\u0430\\u0433\\u0438.pdf",
      "size":14854,
      "ext":"pdf",
      "date":1674050872,"type":1,
      "url":"https:\/\/vk.com\/doc743784474_657626222?hash=jWHXvoUCYCxklaOiBsI0bZRACXzH6CiauvHlkgrIjYg&dl=G42DGNZYGQ2DONA:1674050872:7rxkHS8nSaTa5C0DkRfjpZZagKIs1Z3lKnPABTOqr4P&api=1&no_preview=1"
    }
  }
}
```

## Типы ключа

`group_access`

## Ошибки

- 105
