# perspective

> Источник: [https://dev.vk.ru/ru/masks/plugins/perspective](https://dev.vk.ru/ru/masks/plugins/perspective)
Плагин добавляет перспективу для эффектов [`model3d`](masks/effects/model3d), [`plane`](masks/effects/plane) и [`occluder`](masks/effects/occluder).

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
            "name": "perspective",
            "near_clip": 0.1,
            "far_clip": 3000,
            "fov": 35
        }
    ]
}
```

## Параметры

| Параметр | Тип | Описание |
| - | - | - |
| `near_clip` | `float` | Значение ближней отсекающей плоскости. |
| `far_clip` | `float` | Значение дальней отсекающей плоскости. |
| `fov` | `float` | Угол обзора. |


## Материалы по теме

[Плагины](masks/plugins/overview)
