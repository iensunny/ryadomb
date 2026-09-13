# Установка и подключение

> Источник: [https://dev.vk.ru/ru/libraries/router/setup](https://dev.vk.ru/ru/libraries/router/setup)
[vk-mini-apps-router](libraries/router) — библиотека с открытым кодом. Вы можете найти её исходные файлы в репозитории на GitHub: https://github.com/VKCOM/vk-mini-apps-router.

Скачивать исходники и собирать библиотеку необязательно. Воспользуйтесь готовым пакетом. Подробные инструкции — ниже.  

## Шаг 1. Включите библиотеку в ваш проект

1. Откройте окно командной строки.

1. Перейдите в папку своего проекта и добавьте к проекту библиотеку vk-mini-apps-router.

    Для этого выполните следующие команды:

    ```Командная&nbsp;строка
    cd c:/my-project

    yarn add @vkontakte/vk-mini-apps-router
    — или —
    npm install @vkontakte/vk-mini-apps-router --save
    ```

## Шаг 2. Подключите библиотеку и создайте роутер

Библиотека vk-mini-apps-router даёт возможность создавать роутеры разных типов. Они работают сходным образом, но предназначены для разных видов приложений и различаются форматом ссылок на маршруты. Подробности — в разделе [Типы роутеров](libraries/router/router-types).

1. Чтобы создать экземпляр [роутера](libraries/router), вызовите одну из функций:

    * [`createHashRouter(...)`](libraries/router/reference/functions/createHashRouter) — создаёт роутер типа [Hash](libraries/router/router-types#Hash-роутер). Он используется в веб-приложениях, которые запускаются на платформе ВКонтакте.

    * [`createHashParamRouter(...)`](libraries/router/reference/functions/createHashParamRouter) — создаёт роутер типа [HashParam](libraries/router/router-types#HashParam-роутер). Он также используется в веб-приложениях, которые запускаются на платформе ВКонтакте, но использует другой формат внешних ссылок по сравнению с роутером Hash.

    * [`createBrowserRouter(...)`](libraries/router/reference/functions/createBrowserRouter) — создаёт роутер типа [Browser](libraries/router/router-types#Browser-роутер). Он используется в веб-приложениях, которые запускаются вне платформы ВКонтакте.

    Все функции в качестве параметра принимают массив объектов, описывающих маршруты, которые используются вашим приложением. Подробнее — в разделе [Настройка маршрутов](libraries/router/setting-routes).

    ```TypeScript
    import { createHashRouter } from '@vkontakte/vk-mini-apps-router';
    const router = createHashRouter([ /* описание путей приложения */] );
    // или
    const router = createHashParamsRouter([ /* описание путей приложения */] );
    // или
    const router = createBrowserRouter([ /* описание путей приложения */] );
    ```

1. В коде приложения оберните компонент вашего приложения — `App`&nbsp;— в [`RouterProvider`](libraries/router/reference/components/RouterProvider) и передайте последнему созданный роутер.

    ```TypeScript
    import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
    import App from './App';

    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    ```

Ниже — полный пример кода с подключением библиотеки [VKUI](libraries/vkui).

```TypeScript
import { RouterProvider, createHashRouter } from '@vkontakte/vk-mini-apps-router';
import { createRoot } from 'react-dom/client';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { App } from './App';

const router = createHashRouter([
  {
    path: '/',
    panel: 'home_panel',
    view: 'default_view',
  },
]);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <AppRoot>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </AppRoot>
    </AdaptivityProvider>
  </ConfigProvider>
);
```

## Шаг 3. Используйте роутер для отрисовки страниц

Роутер предоставляет идентификаторы React-компонентов, которые необходимы для отрисовки текущей страницы. Чтобы получить эту информацию, вызовите функцию [`useActiveVkuiLocation()`](libraries/router/reference/hooks/useActiveVkuiLocation). Далее полученные данные передайте JSX-элементам для отрисовки.

```TypeScript
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel } from '@vkontakte/vkui';

export function App() {
  // Получение информации о View и Panel  
  const { view: activeView } = useActiveVkuiLocation();
  const activePanel = useGetPanelForView('default_view'); 

  return(
    // Передача идентификатора View для отрисовки
    <Root activeView={activeView}>
      // // Получение идентификатора Panel для отрисовки
      <View nav="default_view" activePanel={activePanel}>
        <Panel nav="home_panel"><!-- Содержимое страницы Home --></Panel>
        <Panel nav="persik_panel"><!-- Содержимое страницы Persik --></Panel>
        // Другие компоненты Panel
      </View>
      // Другие компоненты View
    </Root>
  )
}
```

При [навигации в приложении](libraries/router/navigation) происходит смена активных компонентов. Библиотека возвращает активные компоненты как результат вызова [`useActiveVkuiLocation()`](libraries/router/reference/hooks/useActiveVkuiLocation) и [`useGetPanelForView()`](libraries/router/reference/hooks/useGetPanelForView). При последующей отрисовке именно они будут выведены на экран.

:::note
**Важно!** Вызовы `useActiveVkuiLocation()`, `useGetPanelForView()`, а также других хуков библиотеки, должны проходить в рамках компонента `<RouterProvider>...</RouterProvider>`.
:::

## Что дальше

После подключения библиотеки и добавления кода для отрисовки:

* [Настройте маршруты](libraries/router/setting-routes), используемые вашим приложением.

* Добавьте код для [навигации по экранам](libraries/router/navigation).

* Рассмотрите необходимость обработки ошибки, которая возникнет при [переходе по несуществующему маршруту](libraries/router/handling-errors).

## Материалы по теме

* [Настройка маршрутов](libraries/router/setting-routes)

* [Навигация в приложении](libraries/router/navigation)

* [Обработка ошибок](libraries/router/handling-errors)

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [Поддержка анимации](libraries/router/animation)

* [Библиотека vk-mini-apps-router](libraries/router)
