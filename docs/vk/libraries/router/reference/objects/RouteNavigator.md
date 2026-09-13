# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator)
<!-- libraries/router/reference/objects/RouteNavigator -->

# RouteNavigator

Объект `RouteNavigator` используется для навигации в приложении: перехода на страницы, открытия и закрытия модальных и всплывающих окон, работы с историей переходов.

Чтобы получить объект `RouteNavigator`, вызовите функцию [`useRouteNavigator()`](libraries/router/reference/hooks/useRouteNavigator).

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  // Получение объекта RouteNavigator  
  const routeNavigator = useRouteNavigator();
  
  return (
    // Вызов метода объекта RouteNavigator
    <Button onClick={() => routeNavigator.back()}>Вернуться</Button>
  );
}
```

## Свойства 

Объект не содержит свойств.

## Методы

| Метод | Описание |
| --- | --- |
| [`back`](libraries/router/reference/objects/RouteNavigator/back) | Возвращается на предыдущий экран. |  
| [`backToFirst`](libraries/router/reference/objects/RouteNavigator/backToFirst) | Переходит на экран, который был открыт первым при входе пользователя в приложение. |  
| [`block`](libraries/router/reference/objects/RouteNavigator/block) | Устанавливает функцию, которая блокирует или разрешает переход с текущего экрана. |
| [`go`](libraries/router/reference/objects/RouteNavigator/go) | Делает скачок на указанное количество шагов вперёд или назад по истории переходов. |  
| [`hideModal`](libraries/router/reference/objects/RouteNavigator/hideModal) | Закрывает модальное окно в приложении.  |  
| [`hidePopout`](libraries/router/reference/objects/RouteNavigator/hidePopout) | Закрывает всплывающее окно в приложении.  |
| [`push`](libraries/router/reference/objects/RouteNavigator/push) | Переходит на новый URL в приложении и добавляет запись в историю переходов.  |  
| [`replace`](libraries/router/reference/objects/RouteNavigator/replace) | Переходит на новый URL в приложении и заменяет текущую запись в истории переходов.  |  
| [`runSync`](libraries/router/reference/objects/RouteNavigator/runSync) | Выполняет несколько переходов один за другим, при этом завершает их одновременно. |  
| [`showModal`](libraries/router/reference/objects/RouteNavigator/showModal) | Открывает модальное окно в приложении. |  
| [`showPopout`](libraries/router/reference/objects/RouteNavigator/showPopout) | Открывает всплывающее окно в приложении. |  

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Поддержка модальных и всплывающих окон](libraries/router/modal-windows)

* [Объект NavigationOptions](libraries/router/reference/objects/NavigationOptions)

* [Справочник vk-mini-apps-router](libraries/router/reference)
