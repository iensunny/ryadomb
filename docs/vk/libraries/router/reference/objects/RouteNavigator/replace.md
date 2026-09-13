# Библиотеки | vk-mini-apps-router | Справочник | Объекты | RouteNavigator.replace

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/replace](https://dev.vk.ru/ru/libraries/router/reference/objects/RouteNavigator/replace)
<!-- libraries/router/reference/objects/RouteNavigator/replace -->

# RouteNavigator.replace

Выполняет переход на новый URL, но не добавляет запись в историю переходов, а заменяет текущую. Вызывает отрисовку компонентов, соответствующих новому URL.

## Пример

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const persikPanel = routes.default_root.default_view.persik_0;

  return (
    <Button 
      onClick={() => 
        routeNavigator.replace(
          '/emotion-panel/:emotion', 
          {emotion: 'fish' }, 
          { keepSearchParams: true }
        )
      }
    >
      Персик хочет кушать
    </Button>

    <Button 
      onClick={() => 
        routeNavigator.replace('/path', {keepSearchParams:true })
      }
    >
      Персик хочет кушать
    </Button>

    <Button 
      onClick={() => 
        routeNavigator.replace({search: {fish: 'beluga'}}, hash: '12'});
      }
    >
      Остаться на странице и изменить hash и search
    </Button>

    <Button 
      onClick={() => 
        routeNavigator.replace(
          {
            pathname: persikPanel, 
            hash: '12'
          }, 
          {
            emotion: 'sad'
          }, 
          {
            keepSearchParams: true
          }
        );
      }
    >
     Персик хочет кушать
    </Button>
}
```

## Параметры

### Вариант 1

```TypeScript
replace(to: string | Page | {pathname?: string | Page, hash?: string, search?: URLSearchParams | Record<string, string> | string}, options?: NavigationOptions): Promise<void>
```

| Параметр | Тип | Описание |
| --- | --- | --- |
| `to`&#x0d;&#x0a;*обязательный* | [`NavigationTarget`](libraries/router/navigation#NavigationTarget) | Конечная точка для перехода. Можно указать одним из трёх способов. Подробности — в разделе [NavigationTarget](libraries/router/navigation#NavigationTarget). |
| `options`&#x0d;&#x0a;*необязательный* | [`NavigationOptions`](libraries/router/reference/objects/NavigationOptions) | Вспомогательный параметр, используемый при навигации.&#x0d;&#x0a;&#x0d;&#x0a;Если установить в параметре передать `{keepSearchParams: true}`, то [роутер](libraries/router) сохранит query-параметры из текущего URL при переходе на новый адрес.&#x0d;&#x0a;&#x0d;&#x0a;C помощью свойства `{state: {...}}` можно передавать параметры при переходе. Подробности — в разделе [Передача параметров — Дополнительные параметры методов `push()` и `replace()`](libraries/router/parameters#Дополнительные%20параметры%20методов%20push()%20и%20replace()). |

### Вариант 2

```TypeScript
replace<T extends string>(to: PageWithParams<T> | {pathname: PageWithParams<T> | string, hash?: string, search?: URLSearchParams | Record<string, string> | string}, params: Params<T>, options?: NavigationOptions): Promise<void>
```

| Параметр | Тип | Описание |
| --- | --- | --- |
| `T`&#x0d;&#x0a;*необязательный* | `object` | Объект, который может использоваться для типизации параметров `to` и `params`. |
| `to`&#x0d;&#x0a;*обязательный* | [`NavigationTarget`](libraries/router/navigation#NavigationTarget) | Конечная точка для перехода. Можно указать одним из трёх способов. Подробности — в разделе [NavigationTarget](libraries/router/navigation#NavigationTarget). |
| `params`&#x0d;&#x0a;*обязательный* | `object` | Объект, поля которого содержат значения [path-параметров](libraries/router/parameters#Path-параметры), указанных в пути.&#x0d;&#x0a;&#x0d;&#x0a;Указать path-параметры можно и в `to`. Использование `params` может быть удобнее при кодировании и понятнее при чтении кода. Подробности — в разделе [Path-параметры](libraries/router/parameters#Path-параметры). |
| `options`&#x0d;&#x0a;*необязательный* | [`NavigationOptions`](libraries/router/reference/objects/NavigationOptions) | Вспомогательный параметр, используемый при навигации. Значение такое же, как в [Варианте 1](#Вариант%201). |

## Результат

Объект `Promise`, который разрешается при успешном выполнении перехода. Работает в служебных целях. Использовать этот объект в своём коде, как правило, нет необходимости.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Использование параметров](libraries/router/parameters)

* [RouteNavigator.push](libraries/router/reference/objects/RouteNavigator/back)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Справочник vk-mini-apps-router](libraries/router/reference)
