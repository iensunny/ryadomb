# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.hidePopout

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/hidePopout](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/hidePopout)
<!-- libraries/router/reference/objects/RouteNavigator/hidePopout -->

# RouteNavigator.hidePopout

Сбрасывает внутренний указатель роутера на всплывающее окно, что приводит к закрытию всплывающего окна, если оно отображается.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const routeNavigator = useRouteNavigator();
  
const popup =
    <Alert
      actions={[
        {
          title: 'Забрать',
          mode: 'destructive',
        },
      ]}
      onClose={() => routeNavigator.hidePopout() /* Вызов метода */}
      header="Еда персика"
      text="Забрать у Персика еду?"
    />;
}
```

## Объявление

```TypeScript
hidePopout(): Promise<void>;
```

## Параметры

Не используются.

## Результат

Объект `Promise`, который разрешается, если модальное окно было скрыто успешно. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Материалы по теме

* [Открытие компонентов Popout](libraries/router/modal-windows#Открытие%20компонентов%20Popout)

* [RouteNavigator.showPopout](libraries/router/reference/objects/RouteNavigator/showPopout)

* [usePopout](libraries/router/reference/hooks/usePopout)

* [RouteNavigator.hideModal](libraries/router/reference/objects/RouteNavigator/hideModal)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
