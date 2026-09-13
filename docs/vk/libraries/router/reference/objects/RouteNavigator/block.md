# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator | RouteNavigator.block

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/block](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/block)
<!-- libraries/router/reference/objects/RouteNavigator/block -->

# RouteNavigator.block

Устанавливает функцию для блокировки переходов с текущего экрана.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();

  // используем useCallback - чтобы ссылка на функцию не менялась
  const blockerFunction: BlockerFunction = useCallback({ 
    historyAction, 
    nextLocation 
  }) => {
    let result : boolean;

    if ( /* check conditions */ )
        result = false;
    else {
        result = true;
        // показываем сообщение
        alert('Заполните данные, чтобы перейти');
    }    
    // true — блокируем переход, false — разрешаем
    return result;
  }, []);
  
  useEffect(() => {
    // получаем функцию для удаления блокировщика
    const unblocker = routeNavigator.block(blockerFunction);

    // при unmount компонента удаляем блокировщик
    return () => unblocker();
  }, [blockerFunction])

  return (<>...</>)
}
```

## Объявление

```TypeScript
block(onLeave: BlockerFunction): () => void;
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `onLeave`&#x0d;&#x0a;*обязательный* | [`BlockerFunction`](libraries/router/blocking-navigation) | Функция, которую роутер будет вызывать каждый раз при попытке перехода с текущего экрана для проверки того, возможен переход или нет. Подробнее о параметрах этой функции и значении, которое она возвращает — в разделе [Блокировка навигации](libraries/router/blocking-navigation). |

## Результат

Метод `block` возвращает функцию, вызов которой приводит к удалению функции-блокиратора, переданной в параметре `onLeave`.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Блокировка навигации](libraries/router/blocking-navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
