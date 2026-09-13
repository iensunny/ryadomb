# customhint

> Источник: [https://dev.vk.ru/ru/masks/plugins/customhint](https://dev.vk.ru/ru/masks/plugins/customhint)
Плагин позволяет показать кастомное всплывающее сообщение после запуска маски и  визуально является более гибким аналогом `"user_hint"` в `mask.json`. Но недостатком является то, что его отображение может попасть в запись видео или снимок фото.

## Пример

```JSON
{
    "icon": "Icon.png",
    "effects": [
        {
            "name": "patch",
            "tag": "hint",
            "anchor": "fullscreen",
            "texture": "Textures/Hint.png"
        }
    ],
    "plugins": [
        {
            "name": "customhint",
            "tag": "hint",
            "delay": 0.4,
            "speed": 5,
            "life_time": 3,
            "trigger": "mouth"
        }
    ]
}
```

## Параметры

| Параметр | Тип | Описание |
| - | - | - |
| `tag` | `string` | Тег эффекта, который должен отображаться после запуска маски. |
| `delay` | `float` | Задержка появления в миллисекундах. |
| `speed` | `float` | Скорость появления и исчезновения. |
| `life_time` | `float` | Время отображения в миллисекундах. |

## Материалы по теме

[Плагины](masks/plugins/overview)
