# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useGetPanelForView

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useGetPanelForView](https://dev.vk.ru/ru/libraries/router/reference/hooks/useGetPanelForView)
<!-- libraries/router/reference/hooks/useGetPanelForView -->

# useGetPanelForView

Используйте эту функцию, чтобы получить информацию о компоненте [`Panel`](https://vk.cc/coLTeC), который должен отображаться в указанном [`View`](https://vk.cc/coLTdF) при переходе на другой `View`. Эта информация нужна для правильной работы VKUI-анимации при смене `View`.

## Пример

```TypeScript
import { useGetPanelForView } from '@vkontakte/vk-mini-apps-router';

const defaultActivePanel = useGetPanelForView(DEFAULT_VIEW);
const emptyActivePanel = useGetPanelForView(EMPTY_VIEW);

<View
nav={DEFAULT_VIEW}
history={history}
activePanel={defaultActivePanel || DEFAULT_VIEW_PANELS.HOME}
onSwipeBack={() => routeNavigator.back()}
>
<View
nav={EMPTY_VIEW}
history={history}
activePanel={emptyActivePanel || EMPTY_VIEW_PANELS.EMPTY}
onSwipeBack={() => routeNavigator.back()}
>
```

#### Другой пример

Пример вызова функции также можно найти в разделе [Установка и подключение — Шаг 3. Используйте роутер для отрисовки страниц](libraries/router/setup#Шаг%203.%20Используйте%20роутер%20для%20отрисовки%20страниц).

## Объявление

```TypeScript
export function useGetPanelForView(view?: string): string | undefined
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- | 
| `view`&#x0d;&#x0a;*необязательный* | `string` | Идентификатор компонента [`View`](https://vk.cc/coLTdF), для которого нужно получить информацию об отображаемом [`Panel`](https://vk.cc/coLTeC).&#x0d;&#x0a;&#x0d;&#x0a;Если параметр отсутствует, функция будет использовать ту же информацию об активной панели, которую можно получить, вызвав [`useActiveVkuiLocation()`](libraries/router/reference/hooks/useActiveVkuiLocation). |

## Результат

Идентификатор компонента [`Panel`](https://vk.cc/coLTeC), который будет использоваться в отрисовке VKUI-анимации при смене `View`.

## Особенности использования

* Вызовы функции `useGetPanelForView()` должны проходить в рамках компонента [`RouterProvider`](libraries/router/reference/components/RouterProvider).

* Используйте `useGetPanelForView()` в приложениях, которые сдержат несколько компонентов [`View`](https://vk.cc/coLTdF) в одном компоненте [`Root`](https://vk.cc/coLTaN). Если в приложении один `View` в `Root`, то достаточно использовать информацию о [`Panel`](https://vk.cc/coLTeC), которую вы получаете от [`useActiveVkuiLocation()`](libraries/router/reference/hooks/useActiveVkuiLocation).

* Функция возвращает один компонент `Panel` для одного `View`. Чтобы получить `Panel` для разных `View`, вызовите функцию несколько раз.

## Материалы по теме

* [Установка и подключение](libraries/router/setup)

* [useActiveVkuiLocation](libraries/router/reference/hooks/useActiveVkuiLocation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
