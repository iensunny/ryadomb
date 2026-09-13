# photos.save

> Источник: [https://dev.vk.ru/ru/method/photos.save](https://dev.vk.ru/ru/method/photos.save)
Метод сохраняет фотографии в альбом после их успешной [загрузки на сервер](api/upload/album-photos).

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `album_id` | `integer` | нет | **Обязательный параметр.** Идентификатор альбома, в который необходимо сохранить фотографии. |
| `group_id` | `integer` | нет | **Необязательный параметр.** Идентификатор сообщества, в которое необходимо сохранить фотографии. |
| `server` | `integer` | нет | **Обязательный параметр.** Идентификатор сервера, на который загружены фотографии. Параметр возвращается в результате [загрузки фотографий на сервер](api/upload/album-photos). |
| `photos_list` | `string` | нет | **Обязательный параметр.** Фотографии в формате `multipart/form-data`. Параметр возвращается в результате [загрузки фотографий на сервер](api/upload/album-photos). |
| `hash` | `string` | нет | **Обязательный параметр.** Хеш фотографий. Параметр возвращается в результате [загрузки фотографий на сервер](api/upload/album-photos). |
| `latitude` | `string` | нет | **Необязательный параметр.** Географическая широта в градусах. Диапазон значений: от `-90` до `90`. |
| `longitude` | `string` | нет | **Необязательный параметр.** Географическая долгота в градусах. Диапазон значений: от `-180` до `180`. |
| `caption` | `string` | нет | **Необязательный параметр.** Текст описания фотографии. Максимальная количество символов — 2048. |

## Результат

Метод возвращает массив объектов [фотографий](reference/objects/photo).

Пример ответа:

```JSON
{
  "response":[
    {
      "album_id":289219319,
      "date":1673516629,
      "id":457239023,
      "owner_id":743784474,
      "sizes":[
        {
          "height":50,
          "type":"s",
          "width":75,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/Vus7E6r8jZjgv5E9bnuM6fbvL9U_NP4-goegNOaEy8t4Z1DnzofjER9exwblecB6Hxb3EUbWv7lQvxdRaErZGoT3.jpg?size=75x50&quality=96&type=album"
        },
        {
          "height":87,
          "type":"m",
          "width":130,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/JTtJ-M4Y1Md4nbNyY6QNKBjs9xleCGkDwGw-NuMvLV0DKfQrPb_xN7QcfazSTrBcZ-_JzsJ21pTuLI7Slr8m9HcB.jpg?size=130x87&quality=96&type=album"
        },
        {
          "height":402,
          "type":"x",
          "width":604,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/2DBzUBeOMpydPcypQFkirgj6g9mzsj8le0qsrWQ_lPX3zNQN1229bLivxf26ya-91HF9D57exLSnkSnJwUxJdUBN.jpg?size=604x402&quality=96&type=album"
        },
        {
          "height":537,
          "type":"y",
          "width":807,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/Biye5eNVG4UA_ymuN60MU6Qp26yO7rYp0WB-ch55oxkaATpXs4Kmqqznz1keCYHg_BHyvPhyrSGyK3zRK29LoVKH.jpg?size=807x537&quality=96&type=album"
        },
        {
          "height":852,
          "type":"z",
          "width":1280,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/O-BkqGyWMw2ZKcOyYz8sH543Ihkws7mAn6x76JYh0mVW2MCR9x9eig_AS6gT6OLeySlvewx5oyri1Ejj0uNhJuKo.jpg?size=1280x852&quality=96&type=album"
        },
        {
          "height":1704,
          "type":"w",
          "width":2560,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/o5klH0kpqicWBkDGQl_ch2j8VRpW69xrnq_PXw823wrMYc2qnXQLuDZeECtcKSaka1gfCpP9smoz7XwGAMDTk7vo.jpg?size=2560x1704&quality=96&type=album"
        },
        {
          "height":87,
          "type":"o",
          "width":130,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/JTtJ-M4Y1Md4nbNyY6QNKBjs9xleCGkDwGw-NuMvLV0DKfQrPb_xN7QcfazSTrBcZ-_JzsJ21pTuLI7Slr8m9HcB.jpg?size=130x87&quality=96&type=album"
        },
        {
          "height":133,
          "type":"p",
          "width":200,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/dFvcZ_sYZeMJtmvotINsevf_0x4KbDxo-jcrZojRQtebIKvM0juMU9U9NjybaidOukkrImr2CWcW8u6IHdlceWKD.jpg?size=200x133&quality=96&type=album"
        },
        {
          "height":213,
          "type":"q",
          "width":320,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/GglL_Kv0x1_rnPwXwtTPZUMFg9sT_JB9xUSUeNvNIRapPRhGvQbQAaCwD57WBhUKU8sPD6-BhyadPIXaALqERkS1.jpg?size=320x213&quality=96&type=album"
        },
        {
          "height":340,
          "type":"r",
          "width":510,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-45\/s\/v1\/ig2\/LnQwirb-SUb689R2k90Q8MwuwHJ0tfO03a0IkCeXObaQERRE2-UUyLBCTTLme2qkLcxXAekHVbkLMEZhRq5E6Ggr.jpg?size=510x340&quality=96&crop=2,0,2556,1704&type=album"
        }
      ],
      "text":"",
      "has_tags":false
    },
    {
      "album_id":289219319,
      "date":1673516629,
      "id":457239024,
      "owner_id":743784474,
      "sizes":[
        {
          "height":50,
          "type":"s",
          "width":75,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/9iXNb21V-yQsaZBicg1N0z0XocIRGvInbbKpsTYbZjWQXrY7V8f-qC-lxWkg2WpOqlHBbPdx6ZgDGwexGY9Wtbxh.jpg?size=75x50&quality=96&type=album"
        },
        {
          "height":87,
          "type":"m",
          "width":130,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/Ze8oL0C3fM111DFsEWOWx8kYLM4sz_s8BZ_npYq78ZV73SI0uAwXD54ZjmDDhmaeM5H-4tIISwYK855caqQXHR0n.jpg?size=130x87&quality=96&type=album"
        },
        {
          "height":402,
          "type":"x",
          "width":604,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/wbHqCY0LaxSc67ehhkAo5sYBJihMfO_blh-PgXLWr4Pfl7Q43RoH-_zxHNDKXRJGpwQh55uvXfsqREWNMKI_SYO6.jpg?size=604x402&quality=96&type=album"
        },
        {
          "height":537,
          "type":"y",
          "width":807,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/3aR73JKN8bsXm_FFbJRcK3eF2FXad_5ERG04VTK1Sg0ZYLX78qWSGWb49P_wcCj8Zkq10vnXD35JO7zEdpokB9Ck.jpg?size=807x537&quality=96&type=album"
        },
        {
          "height":852,
          "type":"z",
          "width":1280,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/AE8nM7bFL88OaGKjf4meg5qvToTpSlM8qHzVZm5hYFqhawTeuob4t2HxXpzkrng5h4XYsdceRM-gyj9KpoADzyqu.jpg?size=1280x852&quality=96&type=album"
        },
        {
          "height":87,
          "type":"o",
          "width":130,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/Ze8oL0C3fM111DFsEWOWx8kYLM4sz_s8BZ_npYq78ZV73SI0uAwXD54ZjmDDhmaeM5H-4tIISwYK855caqQXHR0n.jpg?size=130x87&quality=96&type=album"
        },
        {
          "height":133,
          "type":"p",
          "width":200,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/TbxeKi7RAKgz-ibTbk1CkJ1RcccFfqwUUhizw_Ag_7RDN05RwUs0gEId0GtouAgMjBVp2lmLu_K4ZClrqGl0tLuC.jpg?size=200x133&quality=96&type=album"
        },
        {
          "height":213,
          "type":"q",
          "width":320,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/1g1vG_UzCZA99QbmZpJNBjL2k2euLKEtQioPFH6lG2lx9W8E8s6mOY5EJ7EKzoaDP54XLZzrlQ0jWSCPR5ijalJb.jpg?size=320x213&quality=96&type=album"
        },
        {
          "height":340,
          "type":"r",
          "width":510,
          "url":"https:\/\/sun9-west.userapi.com\/sun9-13\/s\/v1\/ig2\/dR8G1in8DBttlU0d1Y9iiOlH9r7O1IDzmkMmBSxRNHc6yTmTeH8byNfEui9VWpaZIGF_DgmTPcGLoj_wSXwmH8_s.jpg?size=510x340&quality=96&crop=1,0,1278,852&type=album"
        }
      ],
      "text":"",
      "has_tags":false
    }
  ]
}
```

## Права доступа

`photos`

## Ошибки

- 114
- 118
- 121
- 22
- 13000
