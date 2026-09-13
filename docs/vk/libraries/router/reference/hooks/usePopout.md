# Библиотеки | vk-mini-apps-router | Справочник | Hoos | usePopout

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/usePopout](https://dev.vk.ru/ru/libraries/router/reference/hooks/usePopout)
<!-- libraries/router/reference/hooks/usePopout -->

# usePopout

Функция возвращает JSX-объект, который был указан в вызове метода [`RouteNavigator.showPopout(...)`](libraries/router/reference/objects/RouteNavigator/showPopout) и который должен быть показан, как Popout-компонент.

## Пример

```TypeScript
import { usePopout } from '@vkontakte/vk-mini-apps-router';

// Получаем установленный popout
const routerPopout = usePopout();

// Передаём popout в компонент.
// Компонент покажет popout, когда это будет необходимо
<SplitLayout popout={routerPopout}>
/* ... */
</SplitLayout>
```

## Параметры

Не используются.

## Объявление

```TypeScript
export function usePopout(): JSX.Element | null
```

## Результат

JSX-компонент, который будет отображен в виде всплывающего окна, либо `null`, если такой компонент не был установлен с помощью вызова метода [`RouteNavigator.showPopout(...)`](libraries/router/reference/objects/RouteNavigator/showPopout).

## Материалы по теме

* [Открытие компонентов `Popout`](libraries/router/modal-windows#Открытие%20компонентов%20Popout)

* [Справочник vk-mini-apps-router](libraries/router/reference)
