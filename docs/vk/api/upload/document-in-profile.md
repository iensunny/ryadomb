# Интеграция | Публикации | Загрузка файлов | Документ

> Источник: [https://dev.vk.ru/ru/api/upload/document-in-profile](https://dev.vk.ru/ru/api/upload/document-in-profile)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Документ'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка документов

Допустимые форматы: любые, кроме MP3.

Ограничения: файл размером не более 4 Гбайт.

## Получение адреса

Чтобы получить адрес для загрузки документа, вызовите один из следующих методов:

* [`docs.getUploadServer`](method/docs.getUploadServer) — для загрузки документа в раздел [Файлы](https://vk.ru/docs).
* [`docs.getWallUploadServer`](method/docs.getWallUploadServer) — для загрузки документа на стену.
* [`docs.getMessagesUploadServer`](method/docs.getMessagesUploadServer) — для загрузки документа в личное сообщение.

Если вы хотите загрузить документ в сообщество, передайте идентификатор сообщества в параметре `group_id`.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/docs.getUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "upload_url":"https:\/\/pu.vk.ru\/c240331\/upload_doc.php?act=add_doc&mid=743784474&aid=0&gid=0&type=0&hash=ae6f11219f2e21f9ad7825b1739141b3&rhash=69c202cbb175d33099a56d8aaf42f369&api=1"
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
  -F 'file=@<ПОЛНЫЙ_ПУТЬ_К_ДОКУМЕНТУ>'
```

:::note
**Примечание.** Чтобы отправить корректный запрос, удалите экранирование (символ `\`) из параметра `upload_url`. 
:::

Пример запроса:

```bash
curl -X POST 'https://pu.vk.ru/c240331/upload_doc.php?act=add_doc&mid=743784474&aid=0&gid=0&type=0&hash=ae6f11219f2e21f9ad7825b1739141b3&rhash=69c202cbb175d33099a56d8aaf42f369&api=1' \
  -F 'file=@/Users/persik/Downloads/document.pdf'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `file` | `string` | Информация о загруженном файле. |

Пример ответа:

```JSON
{
  "file":"743784474|0|0|240331|e24cd4aa3c|pdf|14854|\u041f\u0435\u0440\u0432\u044b\u0435 \u0448\u0430\u0433\u0438.pdf|00a3fc6e249ee1196593627b888e2187|8775d2ed941fb21e014f14ede3d61a9c||||eyJkaXNrIjozfQ=="
}
```

## Сохранение результата

Чтобы сохранить документ в профиле, вызовите метод [`docs.save`](method/docs.save) с параметрами, полученными на предыдущем этапе.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/docs.save' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'file=743784474|0|0|240331|e24cd4aa3c|pdf|14854|\u041f\u0435\u0440\u0432\u044b\u0435 \u0448\u0430\u0433\u0438.pdf|00a3fc6e249ee1196593627b888e2187|8775d2ed941fb21e014f14ede3d61a9c||||eyJkaXNrIjozfQ==' \
  -F 'v=:version'
```

### Ответ

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
      "url":"https:\/\/vk.ru\/doc743784474_657626222?hash=jWHXvoUCYCxklaOiBsI0bZRACXzH6CiauvHlkgrIjYg&dl=G42DGNZYGQ2DONA:1674050872:7rxkHS8nSaTa5C0DkRfjpZZagKIs1Z3lKnPABTOqr4P&api=1&no_preview=1"
    }
  }
}
```
