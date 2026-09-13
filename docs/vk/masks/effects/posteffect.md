# posteffect

> Источник: [https://dev.vk.ru/ru/masks/effects/posteffect](https://dev.vk.ru/ru/masks/effects/posteffect)
## Об эффекте

Используйте **posteffect** для наложения визуальных эффектов поверх всего изображения.  

![alt=Оригинал — резкость — шум — размытие — дисперсия;title=Оригинал — резкость — шум — размытие — дисперсия](530c53d9896e4e6d2e5ade41bc909d0e35a719c21693d7a63704504a "915741254969964390")

## Пример

```JSON
{
    "icon": "Icon.png",
    "effects": [
        {
            "name": "posteffect",
            "type": "sharpen",
            "intensity": 0.5
        }
    ]
}
```

## Параметры эффекта

| Параметр    | Описание                                                     |
| ----------- | ------------------------------------------------------------ |
| `name`      | Название эффекта. Должно быть `"posteffect"`.&#x0d;&#x0a;Тип данных: `string`. |
| `type`      | Тип применяемого эффекта:&#x0d;&#x0a; &bullet; `"blur"` &mdash; размытие;&#x0d;&#x0a; &bullet; `"dispersion"` &mdash; дисперсия;&#x0d;&#x0a; &bullet; `"glow"` — свечение;&#x0d;&#x0a; &bullet; `"noise"` &mdash; шум;&#x0d;&#x0a; &bullet; `"sharpen"` &mdash; резкость.&#x0d;&#x0a;&#x0d;&#x0a;Тип данных: `string`. |
| `intensity` | Интенсивность применяемого эффекта. Может принимать значение от `0.0` до `1.0`. По умолчанию интенсивность максимальна (`1.0`).&#x0d;&#x0a;Тип данных: `float`. |

## Материалы по теме

[Эффекты](masks/effects/overview)
