# История навигации

> Источник: [https://dev.vk.ru/ru/libraries/router/navigation-history](https://dev.vk.ru/ru/libraries/router/navigation-history)
Для отслеживания историй переходов используйте объект [`HistoryManager`](libraries/router/reference/objects/HistoryManager) из библиотеки [vk-mini-apps-router](libraries/router). Он содержит методы для доступа к истории переходов и к текущей позиции в этой истории.

| Метод | Описание |
| --- | --- |
| [`getCurrentPosition`](libraries/router/reference/objects/HistoryManager/getCurrentPosition) | Возвращает текущее положение в стеке истории. |  
| [`getHistory`](libraries/router/reference/objects/HistoryManager/getHistory) | Возвращает стек истории — [`ViewNavigationRecord`](#ViewNavigationRecord). |

## Пример

Чтобы получить объект `HistoryManager`, вызовите функцию [`useHistoryManager()`](libraries/router/reference/hooks/useHistoryManager).

```TypeScript
import { useHistoryManager, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const historyManager = useHistoryManager();
  const routeNavigator = useRouteNavigator();
  const currentPosition = historyManager.getCurrentPosition();
  const historyStack = historyManager.getHistory();
  return (
    ...
  );
}
```

## ViewNavigationRecord

История переходов состоит из записей `ViewNavigationRecord`. Объект `ViewNavigationRecord` содержит следующие свойства:

| Свойство | Тип | Описание |
| --- | --- | --- |
| `position` | `number`| Номер записи. |
| `locationKey` | `string` | Уникальный идентификатор перехода. |
| `path` | `string` | Путь записи. |
| `state` | `object` | Состояние роутера. |
| `params` | `object` | Хранит query-параметры. |
| `view` | `string` | Текущий `view`. |
| `panel ` | `string` | Текущий `panel`. |
| `root`&#x0d;&#x0a;*необязательное* | `string` | Текущий `root`. |
| `tab`&#x0d;&#x0a;*необязательное* | `string` | Текущий `tab`. |
| `modal`&#x0d;&#x0a;*необязательное* | `string` | Текущий `modal`. |
| `popout`&#x0d;&#x0a;*необязательное* | `string` | Текущий `popout`. |

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Объект HistoryManager](libraries/router/reference/objects/HistoryManager)

* [Метод HistoryManager.getCurrentPosition](libraries/router/reference/objects/HistoryManager/getCurrentPosition)

* [Метод HistoryManager.getHistory](libraries/router/reference/objects/HistoryManager/getHistory)

* [Использование параметров](libraries/router/parameters)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Библиотека vk-mini-apps-router](libraries/router)
