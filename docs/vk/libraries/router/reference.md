# Библиотеки | vk-mini-apps-router | Справочник

> Источник: [https://dev.vk.ru/ru/libraries/router/reference](https://dev.vk.ru/ru/libraries/router/reference)
<!-- libraries/router/reference -->

# Справочник

Этот раздел содержит описание React-компонентов, функций и объектов, предоставляемых библиотекой [vk-mini-apps-router](libraries/router).

## Компоненты

| Компонент | Описание |
| --- | --- |
| [RouterLink](libraries/router/reference/components/RouterLink) | Компонент для удобного создания ссылок на экраны вашего React-приложения. |
| [RouterProvider](libraries/router/reference/components/RouterProvider) | Компонент-обёртка для вашего React-приложения. Необходим для использования функций и объектов библиотеки во вложенных компонентах. |

## Функции

| Функция | Описание |
| --- | --- |
| [createBrowserRouter](libraries/router/reference/functions/createBrowserRouter) | Используется для создания экземпляра [Browser-роутера](libraries/router/router-types#Browser-роутер) и указания маршрутов. |
| [createHashParamRouter](libraries/router/reference/functions/createHashParamRouter) | Используется для создания экземпляра [HashParam-роутера](libraries/router/router-types#HashParam-роутер) и указания маршрутов. |
| [createHashRouter](libraries/router/reference/functions/createHashRouter) | Используется для создания экземпляра [Hash-роутера](libraries/router/router-types#Hash-роутер) и указания маршрутов. |

## Hooks

| Hook | Описание |
| --- | --- |
| [useActiveVkuiLocation](libraries/router/reference/hooks/useActiveVkuiLocation) | Используется для получения React-компонентов, которые должны быть отображены на экране для текущего URL приложения. |
| [useEnableSwipeBack](libraries/router/reference/hooks/useEnableSwipeBack) | Используется для включения поддержки жеста Swipe Back в мини-приложениях, запущенных в мобильном приложении ВКонтакте для iOS. |
| [useFirstPageCheck](libraries/router/reference/hooks/useFirstPageCheck) | Используется для проверки, находится ли пользователь на странице, на которую он зашёл первой при работе с приложением в текущую сессию. |
| [useGetPanelForView](libraries/router/reference/hooks/useGetPanelForView) | Используется для получения информации о компоненте `Panel` указанного `View`. |
| [useHref](libraries/router/reference/hooks/useHref) | Создаёт ссылку для открытия экрана приложения. Формат зависит от [типа роутера](libraries/router/router-types), используемого в приложении. |
| [useLinkClickHandler](libraries/router/reference/hooks/useLinkClickHandler) | Создаёт код для обработчика `onClick`-сообщения для перехода по указанному адресу. |
| [useMetaParams](libraries/router/reference/hooks/useMetaParams) | Возвращает данные, которые были переданы с помощью [специального параметра](libraries/router/parameters#Дополнительные%20параметры%20методов%20push()%20и%20replace()) методов [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) и [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace). |
| [useParams](libraries/router/reference/hooks/useParams) | Возвращает значение параметров, которые указаны как часть URL, например `/user/:id/edit/:contacts`. |
| [usePopout](libraries/router/reference/hooks/usePopout) | Возвращает JSX-объект, который будет отображён как [Popout-компонент](libraries/router/modal-windows#Открытие%20компонентов%20Popout). |
| [useRouteNavigator](libraries/router/reference/hooks/useRouteNavigator) | Возвращает объект [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator), который используется для навигации в приложении. |
| [useSearchParams](libraries/router/reference/hooks/useSearchParams) | Возвращает значение параметров, которые указаны в URL после символа `?`, например `/contacts/edit?param1=value1`. |

## Объекты

| Функция | Описание |
| --- | --- |
| [NavigationOptions](libraries/router/reference/objects/NavigationOptions) | Вспомогательный объект, используемый при навигации в приложении с помощью методов [RouteNavigator](libraries/router/reference/objects/RouteNavigator). |
| [RouteNavigator](libraries/router/reference/objects/RouteNavigator) | Используется для навигации в приложении: переходов по страницам, открытия модальный и всплывающих окон, изменения истории переходов. |
| [RouteWithoutRoot](libraries/router/reference/objects/RouteWithoutRoot) | Применяется для указания маршрутов в приложениях, которые используют только один VKUI-компонент [`Root`](https://vkui.io/components/root). |
| [RouteWithRoot](libraries/router/reference/objects/RouteWithRoot) | Применяется для указания маршрутов в приложениях, которые используют несколько VKUI-компонентов [`Root`](https://vkui.io/components/root). |

## Материалы по теме

* [Библиотека vk-mini-apps-router](libraries/router)
