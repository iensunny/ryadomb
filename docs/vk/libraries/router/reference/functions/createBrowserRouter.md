# Библиотеки | vk-mini-apps-router | Справочник | Функции | createBrowserRouter

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/functions/createBrowserRouter](https://dev.vk.ru/ru/libraries/router/reference/functions/createBrowserRouter)
<!-- libraries/router/reference/functions/createBrowserRouter -->

# createBrowserRouter

Используйте эту функцию, чтобы создать [Browser-роутер](libraries/router/router-types#Browser-роутер) в своём React-приложении. Роутер предназначен для веб-приложений, которые используют библиотеку [VKUI](libraries/vkui) и запускаются вне ВКонтакте.

При использовании этого роутера в приложении внешние ссылки на экраны приложения не должны содержать символ `#`, например:

```
https://my-server.com/persik-screen
```

В качестве параметра функция принимает массив, элементы которого описывают маршруты — какой экран или окно будут открыты при переходе в приложении по тому или иному URL.

## Пример

```TypeScript
import { RouterProvider, createBrowserRouter } from '@vkontakte/vk-mini-apps-router';

// Вызов функции 
const router = createBrowserRouter([
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

## Объявление

```TypeScript
export function createBrowserRouter(routes: RouteWithRoot[] | RouteWithoutRoot[]): RemixRouter
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `routes`&#x0d;&#x0a;*обязательный* | [`RouteWithRoot[]`](libraries/router/reference/objects/RouteWithRoot) или&#x0d;&#x0a;[`RouteWithoutRoot[]`](libraries/router/reference/objects/RouteWithoutRoot) | Массив объектов, описывающих маршруты.&#x0d;&#x0a;&#x0d;&#x0a;Если в приложении несколько компонентов [`Root`](https://vkui.io/components/root) и используется [`Epic`](https://vkui.io/components/epic, массив должен состоять из объектов [`RouteWithRoot`](libraries/router/reference/objects/RouteWithRoot).&#x0d;&#x0a;&#x0d;&#x0a;В ином случае элементы массива — объекты [`RouteWithoutRoot`](libraries/router/reference/objects/RouteWithoutRoot). |

## Результат

Объект [`RemixRouter`](https://github.com/remix-run/react-router/tree/main/packages/router). Определён в библиотеке [`@remix-run/react-router`](https://github.com/remix-run/react-router).

## Особенности использования

При указании маршрутов не используйте символ `#` в URL.

## Материалы по теме

* [Установка и подключение](libraries/router/setup)

* [Настройка маршрутов](libraries/router/setting-routes)

* [Объект RouteWithRoot](libraries/router/reference/objects/RouteWithRoot)

* [Объект RouteWithoutRoot](libraries/router/reference/objects/RouteWithoutRoot)

* [Функция createHashRouter](libraries/router/reference/functions/createHashRouter)

* [Функция createHashParamRouter](libraries/router/reference/functions/createHashParamRouter)

* [Справочник vk-mini-apps-router](libraries/router/reference)
