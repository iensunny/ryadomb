# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useActiveVkuiLocation

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useActiveVkuiLocation](https://dev.vk.ru/ru/libraries/router/reference/hooks/useActiveVkuiLocation)
<!-- libraries/router/reference/hooks/useActiveVkuiLocation -->

# useActiveVkuiLocation

Используйте эту функцию, чтобы получить информацию об активных компонентах для отрисовки вашего приложения.

## Пример

```TypeScript
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

export function App() {
  // Получаем активные View и Panel
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

  return(
    // Указываем View и Panel для отрисовки
    <Root activeView={activeView}>
      <View nav="default_view" activePanel={activePanel}> 
        <Panel nav="home_panel">...</Panel>
        <Panel nav="persik_panel">...</Panel>
      </View>
    </Root>
  )
}
```

#### Другие примеры

Примеры вызова функции также можно найти в следующих разделах:

* [Установка и подключение — Шаг 3. Используйте роутер для отрисовки страниц](libraries/router/setup#Шаг%203.%20Используйте%20роутер%20для%20отрисовки%20страниц)

* [Навигация в приложении — Как работает переход?](libraries/router/navigation/#Как%20работает%20переход?)

* [Поддержка анимации](libraries/router/animation)

## Объявление

```TypeScript
export function useActiveVkuiLocation(): ActiveVkuiLocationObject
```

## Параметры

Не используются.

## Результат

Функция возвращает объект `ActiveVkuiLocationObject`, содержащий информацию о компонентах, которые должны быть отображены в приложении в текущий момент.

```TypeScript
interface ActiveVkuiLocationObject {
  root?: string;
  view?: string;
  panel?: string;
  tab?: string;
  modal?: string;
  hasOverlay: boolean;
  panelsHistory: string[];
}

```

Возвращаемый объект содержит следующие свойства:

| Свойство | Тип | Описание |
| --- | --- | --- |
| `root`,&#x0d;&#x0a;`view`,&#x0d;&#x0a;`panel`,&#x0d;&#x0a;`modal`,&#x0d;&#x0a;`tab` | `string`| Идентификаторы компонентов [`Root`](https://vkui.io/components/root), [`View`](https://vkui.io/components/view), [`Panel`](https://vkui.io/components/panel), [`ModalPage`](https://vkui.io/components/modal-page) или [`ModalCard`](https://vkui.io/components/modal-card), [`Tabs`](https://vkui.io/components/tabs), которые указаны в маршруте и должны быть видны в приложении в момент вызова.&#x0d;&#x0a;&#x0d;&#x0a;Свойства могут содержать `undefined` в следующих случаях:&#x0d;&#x0a; &nbsp;&nbsp; &bull; Компоненты не указаны в маршруте. Например, если в маршруте не указан `modal`, то свойство `modal` будет равно `undefined`.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Переданный маршрут не был определён в приложении (ошибка 404).&#x0d;&#x0a; &nbsp;&nbsp; &bull; Свойство `tab` может быть пустым, если на странице нет компонентов `Tab` или ни один из них не был выбран. |
| `hasOverlay` | `boolean` | Открыто ли в приложении модальное или всплывающее окно (`true`) или нет (`false`). |
| `panelsHistory` | `string[]` | История переходов по панелям текущего `View`. Каждый элемент массива — идентификатор компонента `Panel`.&#x0d;&#x0a;&#x0d;&#x0a;Если свойство `view` равно `undefined`, свойство содержит пустой массив.&#x0d;&#x0a;&#x0d;&#x0a;Пример использования свойства `panelsHistory` смотрите в разделе [Поддержка анимации](libraries/router/animation). |

## Особенности использования

* Вызовы функции `useActiveVkuiLocation()` должны проходить в рамках компонента [`RouterProvider`](libraries/router/reference/components/RouterProvider).

* Если ваше приложение использует несколько `View` в рамках одного компонента `Root`, то для определения `Panel` мы рекомендуем использовать функцию [`useGetPanelForView()`](libraries/router/reference/hooks/useGetPanelForView), a не `useActiveVKuiLocation()`.

## Материалы по теме

* [Установка и подключение](libraries/router/setup)

* [Настройка маршрутов](libraries/router/setting-routes)

* [Навигация в приложении](libraries/router/navigation)

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [useGetPanelForView](libraries/router/reference/hooks/useGetPanelForView)

* [Справочник vk-mini-apps-router](libraries/router/reference)
