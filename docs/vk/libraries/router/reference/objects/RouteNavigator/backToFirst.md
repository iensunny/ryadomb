# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.backToFirst

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/backToFirst](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/backToFirst)
<!-- libraries/router/reference/objects/RouteNavigator/backToFirst -->

# RouteNavigator.backToFirst

Переходит назад по истории навигации на первую страницу приложения, которую открыл пользователь. Вызывает отрисовку этой страницы.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();
  
  return (
    // Вызов метода
    <Button onClick={() => routeNavigator.backToFirst()}>На первую страницу</Button>
  );
}
```

## Объявление

```TypeScript
backToFirst(): Promise<void>;
```

## Параметры

Не используются.

## Результат

Объект `Promise`, который разрешается при успешном выполнении перехода. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [RouteNavigator.back](libraries/router/reference/objects/RouteNavigator/back)

* [RouteNavigator.go](libraries/router/reference/objects/RouteNavigator/go)

* [RouteNavigator.runSync](libraries/router/reference/objects/RouteNavigator/runSync)

* [RouteNavigator.push](libraries/router/reference/objects/RouteNavigator/push)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
