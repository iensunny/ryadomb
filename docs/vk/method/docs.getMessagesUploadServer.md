# docs.getMessagesUploadServer

> Источник: [https://dev.vk.ru/ru/method/docs.getMessagesUploadServer](https://dev.vk.ru/ru/method/docs.getMessagesUploadServer)
Метод получает адрес сервера для [загрузки файла](api/upload/document-in-profile) в личное сообщение.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `type` | `string` | нет | **Необязательный параметр.** Тип файла. Возможные значения:<br>* `doc` — обычный файл.<br>* `audio_message` — голосовое сообщение. |
| `peer_id` | `string` | нет | **Необязательный параметр.** Идентификатор назначения. Возможные значения:<br>* Для пользователя: `{ИДЕНТИФИКАТОР_ПОЛЬЗОВАТЕЛЯ}`.<br>* Для групповой беседы: `2000000000 + {ИДЕНТИФИКАТОР_БЕСЕДЫ}`.<br>* Для сообщества: `-{ИДЕНТИФИКАТОР_СООБЩЕСТВА}`. |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
|---|---|---|
| `upload_url` | `string` | Адрес, по которому нужно загрузить файл. |

Пример ответа:

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.com\/c236331\/upload.php?act=add_doc_new&mid=743784474&aid=-1&gid=0&type=0&peer_id=0&rhash=4acca3170eeadfe8b76873d486d11962&api=1&server=236331&_origin=https%3A%2F%2Fapi.vk.com&_sig=a203dced42d9533f74c1130fa58a495f"
  }
}
```

## Права доступа

`docs`

## Типы ключа

`group_access`

## Ошибки

- 901
