# Интеграция | Публикации | Загрузка файлов | Аудиосообщение

> Источник: [https://dev.vk.ru/ru/api/upload/audio-record](https://dev.vk.ru/ru/api/upload/audio-record)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Аудиосообщение'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка аудиосообщения

Допустимые форматы: OGG, OPUS.

Ограничения:

* Частота дискретизации — 16 кГц.
* Битрейт — 16 Кбит/с.
* Длительность — не более 60 минут.

## Получение адреса

Чтобы получить адрес для загрузки аудиосообщения, вызовите метод [`docs.getMessagesUploadServer`](method/docs.getMessagesUploadServer) с параметром `type=audio_message`.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/docs.getMessagesUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'type=audio_message' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.ru\/c874331\/upload.php?act=add_doc_new&mid=743784474&aid=-1&gid=0&type=audio_message&peer_id=0&rhash=682834f793150106905f817ed71df436&api=1&server=874331&_origin=https%3A%2F%2Fapi.vk.ru&_sig=3a261f2a2d74202814e5c580f59c0238"
  }
}
```

## Передача файла

### Запрос

Чтобы передать файл, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `file`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'file=@<ПОЛНЫЙ_ПУТЬ_К_АУДИОЗАПИСИ>'
```

:::note
**Примечание.** Чтобы отправить корректный запрос, удалите экранирование (символ `\`) из параметра `upload_url`. 
:::

Пример запроса:

```bash
curl -X POST 'https://pu.vk.ru/gu-s/photo/v2/bulk_upload?token=eyJ0eXAiOiJKV1...6KmDD2CcXgZhimJYj5kE' \
  -F 'file1=@C:/path/file-name1.png' \
  -F 'file2=@C:/path/file-name2.png' \
  -F 'file3=@C:/path/file-name3.png'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `file` | `string` | Информация о загруженном аудиосообщении. |

Пример ответа:

```JSON
{
  "file":"743784474|0|-1|874331|3ee14eeae1|ogg|7363|Record.opus|1df3c44693e06afe0b6018165d885f54|8868cd7c3d7b92f2eb0049617b0fb283||||eyJkaXNrIjo1NywiYXVkaW9fbXNnIjp7ImR1cmF0aW9uIjozLjk3MDAwMDAwMDAwMDAwMDIsIndhdmVmb3JtIjoiMzI6MDAxcDExMTExMTEwMDEwMTExMTExMTEwMnZxMjEyMjAwZGlkNDIwMDViOTk4OTg3Njg1OWhtMzEwMWRhNTMxMjMyaGltbGlqaGVkZGJjZGQ0MTAwMDAwYmhoNDAxN2E4MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAifX0="
}
```

## Сохранение результата

Чтобы сохранить аудиосообщение в профиле, вызовите метод [`docs.save`](method/docs.save) с параметрами, полученными на предыдущем этапе.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/docs.save' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'file=743784474|0|-1|874331|3ee14eeae1|ogg|7363|Record.opus|1df3c44693e06afe0b6018165d885f54|8868cd7c3d7b92f2eb0049617b0fb283||||eyJkaXNrIjo1NywiYXVkaW9fbXNnIjp7ImR1cmF0aW9uIjozLjk3MDAwMDAwMDAwMDAwMDIsIndhdmVmb3JtIjoiMzI6MDAxcDExMTExMTEwMDEwMTExMTExMTEwMnZxMjEyMjAwZGlkNDIwMDViOTk4OTg3Njg1OWhtMzEwMWRhNTMxMjMyaGltbGlqaGVkZGJjZGQ0MTAwMDAwYmhoNDAxN2E4MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAifX0=' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "type":"audio_message",
    "audio_message":{
      "duration":3,
      "id":657681015,
      "link_mp3":"https:\/\/psv4.userapi.com\/s\/v1\/amsg\/5_mCzdAdRsTNVEB-Zk2D12FJWIgiYYnQucn-l57Jclnl_JWE2tm-41wj09t4xdLZczjO.mp3",
      "link_ogg":"https:\/\/psv4.userapi.com\/s\/v1\/amsg\/LAFdzsfuUVIGQU_Ei4yMUTBj0Cl8J-Kx5rsx5pHwQoa3alTzTbSmzcmni5NxojoCVDLT.ogg",
      "owner_id":743784474,
      "access_key":"WsNUBysg38aIGjYD6zRxicVDfAEhPkfNw01mVfEhJ8P",
      "waveform":[0,0,1,25,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,2,31,26,2,1,2,2,0,0,13,18,13,4,2,0,0,5,11,9,9,8,9,8,7,6,8,5,9,17,22,3,1,0,1,13,10,5,3,1,2,3,2,17,18,22,21,18,19,17,14,13,13,11,12,13,13,4,1,0,0,0,0,0,11,17,17,4,0,1,7,10,8,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
  }
}
```

## Публикация аудиозаписи

Чтобы опубликовать аудиосообщение, используйте метод [`messages.send`](method/messages.send) с параметром `attachment`.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/messages.send' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'user_id=743784474' \
  -F 'random_id=12345678' \
  -F 'attachment=audio_message743784474_657681015' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":7
}
```
