# HistoryManager.getCurrentPosition

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/HistoryManager/getCurrentPosition](https://dev.vk.ru/ru/libraries/router/reference/objects/HistoryManager/getCurrentPosition)
Возвращает текущее положение в стеке истории.

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

## Объявление

```TypeScript
getCurrentPosition(): number;
```

## Параметры

Не используются.

## Результат

Текущее положение в стеке истории.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [История навигации](libraries/router/navigation_history)

* [Объект HistoryManager](libraries/router/reference/objects/HistoryManager)

* [Метод HistoryManager.getHistory](libraries/router/reference/objects/HistoryManager/getHistory)

* [Справочник vk-mini-apps-router](libraries/router/reference)
