# HistoryManager

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/HistoryManager](https://dev.vk.ru/ru/libraries/router/reference/objects/HistoryManager)
Объект `HistoryManager` используется для получения доступа к истории переходов и к текущей позиции в этой истории.

Чтобы получить объект `HistoryManager`, вызовите функцию [`useHistoryManager()`](libraries/router/reference/hooks/useHistoryManager).

## Пример

```TypeScript
import { useHistoryManager, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const historyManager = useHistoryManager();
  const routeNavigator = useRouteNavigator();
  const currentPosition = historyManager.getCurrentPosition();

  return (
    <Button onClick={() => routeNavigator.go(-currentPosition)}>
     На первую страницу в стеке
    </Button>
  );
}
```

## Свойства 

Объект не содержит свойств.

## Методы

| Метод | Описание |
| --- | --- |
| [`getCurrentPosition`](libraries/router/reference/objects/HistoryManager/getCurrentPosition) | Возвращает текущее положение в стеке истории. |  
| [`getHistory`](libraries/router/reference/objects/HistoryManager/getHistory) | Возвращает стек истории. |

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [Функция useHistoryManager](libraries/router/reference/hooks/useHistoryManager)

* [Справочник vk-mini-apps-router](libraries/router/reference)
