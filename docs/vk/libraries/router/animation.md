# Поддержка анимации

> Источник: [https://dev.vk.ru/ru/libraries/router/animation](https://dev.vk.ru/ru/libraries/router/animation)
Ключевая особенность библиотеки [vk-mini-apps-router](libraries/router) — поддержка компонентов, предоставляемых библиотекой VKUI, и обеспечение надёжной анимации этих компонентов.

Компонент [`View`](https://vkui.io/components/view) в библиотеке VKUI позволяет плавно переходить между панелями [с помощью жеста Swipe Back](https://vkui.io/components/view). Для этой функциональности необходима информация об истории переходов. Чтобы её получить, вызовите функцию [`useActiveVkuiLocation()`](libraries/router/reference/hooks/useActiveVkuiLocation). Она вернёт массив `panelsHistory` с нужными данными. Пример использования — ниже.

```TypeScript
import { Root, View, Panel } from '@vkontakte/vkui';
import { useRouteNavigator, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

function App() {
  const {
    view: activeView,
    panel: activePanel,
    panelsHistory, // Получение данных об истории переходов
  } = useActiveVkuiLocation();

  const routeNavigator = useRouteNavigator();
  
  return (
    <Root activeView={activeView}>
      <View
        nav="default_view"
        history={panelsHistory} // Передача данных истории переходов
        activePanel={activePanel}
        onSwipeBack={() => routeNavigator.back()}
      >
        <Panel nav="home_panel">Содержимое страницы</Panel>
        <Panel nav="persik_panel">Содержимое страницы</Panel>
      </View>
    </Root>
  );
}
```

## Материалы по теме

* [Использование для отрисовки страниц](libraries/router/setup#Шаг%203.%20Используйте%20роутер%20для%20отрисовки%20страниц)

* [Навигация в приложении](libraries/router/navigation)

* [useActiveVkuiLocation](libraries/router/reference/hooks/useActiveVkuiLocation)

* [useGetPanelForView](libraries/router/reference/hooks/useGetPanelForView)

* [Библиотека vk-mini-apps-router](libraries/router)
