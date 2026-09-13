# Библиотеки | vk-mini-apps-router | Справочник | Функции | createHashRouter

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/functions/createHashRouter](https://dev.vk.ru/ru/libraries/router/reference/functions/createHashRouter)
<!-- libraries/router/reference/functions/createHashRouter -->

# createHashRouter

Используйте эту функцию, чтобы создать [Hash-роутер](libraries/router/router-types#Hash-роутер) в своём React-приложении.

Hash-роутер предназначен для игр и мини-приложений, которые запускаются на платформе ВКонтакте: в мобильном приложении ВКонтакте или из десктопной или мобильной версии сайта. При использовании этого роутера внешние ссылки на экраны приложения должны содержать символ `#`, например:

```
https://vk.com/app12345/#/persik-screen
```

В качестве параметра функция принимает массив, элементы которого описывают маршруты — какой экран или окно будут открыты при переходе в приложении по тому или иному URL.

## Пример

```TypeScript
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';

// Вызов функции 
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

// Передача созданного роутера в компонент
<RouterProvider router={router}>
    <App />
</RouterProvider>
```

Обратите внимание, что в поле `path` символ `#` не указывается.

#### Другие примеры

Примеры использования функции можно также найти в разделах [Установка и подключение](libraries/router/setup) и [Настройка маршрутов](libraries/router/setting-routes).

## Объявление

```TypeScript
export function createHashRouter(routes: RouteWithRoot[] | RouteWithoutRoot[]): RemixRouter
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `routes`&#x0d;&#x0a;*обязательный* | [`RouteWithRoot[]`](libraries/router/reference/objects/RouteWithRoot) или&#x0d;&#x0a;[`RouteWithoutRoot[]`](libraries/router/reference/objects/RouteWithoutRoot) | Массив объектов, описывающих маршруты.&#x0d;&#x0a;&#x0d;&#x0a;Если в приложении несколько компонентов [`Root`](https://vkui.io/components/root) и используется [`Epic`](https://vkui.io/components/epic, массив должен состоять из объектов [`RouteWithRoot`](libraries/router/reference/objects/RouteWithRoot).&#x0d;&#x0a;&#x0d;&#x0a;В ином случае элементы массива — объекты [`RouteWithoutRoot`](libraries/router/reference/objects/RouteWithoutRoot). |

## Результат

Объект [`RemixRouter`](https://github.com/remix-run/react-router/tree/main/packages/router). Определён в библиотеке [`@remix-run/react-router`](https://github.com/remix-run/react-router).

## Особенности использования

При создании маршрутов <!-- внутри приложения --> не используйте символ `#` в URL, в нём [нет необходимости](libraries/router/hash-in-links).

## Материалы по теме

* [Установка и подключение](libraries/router/setup)

* [Настройка маршрутов](libraries/router/setting-routes)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Объект RouteWithRoot](libraries/router/reference/objects/RouteWithRoot)

* [Объект RouteWithoutRoot](libraries/router/reference/objects/RouteWithoutRoot)

* [Функция createHashParamRouter](libraries/router/reference/functions/createHashParamRouter)

* [Функция createBrowserRouter](libraries/router/reference/functions/createBrowserRouter)

* [Справочник vk-mini-apps-router](libraries/router/reference)
