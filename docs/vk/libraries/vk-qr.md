# Библиотеки | VK QR

> Источник: [https://dev.vk.ru/ru/libraries/vk-qr](https://dev.vk.ru/ru/libraries/vk-qr)
<!-- ---
title: 'Библиотеки | VK QR'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# VK QR

Чтобы размещать ссылки на мини-приложение в офлайне, используйте QR-коды. Это поможет сделать **VK QR** — библиотека для генерации QR-кодов.

**NPM**: [`vk-qr`](https://www.npmjs.com/package/@vkontakte/vk-qr)

## Внешний вид QR-кода

:::carousel
![alt=Внешний вид QR-кода;title=QR-код;](73ab425ca23c5b3a64f02c781f276f7643f8754f925a649aa2680e38 "-7763461211040628092")
![alt=Информация, считанная с QR-кода;title=Информация с QR-кода](713f1c70cdb943b2caecc745d2549ee6b63fb875c65bea9e2cedc5f5 "-4813126935529401018")
:::

## Работа с библиотекой

1. Перейдите к папке проекта мини-приложения:

    ```sh
    cd <ПУТЬ_К_МИНИ_ПРИЛОЖЕНИЮ>
    ```

1.  Установите библиотеку:
    ```sh
    yarn add @vkontakte/vk-qr || npm install @vkontakte/vk-qr
    ```

1.  Инициализируйте библиотеку:

    ```JavaScript
    import * as qr from '@vkontakte/vk-qr'; 
    ```

1.  Вызовите событие `createQR` объекта `qr`.

    ```JavaScript
    const qrSvg = qr.createQR(text, qrSize, className, options); 
    ```

## Платформы

Android, iOS, Mobile Web, Web

## Параметры

| Параметр | Тип | Описание |
|---|---|---|
| `text` | `string` | Строка для преобразования в QR-код. |
| `qrSize` | `integer` | Размер кода в пикселях. |
| `className` | `string` | Класс родительского SVG-элемента QR-кода. |
| `options` | `object` | Объект пользовательских настроек, которые вы хотите применить к сгенерированному QR-коду.&#x0d;&#x0a;&#x0d;&#x0a; Параметры объекта:&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `isShowLogo` (`bool`) — Отображение логотипа ВКонтакте. Возможные значения:&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — QR-код без логотипа,&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — QR-код с логотипом.&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `isShowBackground` (`bool`) — Отображение фона. Возможные значения:&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — без фона,&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — с фоном.&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `backgroundColor` (`string`) — цвет фона QR-кода в кодировке HEX. Цвет фона задаётся, если параметр `isShowBackground` имеет значение `true`.&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `foregroundColor` (`string`) — цвет QR-кода в кодировке HEX.&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `logoColor` (`string`) — цвет фона логотипа ВКонтакте в кодировке HEX. Цвет фона задаётся, если параметр `isShowLogo` имеет значение `true`. Значение по умолчанию: `"#4680c2"`. |

## Пример использования

```JavaScript
let text = 'https://vk.com/persik_ryzhiy';

let options = {};

options.isShowLogo = true;
options.isShowBackground = true;
options.backgroundColor = "#bbebf0";

const qrSvg = qr.createQR(text, 256, "qr-code-class", options);

document.body.innerHTML = qrSvg;
```

> [Примеры использования](https://vk.com/vkapps_qr)

Чтобы считать QR-код программно, используйте в мини-приложении событие [VKWebAppOpenCodeReader](bridge/VKWebAppOpenCodeReader).

## Результат

Событие `createQR` возвращает строку SVG.
