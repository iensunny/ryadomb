# parallax

> Источник: [https://dev.vk.ru/ru/masks/plugins/parallax](https://dev.vk.ru/ru/masks/plugins/parallax)
Плагин создаёт эффект параллакса в зависимости от положения лица пользователя в камере.

Для работы плагина нужно необходимым эффектам назначить соответствующие теги, которые будут определять слои параллакса. Эти эффекты обязательно должны иметь свободную точку привязки `"anchor" : "free"`.

## Пример

```JSON
{
    "icon": "Icon.png",
    "effects": [
        {
            "name": "patch",
            "tag": "background",
            "anchor": "free",
            "texture": "Textures/Emoji_background.png",
            "size": [ {"h": 1}, {"h": 1} ]
        },
        {
            "name": "patch",
            "tag": "foreground",
            "anchor": "free",
            "texture": "Textures/Emoji_foreground.png",
            "size": [ {"h": 1}, {"h": 1}]
        }
    ],
    "plugins": [
        {
            "name": "parallax",
            "strength": 0.8,
            "layers": [
                {
                    "tag": "background",
                    "strength": 0.2
                },
                {
                    "tag": "foreground",
                    "strength": 0.4
                }
            ]
        }
    ]
}
```

## Параметры

| Параметр | Тип | Описание |
| - | - | - |
| `strength` | `string` | Сила эффекта параллакса. Влияет на все слои. |
| `layers` | `array<struct>` | Перечисление слоёв параллакса. |

## Параметры `layers`

| Параметр | Тип | Описание |
| - | - | - |
| `tag` | `string` | Тег эффекта, к которому будет применён параллакс. |
| `strength` | `array<struct>` | Сила эффекта параллакса. Влияет только на текущий слой. |

## Материалы по теме

[Плагины](masks/plugins/overview)
