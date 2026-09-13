# HistoryManager.getHistory

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/HistoryManager/getHistory](https://dev.vk.ru/ru/libraries/router/reference/objects/HistoryManager/getHistory)
Возвращает стек истории.

## Пример

```TypeScript
import React from 'react';
import { useHistoryManager, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Group, Header, Cell, Button, Div } from '@vkontakte/vkui';

export function SomePage() {
  const historyManager = useHistoryManager();
  const routeNavigator = useRouteNavigator();
  const history = historyManager.getHistory();

  return (
    <Group header={<Header>История навигации</Header>}>
      {history.map((record) => (
        <Div key={record.locationKey}>
          <Div>{`Путь: ${record.path}`}</Div>
          <Div>{`Позиция: ${record.position}`}</Div>
        </Div>
      ))}
    </Group>
  );
}
```

## Объявление

```TypeScript
getHistory(): ViewNavigationRecord[];
```

## Параметры

Не используются.

## Результат

Стек записей [`ViewNavigationRecord[]`](libraries/router/navigation_history#ViewNavigationRecord).


## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [История навигации](libraries/router/navigation_history)

* [Объект HistoryManager](libraries/router/reference/objects/HistoryManager)

* [Метод HistoryManager.getCurrentPosition](libraries/router/reference/objects/HistoryManager/getCurrentPosition)

* [Справочник vk-mini-apps-router](libraries/router/reference)
