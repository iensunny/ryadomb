# Обзор

> Источник: [https://dev.vk.ru/ru/masks/plugins/overview](https://dev.vk.ru/ru/masks/plugins/overview)
Плагины расширяют стандартные возможности применения эффектов. Если нужно добавить в маску интерактив, улучшить наложение или расширить применение эффектов, в этом помогут плагины.

Объявляются плагины в [файле конфигурации mask.json](masks/configuration), в поле&nbsp;`"plugins" : [...]`.

Каждый плагин начинается с обязательного параметра `name` — это строка с названием плагина, после которой перечислены его параметры.

## Список плагинов

| Плагин | Описание |
| --- | --- |
| [`customhint`](masks/plugins/customhint) | Добавляет в маску всплывающее сообщение. |
| [`fixeddetection`](masks/plugins/fixeddetection) | Улучшает наложение маски. |
| [`maskswitching`](masks/plugins/maskswitching) | Добавляет возможность переключения эффектов по действию пользователя. |
| [`parallax`](masks/plugins/parallax) | Создаёт параллакс-эффект. |
| [`particles`](masks/plugins/particles) | Добавляет систему частиц. |
| [`perspective`](masks/plugins/perspective) | Добавляет в маску перспективу для 3D-моделей. |
| [`pickerui`](masks/plugins/pickerui) | Добавляет в окно камеры меню, с помощью которого пользователь может выбирать эффекты в маске. |
| [`randomtest`](masks/plugins/randomtest) | Добавляет механизм рандомайзера. |
| [`spinner3d`](masks/plugins/spinner3d) | Вращает 3D-модели вокруг головы. |
| [`wiggle`](masks/plugins/wiggle) | Покачивание, дрожание или вращение текстуры или 3D-модели. |

## Объявление нескольких плагинов

Как и эффекты, плагины перечисляются через запятую. Существует и возможность объявлять одноимённые плагины с разной конфигурацией.

```JSON
{
  "icon": "Icon.png",
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
      "name": "model3d",
      "tag": "cacke",
      "anchor": "free",
      "model": "Models/Cacke.mdl",
      "material": {
        "technique": "Techniques/DiffUnlit.xml",
        "textures": {
          "diffuse": "Textures/Cacke.png"
        }
      },
      "position": [0, 0, 0],
      "rotation": [180, -90, 0],
      "scale": [13, 14, 13]
    }
  ],
  "plugins": [
    {
      "name": "perspective"
    },
    {
      "name": "fixeddetection"
    },
    {
      "name": "spinner3d",
      "tag": "pizza",
      "radius": 120,
      "number": 8,
      "offset_y": 12,
      "speed": 25
    },
    {
      "name": "spinner3d",
      "tag": "cacke",
      "radius": 120,
      "number": 5,
      "offset_y": 8,
      "speed": -15
    }
  ]
}
```

## Разработка плагинов

Если вы знакомы с программированием и хотите создать новую версию существующего плагина или собственный плагин, ознакомьтесь с разделом  [Создание плагинов](masks/development/plugin-creation).
