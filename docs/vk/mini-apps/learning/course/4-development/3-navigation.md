#### Модуль: [4. Разработка](mini-apps/learning/course/4-development)

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/3-navigation](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/3-navigation)
# Урок 3. Роутинг

:::vkvideo
https://vk.com/video-166562603_456239275
:::

## Главное в уроке

* Для навигации в VKUI-приложениях мы рекомендуем использовать библиотеку [vk-mini-apps-router](https://dev.vk.com/libraries/router). Она учитывает все особенности VKUI. Кроме того, она может работать и в приложениях, которые запускаются на платформе VK Mini Apps, и в самостоятельных приложениях.

* После [подключения библиотеки](https://dev.vk.com/libraries/router/setup) выберите [тип используемого роутера](https://dev.vk.com/libraries/router/router-types). Он зависит от формата указания маршрута в URL.

* Маршрут определяет, какой экран должен быть отображён в зависимости от переданного URL. Вы [формируете массив маршрутов](https://dev.vk.com/libraries/router/setting-routes) в коде приложения и передаёте его в функцию создания роутера. Маршрут может содержать [параметры](https://dev.vk.com/libraries/router/parameters).

* Код, который демонстрирует подключение роутера, можно посмотреть в репозитории, который содержит исходный код урока. Подробное описание — в [документации библиотеки vk-mini-apps-router](https://dev.vk.com/libraries/router).

<!-- В коде приложения `<App />` надо обернуть в компонент `<RouterProvider>`:

    ```TypeScript
    ...
    <AppRoot>
      <RouterProvider router={router}>
        <DataContextProvider>
            <App />
        </DataContextProvider>
      </RouterProvider>
    </AppRoot>    
    ...
    ```

    Используйте хук [`useActiveVkuiLocation`](libraries/router/reference/hooks/useActiveVkuiLocation), чтобы получить информацию об активных объектах `View` и `Panel` для отрисовки, и передайте их в компоненты `Epic` и `View`.

    ```TypeScript
    import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
    ...
    const App = () => {
      const { view: activeView, panel: activePanel } = useActiveVkuiLocation();
      ...
      return (
        <Epic activeStory={activeView ?? EView.DISHES}>
          <View id={EView.DISHES} activePanel={activePanel}>
            <DishesPanel id={EPanel.DISHES} />
            <DishPanel id={EPanel.DISH} />
            <OrderPanel id={EPanel.ORDER} />
          </View>
          ...
        </Epic>)
    }
    ``` -->

* Для перехода между экранами приложения вызовите хук [`useRouteNavigator`](https://dev.vk.com/libraries/router/reference/hooks/useRouteNavigator), чтобы получить объект [`RouteNavigator`](https://dev.vk.com/libraries/router/reference/objects/RouteNavigator), и используйте методы этого объекта: [`push(...)`](https://dev.vk.com/libraries/router/reference/objects/RouteNavigator/push), [`replace(...)`](https://dev.vk.com/libraries/router/reference/objects/RouteNavigator/replace), [`back()`](https://dev.vk.com/libraries/router/reference/objects/RouteNavigator/back), [`backToFirst()`](https://dev.vk.com/libraries/router/reference/objects/RouteNavigator/backToFirst).

* Чтобы получить параметры, указанные в пути, используйте хуки [`useParams()`](https://dev.vk.com/libraries/router/reference/hooks/useParams) и [`useSearchParams()`](https://dev.vk.com/libraries/router/reference/hooks/useSearchParams).

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend),    
    cмотрите фрагменты кода по #M4L3.
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Документация библиотеки vk-mini-apps-router](https://dev.vk.com/libraries/router)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/2-vkui)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/4-modal-windows)
:::
