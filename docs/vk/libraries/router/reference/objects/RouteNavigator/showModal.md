# RouteNavigator.showModal

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/showModal](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/showModal)
Открывает модальное окно, указанное параметрами.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();
  
  return (
    // Вызов метода
    <Button onClick={() => routeNavigator.showModal(`modal_contacts`)}>Контакты</Button>
  );
}
```

## Объявление

```TypeScript
showModal(id: string, options?: { state?: Object }): Promise<void>;
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `id`&#x0d;&#x0a;*обязательный* | `string` | Идентификатор модального окна, которое нужно открыть.  |
| `options` | `object` | Объект, который описывает [свойства перехода](#Свойства%20перехода). |

### Свойства перехода

| Поле | Тип | Описание |
| --- | --- | --- |
| `state`&#x0d;&#x0a;*необязательный* | `object` | Значение или объект, который будет передан при переходе на новую страницу. Подробности использования — в разделе [Передача параметров](libraries/router/navigation#Передача%20параметров). |

## Результат

Объект `Promise`, который разрешается, если модальное окно было открыто успешно. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Особенности использования

* Модальные и всплывающие окна, открытые в момент вызова метода `showModal`, будут скрыты.

* Метод не меняет текущий URL приложения, но добавляет в историю переходов запись об открытии модального окна.
Если модальное окно открывается поверх другого модального окна, метод заменяет запись в истории, а не добавляет новую.

## Материалы по теме

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [RouteNavigator.hideModal](libraries/router/reference/objects/RouteNavigator/hideModal)

* [RouteNavigator.showPopout](libraries/router/reference/objects/RouteNavigator/showPopout)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
