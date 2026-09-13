# apps.get

> Источник: [https://dev.vk.ru/ru/method/apps.get](https://dev.vk.ru/ru/method/apps.get)
Метод возвращает данные о приложениях.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `app_id` | `positive` | нет | **Необязательный параметр.** Идентификатор приложения, данные которого необходимо получить. Если этот параметр и параметр `app_ids` не указаны, возвращается идентификатор приложения, через которое выдан ключ доступа (`access_token`). |
| `app_ids` | `string` | нет | **Необязательный параметр.** Список идентификаторов приложений, данные которых необходимо получить, перечисленный через запятую. |
| `platform` | `string` | нет | **Необязательный параметр.** Платформа, для которой необходимо вернуть данные. Возможные значения:<br>* `ios` — мобильное приложение для iOS.<br>* `android` — мобильное приложение для Android.<br>* `winphone` — мобильное приложение для Windows Phone.<br>* `web` — десктопная версия сайта ([vk.com](https://vk.com)). Значение используется по умолчанию. |
| `extended` | `checkbox` | нет | **Необязательный параметр.** Информация о том, вернуть ли дополнительные поля. Возможные значения:<br>* `1` — вернуть дополнительные поля.<br>* `0` — не возвращать дополнительные поля. Значение используется по умолчанию. |
| `return_friends` | `checkbox` | нет | :::note<br>**Примечание.** Параметр учитывается, только если передан параметр `access_token`.<br>:::<br>**Необязательный параметр.** Информация о том, вернуть ли список друзей, установивших это приложение. Возможные значения:<br>* `1` – вернуть список друзей.<br>* `0` — не возвращать список друзей. Значение используется по умолчанию. |
| `fields` | `string` | нет | :::note<br>**Примечание.** Параметр учитывается, только если параметр `return_friends` передан со значением `1`.<br>:::<br>**Необязательный параметр.** Список дополнительных полей, которые необходимо вернуть для профилей пользователей. Возможные значения:<br>* `bdate`<br>* `can_post`<br>* `can_see_all_posts`<br>* `can_see_audio`<br>* `can_write_private_message`<br>* `city`<br>* `common_count`<br>* `connections`<br>* `contacts`<br>* `counters`<br>* `country`<br>* `domain`<br>* `education`<br>* `has_mobile`<br>* `last_seen`<br>* `lists`<br>* `online`<br>* `online_mobile`<br>* `photo_100`<br>* `photo_200`<br>* `photo_200_orig`<br>* `photo_400_orig`<br>* `photo_50`<br>* `photo_max`<br>* `photo_max_orig`<br>* `relation`<br>* `relatives`<br>* `schools`<br>* `screen_name`<br>* `sex`<br>* `site`<br>* `status`<br>* `timezone`<br>* `universities` |
| `name_case` | `string` | нет | :::note<br>**Примечание.** Параметр учитывается, только если параметр `return_friends` передан со значением `1`.<br>:::<br>**Необязательный параметр.** Падеж для склонения имени и фамилии пользователей. Возможные значения:<br>* `nom` — именительный. Значение используется по умолчанию.<br>* `gen` — родительный.<br>* `dat` — дательный.<br>* `acc` — винительный.<br>* `ins` — творительный.<br>* `abl` — предложный. |
| `app_fields` | `string` | нет | **Необязательный параметр.** Список названий полей из метода [`apps.get`](method/apps.get), которые должны вернуться. Поля `id`, `type`, `title` вернутся всегда.  |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `count` | `integer` | Количество обработанных мини-приложений. |
| `items` | `array[object]` | Массив [объектов, описывающих приложения](reference/objects/app). |

Пример ответа:

```JSON
{
  "response":{
    "count":2,
    "items":[
      {
        "type":"mini_app",
        "id":7539087,
        "title":"Шаги ВКонтакте",
        "author_url":"https://vk.com/club197864572",
        "banner_1120":"https://sun1-54.userapi.com/impf/-q99QhNanKXxJYRiM2E1fVGwG8tsytVjWXWE9w/UFhjrfum9U8.jpg?size=1120x630&quality=90&sign=050a4ba768b9ff5a8bea753a26e84225&c_uniq_tag=sNH2G_xHvpLdjanC1W_cXuLJKlSKrNzyIQb1yzPbvKU",
        "banner_560":"https://sun1-54.userapi.com/impf/-q99QhNanKXxJYRiM2E1fVGwG8tsytVjWXWE9w/UFhjrfum9U8.jpg?size=560x315&quality=90&sign=59b1829c668a8da5cb1196a8ea76ec1a&c_uniq_tag=pgk2rgw5Rl7dOGhqLN-1y-zY9cneI5Ou24JZgS1e9gg",
        "catalog_banner":{
          "background_color":"FFFFFF",
          "description_color":"000000",
          "title_color":"000000"
        },
        "genre":"Образ жизни",
        "genre_id":3010,
        "international":false,
        "is_in_catalog":0,
        "leaderboard_type":0,
        "members_count":34721527,
        "section":"Образ жизни",
        "author_owner_id":-197864572,
        "can_cache":true,
        "is_installed":true,
        "hide_tabbar":0,
        "icon_139":"https://sun1-94.userapi.com/impf/hKMwjwu7SoQmY6prlBsQuJrMEpXKWFOzp2oyXA/9hfKQc7tVJA.jpg?size=139x139&quality=90&sign=9a464cf3ad1674c345f18e68e8105818&c_uniq_tag=U2zf4hj7zHQowY3tCGPF3Y6aBIL2MfKKuHt8YfiZ3kM",
        "icon_150":"https://sun1-92.userapi.com/impf/fPaZn6NVDApwcaer6nUnHAwevMFlisMilEEbjA/xl79uYke71k.jpg?size=150x150&quality=90&sign=d0e5e4127759617fb3d7b8b121f128d1&c_uniq_tag=40ztKihlAfh4Le5ucRd9gsP6w6HdpiLpPQQRYFsTSlg",
        "icon_278":"https://sun1-94.userapi.com/impf/hKMwjwu7SoQmY6prlBsQuJrMEpXKWFOzp2oyXA/9hfKQc7tVJA.jpg?size=278x278&quality=90&sign=c3cd0a7faffd39e157fafc8505b92a0f&c_uniq_tag=M8uk0IeLDIjag1g_dBFUSS9v3v4wRSuCjL3nK3OdvgE",
        "icon_576":"https://sun1-22.userapi.com/impf/-V2KuvmLu9njJPhd6MiPJAsg8Cv1TKoEQLUE-g/IK8TGI1IliE.jpg?size=576x576&quality=90&sign=73b7d136043d6387d49ead128fd6457e&c_uniq_tag=fF54qOygwguMv5aPK4vRxKslkqeX6TiPjCbNypl4h7w",
        "icon_75":"https://sun1-92.userapi.com/impf/fPaZn6NVDApwcaer6nUnHAwevMFlisMilEEbjA/xl79uYke71k.jpg?size=75x75&quality=90&sign=969437d7e5d550b9dbe66a1d817ae1fd&c_uniq_tag=r5e-QjoU9bmcY8BnK4HgQiW8lxXxISUQik4SzhQoL4s",
        "is_vkui_internal":true,
        "has_vk_connect":false,
        "need_show_unverified_screen":false
      }
      {
        "type":"mini_app",
        "id":6909581,
        "title":"VK Bridge Sandbox",
        "author_url":"https://vk.com/club166562603",
        "banner_1120":"https://sun1-23.userapi.com/impf/U59-0U6RHkLCxaQyUAouF4Tc3qwW-j8bgYY2Rw/nk8u-SP5t4A.jpg?size=1120x630&quality=90&sign=41506843a35f9a28c5605e824321540b&c_uniq_tag=saSVEDMoiTmkGSJcVqfsZs2fE9OsVVByBIlm6jFMktM",
        "banner_560":"https://sun1-23.userapi.com/impf/U59-0U6RHkLCxaQyUAouF4Tc3qwW-j8bgYY2Rw/nk8u-SP5t4A.jpg?size=560x315&quality=90&sign=0df15098f4db926b39357f09f950f595&c_uniq_tag=BTGY9ve0aF35UTbXVisnoU5BropzEZ15vADFu2198n8",
        "catalog_banner":{
          "background_color":"ffffff",
          "description_color":"000000",
          "title_color":"000000"
        },
        "genre":"Инструменты",
        "genre_id":3014,
        "international":false,
        "is_in_catalog":0,
        "leaderboard_type":0,
        "members_count":99903,
        "section":"Инструменты",
        "author_owner_id":-166562603,
        "is_installed":true,
        "hide_tabbar":0,
        "icon_139":"https://sun1-20.userapi.com/impf/CQHWaTeRMpxgc49ucEePTshejqOszgErsMRdiA/Lt_2Fhfvfmc.jpg?size=139x139&quality=90&sign=77c307779c8ecd06a607cac225b3b81b&c_uniq_tag=X5Jj-OL7tWYShFPkvDMJvfrhTPb4vRzs1TlrrsWVve4",
        "icon_150":"https://sun1-54.userapi.com/impf/mWaxqMtvOAhXMhbtP5OVzkby0eg5UUx-zXBXoA/o7mTj8Jyytc.jpg?size=150x150&quality=90&sign=02d965c2c2938efd80e67190a89da4cd&c_uniq_tag=c8g0wzSSaGL_mErH4qNiutMyL4uH4a448qkeVnjIbiM",
        "icon_278":"https://sun1-20.userapi.com/impf/CQHWaTeRMpxgc49ucEePTshejqOszgErsMRdiA/Lt_2Fhfvfmc.jpg?size=278x278&quality=90&sign=e562548cb544cbf282e60d1567557e31&c_uniq_tag=BY6Gw5n9Pz7Z31KeZjFCm4ogqd2ka4GYpTBoGZicVw0",
        "icon_576":"https://sun1-97.userapi.com/impf/yQgVsYwITBo4SQqKSiWkvQCSaGceOSczQ1X3rA/w-p1tH_2TUI.jpg?size=576x576&quality=90&sign=90639d9ab4023758b5f28d0fd49b0165&c_uniq_tag=rP9d5O94Iv_SkYkZkSBVFmN9MsoYGaiZ8FzPqxXeyKg",
        "icon_75":"https://sun1-54.userapi.com/impf/mWaxqMtvOAhXMhbtP5OVzkby0eg5UUx-zXBXoA/o7mTj8Jyytc.jpg?size=75x75&quality=90&sign=fb03c1d7979b19a6168d2719497aa2f2&c_uniq_tag=nGAWl-_OPEYJPVhfoFoA739g9DT5_pE_Wblnu8Tm3Nw",
        "has_vk_connect":false,
        "need_show_unverified_screen":false
      }
    ]
  }
}
```

## Типы ключа

`allow_from_server`
