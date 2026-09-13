# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.hideModal

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/hideModal](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/hideModal)
<!-- libraries/router/reference/objects/RouteNavigator/hideModal -->

# RouteNavigator.hideModal

Скрывает открытое модальное окно.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

<ModalRoot
  activeModal={activeModal}
  onClose={() => routeNavigator.hideModal()}
>
  <PersikModal nav='persik_modal'></PersikModal>
  <UserModal nav='user_modal'></UserModal>
</ModalRoot>
```

## Объявление

```TypeScript
hideModal(pushPanel?: boolean, options?: {replace: boolean}): Promise<void>;
```

## Параметры

### Параметры функции

| Параметр | Тип | Описание |
| --- | --- | --- |
| `pushPanel`&#x0d;&#x0a;*необязательный* | `boolean` | Определяет действие при закрытии окна.&#x0d;&#x0a;&#x0d;&#x0a;Если параметр равен `false`, то роутер делает шаг назад по истории переходов.&#x0d;&#x0a;&#x0d;&#x0a;Если параметр равен `true`, роутер делает шаг вперёд, на панель, указанную в маршруте модального окна. Эта функциональность работает, если для модального окна был [определён маршрут](libraries/router/setting-routes).&#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию: `false`. |
| `options` | `object` | Объект, который описывает [свойства перехода](#Свойства%20перехода). |

### Свойства перехода

| Поле | Тип | Описание |
| --- | --- | --- |
| `replace`&#x0d;&#x0a;*необязательный* | `boolean` | Если параметр равен `true`, модальное окно закрывается без добавления записи в `history`. При этом должно выполняться одно из условий:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `pushPanel`=`true`.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; Запись с модальным окном первая в истории переходов. Например, если в приложение перешли по прямой ссылке.&#x0d;&#x0a;&#x0d;&#x0a;Если параметр равен `false`, модальное окно закрывается с добавлением записи в `history`. &#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию `false`.|

## Результат

Объект `Promise`, который разрешается, если модальное окно было скрыто успешно. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Материалы по теме

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [RouteNavigator.showModal](libraries/router/reference/objects/RouteNavigator/showModal)

* [RouteNavigator.hidePopout](libraries/router/reference/objects/RouteNavigator/hidePopout)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
