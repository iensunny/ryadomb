# Библиотеки | vk-mini-apps-router | Справочник | Hoos | useMetaParams

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useMetaParams](https://dev.vk.ru/ru/libraries/router/reference/hooks/useMetaParams)
<!-- libraries/router/reference/hooks/useMetaParams -->

# useMetaParams

Используйте эту функцию, чтобы получить параметры, переданные в методах [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) и [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace).

## Пример

```TypeScript
import { useMetaParams } from '@vkontakte/vk-mini-apps-router';

// Передача параметров в свойстве NavigationOptions.state
routeNavigator.push('/target-screen', {keepSearchParams : true, state: {emotion: 'fish', value: 10}} )

// Вызов функции 
const params = useMetaParams<{emotion: string, value: number}>();
```

## Объявление

```TypeScript
export function useMetaParams<T extends Object>(): T
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `T`&#x0d;&#x0a;*обязательный* | `object` | Объект, который указывает, какие параметры, переданные в вызове метода `push(...)` или `replace(...)`, функция должна вернуть. Подробнее — в разделе [Дополнительные параметры методов `push()` и `replace()`](libraries/router/parameters#Дополнительные%20параметры%20методов%20push()%20и%20replace()). |

## Результат

Функция возвращает объект, поля которого будут заполнены значениями параметров, указанными в `T`.

Если параметры не были переданы, функция вернёт `null`.

## Материалы по теме

* [Дополнительные параметры методов `push()` и `replace()`](libraries/router/parameters#Дополнительные%20параметры%20методов%20push()%20и%20replace())

* [useSearchParams](libraries/router/reference/hooks/useSearchParams)

* [useParams](libraries/router/reference/hooks/useParams)

* [Справочник vk-mini-apps-router](libraries/router/reference)
