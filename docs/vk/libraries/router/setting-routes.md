# Настройка маршрутов

> Источник: [https://dev.vk.ru/ru/libraries/router/setting-routes](https://dev.vk.ru/ru/libraries/router/setting-routes)
Маршрут определяет, какие React-компоненты ваше приложение отображает для того или иного URL. Другими словами, это соответствие между URL-строкой, например `/user/contacts`, и React-компонентами [`Root`](https://vkui.io/components/root), [`View`](https://vkui.io/components/view), [`Panel`](https://vkui.io/components/panel), [`ModalPage`](https://vkui.io/components/modal-page), [`ModalCard`](https://vkui.io/components/modal-card), [`Tabs`](https://vkui.io/components/tabs), которые будут задействованы для отрисовки.

Библиотека поддерживает два способа настройки маршрутов:

* [Базовый](#Базовый%20подход) — в нём маршруты указываются с помощью идентификаторов нужных объектов. Подход прост для понимания и реализации.  

* [С помощью типизированных объектов](#Типизированные%20объекты%20для%20настройки%20маршрутов) — способ похож на базовый, но использует вызовы дополнительных функций для создания нужных объектов-маршрутов. Удобен тем, что в дальнейшем при создании кода навигации среда разработки будет показывать подсказки с именами объектов и требуемыми параметрами.

Рассмотрим эти подходы подробнее.

## Базовый подход

Маршруты задаются с помощью объектов, которые определяют соответствие между каким-либо URL внутри приложения и React-компонентами, которые отвечают за отрисовку страницы. Посмотрите следующий пример.

```TypeScript

import { RouteWithRoot, createHashRouter } from '@vkontakte/vk-mini-apps-router';

// Массив объектов, указывающих маршруты
const routes: RouteWithRoot[] = [
  {
    path: '/',            // Путь
    panel: 'home_panel',  // Желаемый Panel
    view: 'default_view', // Желаемый View
    root: 'default_root', // Желаемый Root
  },
  {
    path: `/user`,
    modal: 'user_modal', // Модальное окно
    panel: 'home_panel',
    view: 'default_view',
    root: 'default_root',
  },
  {
    path: `/persik/:emotion`,
    tab:  'emotion_tab', // Tab
    panel: 'persik_panel',
    view: 'default_view',
    root: 'default_root',
  },
  // Другие маршруты...
]

// Передайте список маршрутов в функцию создания роутера
const router = createHashRouter(routes);

```

В примере выше мы создали массив объектов [`RouteWithRoot`](libraries/router/reference/objects/RouteWithRoot). Этот объект применяется, когда мини-приложение использует несколько компонентов `Root`. Свойство `path` этого объекта определяет URL экрана, остальные параметры — `root`, `view`, `panel`, `modal` и `tab` — определяют компоненты UI, ответственные за отрисовку нужной страницы.

Если в вашем приложении только один `Root`, вы можете использовать массив объектов [`RouteWithoutRoot`](libraries/router/reference/objects/RouteWithoutRoot). У этого объекта нет свойства `root`, а остальные свойства такие же, как у `RouteWithRoot`: `path`, `view`, `panel`, `modal`, `tab`.

```TypeScript
// Массив объектов, указывающих маршруты
const routes: RouteWithoutRoot[] = [
  {
    path: `/user`,
    modal: 'user_modal',
    panel: 'home_panel',
    view: 'default_view'
  },
  // Другие маршруты...
]
```

Путь может содержать один или несколько параметров:

```TypeScript
// Массив объектов, указывающих маршруты
const routes: RouteWithoutRoot[] = [
  {
    path: `/user/:id`, // Использование параметра
    modal: 'user_modal',
    panel: 'home_panel',
    view: 'default_view'
  },
  // Другие маршруты...
]
```

Подробнее об этом — в разделе [Использование параметров](libraries/router/parameters).

Если для маршрута указать `path: '*'`, то роутер будет использовать этот маршрут при переходе по адресам, которые не определены. Другими словами, маршрут с `path: '*'` можно использовать для обработки ошибки 404 Not Found. Подробнее — в разделе [Обработка ошибок](libraries/router/handling-errors).

## Типизированные объекты для настройки маршрутов

Маршруты можно объявить с использованием специальных объектов, которые соответствуют компонентам `Root`, `View`, `Panel`, `ModalPage` или `ModalCard`, `Tab`. Чтобы создать эти объекты, вызовите функции `createRoot(...)`, `createView(...)`, `createPanel(...)`, `createModal(...)`, как показано в примере ниже.

```TypeScript
import {
  createHashRouter,
  createModal,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

// Создание массива объектов
export const routes = RoutesConfig.create([
  createRoot('default_root', [
    createView('default_view', [
      createPanel('home_panel', `/`),
      createPanel('persik_panel', `/persik/:emotion`, [
        createModal('persik_modal', `/persik/:emotion/modal`, ['emotion'] as const),
        // Другие createModal(...)
      ], ['emotion'] as const),
      // Другие createPanel(...)
    ]),
    // Другие createView(...)
  ]),
  // Другие createRoot(...)
]);

// Передача массива маршрутов при создании роутера 
export const router = createHashRouter(routes.getRoutes());
```

В дальнейшем при навигации в приложении к объектам массива можно будет обращаться через его переменную `routes`, которую мы создали в коде. Например, так:

```TypeScript
routes.default_root.default_view.persik_panel
```

Такой подход удобен тем, что при создании кода навигации редактор IDE будет показывает подсказки с информацией о существующих маршрутах и необходимых [параметрах](libraries/router/parameters).

## Использование параметров в путях

Подробности применения параметров — в разделе [Использование параметров](libraries/router/parameters).

## Использование # и path в путях

Обратите внимание, что мы не указывали символ `#` в начале создаваемых маршрутов. Мы также не использовали ключевое слово `path`, которое необходимо при использовании роутера вида [HashParam](libraries/routers/router-types). При создании маршрутов и навигации по страницам из кода приложения они не нужны.

Однако указывать этот символ и ключевое слово надо во внешних ссылках на страницы приложения:
```
// Hash-роутер
https://vk.com/app12345/#/persik/fish/modal

// HashParam-роутер
https://vk.com/app12345/#path=%2Fpersik%2Ffish%2Fmodal
```

Подробности — в разделе [Формат внешних и внутренних ссылок](libraries/router/hash-in-links).

## Что дальше

После создания маршрутов добавьте код для [навигации в приложении](libraries/router/navigation).

Также рассмотрите необходимость создания кода для обработки ошибки, которая возникнет при [переходе по несуществующему маршруту](libraries/router/handling-errors).

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Использование параметров](libraries/router/parameters)

* [Обработка ошибок](libraries/router/handling-errors)

* [Использование роутера для отрисовки страниц](libraries/router/setup#Шаг%203.%20Используйте%20роутер%20для%20отрисовки%20страниц)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Библиотека vk-mini-apps-router](libraries/router)
