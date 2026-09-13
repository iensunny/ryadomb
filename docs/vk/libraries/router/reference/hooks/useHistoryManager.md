# useHistoryManager

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useHistoryManager](https://dev.vk.ru/ru/libraries/router/reference/hooks/useHistoryManager)
Используйте эту функцию, чтобы получить объект [HistoryManager](libraries/router/reference/objects/HistoryManager), который используется для доступа к истории навигации в приложении.

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

## Параметры

Не используются.

## Объявление

```TypeScript
export function useHistoryManager(): HistoryManager
```

## Результат

Объект [`HistoryManager`](libraries/router/reference/objects/HistoryManager).


## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)

* [Объект HistoryManager](libraries/router/reference/objects/HistoryManager)
