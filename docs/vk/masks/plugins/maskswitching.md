# maskswitching

> Источник: [https://dev.vk.ru/ru/masks/plugins/maskswitching](https://dev.vk.ru/ru/masks/plugins/maskswitching)
С помощью плагина `maskswitching` вы можете активировать эффекты, когда пользователь касается экрана или открывает рот.

Для работы плагина назначьте теги эффектам, которые плагин будет активировать.

Вы можете назначить один и тот же тег нескольким эффектам. То есть тег может соответствовать набору эффектов. В этом случае плагин будет активировать все эффекты, которым назначен выбранный тег.  

## Пример

```JSON
{
    "icon": "Icon.png",
    "effects": [
        {
            "name": "colorfilter",
            "tag": "warm",
            "lookup": "ColorFilter/warm_shade.png",
            "intensity": 0.75
        },
        {
            "name": "colorfilter",
            "tag": "cold",
            "lookup": "ColorFilter/cold_shade.png",
            "intensity": 0.75
        },
        {
            "name": "colorfilter",
            "tag": "neutral",
            "lookup": "ColorFilter/neutral_shade.png",
            "intensity": 0.75
        }
    ],
    "plugins": [
        {
            "name": "maskswitching",
            "random": false,
            "tags": [
                "warm",
                "cold",
                "neutral"
            ],
            "trigger": "tap"
        }
    ]
}
```

## Параметры

| Параметр | Тип | Описание |
| - | - | - |
| `random` | `bool` | Определяет, будет ли при открытии маски первым выбран случайный тег или нет. |
| `tags` | `array<string>` | Перечисляются теги переключаемых эффектов. |
| `trigger` | `string` | Задаёт событие переключения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"tap"` — касание экрана. Отслеживается, если в [конфигурационном файле маски](masks/configuration) задан параметр `"mouse_input": true`;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"mouth"` — открытие рта. |
| `camera` | `string` | Выбор камеры отображения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"all"` — на всех камерах.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"front"` — только на фронтальной.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"back"` — только на задней. |
| `visible` | `string` | Режимы видимости:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"always"` — показывать всегда.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"face"` — показывать только при найденном лице. |
| `initial` | `int` | Задаёт порядковый номер тега, с которого нужно начинать отсчёт. |

## Примечание

Плагин `maskswitching` похож на плагин [`pickerui`](masks/plugins/pickerui). Отличие в том, что `maskswitching` активирует эффекты по действию пользователя, а `pickerui` создаёт меню, из которого пользователь может выбрать эффекты визуально.

## Материалы по теме

[Плагины](masks/plugins/overview)

[Плагин `pickerui`](masks/plugins/pickerui)
