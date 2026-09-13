#### Модуль: [4. Разработка](mini-apps/learning/course/4-development)

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/7-vkui-adaptivity](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/7-vkui-adaptivity)
# Урок 7. Вёрстка под vk.com и m.vk.com

:::vkvideo
https://vk.com/video-166562603_456239280
:::

## Главное в уроке

* Практически все компоненты библиотеки VKUI адаптируются под габариты экрана. В нашем приложении-примере, например, экран с информацией о блюде отображается в десктопных браузерах и на мобильных устройствах по-разному.

* Чтобы информация о параметрах адаптируемости передавалась в компоненты приложения, верхнеуровневый элемент приложения надо обернуть в [`AdaptivityProvider`](https://vkui.io/components/adaptivity-provider), который, в свою очередь, должен находиться в `ConfigProvider`.

    ```TypeScript
    <ConfigProvider> // Надо добавить этот компонент
      <AdaptivityProvider {...adaptivity}> // Надо добавить этот компонент
        <DataContextProvider>
          <AppRoot>
            <RouterProvider router={router}>
              <App /> // Приложение
            </RouterProvider>
          </AppRoot>
        </DataContextProvider>
      </AdaptivityProvider>
    </ConfigProvider>
    ```

* Чтобы получить информацию о размерах экрана и других параметрах, важных для адаптируемости приложения, используйте функцию `useAdaptivityConditionalRender()`.

* Для получения уведомлений об изменениях цветовой схемы и размеров экрана, подпишитесь в коде приложения на событие [`VKWebAppUpdateConfig`](https://dev.vk.com/bridge/VKWebAppUpdateConfig).

* Чтобы изменить размеры элемента `<iframe>`, в котором отображается мини-приложение в десктопной версии сайта ВКонтакте, используйте событие [`VKWebAppResizeWindow`](https://dev.vk.com/bridge/VKWebAppResizeWindow).

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend),    
    cмотрите фрагменты кода по #M4L7.
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Адаптивность (документация VKUI)](https://vkui.io/overview/adaptivity)
* [Событие VKWebAppUpdateConfig](https://dev.vk.com/bridge/VKWebAppUpdateConfig)
* [Событие VKWebAppResizeWindow](https://dev.vk.com/bridge/VKWebAppResizeWindow)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/6-subscribe)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/8-working-with-backend)
:::
