# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useRouteNavigator

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useRouteNavigator](https://dev.vk.ru/ru/libraries/router/reference/hooks/useRouteNavigator)
<!-- libraries/router/reference/hooks/useRouteNavigator -->

# useRouteNavigator

Используйте эту функцию, чтобы получить объект [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator), который используется для [навигации по экранам приложения](libraries/router/navigation).

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();
  
  return (
    <Button onClick={() => routeNavigator.back()}>Назад</Button>
  );
}
```

## Параметры

Не используются.

## Объявление

```TypeScript
export function useRouteNavigator(): RouteNavigator { ... }
```

## Результат

Объект [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator).

## Особенности использования

Вызовы функции `useRouteNavigator()` должны проходить в рамках компонента [`RouterProvider`](libraries/router/reference/components/RouterProvider).

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
