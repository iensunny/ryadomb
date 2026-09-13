# fixeddetection

> Источник: [https://dev.vk.ru/ru/masks/plugins/fixeddetection](https://dev.vk.ru/ru/masks/plugins/fixeddetection)
Плагин сглаживает дрожание всех элементов маски, привязанных к лицу, и увеличивает углы, на которые они вращаются при поворотах головы.

## Пример

```JSON
{
    "icon": "Icon.png",
    "effects": [
        {
            "name": "model3d",
            "anchor": "nose",
            "model": "Models/Plane.mdl",
            "material": {
                "technique": "Techniques/DiffUnlitAlpha.xml",
                "textures": {
                    "diffuse": {
                        "texture": "Textures/Hologram.png",
                        "animation": {
                            "fps": 15,
                            "type": "loop"
                        }
                    }
                }
            },
            "scale": [10, 10, 10]
        }
    ],
    "plugins": [
        {
            "name": "fixeddetection",
            "rotation": [1.25, 1.21, 1.7, 1.2],
            "offset": 0.7
        }
    ]
}
```

## Параметры

| Параметр | Тип | Описание |
| - | - | - |
| `rotation` | `array<float>[4]` | Коэффициенты, позволяющие докрутить элементы маски: влево, вправо, вверх и вниз. |
| `offset` | `array<string>` | Коэффициент сглаживания дрожания маски. Чем больше значение, тем менее заметно будет дрожание, но возникнет эффект отставания маски от лица. |

## Материалы по теме

[Плагины](masks/plugins/overview)
