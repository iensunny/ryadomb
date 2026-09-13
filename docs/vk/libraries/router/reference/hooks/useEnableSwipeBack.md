# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useEnableSwipeBack

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useEnableSwipeBack](https://dev.vk.ru/ru/libraries/router/reference/hooks/useEnableSwipeBack)
<!-- libraries/router/reference/hooks/useEnableSwipeBack -->

# useEnableSwipeBack

Включает использование VKUI-анимации для переходов, которые выполняются с помощью жеста Swipe Back («смахнуть назад») в [мини-приложениях](mini-apps/overview), запущенных в мобильном приложении ВКонтакте для iOS.

## Пример

```TypeScript
import { useEnableSwipeBack } from '@vkontakte/vk-mini-apps-router';

export const Home = () => {
    useEnableSwipeBack(); // Страница будет поддерживать VKUI-анимации при работе жеста Swipe Back
    
    return ( ... );
}
```

## Объявление

```TypeScript
export function useEnableSwipeBack() : void
```

## Параметры

Не используются.

## Результат

Функция не возвращает значений или объектов.

## Особенности использования

* [VKUI](libraries/vkui)-анимации работают при переходах между компонентами [`Panel`](https://vkui.io/components/panel) в рамках одного [`View`](https://vkui.io/components/view). Эти анимации работают неправильно, когда активен обработчик жеста Swipe Back, предоставляемый iOS. `useEnableSwipeBack()` переключает приложение на VKUI-обработчик.  

    Вызывайте `useEnableSwipeBack()` на первых (по логике) страницах. Например, если у вас в приложении есть каталог товаров и карточки отдельных товаров, то `useEnableSwipeBack()` надо вызывать на странице каталога. Это активирует обработку жеста Swipe Back и для остальных экранов, работающих в пределах этого же `View`. При смене `View` вызов надо будет повторить.

    <!-- Повторный вызов `useEnableSwipeBack()` в рамках работы в переделах одного и того же `View` приведёт к отключению [VKUI](libraries/vkui)-анимаций. -->

    Подробности обработки жеста Swipe Back вы можете найти в документации компонента [VKUI View](https://vkui.io/components/view).<!-- (https://vkcom.github.io/VKUI/#/View?id=iosswipeback). -->

    Если логика работы `useEnableSwipeBack()` вам не подходит, вы можете его не использовать. Реализуйте свою логику с помощью события [`VKWebAppSetSwipeSettings`](bridge/VKWebAppSetSwipeSettings) библиотеки [VK Bridge](bridge/overview).

    
* Вызовы функции `useEnableSwipeBack()` должны проходить в рамках компонента [`RouterProvider`](libraries/router/reference/components/RouterProvider).

## Материалы по теме

* [VKUI View](https://vkui.io/components/view) <!-- [VKUI: View &rarr; iOS Swipe Back](https://vkcom.github.io/VKUI/#/View?id=iosswipeback) -->

* [Событие VKWebAppSetSwipeSettings](bridge/VKWebAppSetSwipeSettings)

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
