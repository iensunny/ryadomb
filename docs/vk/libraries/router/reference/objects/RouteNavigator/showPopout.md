# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.showPopout

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/showPopout](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/showPopout)
<!-- libraries/router/reference/objects/RouteNavigator/showPopout -->

# RouteNavigator.showPopout

Указывает JSX-объект, который будет использован как всплывающий компонент.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const  TestPopout = () => {
    const routeNavigator = useRouteNavigator();
    return ( 
        <Alert actions = {[
            {
              title: 'Отмена',
              autoClose: true,
              mode: 'cancel',
            },
            {
              title: 'Да',
              autoClose: true,
              mode: 'destructive',
              action: () => console.log('Кнопка нажата.'), // Можно убрать, если некрасиво
            },
          ]}
          actionsLayout = "horizontal"
          onClose = { () => routeNavigator.hidePopout() }
          header = "..."
          text = "..." />
    );
}

const popout = TestPopout();
<Button stretched size="l" mode="secondary" onClick={() => routeNavigator.showPopout(popout)}>Открыть</Button>
```

## Объявление

```TypeScript
showPopout(popout: JSX.Element): Promise<void>;
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `popout`&#x0d;&#x0a;*обязательный* | `JSX.Element` | JSX-элемент, который будет использован как всплывающий компонент. Вы можете использовать любой подходящий для этой цели компонент библиотеки [VKUI](libraries/vkui), например, [`ActionSheet`](https://vkui.io/components/action-sheet), [`Alert`](https://vkui.io/components/alert), [`ScreenSpinner`](https://vkui.io/components/spinner) или [`Snackbar`](https://vkui.io/components/snackbar). |

## Результат

Объект `Promise`, который разрешается, если всплывающее окно было успешно открыто. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Особенности использования

* Метод `showPopout` не отображает всплывающее окно. Он только сообщает движку, какой React-компонент будет использован для показа.

    Чтобы получить установленный таким образом компонент, используйте функцию [`usePopout()`](libraries/router/reference/hooks/usePopout).

* Вызов метода `showPopout` не приводит к смене текущего URL приложения.

<!-- * При открытии всплывающего окна роутер добавляет в историю переходов запись об открытии этого окна. Если всплывающее окно открывается поверх другого всплывающего окна, то роутер заменит запись в истории, а не добавит новую. -->

* Если в момент вызова метода открыто другое всплывающее окно, оно будет заменено тем, которое вы указали в параметрах метода `showPopout`.

* Нажатие на кнопку «Назад» в браузере или на мобильном устройстве приводит к закрытию Popout-компонента, который был открыт с помощью `showPopout`.

## Материалы по теме

* [Открытие компонентов Popout](libraries/router/modal-windows#Открытие%20компонентов%20Popout)

* [RouteNavigator.hidePopout](libraries/router/reference/objects/RouteNavigator/hidePopout)

* [usePopout](libraries/router/reference/hooks/usePopout)

* [RouteNavigator.showModal](libraries/router/reference/objects/RouteNavigator/showModal)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Справочник vk-mini-apps-router](libraries/router/reference)
