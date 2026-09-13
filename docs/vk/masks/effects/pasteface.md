# pasteface

> Источник: [https://dev.vk.ru/ru/masks/effects/pasteface](https://dev.vk.ru/ru/masks/effects/pasteface)
## Об эффекте 

Используйте эффект **pasteface**, чтобы вставить в результирующее изображение элементы лица (нос, правый глаз, левый глаз или рот), ранее скопированные с помощью [`copyface`](masks/effects/copyface). 

![alt=Примеры работы эффектов copyface и pasteface;title=Пример работы эффектов copyface и pasteface](265d54f9fead6b4915e824bca15cde39d7afa19a6650a1961c7587ee "-6557510792551533803")

Допускается использование нескольких эффектов `pasteface` в маске: один эффект `pasteface` может отрисовать только один из скопированных элементов. Чтобы отрисовать несколько элементов, используйте несколько эффектов `pasteface`.

Объявлять эффекты `pasteface` в конфигурационном файле следует после `copyface`. Без вызова `copyface`, у эффекта `pasteface` не будет данных для вставки.

## Пример

```JSON
{
    "icon": "Icon.png",
    "effects": [
        {
            "name": "copyface"
        },
        {
            "name": "pasteface",
            "element": "nose",
            "size": [1.5, 1.5]
        },
        {
            "name": "pasteface",
            "element": "mouth",
            "size": [1.5, 1.5]
        }
    ]
}
```

## Параметры эффекта

| Параметр   | Описание                                                     |
| ---------- | ------------------------------------------------------------ |
| `name`     | Название эффекта. Должно быть `"pasteface"`.&#x0d;&#x0a;Тип данных: `string`. |
| `element`  | Указывает, какой элемент нужно отрисовать. Возможно одно из следующих значений:&#x0d;&#x0a; &bullet; `"nose"` &mdash; нос;&#x0d;&#x0a; &bullet; `"right_eye"` &mdash; правый глаз;&#x0d;&#x0a; &bullet; `"left_eye"` &mdash; левый глаз;&#x0d;&#x0a; &bullet; `"mouth"` &mdash; рот.&#x0d;&#x0a;&#x0d;&#x0a;Если вам нужно отрисовать несколько элементов, добавьте несколько эффектов `pasteface` в маску.&#x0d;&#x0a;&#x0d;&#x0a;Тип данных параметра: `string`. |
| `anchor`   | Точка привязки вставляемого элемента лица. Возможно одно из следующих строковых значений:&#x0d;&#x0a; &bullet; `fullscreen` &mdash; весь экран;&#x0d;&#x0a; &bullet; `right_eye` &mdash; правый глаз;&#x0d;&#x0a; &bullet; `left_eye` &mdash; левый глаз;&#x0d;&#x0a; &bullet; `middle_eyes` &mdash; переносица;&#x0d;&#x0a; &bullet; `forehead` &mdash; лоб;&#x0d;&#x0a; &bullet; `nose` &mdash; нос;&#x0d;&#x0a; &bullet; `mouth` &mdash; центр рта;&#x0d;&#x0a; &bullet; `right_cheek` &mdash; центр правой щеки;&#x0d;&#x0a; &bullet; `left_cheek` &mdash; центр левой щеки;&#x0d;&#x0a; &bullet; `lower_lip` &mdash; нижняя губа;&#x0d;&#x0a; &bullet; `upper_lip` &mdash; верхняя губа;&#x0d;&#x0a; &bullet; `lt_corner` &mdash; левый верхний край;&#x0d;&#x0a; &bullet; `lb_corner` &mdash; левый нижний край;&#x0d;&#x0a; &bullet; `rt_corner` &mdash; правый верхний край;&#x0d;&#x0a; &bullet; `rb_corner` &mdash; правый нижний край;&#x0d;&#x0a; &bullet; `free` &mdash; центр экрана;&#x0d;&#x0a; &bullet; `top_center` &mdash; центр верхней стороны;&#x0d;&#x0a; &bullet; `left_center` &mdash; центр левой стороны;&#x0d;&#x0a; &bullet; `right_center` &mdash; центр правой стороны;&#x0d;&#x0a; &bullet; `bottom_center` &mdash; центр нижней стороны.&#x0d;&#x0a;&#x0d;&#x0a;Тип данных параметра: `string`. |
| `size`     | Относительный размер элемента лица по осям X и Y. Значения меньше `1.0` уменьшают, а значения больше `1.0` увеличивают элемент.&#x0d;&#x0a;Тип данных: `array<float>[2]`. |
| `offset`   | Смещение вставляемого элемента в трёхмерном пространстве XYZ относительно точки привязки `anchor`.&#x0d;&#x0a;Тип данных: `array<float>[3]`. |
| `rotation` | Вращение в трёхмерном пространстве относительно точки привязки `anchor` по осям X, Y и Z. Последовательность указывает углы поворота относительно координатных осей в градусах, например, `"rotation": [90.0, 0.0, 0.0]`.&#x0d;&#x0a;Тип данных: `array<float>[3]`. |

#### Особые случаи

* Если в `anchor` указана какая-либо точка привязки, имеющая отношение к лицу, то вставляемый элемент будет смасштабирован так, чтобы соответствовать размеру лица в камере.

* Если в `anchor` указана привязка к экрану, то размер вставляемого элемента сохранится вне зависимости от размера лица пользователя.

## Материалы по теме

[Эффекты](masks/effects/overview)

[Эффект copyface](masks/effects/copyface)
