# VK Bridge | VKWebAppUpdateConfig

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppUpdateConfig](https://dev.vk.ru/ru/bridge/VKWebAppUpdateConfig)
<!-- ---
title: 'VK Bridge | Служебные | VKWebAppUpdateConfig'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppUpdateConfig

`VKWebAppUpdateConfig` отправляется платформой, когда изменяется конфигурация мини-приложения или игры.

Платформа отправляет событие `VKWebAppUpdateConfig`:

*  Сразу после выполнения события [`VKWebAppInit`](bridge/VKWebAppInit).
*  При показе модального вью-контроллера.
*  При появлении, исчезновении или изменении размеров клавиатуры.
*  При изменении фрейма экрана, в том числе ориентации.
*  При изменении цветовой схемы.

> **Совет**. Чтобы определить цветовую схему до получения данных от платформы, используйте свойство [`prefers-color-scheme`](https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme).

## Пример

```JavaScript
bridge.subscribe((e) => {
  if (e.detail.type === 'VKWebAppUpdateConfig') {
    // Логика мини-приложения
  }
});
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | – |

## Параметры

—

## Результат

`VKWebAppUpdateConfig` сигнализирует, что информация получена. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Платформа | Значение |
|---|---|---|---|
| `adaptivity` | `string` | Android, iOS | Адаптивная вёрстка. Возможные значения: &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `auto` — автоматически выбирать вёрстку в зависимости от размера экрана.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `adaptive` – всегда использовать адаптивную вёрстку.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `force_mobile` – всегда использовать вёрстку для мобильных устройств. |
| `api_host` | `string` | Mobile Web, Web | API-хост для вызовов, не использующих VK Bridge: `api.vk.ru`. |
| `app` | `string` | Android, iOS | Тип мобильного клиента. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkclient` — приложение «ВКонтакте».&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkme` — приложение «VK Мессенджер».&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `ok` — приложение «Одноклассники». |
| `app_id` | `string` | Android, iOS, Mobile Web, Web | Идентификатор приложения, которому соответствует нативное мобильное приложение ВКонтакте. |
| `appearance` | `string` | Android, iOS, Mobile Web, Web | Тема мини-приложения или игры. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `light`— светлая тема.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `dark` — тёмная тема. |
| `back_button` | `string` | Android, iOS | Отображение кнопки выхода из приложения на главном экране. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `back` — «Назад».&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `close` — «Закрыть». &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `none` – не показывать кнопку. |
| `insets` | `object` | Android, iOS | Величина отступов, которые необходимо выдержать от края экрана до контента. Поля объекта:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `right` — отступ справа.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `top` — отступ сверху.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `left` — отступ слева. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bottom` – отступ снизу.&#x0d;&#x0a;Если показана клавиатура, её высота будет указана в параметре `bottom`. |
| `integration` | `string` | Android, iOS, Mobile Web, Web | Тип встраивания мини-приложения или игры. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `fullscreen` – на весь экран. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `content` – встроено в контентную зону, например режим Split View в мобильном приложении или вторая колонка на сайте vk.com. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `popup` — всплывающее модальное окно. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `popup_fullscreen` — всплывающее окно на весь экран. |
| `idfv` | `string` | iOS | Идентификатор для приложений от одного разработчика на устройстве iOS.&#x0d;&#x0a;Подробнее – в [документации Apple](https://developer.apple.com/documentation/uikit/uidevice/identifierforvendor). |
| `is_layer` | `boolean` | Web  | Поле приходит, если мини-приложение или игра открыты в слое. |
| `scheme` | `string` | Android, iOS, Mobile Web, Web | Цветовая схема мини-приложения или игры. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `space_gray` — тёмная схема мобильного приложения и мобильной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bright_light` — светлая схема мобильного приложения и мобильной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkcom_light` — светлая схема десктопной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkcom_dark` — тёмная схема десктопной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; **Совет**. Чтобы определить цветовую схему до получения данных от платформы, используйте свойство [`prefers-color-scheme`](https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme).|
| `start_time` | `integer` | Android, iOS  | Время и дата открытия модального экрана ([Unix Timestamp](https://www.unixtimestamp.com/)). Передаётся только при открытии модального экрана. |
| `viewport_height` | `integer` | Mobile Web, Web | Высота видимой области родительского окна. |
| `viewport_width` | `integer` | Mobile Web, Web | Ширина видимой области родительского окна. |
| `avail_height` | `integer` | Mobile Web, Web | Высота доступной области родительского окна. |
| `avail_width` | `integer` | Mobile Web, Web | Ширина доступной области родительского окна. |

В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppUpdateConfig",
    data: {
      "app" : "vkclient",
      "app_id" : "6703670",
      "appearance" : "light",
      "insets" : {
          "top" : 0,
          "left" : 0,
          "right" : 0,
          "bottom" : 0
      },
      "scheme": "client_light",
      "start_time" : 1565272434.911599
    }
  }
}
```

## Пример обработки события

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
