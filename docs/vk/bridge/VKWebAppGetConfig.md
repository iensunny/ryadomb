# VK Bridge | VKWebAppGetConfig

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetConfig](https://dev.vk.ru/ru/bridge/VKWebAppGetConfig)
<!-- ---
title: 'VK Bridge | Служебные | VKWebAppGetConfig'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetConfig

`VKWebAppGetConfig` получает информацию о конфигурации мини-приложения или игры, а также информацию о родительском приложении, в котором открыто мини-приложение или игра.

## Рекомендации

* Используйте это событие, если вам нужно получить конфигурацию до вызова события инициализации [`VKWebAppInit`](bridge/VKWebAppInit). В остальных случаях используйте стандартный способ получения конфигурации — подпишитесь на событие [`VKWebAppUpdateConfig`](bridge/VKWebAppUpdateConfig).
* Чтобы определить цветовую схему до получения данных от платформы, используйте свойство [`prefers-color-scheme`](https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-color-scheme).

## Пример

```JavaScript
bridge.send('VKWebAppGetConfig')
  .then((data) => { 
    if (data.api_host) {
      // Информация получена
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
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

Чтобы проверить результат, используйте:

* Объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* Событие [`VKWebAppGetConfigResult`](#События).

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

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
| `is_layer` | `boolean` | Web  | Признак того, что мини-приложение или игра открыты в слое. |
| `scheme` | `string` | Android, iOS, Mobile Web, Web | Цветовая схема мини-приложения или игры. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `space_gray` — тёмная схема мобильного приложения и мобильной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `bright_light` — светлая схема мобильного приложения и мобильной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkcom_light` — светлая схема десктопной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkcom_dark` — тёмная схема десктопной версии сайта. |
| `start_time` | `integer` | Android, iOS | Время и дата открытия модального экрана ([Unix Timestamp](https://www.unixtimestamp.com/)). Передаётся только при открытии модального экрана. |
| `viewport_height` | `integer` | Mobile Web, Web | Высота видимой области родительского окна. |
| `viewport_width` | `integer` | Mobile Web, Web | Ширина видимой области родительского окна. |
| `avail_height` | `integer` | Mobile Web, Web | Высота доступной области родительского окна. |
| `avail_width` | `integer` | Mobile Web, Web | Ширина доступной области родительского окна. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetConfigResult`

Сигнализирует, что информация получена. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetConfigResult",
    data: {
      "scheme": "vkcom_light",
      "appearance": "light",
      "adaptivity": "auto",
      "integration": "fullscreen",
      "app": "vk.com",
      "app_id": 1234567,
      "vk_platform": "desktop_web",
      "back_button": "close",
      "api_host": "api.vk.ru",
      "viewport_width": 1103,
      "viewport_height": 722,
      "avail_width": 1103,
      "avail_height": 722
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetConfigFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).


## Материалы по теме

* [VKWebAppUpdateConfig](bridge/VKWebAppUpdateConfig)
