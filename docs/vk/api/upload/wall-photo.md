# Интеграция | Публикации | Загрузка файлов | Фотография на стене

> Источник: [https://dev.vk.ru/ru/api/upload/wall-photo](https://dev.vk.ru/ru/api/upload/wall-photo)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Фотография на стене'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка фотографии на стену

Допустимые форматы: JPG, PNG, GIF.

Ограничения:

* Сумма высоты и ширины не более 14&nbsp;000 пикселей.
* Файл объёмом не более 50 Мбайт.
* Соотношение сторон не менее 1:20.

## Получение адреса

Чтобы получить адрес для загрузки фотографий, вызовите метод [`photos.getWallUploadServer`](method/photos.getWallUploadServer). Чтобы загрузить фотографии в сообщество, передайте идентификатор сообщества в параметр `group_id`.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.getWallUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "album_id":-14,
    "upload_url":"https://pu.vk.ru/c856312/ss2152/upload.php?act=do_add&mid=743784474&aid=-14&gid=0&hash=bd9a7f37b8af6c5e486a3762a4c7b797&rhash=f4c2595ded6f9b3e8954567d4f8eae57&swfupload=1&api=1&wallphoto=1",
    "user_id":743784474
  }
}
```

## Передача файла

### Запрос

Чтобы передать файлы, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поле `photo`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'photo=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ>'
```

Пример запроса:

```bash
curl -X POST 'https://pu.vk.ru/c856312/ss2152/upload.php?act=do_add&mid=743784474&aid=-14&gid=0&hash=bd9a7f37b8af6c5e486a3762a4c7b797&rhash=f4c2595ded6f9b3e8954567d4f8eae57&swfupload=1&api=1&wallphoto=1' \
  -F 'photo=@/Users/persik/Downloads/image1.png'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `server` | `integer` | Идентификатор сервера, на который загружена фотография. |
| `photo` | `string` | Информация о загруженной фотографии. |
| `hash` | `string` | Хеш фотографии. |

Пример ответа:

```JSON
{
  "server":856312,
  "photo":"[{\"markers_restarted\":true,\"photo\":\"6f26a6640b:w\",\"sizes\":[],\"latitude\":0,\"longitude\":0,\"kid\":\"63339bce9aa7110b118709d208f4f605\",\"sizes2\":[[\"s\",\"2add5013f7754c299ab8a82feb770e16e73ff5d67439ed1820474860\",\"2129619355609328496\",75,50],[\"m\",\"b23c209c985e0f4ffca15c5abd21bb7cba137946ec3a11fe6cff5c9d\",\"5767933162426607538\",130,87],[\"x\",\"04868026d9254bcf4a402124e7ef6e5b7bd0312f53a78208167c1c89\",\"1836715946620368080\",604,402],[\"y\",\"ddd8c63186e17af5eb4de3b02de9dc2f42be4b89ed36e99abbb81db3\",\"-8106346636591198507\",807,537],[\"z\",\"af6a717ae652c2858fef12f171178f22a2f9817c4583f34fd3327b6c\",\"5165692545765098352\",1280,852],[\"w\",\"951f921c6dfe22c4de86002ca3b1dae72a5ac673aa0f9407c5568f1f\",\"214067105432119310\",2560,1704],[\"o\",\"b23c209c985e0f4ffca15c5abd21bb7cba137946ec3a11fe6cff5c9d\",\"5767933162426607538\",130,87],[\"p\",\"f912eaeeeb9481fab7d7860be47d7a433d4273b76a51170d89798647\",\"2018859473035497903\",200,133],[\"q\",\"3d6c4f533c2755d245b475cfa14530a001e082d079516b68c1e0917c\",\"518168793222376976\",320,213],[\"r\",\"93206b7bcf58758e6f52a3922044e81100941f75f1ab6d401f5b43a6\",\"-2533475692996171233\",510,340]],\"urls\":[],\"urls2\":[\"Kt1QE_d1TCmauKgv63cOFuc_9dZ0Oe0YIEdIYA/cOvjTYXtjR0.jpg\",\"sjwgnJheD0_8oVxavSG7fLoTeUbsOhH-bP9cnQ/sieiwqbQC1A.jpg\",\"BIaAJtklS89KQCEk5-9uW3vQMS9Tp4IIFnwciQ/0DSaD2xTfRk.jpg\",\"3djGMYbhevXrTeOwLencL0K-S4ntNumau7gdsw/1Y7M6654gI8.jpg\",\"r2pxeuZSwoWP7xLxcRePIqL5gXxFg_NP0zJ7bA/cEM2WQA6sEc.jpg\",\"lR-SHG3-IsTehgAso7Ha5ypaxnOqD5QHxVaPHw/Dqhg8eWE-AI.jpg\",\"sjwgnJheD0_8oVxavSG7fLoTeUbsOhH-bP9cnQ/sieiwqbQC1A.jpg\",\"-RLq7uuUgfq314YL5H16Qz1Cc7dqURcNiXmGRw/r5G2jf5tBBw.jpg\",\"PWxPUzwnVdJFtHXPoUUwoAHggtB5UWtoweCRfA/EG62pcXnMAc.jpg\",\"kyBre89YdY5vUqOSIEToEQCUH3Xxq21AH1tDpg/H2rgt0dJ19w.jpg\"]}]",
  "hash":"c464cfd54600df4c1f68d212bb9a09f2"
}
```

## Сохранение результата на сервере

Чтобы сохранить фотографию на стене, вызовите метод [`photos.saveWallPhoto`](method/photos.saveWallPhoto) с параметрами, полученными на предыдущем этапе.

:::note
**Примечание.** На этом этапе фотография сохранится в системный альбом. Чтобы опубликовать её, выполните инструкции этапа [Публикация фотографии](#Публикация%20фотографии).
:::

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.saveWallPhoto' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'photo=[{"markers_restarted":true,"photo":"6f26a6640b:w","sizes":[],"latitude":0,"longitude":0,"kid":"63339bce9aa7110b118709d208f4f605","sizes2":[["s","2add5013f7754c299ab8a82feb770e16e73ff5d67439ed1820474860","2129619355609328496",75,50],["m","b23c209c985e0f4ffca15c5abd21bb7cba137946ec3a11fe6cff5c9d","5767933162426607538",130,87],["x","04868026d9254bcf4a402124e7ef6e5b7bd0312f53a78208167c1c89","1836715946620368080",604,402],["y","ddd8c63186e17af5eb4de3b02de9dc2f42be4b89ed36e99abbb81db3","-8106346636591198507",807,537],["z","af6a717ae652c2858fef12f171178f22a2f9817c4583f34fd3327b6c","5165692545765098352",1280,852],["w","951f921c6dfe22c4de86002ca3b1dae72a5ac673aa0f9407c5568f1f","214067105432119310",2560,1704],["o","b23c209c985e0f4ffca15c5abd21bb7cba137946ec3a11fe6cff5c9d","5767933162426607538",130,87],["p","f912eaeeeb9481fab7d7860be47d7a433d4273b76a51170d89798647","2018859473035497903",200,133],["q","3d6c4f533c2755d245b475cfa14530a001e082d079516b68c1e0917c","518168793222376976",320,213],["r","93206b7bcf58758e6f52a3922044e81100941f75f1ab6d401f5b43a6","-2533475692996171233",510,340]],"urls":[],"urls2":["Kt1QE_d1TCmauKgv63cOFuc_9dZ0Oe0YIEdIYA/cOvjTYXtjR0.jpg","sjwgnJheD0_8oVxavSG7fLoTeUbsOhH-bP9cnQ/sieiwqbQC1A.jpg","BIaAJtklS89KQCEk5-9uW3vQMS9Tp4IIFnwciQ/0DSaD2xTfRk.jpg","3djGMYbhevXrTeOwLencL0K-S4ntNumau7gdsw/1Y7M6654gI8.jpg","r2pxeuZSwoWP7xLxcRePIqL5gXxFg_NP0zJ7bA/cEM2WQA6sEc.jpg","lR-SHG3-IsTehgAso7Ha5ypaxnOqD5QHxVaPHw/Dqhg8eWE-AI.jpg","sjwgnJheD0_8oVxavSG7fLoTeUbsOhH-bP9cnQ/sieiwqbQC1A.jpg","-RLq7uuUgfq314YL5H16Qz1Cc7dqURcNiXmGRw/r5G2jf5tBBw.jpg","PWxPUzwnVdJFtHXPoUUwoAHggtB5UWtoweCRfA/EG62pcXnMAc.jpg","kyBre89YdY5vUqOSIEToEQCUH3Xxq21AH1tDpg/H2rgt0dJ19w.jpg"]}]' \
  -F 'server=856312' \
  -F 'hash=c464cfd54600df4c1f68d212bb9a09f2' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":[
    {
      "album_id":-14,
      "date":1673529541,
      "id":457239026,
      "owner_id":743784474,
      "access_key":"45cdb4e3d461f8842b",
      "sizes":[
        {
          "height":50,
          "type":"s",
          "width":75,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/CRMz1CF_yXYlm_xJ7Ks2UGAjqNPS-GM07DOJvqf1cqP-Ah53dOnZbYsv7dHM4TeXpeuHzoemVmL_SWGSgVbZIOmE.jpg?size=75x50&quality=96&type=album"
        },
        {
          "height":87,
          "type":"m",
          "width":130,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/UXbrjKZm-33abaaLtEyIJn4nW4qdoOE3HjgnvR8sPXDWkD9sdzsx-J39RCMOAGCnPxpaEXecsDodtYMWZg-o3qNV.jpg?size=130x87&quality=96&type=album"
        },
        {
          "height":402,
          "type":"x",
          "width":604,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/Zvm8PMhCfyn68OQWXzFKK_sXHMcSS1ITUFyZb1CF_JlHCrVLYYoSl2BQlHhbt4b04khyYShSBj_PEkkHbS_FBfDy.jpg?size=604x402&quality=96&type=album"
        },
        {
          "height":537,
          "type":"y",
          "width":807,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/TUQ1BtADAo1Wh52JbPebvC_EQmkTzRRMgQ9TF5OhPZJgGXZvNHJmyPxpH4DzK_cAwcF4xaVcxwtqyoUhioE44MxU.jpg?size=807x537&quality=96&type=album"
        },
        {
          "height":852,
          "type":"z",
          "width":1280,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/EUkoEE-VjELh7nNrMI0cR0CvCwmb90LOZqhPuL3cTwXv5xIogHue37gDohU0fgjxbB9i7jQRS9chVCoNsH0oUbCl.jpg?size=1280x852&quality=96&type=album"
        },
        {
          "height":1704,
          "type":"w",
          "width":2560,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/ehuYZA6huTQHsSxQhqtWkZVOXbWksPPomgY8LBhGZ_CoYQSlw7Eegln3BLOumULu16navFECQottf9-tJdZwM1M9.jpg?size=2560x1704&quality=96&type=album"
        },
        {
          "height":87,
          "type":"o",
          "width":130,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/UXbrjKZm-33abaaLtEyIJn4nW4qdoOE3HjgnvR8sPXDWkD9sdzsx-J39RCMOAGCnPxpaEXecsDodtYMWZg-o3qNV.jpg?size=130x87&quality=96&type=album"
        },
        {
          "height":133,
          "type":"p",
          "width":200,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/5XymeZnsqufCgf-NjS1tZSktwilCLo4OvRm-KSIUoTvMWFzaUr-a42djy4VVmCs_QcvVds39JxNLQeRd1Il916Tg.jpg?size=200x133&quality=96&type=album"
        },
        {
          "height":213,
          "type":"q",
          "width":320,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/hAvemeTJAKa_Bk4-kU-edFxpx5Fm6kF3HSOKIJhH6i5NHn1bVBQSkPcIoGl43kwO_J0rUylgMl9CnB8IqHK2fD-p.jpg?size=320x213&quality=96&type=album"
        },
        {
          "height":340,
          "type":"r",
          "width":510,
          "url":"https:\/\/sun9-east.userapi.com\/sun9-74\/s\/v1\/ig2\/yV6LGUU_jrZUJsr2IPMrm_303ofB7BxsqiAjanlmFY2EJPrd94Gp-R4z4m4kYrkszA8uuAj-aSFfJDE4HAHyY9_V.jpg?size=510x340&quality=96&crop=2,0,2556,1704&type=album"
        }
      ],
      "text":"",
      "has_tags":false
    }
  ]
}
```

## Публикация фотографии

Чтобы разместить фотографию на стене, вызовите метод [`wall.post`](method/wall.post). В поле `attachments` укажите идентификатор фотографии в формате `photo{owner_id}_{photo_id}`, где:

* `owner_id` — поле `owner_id` из ответа метода [`photos.saveWallPhoto`](method/photos.saveWallPhoto).
* `photo_id` — поле `id` из ответа метода [`photos.saveWallPhoto`](method/photos.saveWallPhoto).

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/wall.post' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'attachments=photo743784474_457239026' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "post_id":17
  }
}
```
