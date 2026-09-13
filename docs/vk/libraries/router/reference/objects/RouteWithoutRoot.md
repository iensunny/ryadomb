# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteWithoutRoot

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteWithoutRoot](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteWithoutRoot)
<!-- libraries/router/reference/objects/RouteWithoutRoot -->

# RouteWithoutRoot

Объект `RouteWithoutRoot` описывает маршрут в React-приложении, созданном с помощью библиотеки [VKUI](libraries/vkui). Маршрут определяет, какой экран или окно должно быть отображено при передаче приложению того или иного URL.

:::note
**Важно!** Используйте объект `RouteWithoutRoot` в приложении, которое использует только один компонент [`Root`](https://vkui.io/components/root).

Если в вашем приложении несколько `Root`, для указания маршрутов используйте объект [`RouteWithRoot`](libraries/router/reference/objects/RouteWithRoot).
:::

## Пример

```TypeScript
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';

// Указание маршрутов с помощью RouteWithoutRoot 
const router = createHashRouter([
  {
    path: '/',
    panel: 'home_panel',
    view: 'default_view',
  },
  {
    path: '/contacts',
    panel: 'contacts_panel',
    view: 'contacts_view',
  }
]);

<RouterProvider router={router}>
    <App />
</RouterProvider>
```

#### Другие примеры

Примеры использования объекта `RouteWithoutRoot` можно найти в разделах [Настройка маршрутов](libraries/router/setting-routes) и [Поддержка модальных и всплывающих окон](libraries/router/modal-windows).

## Объявление

```TypeScript
interface CommonRouteObject {
  path: string;
}

export interface PanelWithoutRoot extends CommonRouteObject {
  view: string;
  panel: string;
}

export interface ModalWithoutRoot extends PanelWithoutRoot {
  modal: string;
}

export type RouteWithoutRoot = PanelWithoutRoot | ModalWithoutRoot;
```

## Свойства

<!-- Объект `RouteWithoutRoot` наследует свойства [`CommonRouteObject`](libraries/router/objects/CommonRouteObject). -->

| Свойство | Тип | Описание |
| --- | --- | --- |
| `path`&#x0d;&#x0a;*обязательное* | `string` | URL маршрута.&#x0d;&#x0a;&#x0d;&#x0a;Не указывайте символ `#` и слово `path` в URL, в них [нет необходимости](libraries/router/hash-in-links).<!-- &#x0d;&#x0a;Свойство наследовано от [`CommonRouteObject`](libraries/router/objects/CommonRouteObject). -->&#x0d;&#x0a;&#x0d;&#x0a;Если указать `path: '*'`, роутер будет использовать этот маршрут при всякой попытке перехода по адресу, для которого маршрут не задан. Другими словами, вы можете использовать `path: '*'` для обработки ошибки 404 Not Found. Подробности — в разделе [Обработка ошибок](libraries/router/handling-errors).|
| `view`&#x0d;&#x0a;*обязательное* | `string`| Идентификатор компонента [`View`](https://vkui.io/components/view), который будет использоваться при переходе в приложении по URL, указанному в `path`. |
| `panel`&#x0d;&#x0a;*обязательное* | `string`| Идентификатор компонента [`Panel`](https://vkui.io/components/panel), который будет использоваться при переходе в приложении по URL, указанному в `path`. |
| `modal`&#x0d;&#x0a;*необязательное* | `string`| Идентификатор компонента [`ModalPage`](https://vkui.io/components/modal-page) или [`ModalCard`](https://vkui.io/components/modal-card), который будет использоваться при переходе в приложении по URL, указанному в `path`. |

## Материалы по теме

* [Настройка маршрутов](libraries/router/setting-routes)

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [Объект RouteWithRoot](libraries/router/reference/objects/RouteWithRoot)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Справочник vk-mini-apps-router](libraries/router/reference)
