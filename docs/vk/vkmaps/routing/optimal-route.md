# Оптимальный маршрут

> Источник: [https://dev.vk.ru/ru/vkmaps/routing/optimal-route](https://dev.vk.ru/ru/vkmaps/routing/optimal-route)
**Оптимизация маршрута** — сервис, который позволяет решить задачу коммивояжёра и осуществить расчёт оптимального маршрута для набора произвольных целевых точек. Для расчёта оптимального маршрута могут быть использованы автомобильный, пешеходный и велосипедный графы.

:::note
`/optimal_route` — точка вызова сервиса расчета оптимального маршрута. Для входного набора координат строит оптимизированный по времени, либо по расстоянию маршрут и формирует список координат в порядке их посещения.
:::

## Запрос

Запрос передается в формате JSON в HTTP body. JSON запроса состоит из обязательных и необязательных полей. В url запроса должны быть заданы обязательные параметры.

### Простой пример JSON запроса

```
{"locations":[{"lon":49.22088,"lat":55.77055},{"lon":49.21999,"lat":55.77246},{"lon":49.21933,"lat":55.77222},{"lon":49.22999,"lat":55.78246},{"lon":49.26842,"lat":55.75043}],"costing":"pedestrian","directions_options":{"units":"miles"},"id":"optimal_route_test"}
```

Этот запрос рассчитывает оптимальный пеший маршрут со стартом в первой точке из списка "locations" и финишем в последней точке.

### Обязательные url-параметры запроса

| Имя параметра | Формат | Описание | Пример |
| --- | --- | --- | --- |
| `api_key` | `hex-string` | [Доступ к сервисам](vkmaps/general-information/api-key). | `api_key=fa749bace6d8a3b1....` |

### Обязательные JSON-поля в теле HTTP-запроса

| Имя поля | Формат | Описание | Пример |
| --- | --- | --- | --- |
| `locations` | `list` | Список точек, которые нужно отсортировать в соответствии с порядком их посещения. Первая и последняя точка в списке таковыми и остаются, а точки между ними могут быть переставлены для оптимизации маршрута по времени. Минимальное количество точек: 2. | `"locations":[{"lat":55.77055,"lon":49.22088},{"lat":55.796932,"lon":37.537849}]` |

### Ограничения на количество точек в запросе

* Авто: 50

* Велосипед: 50

* Грузовик: 50

* Пешеход: 50

### Дополнительные JSON-поля в теле HTTP-запроса

| Имя поля | Формат | Описание | Пример |
| --- | --- | --- | --- |
| `costing` | `string` | Тип транспорта для построения маршрута. Поддерживаемые значения:&#x0d;&#x0a;&nbsp; &bull; `auto` (по умолчанию) — автомобильный;&#x0d;&#x0a;&nbsp; &bull; `truck` — грузовики;&#x0d;&#x0a;&nbsp; &bull; `pedestrian` — пешеходный;&#x0d;&#x0a;&nbsp; &bull; `bicycle` — велосипедный. | `"costing":"pedestrian"` |
| `id` | `string` | Идентификатор запроса, который возвращается вместе с ответом, что позволяет точно установить соответствие запроса и ответа. | `"id":"optimal_route_test"` |
| `costing_options` | `dict` | Список параметров расчёта маршрута. Для различных типов транспорта используются [различные опции и ограничения](vkmaps/routing/directions/costing-options), аналогичные тем, которые используются в сервисе [Построение маршрута](vkmaps/routing/direction). Дополнительно присутствует опция `shortest`, по умолчанию выставленная в `false`. Если `shortest=false`, маршрут оптимизируется по времени. Если `shortest=true` — по расстоянию. | `"costing_options":`&#x0d;&#x0a;`{"auto":{"shortest":true,`&#x0d;&#x0a;`"use_tolls":0}}` |
| `units` | `string` | Единица измерения расстояния в ответе:&#x0d;&#x0a;&nbsp; &bull; `kilometers` (по умолчанию) — километры;&#x0d;&#x0a;&nbsp; &bull; `miles` — мили. | `"units":"miles"` |
| `fix_destination` | `bool` | Нужно ли фиксировать последнюю из перечисленных координат в `locations` в качестве финиша. &#x0d;&#x0a;  &bull; `fix_destination=true` — последняя из указанных локаций в ответе сервиса гарантированно будет точкой финиша. &#x0d;&#x0a;  &bull; `fix_destination=false` — последняя из указанных локаций может оказаться одной из промежуточных точек маршрута. &#x0d;&#x0a;  По умолчанию: `true`. | `"fix_destination":"false"` |

## Ответ

Возвращаемый ответ соответствует структуре [GeoJSON](https://tools.ietf.org/html/rfc7946) и содержит:

| Имя поля | Формат | Описание |
| --- | --- | --- |
| `id` | `string` | Идентификатор запроса, который возвращается вместе с ответом, что позволяет точно установить соответствие запроса и ответа |
| `trip` | `object map` | Информация о маршруте определяется параметрами:&#x0d;&#x0a;&nbsp; &bull; `locations` — список точек маршрута, отсортированных для оптимального по времени прохождения маршрута;&#x0d;&#x0a;&nbsp; &bull; `legs` — информация о полилинии маршрута (см. также: [Декодирование полилинии](vkmaps/routing/decode-polyline));&#x0d;&#x0a;&nbsp; &bull; `summary` — краткая информация о маршруте;&#x0d;&#x0a;&nbsp; &bull; `status_message` — текстовая расшифровка статуса выполнения запроса;&#x0d;&#x0a;&nbsp; &bull; `status` — статус выполнения запроса;&#x0d;&#x0a;&nbsp; &bull; `units` — единицы измерения;&#x0d;&#x0a;&nbsp; &bull; `language` — язык, на котором представлена информация о маневрах. |

В случае, если по запросу ничего не найдено, ответ будет выглядеть так:

```
{"status_code":400,"status":"Bad Request"}
```

## Пример

### Пример запроса

```
curl -X POST \
 -H "Content-type: application/json" \
 -H "Accept: application/json" \
 -d '{"locations":[{"lon":49.22088,"lat":55.77055},{"lon":49.21999,"lat":55.77246},{"lon":49.26842,"lat":55.75043}],"costing":"pedestrian","directions_options":{"units":"miles"},"id":"optimal_route_test"}' \
 "https://demo.maps.vk.com/api/optimal_route"
```

### Пример ответа

```
{
    "trip":
    {
        "locations":
        [
            {
                "type": "break",
                "lat": 55.77055,
                "lon": 49.22088,
                "original_index": 0
            },
            {
                "type": "break",
                "lat": 55.77246,
                "lon": 49.21999,
                "original_index": 1
            },
            {
                "type": "break",
                "lat": 55.75043,
                "lon": 49.26842,
                "original_index": 2
            }
        ],
        "legs":
        [
            {
                "summary":
                {
                    "min_lat": 55.77065,
                    "min_lon": 49.21999,
                    "max_lat": 55.772514,
                    "max_lon": 49.220883,
                    "time": 188.317,
                    "length": 0.164,
                    "cost": 193.317
                },
                "shape": "u`~jiBepe{|AMlh@gq@o@or@m@eMMAtP"
            },
            {
                "summary":
                {
                    "min_lat": 55.750237,
                    "min_lon": 49.21999,
                    "max_lat": 55.772515,
                    "max_lon": 49.269982,
                    "time": 3543.527,
                    "length": 3.113,
                    "cost": 3644.115
                },
                "shape": "cuakiBmxc{|A@uPEiUHgkAF_n@BgYHghAPwvBFgr@XcrD@{ZBmGJupAG_SHw\\D}RNoaC`@cNfAyGxHaGja@Y~JmFxKyLlBuBfUy[pI_Ux@uBfNkb@rFwTvMgx@dBkKlD}SrFs]bFa`@pCgTdI{i@fC}R`@aD~PklAzBwObLqw@vIuf@lLop@p@oBrJuYfNmYbAwBtJwPfCuBxIkHzMqIh_@sRfCWb@}SqAu`@_GcfB_Bqh@yBmk@w@}M{D}}@qG}yAuBqZ|D_G~oCshAhQmAzWiRla@wYlbAw}@fCsFj{@ijBjWij@zZsp@fm@eqAdAgD`Ssn@dBqFNea@xVavAdZajBxEomA|AeeBhHiNbLcAnAuGpT|VlD~DpaBf|@vkA|q@|eBjOv`@b[tPwGzDtA`s@`_AtGUjo@{vAvUmm@iJyL"
            }
        ],
        "summary":
        {
            "min_lat": 55.750237,
            "min_lon": 49.21999,
            "max_lat": 55.772515,
            "max_lon": 49.269982,
            "time": 3731.844,
            "length": 3.278,
            "cost": 3837.433
        },
        "status_message": "Found route between points",
        "status": 0,
        "units": "miles",
        "language": "ru-RU"
    },
    "id": "optimal_route_test"
}
```
