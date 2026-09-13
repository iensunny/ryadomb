# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useFirstPageCheck

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useFirstPageCheck](https://dev.vk.ru/ru/libraries/router/reference/hooks/useFirstPageCheck)
<!-- libraries/router/reference/hooks/useFirstPageCheck -->

# useFirstPageCheck

Используйте эту функцию, чтобы проверить, является ли текущая страница приложения первой загруженной страницей приложения. Это помогает обработать ситуации, когда пользователь нажимает «Назад», находясь на первой странице.

## Пример

```TypeScript
import { useFirstPageCheck } from '@vkontakte/vk-mini-apps-router';

// Проверка, является ли страница первой загруженной
const isFirstPage = useFirstPageCheck();
<PanelHeader
  before={<PanelHeaderBack onClick={() => isFirstPage ? routeNavigator.replace('/') : routeNavigator.back()} />}
>
```

## Объявление

```TypeScript
export function useFirstPageCheck(): boolean
```

## Параметры

Не используются.

## Результат

Функция возвращает `true`, если текущая страница приложения является первой страницей, на которую пользователь перешёл после запуска приложения, и `false` в ином случае.

Используя результат, можно [обработать ситуации](libraries/router/navigation#Навигация%20назад), когда пользователь нажимает кнопку «Назад», находясь на первой загруженной странице.

## Особенности использования

Вызовы функции `useFirstPageCheck()` должны проходить в рамках компонента [`RouterProvider`](libraries/router/reference/components/RouterProvider).


## Материалы по теме

* [Навигация назад](libraries/router/navigation#Навигация%20назад)

* [Справочник vk-mini-apps-router](libraries/router/reference)
