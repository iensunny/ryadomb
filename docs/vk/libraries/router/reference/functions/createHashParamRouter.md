# Библиотеки | vk-mini-apps-router | Справочник | Функции | createHashParamRouter

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/functions/createHashParamRouter](https://dev.vk.ru/ru/libraries/router/reference/functions/createHashParamRouter)
<!-- libraries/router/reference/functions/createHashParamRouter -->

# createHashParamRouter

Используйте эту функцию, чтобы создать [HashParam-роутер](libraries/router) в своём React-приложении.

HashParam-роутер предназначен для игр и мини-приложений, которые запускаются на платформе ВКонтакте: в мобильном приложении ВКонтакте или из десктопной или мобильной версии сайта.

При использовании этого роутера внешние ссылки на экраны приложения должны содержать символ `#` и ключевое слово `path`, например:

```
https://vk.com/app12345/#path=%2Fpersik-screen&param1=value1&param2=value2
```

Используйте этот роутер, если ваше приложение передаёт параметры после символа # в URL.

В качестве параметра функция `createHashParamRouter(...)` принимает массив, элементы которого описывают маршруты — какой экран или окно будут открыты при переходе в приложении по тому или иному URL.

## Пример

```TypeScript
import { RouterProvider, createHashParamRouter } from '@vkontakte/vk-mini-apps-router';

// Вызов функции 
const router = createHashParamRouter([
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

## Объявление

```TypeScript
export function createHashParamRouter(routes: RouteWithRoot[] | RouteWithoutRoot[]): RemixRouter
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `routes`&#x0d;&#x0a;*обязательный* | [`RouteWithRoot[]`](libraries/router/reference/objects/RouteWithRoot) или&#x0d;&#x0a;[`RouteWithoutRoot[]`](libraries/router/reference/objects/RouteWithoutRoot) | Массив объектов, описывающих маршруты.&#x0d;&#x0a;&#x0d;&#x0a;Если в приложении несколько компонентов [`Root`](https://vkui.io/components/root) и используется [`Epic`](https://vkui.io/components/epic, массив должен состоять из объектов [`RouteWithRoot`](libraries/router/reference/objects/RouteWithRoot).&#x0d;&#x0a;&#x0d;&#x0a;В ином случае элементы массива — объекты [`RouteWithoutRoot`](libraries/router/reference/objects/RouteWithoutRoot). |

## Результат

Объект [`RemixRouter`](https://github.com/remix-run/react-router/tree/main/packages/router). Определён в библиотеке [`@remix-run/react-router`](https://github.com/remix-run/react-router).

## Особенности использования

При создании маршрутов <!-- внутри приложения --> не используйте символ `#` и ключевое слово `path` в URL, в них [нет необходимости](libraries/router/hash-in-links).

## Материалы по теме

* [Установка и подключение](libraries/router/setup)

* [Настройка маршрутов](libraries/router/setting-routes)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Объект RouteWithRoot](libraries/router/reference/objects/RouteWithRoot)

* [Объект RouteWithoutRoot](libraries/router/reference/objects/RouteWithoutRoot)

* [Функция createHashRouter](libraries/router/reference/functions/createHashRouter)

* [Функция createBrowserRouter](libraries/router/reference/functions/createBrowserRouter)

* [Справочник vk-mini-apps-router](libraries/router/reference)
