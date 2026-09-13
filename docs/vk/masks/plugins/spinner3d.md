# spinner3d

> Источник: [https://dev.vk.ru/ru/masks/plugins/spinner3d](https://dev.vk.ru/ru/masks/plugins/spinner3d)
Плагин вращает дубликаты 3D-модели вокруг головы.

Для работы плагина назначьте соответствующий тег эффекту [`model3d`](masks/effects/model3d), [`plane`](masks/effects/plane) или [`occluder`](masks/effects/occluder). Эффект обязательно должен использовать свободную точку привязки `"anchor" : "free"`.

## Пример

```JSON
{
    "icon": "my-mask-icon.png",
    "effects": [
        {
            "name": "model3d",
            "tag": "spinner",
            "anchor": "free",
            "model": "Models/Pizza.mdl",
            "material": {
                "technique": "Techniques/DiffUnlit.xml",
                "textures": {
                    "diffuse": "Textures/Pizza.png"
                }
            },
            "position": [0, 0, 0],
            "rotation": [180, -90, 0],
            "scale": [13, 14, 13]
        },
        {
            "name": "occluder",
            "anchor": "face",
            "model": "Models/head.mdl"
        }
    ],
    "plugins": [
        {
            "name": "spinner3d",
            "tag": "spinner",
            "radius": 200,
            "number": 17,
            "offset_y": -20,
            "speed": 50
        }
    ]
}
```

## Параметры

| Параметр | Тип | Описание |
| - | - | - |
| `tag` | `string` | Тег эффекта, к которому будет применён плагин. |
| `radius` | `float` | Расстояние между центром головы и дубликатами. |
| `number` | `float` | Количество дубликатов, которые будут вращаться. |
| `offset_y` | `float` | Смещение элементов по оси Y. |
| `speed` | `float` | Скорость движения элементов вокруг головы. |

## Материалы по теме

[Плагины](masks/plugins/overview)

[Анимация в масках](masks/animation/overview)
