# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.runSync

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/runSync](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/runSync)
<!-- libraries/router/reference/objects/RouteNavigator/runSync -->

# RouteNavigator.runSync

Последовательно вызывает методы объекта [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator) с гарантией, что все вызовы будут завершены одновременно.

:::note
**Важно!** Не запускайте несколько экземпляров `runSync` одновременно. Это может привести к race condition – состоянию, когда несколько процессов пытаются одновременно получить доступ к одному и тому же ресурсу и результат становится непредсказуемым. 

Чтобы избежать ошибок, не используйте метод `runSync` с другими переходами в навигации.
:::

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();
  
  // Задаём массив вызовов
  const foo = [
    () => routeNavigator.back(-2),
    () => routeNavigator.replace('/'),
    () => routeNavigator.push('/persik')
  ]);

  return (
    // Вызов метода
    <Button onClick={() => routeNavigator.runSync(foo) }>Сложный переход</Button>
  );
}
```

## Объявление

```TypeScript
runSync(actions: VoidFunction[]): Promise<void>;
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `action`&#x0d;&#x0a;*обязательный* | `VoidFunction[]` | Массив функций, каждая из которых вызывает метод объекта [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator).&#x0d;&#x0a;&#x0d;&#x0a;**Важно!** Каждая из функций должна вызывать только один метод. |

## Результат

Объект `Promise`, который разрешается при успешном выполнении перехода. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [RouteNavigator.backToFirst](libraries/router/reference/objects/RouteNavigator/backToFirst)

* [RouteNavigator.go](libraries/router/reference/objects/RouteNavigator/go)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
