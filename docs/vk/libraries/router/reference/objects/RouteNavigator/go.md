# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.go

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/go](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/go)
<!-- libraries/router/reference/objects/RouteNavigator/go -->

# RouteNavigator.go

Перемещается по истории переходов на указанное количество шагов и вызывает отрисовку приложения, соответствующую новому URL.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();
  
  return (
    // Вызов метода
    <Button onClick={() => routeNavigator.go(-2)}>На два шага назад</Button>
  );
}
```

## Объявление

```TypeScript
go(to?: number): Promise<void>;
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `to`&#x0d;&#x0a;*обязательный* | `number` | Количество шагов для перемещения по истории переходов. Положительное число означает перемещение вперёд, отрицательное — назад.&#x0d;&#x0a;`0` — текущий URL приложения не меняется. |

## Результат

Объект `Promise`, который разрешается при успешном выполнении перехода. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Особенности использования

Метод использует историю переходов в браузере. 

Если параметр `to` указывает слишком большое количество шагов для возврата, то вполне возможно, что пользователь выйдет из приложения. Если количество шагов возврата больше числа записей в истории, пользователь окажется на первой записи.

Если количество шагов вперёд больше числа доступных записей в истории, пользователь окажется на последней записи.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [RouteNavigator.back](libraries/router/reference/objects/RouteNavigator/back)

* [RouteNavigator.backToFirst](libraries/router/reference/objects/RouteNavigator/backToFirst)

* [RouteNavigator.push](libraries/router/reference/objects/RouteNavigator/push)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
