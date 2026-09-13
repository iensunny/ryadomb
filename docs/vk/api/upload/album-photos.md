# Интеграция | Публикации | Загрузка файлов | Фотография в альбоме

> Источник: [https://dev.vk.ru/ru/api/upload/album-photos](https://dev.vk.ru/ru/api/upload/album-photos)
<!-- ---
title: 'Интеграция | Публикации | Загрузка файлов | Фотография в альбоме'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Загрузка фотографий в альбом

Допустимые форматы: JPG, PNG, GIF.

Ограничения:

* Не более 5 фотографий за один запрос.
* Сумма высоты и ширины не более 14&nbsp;000 пикселей.
* Файл объёмом не более 50 Мбайт.
* Соотношение сторон не менее 1:20.

:::note
**Примечание.** Фотографии можно загрузить только в альбом, созданный пользователем.
:::

## Получение адреса

Чтобы получить адрес для загрузки фотографии, вызовите метод [`photos.getUploadServer`](method/photos.getUploadServer). Чтобы загрузить фотографии в сообщество, передайте идентификатор сообщества в параметр `group_id`.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.getUploadServer' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'album_id=289219319' \
  -F 'v=:version'
```

### Ответ

```JSON
{
  "response":{
    "album_id":289219319,
    "upload_url":"https://pu.vk.ru/c858212/ss2175/upload.php?act=do_add&mid=743784474&aid=289219319&gid=0&hash=2b15362c029abd1b95f8598aa89ec11e&rhash=6a3425cbc2da53f4dc2c3a3593f09a65&swfupload=1&api=1",
    "user_id":743784474
  }
}
```

## Передача файла

### Запрос

Чтобы передать файлы, используйте:

* Адрес `upload_url` из раздела [Получение адреса](#Получение%20адреса).
* HTTP-глагол `POST`.
* Поля `file1`, `file2`, `file3`, `file4`, `file5`.
* HTTP-формат `multipart/form-data`.

```bash
curl -X POST '<UPLOAD_URL>' \
  -F 'file1=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ_1>' \
  -F 'file2=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ_2>' \
  -F 'file3=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ_3>' \
  -F 'file4=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ_4>' \
  -F 'file5=@<ПОЛНЫЙ_ПУТЬ_К_ФОТОГРАФИИ_5>'
```

Пример запроса:

```bash
curl -X POST 'https://pu.vk.ru/c858212/ss2175/upload.php?act=do_add&mid=743784474&aid=289219319&gid=0&hash=2b15362c029abd1b95f8598aa89ec11e&rhash=6a3425cbc2da53f4dc2c3a3593f09a65&swfupload=1&api=1' \
  -F 'file1=@/Users/persik/Downloads/image1.png' \
  -F 'file2=@/Users/persik/Downloads/image2.png'
```

### Ответ

После успешной загрузки сервер возвращает JSON-объект:

| Поле | Тип | Описание |
|---|---|---|
| `server` | `integer` | Идентификатор сервера, на который загружены фотографии. |
| `photos_list` | `string` | Информация о загруженных фотографиях. |
| `aid` | `integer` | Идентификатор альбома, в который нужно загрузить фотографии. |
| `hash` | `string` | Хеш фотографий. |

Пример ответа:

```JSON
{
  "server":858212,
  "photos_list":"[{\"markers_restarted\":true,\"photo\":\"d3ce14b007:w\",\"sizes\":[],\"latitude\":0,\"longitude\":0,\"kid\":\"63339bce9aa7110b118709d208f4f605\",\"sizes2\":[[\"s\",\"2169b25ce7ab50db8883a22c2f01f10e3b14030beca59a61e5184e40\",\"-8077041814521722093\",75,50],[\"m\",\"532f75fa48381e7c22ac2208fd0dc09585fca2e7c7af8fe73e51ad10\",\"2481357305209911761\",130,87],[\"x\",\"04ec4c4702bcaed3a751c1be7cecdfac77707c1fb6baba086f75ba69\",\"7060873775304692609\",604,402],[\"y\",\"735b15dc188c8d9f7665e63d10d65f709d5c2c5fcc7c1cf4235887dc\",\"-247552755041223595\",807,537],[\"z\",\"69dd5cf636aed29fb13f019924fe256e4ea61465304f6a58ad687d2b\",\"-5038604692102399322\",1280,852],[\"w\",\"8772eaa43776efbc784d0ffa0459eb78f498958302859a574c815b7e\",\"22189486849580549\",2560,1704],[\"o\",\"532f75fa48381e7c22ac2208fd0dc09585fca2e7c7af8fe73e51ad10\",\"2481357305209911761\",130,87],[\"p\",\"b272a37f1d0e68a1041b1e530f021de86de255f0668c086fe8207c75\",\"-3609630020141000359\",200,133],[\"q\",\"61208ee4d94149963f6d7db4e0ae2e3a6bdde6fef60e5a81c7e76081\",\"-4859686797456740524\",320,213],[\"r\",\"e0a963afe97cb480055bdce5cfcb756c15a0e86af7b461eba0db05d0\",\"4955764010854965486\",510,340]],\"urls\":[],\"urls2\":[\"IWmyXOerUNuIg6IsLwHxDjsUAwvspZph5RhOQA/E8t0gUOV6I8.jpg\",\"Uy91-kg4HnwirCII_Q3AlYX8oufHr4_nPlGtEA/0XnbgVKNbyI.jpg\",\"BOxMRwK8rtOnUcG-fOzfrHdwfB-2uroIb3W6aQ/gVPo3ElD_WE.jpg\",\"c1sV3BiMjZ92ZeY9ENZfcJ1cLF_MfBz0I1iH3A/VTyZtBSEkPw.jpg\",\"ad1c9jau0p-xPwGZJP4lbk6mFGUwT2pYrWh9Kw/prqea7pHE7o.jpg\",\"h3LqpDd277x4TQ_6BFnrePSYlYMChZpXTIFbfg/Bd5qgTjVTgA.jpg\",\"Uy91-kg4HnwirCII_Q3AlYX8oufHr4_nPlGtEA/0XnbgVKNbyI.jpg\",\"snKjfx0OaKEEGx5TDwId6G3iVfBmjAhv6CB8dQ/WdnoDp8E6M0.jpg\",\"YSCO5NlBSZY_bX204K4uOmvd5v72DlqBx-dggQ/VG_v_Zrsjrw.jpg\",\"4Kljr-l8tIAFW9zlz8t1bBWg6Gr3tGHroNsF0A/7uCscRxpxkQ.jpg\"]},{\"markers_restarted\":true,\"photo\":\"ae3960c7da:z\",\"sizes\":[],\"latitude\":0,\"longitude\":0,\"kid\":\"63139d2c322cee9fffa532bdf72918a5\",\"sizes2\":[[\"s\",\"fe7b8e670afb1b1f452ec8ba0437b43c984f0d32217d8afb0b814083\",\"8596726720925214223\",75,50],[\"m\",\"6725b438a3f1ff5bb06fc0de71d1bd5e3a541f6a04c924e324675df7\",\"8285878749893723301\",130,87],[\"x\",\"726048c48bf9640134a59e8cfc09c7597ef8c7557d825560399b8f7b\",\"3627062493533479513\",604,402],[\"y\",\"4ab2acf5cfb9b03ea20d0662b9de45d6256b91980c62217694833ca9\",\"-7358470795435404545\",807,537],[\"z\",\"6db162e6edc957368386c30f9f4811d161a792a29a8907b91eaa20b8\",\"3911130855754440686\",1280,852],[\"o\",\"6725b438a3f1ff5bb06fc0de71d1bd5e3a541f6a04c924e324675df7\",\"8285878749893723301\",130,87],[\"p\",\"530d5916af66d7f1366844bce790842d0558c9ff7a79e18604c0f8b7\",\"1938500131598636504\",200,133],[\"q\",\"29e9c56e43345c4c35cd0262733be5779ec36ca950d80e68746c562e\",\"4318850909718385734\",320,213],[\"r\",\"e52ffe8787c9dde37429dcb6e966e8c3352fb4ed9cf69ad090e42546\",\"-2301039628972905089\",510,340]],\"urls\":[],\"urls2\":[\"_nuOZwr7Gx9FLsi6BDe0PJhPDTIhfYr7C4FAgw/Dybbv2e1TXc.jpg\",\"ZyW0OKPx_1uwb8DecdG9XjpUH2oEySTjJGdd9w/pYRfk9Ja_XI.jpg\",\"cmBIxIv5ZAE0pZ6M_AnHWX74x1V9glVgOZuPew/WaI08R7qVTI.jpg\",\"SrKs9c-5sD6iDQZiud5F1iVrkZgMYiF2lIM8qQ/_5L8Y8x14Zk.jpg\",\"bbFi5u3JVzaDhsMPn0gR0WGnkqKaiQe5HqoguA/7h9Qj8ogRzY.jpg\",\"ZyW0OKPx_1uwb8DecdG9XjpUH2oEySTjJGdd9w/pYRfk9Ja_XI.jpg\",\"Uw1ZFq9m1_E2aES855CELQVYyf96eeGGBMD4tw/2BX8XJnv5ho.jpg\",\"KenFbkM0XEw1zQJiczvld57DbKlQ2A5odGxWLg/RhSjJwWk7zs.jpg\",\"5S_-h4fJ3eN0Kdy26WbowzUvtO2c9prQkOQlRg/fy35HKYQEeA.jpg\"]}]",
  "aid":289219319,
  "hash":"588f4ab4ed68d406493b4799145ce7ca"
}
```

## Сохранение результата

Чтобы сохранить фотографию в альбоме, вызовите метод [`photos.save`](method/photos.save) с параметрами, полученными на предыдущем шаге.

### Запрос

```bash
curl -X POST 'https://api.vk.ru/method/photos.save' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'album_id=289219319' \
  -F 'server=858212' \
  -F 'photos_list=[{"markers_restarted":true,"photo":"d3ce14b007:w","sizes":[],"latitude":0,"longitude":0,"kid":"63339bce9aa7110b118709d208f4f605","sizes2":[["s","2169b25ce7ab50db8883a22c2f01f10e3b14030beca59a61e5184e40","-8077041814521722093",75,50],["m","532f75fa48381e7c22ac2208fd0dc09585fca2e7c7af8fe73e51ad10","2481357305209911761",130,87],["x","04ec4c4702bcaed3a751c1be7cecdfac77707c1fb6baba086f75ba69","7060873775304692609",604,402],["y","735b15dc188c8d9f7665e63d10d65f709d5c2c5fcc7c1cf4235887dc","-247552755041223595",807,537],["z","69dd5cf636aed29fb13f019924fe256e4ea61465304f6a58ad687d2b","-5038604692102399322",1280,852],["w","8772eaa43776efbc784d0ffa0459eb78f498958302859a574c815b7e","22189486849580549",2560,1704],["o","532f75fa48381e7c22ac2208fd0dc09585fca2e7c7af8fe73e51ad10","2481357305209911761",130,87],["p","b272a37f1d0e68a1041b1e530f021de86de255f0668c086fe8207c75","-3609630020141000359",200,133],["q","61208ee4d94149963f6d7db4e0ae2e3a6bdde6fef60e5a81c7e76081","-4859686797456740524",320,213],["r","e0a963afe97cb480055bdce5cfcb756c15a0e86af7b461eba0db05d0","4955764010854965486",510,340]],"urls":[],"urls2":["IWmyXOerUNuIg6IsLwHxDjsUAwvspZph5RhOQA/E8t0gUOV6I8.jpg","Uy91-kg4HnwirCII_Q3AlYX8oufHr4_nPlGtEA/0XnbgVKNbyI.jpg","BOxMRwK8rtOnUcG-fOzfrHdwfB-2uroIb3W6aQ/gVPo3ElD_WE.jpg","c1sV3BiMjZ92ZeY9ENZfcJ1cLF_MfBz0I1iH3A/VTyZtBSEkPw.jpg","ad1c9jau0p-xPwGZJP4lbk6mFGUwT2pYrWh9Kw/prqea7pHE7o.jpg","h3LqpDd277x4TQ_6BFnrePSYlYMChZpXTIFbfg/Bd5qgTjVTgA.jpg","Uy91-kg4HnwirCII_Q3AlYX8oufHr4_nPlGtEA/0XnbgVKNbyI.jpg","snKjfx0OaKEEGx5TDwId6G3iVfBmjAhv6CB8dQ/WdnoDp8E6M0.jpg","YSCO5NlBSZY_bX204K4uOmvd5v72DlqBx-dggQ/VG_v_Zrsjrw.jpg","4Kljr-l8tIAFW9zlz8t1bBWg6Gr3tGHroNsF0A/7uCscRxpxkQ.jpg"]},{"markers_restarted":true,"photo":"ae3960c7da:z","sizes":[],"latitude":0,"longitude":0,"kid":"63139d2c322cee9fffa532bdf72918a5","sizes2":[["s","fe7b8e670afb1b1f452ec8ba0437b43c984f0d32217d8afb0b814083","8596726720925214223",75,50],["m","6725b438a3f1ff5bb06fc0de71d1bd5e3a541f6a04c924e324675df7","8285878749893723301",130,87],["x","726048c48bf9640134a59e8cfc09c7597ef8c7557d825560399b8f7b","3627062493533479513",604,402],["y","4ab2acf5cfb9b03ea20d0662b9de45d6256b91980c62217694833ca9","-7358470795435404545",807,537],["z","6db162e6edc957368386c30f9f4811d161a792a29a8907b91eaa20b8","3911130855754440686",1280,852],["o","6725b438a3f1ff5bb06fc0de71d1bd5e3a541f6a04c924e324675df7","8285878749893723301",130,87],["p","530d5916af66d7f1366844bce790842d0558c9ff7a79e18604c0f8b7","1938500131598636504",200,133],["q","29e9c56e43345c4c35cd0262733be5779ec36ca950d80e68746c562e","4318850909718385734",320,213],["r","e52ffe8787c9dde37429dcb6e966e8c3352fb4ed9cf69ad090e42546","-2301039628972905089",510,340]],"urls":[],"urls2":["_nuOZwr7Gx9FLsi6BDe0PJhPDTIhfYr7C4FAgw/Dybbv2e1TXc.jpg","ZyW0OKPx_1uwb8DecdG9XjpUH2oEySTjJGdd9w/pYRfk9Ja_XI.jpg","cmBIxIv5ZAE0pZ6M_AnHWX74x1V9glVgOZuPew/WaI08R7qVTI.jpg","SrKs9c-5sD6iDQZiud5F1iVrkZgMYiF2lIM8qQ/_5L8Y8x14Zk.jpg","bbFi5u3JVzaDhsMPn0gR0WGnkqKaiQe5HqoguA/7h9Qj8ogRzY.jpg","ZyW0OKPx_1uwb8DecdG9XjpUH2oEySTjJGdd9w/pYRfk9Ja_XI.jpg","Uw1ZFq9m1_E2aES855CELQVYyf96eeGGBMD4tw/2BX8XJnv5ho.jpg","KenFbkM0XEw1zQJiczvld57DbKlQ2A5odGxWLg/RhSjJwWk7zs.jpg","5S_-h4fJ3eN0Kdy26WbowzUvtO2c9prQkOQlRg/fy35HKYQEeA.jpg"]}]' \
  -F 'hash=588f4ab4ed68d406493b4799145ce7ca' \
  -F 'v=:version' 
```

### Ответ

```JSON
{
  "response":[
    {
      "album_id":289219319,
      "date":1673516629,
      "id":457239023,
      "owner_id":743784474,
      "sizes":[{"height":50,"type":"s","width":75,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/Vus7E6r8jZjgv5E9bnuM6fbvL9U_NP4-goegNOaEy8t4Z1DnzofjER9exwblecB6Hxb3EUbWv7lQvxdRaErZGoT3.jpg?size=75x50&quality=96&type=album"},{"height":87,"type":"m","width":130,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/JTtJ-M4Y1Md4nbNyY6QNKBjs9xleCGkDwGw-NuMvLV0DKfQrPb_xN7QcfazSTrBcZ-_JzsJ21pTuLI7Slr8m9HcB.jpg?size=130x87&quality=96&type=album"},{"height":402,"type":"x","width":604,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/2DBzUBeOMpydPcypQFkirgj6g9mzsj8le0qsrWQ_lPX3zNQN1229bLivxf26ya-91HF9D57exLSnkSnJwUxJdUBN.jpg?size=604x402&quality=96&type=album"},{"height":537,"type":"y","width":807,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/Biye5eNVG4UA_ymuN60MU6Qp26yO7rYp0WB-ch55oxkaATpXs4Kmqqznz1keCYHg_BHyvPhyrSGyK3zRK29LoVKH.jpg?size=807x537&quality=96&type=album"},{"height":852,"type":"z","width":1280,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/O-BkqGyWMw2ZKcOyYz8sH543Ihkws7mAn6x76JYh0mVW2MCR9x9eig_AS6gT6OLeySlvewx5oyri1Ejj0uNhJuKo.jpg?size=1280x852&quality=96&type=album"},{"height":1704,"type":"w","width":2560,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/o5klH0kpqicWBkDGQl_ch2j8VRpW69xrnq_PXw823wrMYc2qnXQLuDZeECtcKSaka1gfCpP9smoz7XwGAMDTk7vo.jpg?size=2560x1704&quality=96&type=album"},{"height":87,"type":"o","width":130,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/JTtJ-M4Y1Md4nbNyY6QNKBjs9xleCGkDwGw-NuMvLV0DKfQrPb_xN7QcfazSTrBcZ-_JzsJ21pTuLI7Slr8m9HcB.jpg?size=130x87&quality=96&type=album"},{"height":133,"type":"p","width":200,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/dFvcZ_sYZeMJtmvotINsevf_0x4KbDxo-jcrZojRQtebIKvM0juMU9U9NjybaidOukkrImr2CWcW8u6IHdlceWKD.jpg?size=200x133&quality=96&type=album"},{"height":213,"type":"q","width":320,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/GglL_Kv0x1_rnPwXwtTPZUMFg9sT_JB9xUSUeNvNIRapPRhGvQbQAaCwD57WBhUKU8sPD6-BhyadPIXaALqERkS1.jpg?size=320x213&quality=96&type=album"},{"height":340,"type":"r","width":510,"url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/LnQwirb-SUb689R2k90Q8MwuwHJ0tfO03a0IkCeXObaQERRE2-UUyLBCTTLme2qkLcxXAekHVbkLMEZhRq5E6Ggr.jpg?size=510x340&quality=96&crop=2,0,2556,1704&type=album"}],
      "text":"",
      "has_tags":false
    },
    {
      "album_id":289219319,
      "date":1673516629,
      "id":457239024,
      "owner_id":743784474,
      "sizes":[{"height":50,"type":"s","width":75,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/9iXNb21V-yQsaZBicg1N0z0XocIRGvInbbKpsTYbZjWQXrY7V8f-qC-lxWkg2WpOqlHBbPdx6ZgDGwexGY9Wtbxh.jpg?size=75x50&quality=96&type=album"},{"height":87,"type":"m","width":130,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/Ze8oL0C3fM111DFsEWOWx8kYLM4sz_s8BZ_npYq78ZV73SI0uAwXD54ZjmDDhmaeM5H-4tIISwYK855caqQXHR0n.jpg?size=130x87&quality=96&type=album"},{"height":402,"type":"x","width":604,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/wbHqCY0LaxSc67ehhkAo5sYBJihMfO_blh-PgXLWr4Pfl7Q43RoH-_zxHNDKXRJGpwQh55uvXfsqREWNMKI_SYO6.jpg?size=604x402&quality=96&type=album"},{"height":537,"type":"y","width":807,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/3aR73JKN8bsXm_FFbJRcK3eF2FXad_5ERG04VTK1Sg0ZYLX78qWSGWb49P_wcCj8Zkq10vnXD35JO7zEdpokB9Ck.jpg?size=807x537&quality=96&type=album"},{"height":852,"type":"z","width":1280,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/AE8nM7bFL88OaGKjf4meg5qvToTpSlM8qHzVZm5hYFqhawTeuob4t2HxXpzkrng5h4XYsdceRM-gyj9KpoADzyqu.jpg?size=1280x852&quality=96&type=album"},{"height":87,"type":"o","width":130,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/Ze8oL0C3fM111DFsEWOWx8kYLM4sz_s8BZ_npYq78ZV73SI0uAwXD54ZjmDDhmaeM5H-4tIISwYK855caqQXHR0n.jpg?size=130x87&quality=96&type=album"},{"height":133,"type":"p","width":200,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/TbxeKi7RAKgz-ibTbk1CkJ1RcccFfqwUUhizw_Ag_7RDN05RwUs0gEId0GtouAgMjBVp2lmLu_K4ZClrqGl0tLuC.jpg?size=200x133&quality=96&type=album"},{"height":213,"type":"q","width":320,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/1g1vG_UzCZA99QbmZpJNBjL2k2euLKEtQioPFH6lG2lx9W8E8s6mOY5EJ7EKzoaDP54XLZzrlQ0jWSCPR5ijalJb.jpg?size=320x213&quality=96&type=album"},{"height":340,"type":"r","width":510,"url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/dR8G1in8DBttlU0d1Y9iiOlH9r7O1IDzmkMmBSxRNHc6yTmTeH8byNfEui9VWpaZIGF_DgmTPcGLoj_wSXwmH8_s.jpg?size=510x340&quality=96&crop=1,0,1278,852&type=album"}],
      "text":"",
      "has_tags":false
    }
  ]
}
```
