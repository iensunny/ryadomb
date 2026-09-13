# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteWithRoot

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteWithRoot](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteWithRoot)
<!-- libraries/router/reference/objects/RouteWithRoot -->

# RouteWithRoot

Объект `RouteWithRoot` описывает маршрут в React-приложении, созданном с помощью библиотеки [VKUI](libraries/vkui). Маршрут определяет, какой экран или окно должно быть отображено при передаче приложению того или иного URL.

:::note
**Важно.** Используйте объект `RouteWithRoot` в приложении, которое содержит несколько компонентов [`Root`](https://vkui.io/components/root) и использует компонент [`Epic`](https://vkui.io/components/epic).

Если в вашем приложении только один `Root`, для указания маршрутов используйте объект [`RouteWithoutRoot`](libraries/router/reference/objects/RouteWithoutRoot).
:::

## Пример

```TypeScript
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';

// Указание маршрутов с помощью RouteWithRoot 
const router = createHashRouter([
  {
    path: '/',
    root: 'home_root',
    panel: 'home_panel',
    view: 'default_view',
  },
  {
    path: '/contacts',
    root: 'properties_root',
    panel: 'contacts_panel',
    view: 'contacts_view',
  }
]);

<RouterProvider router={router}>
    <App />
</RouterProvider>
```

#### Другие примеры

Примеры использования объекта `RouteWithRoot` можно найти в разделах [Настройка маршрутов](libraries/router/setting-routes) и [Поддержка модальных и всплывающих окон](libraries/router/modal-windows).

## Объявление

```TypeScript
interface CommonRouteObject {
  path: string;
}

export interface PanelWithRoot extends CommonRouteObject {
  root: string;
  view: string;
  panel: string;
  tab?: string;
}

export interface ModalWithRoot extends PanelWithRoot {
  modal: string;
}

export type RouteWithRoot = PanelWithRoot | ModalWithRoot;
```

## Свойства

<!-- Объект `RouteWithRoot` наследует свойства [`CommonRouteObject`](libraries/router/objects/CommonRouteObject). -->

| Свойство | Тип | Описание |
| --- | --- | --- |
| `path`&#x0d;&#x0a;*обязательное* | `string` | URL маршрута.&#x0d;&#x0a;&#x0d;&#x0a;Не указывайте символ `#` и слово `path` в URL, в них [нет необходимости](libraries/router/hash-in-links).<!-- &#x0d;&#x0a;Свойство наследовано от [`CommonRouteObject`](libraries/router/objects/CommonRouteObject). -->&#x0d;&#x0a;&#x0d;&#x0a;Если указать `path: '*'`, роутер будет использовать этот маршрут при всякой попытке перехода по адресу, для которого маршрут не задан. Другими словами, вы можете использовать `path: '*'` для обработки ошибки 404 Not Found. Подробности — в разделе [Обработка ошибок](libraries/router/handling-errors). |
| `root`&#x0d;&#x0a;*обязательное* | `string`| Идентификатор компонента [`Root`](https://vkui.io/components/root), который будет использоваться при переходе в приложении по URL, указанному в `path`. |
| `view`&#x0d;&#x0a;*обязательное* | `string`| Идентификатор компонента [`View`](https://vkui.io/components/view), который будет использоваться при переходе в приложении по URL, указанному в `path`. |
| `panel`&#x0d;&#x0a;*обязательное* | `string`| Идентификатор компонента [`Panel`](https://vkui.io/components/panel), который будет использоваться при переходе в приложении по URL, указанному в `path`. |
| `modal`&#x0d;&#x0a;*необязательное* | `string`| Идентификатор компонента [`ModalPage`](https://vkui.io/components/modal-page) или [`ModalCard`](https://vkui.io/components/modal-card), который будет использоваться при переходе в приложении по URL, указанному в `path`. |
| `tab`&#x0d;&#x0a;*необязательное* | `string`| Идентификатор компонента [`Tabs`](https://vkui.io/components/tabs), который будет использоваться при переходе в приложении по URL, указанному в `path`. |

## Материалы по теме

* [Настройка маршрутов](libraries/router/setting-routes)

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [Объект RouteWithoutRoot](libraries/router/reference/objects/RouteWithoutRoot)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Справочник vk-mini-apps-router](libraries/router/reference)
