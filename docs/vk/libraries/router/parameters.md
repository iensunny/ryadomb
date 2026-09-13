# Использование параметров

> Источник: [https://dev.vk.ru/ru/libraries/router/parameters](https://dev.vk.ru/ru/libraries/router/parameters)
Передавать данные между экранами приложения можно разными способами. Например, можно указывать значения как часть пути страницы, или передавать параметры в URL после символа&nbsp;`?`, или использовать объекты и функции Web Storage API.

Библиотека vk-mini-apps-router поддерживает следующие способы передачи значений:

* [Path-параметры](#Path-параметры). Такие параметры являются частью пути страницы. Вы объявляете их при [создании маршрутов](libraries/router/setting-routes), а указываете значения при переходе по адресу.

* [Query-параметры](#Query-параметры). Такие параметры располагаются в URL после символа `?`, например `.../my-page?param=1`. Вы указываете их значения при переходе по адресу.

    Библиотека vk-mini-apps-router не поддерживает маршруты с query-параметрами, однако вы можете использовать их для передачи значений при переходе между экранами приложения.

* [Дополнительные параметры методов `push()` и `replace()`](#Дополнительные%20параметры%20методов%20push()%20и%20replace()). Они дают возможность передать значения, не показывая их в адресной строке браузера, как это происходит с query- и path-параметрами.

## Path-параметры

### Объявление маршрутов, содержащих параметры в пути

Для объявления маршрута, содержащего параметр, используйте двоеточие, за которым следует имя параметра (`:param-name`). Например:

```TypeScript
const routes: RouteWithoutRoot[] = [
  {
    path: `/user/:id/edit`, // Параметр id
    panel: 'persik_panel',
    view: 'default_view',
  },
  // Другие маршруты...
]
```

В примере выше свойство `path` содержит параметр `:id`. Он является частью пути страницы.

При определении имени path-параметра библиотека использует всё содержимое между двумя слешами (`/`):

* `/user/:id/edit` — допустимый путь с параметром. Имя параметра — `id`.

* `/user_:id/edit` — неверное указание параметра.

Маршрут может содержать несколько path-параметров. Например:

```TypeScript
const routes: RouteWithoutRoot[] = [
  {
    path: `/user/:id/edit/:contacts`, 
    panel: 'user_panel',
    view: 'user_view',
  },
  // Другие маршруты...
]
```

### Указание path-параметров при переходе

При переходе по адресу ваше приложение должно заменять имя параметра на его значение. Например, если вы используете путь `/user/:id`, то при переходе должны заменить `:id` на какое-то значение, например `/user/123`. Сделать это можно следующими способами:

* [Способ 1 - Укажите значение в строке URL](#Способ%201%20—%20укажите%20значение%20в%20строке%20URL)

* [Cпособ 2 — Используйте параметры методов `push()` и `replace()`](#Способ%202%20—%20используйте%20параметры%20методов%20push()%20и%20replace())

#### Способ 1 — укажите значение в строке URL

Вы можете вставить значение параметра в адрес целевой страницы.

```TypeScript
import { Button } from '@vkontakte/vkui';
import { useRouteNavigator, RouteNavigator } from '@vkontakte/vk-mini-apps-router';

const routeNavigator = useRouteNavigator();

// Путь: /user/:id, id = 123
<Button onClick={() => routeNavigator.push('/user/123')}>Перейти</Button>
```

Такой способ может быть неудобен, если вы [используете объекты](libraries/router/setting-routes#Типизированные%20объекты%20для%20настройки%20маршрутов) для указания маршрута или храните значение пути в константе. В таких случаях вы можете указывать значение параметров [по-другому](#Способ%202%20-%20используйте%20параметры%20методов%20push%20и%20replace).

#### Способ 2 — используйте параметры методов `push()` и `replace()`

Если для перехода вы используете методы [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) или [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace), вы можете указать значения path-параметров с помощью второго параметра этих методов:

```TypeScript
import { Button } from '@vkontakte/vkui';
import { useRouteNavigator, RouteNavigator } from '@vkontakte/vk-mini-apps-router';

const routeNavigator = useRouteNavigator();

// Путь с параметрами
const PATH = '/persik/:action/details/:value';

// Передайте значения во втором параметре 
<Button onClick={() => routeNavigator.push(PATH, {action: 'sing', value: 10}, {keepSearchParams: true})}>Персик хочет спеть</Button>
```

Этот способ делает код читабельнее. Он работает, если вы храните путь в переменной или константе, как это показано в примере выше, или если вы [используете объекты](libraries/router/setting-routes#Типизированные%20объекты%20для%20настройки%20маршрутов) для указания маршрута.  

<!-- 
## Различие между path- и query-параметрами

Следует различать path-параметры и query-параметры. Path-параметры являются частью пути. Query-параметры следуют в адресе после символа `?`, например `.../my-page?param=1`.

Библиотека `vk-mini-apps-router` не поддерживает маршруты с query-параметрами, однако вы можете использовать их для передачи значений при переходе между экранами приложения. Подробнее об этом рассказано [ниже](#Использование%20query-параметров).
-->

### Получение значения в коде

Чтобы получить значения path-параметров в коде, используйте функцию [`useParams<param-name>()`](libraries/router/reference/hooks/useParams).

```TypeScript
// В маршруте путь задан как /persik/:action/details/:value.
// Приложению передан путь /persik/sign/details/10.
const params = useParams<'action' | 'value'>(); // Вернёт { action: 'sign', value: '10' }
```

## Query-параметры

<!-- ### Использование query-параметров -->

### Указание query-параметров

Query-параметры указываются в URL после символа `?`. Указывать их при вызове методов [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) или [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace) можно, например, так:

```TypeScript
import { Button } from '@vkontakte/vkui';
import { useRouteNavigator, RouteNavigator } from '@vkontakte/vk-mini-apps-router';

const routeNavigator = useRouteNavigator();

//Указание query-параметров в параметре search
<Button   onClick={() => routeNavigator.push({pathname: '/action/edit', search:{name: 'persik', num: '123'}})}>Редактировать</Button>

// Указание параметров name и num в URL после символа '?'
<Button onClick={() => routeNavigator.push('/action/edit?name=persik&num=123')}>Редактировать</Button>
```

Пользователи могут видеть передаваемые значения в адресной строке браузера. Если вы хотите избежать этого, используйте для передачи значений [дополнительные параметры методов `push()` и `replace()`](#Дополнительные%20параметры%20методов%20push()%20и%20replace()).

### Получение query-параметров

Чтобы получить значение query-параметров, вызовите функцию [`useSearchParams()`](libraries/router/reference/hooks/useSearchParams). Она вернёт стандартный используемый в веб-разработке объект [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), а также ссылку на метод, который можно использовать для изменения параметров.

```TypeScript
import { useSearchParams } from '@vkontakte/vk-mini-apps-router';

export function PersikPage() {
  const [params, setParams] = useSearchParams();

  return(
  <p>Привет, {params.get('name')}!</p>  
  );
}
```

<!--   return (
    <Button onClick={() => {
      params.set('name', 'persik');
      setParams(params);
    } }>
      {params.get('name')}
    </Button>
  );
-->

## Дополнительные параметры методов `push()` и `replace()`

### Указание

Последний параметр методов [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) и [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace) — `options` — является объектом [`NavigationOptions`](libraries/router/reference/objects/NavigationOptions). У этого объекта есть поле `state`, которое можно использовать для передачи значений при переходе. Посмотрите на следующий пример.

```TypeScript
// File1.tsx

// Передача параметров
import { Button } from '@vkontakte/vkui';
import { useRouteNavigator, RouteNavigator } from '@vkontakte/vk-mini-apps-router';

const routeNavigator = useRouteNavigator();

// Передайте значения в последнем параметре, 
// в поле state 
<Button onClick={() => routeNavigator.push('/persik/details', {state: {action: 'play', value: 10}})}>Персик хочет поиграть</Button>
```

При передаче значений через поле `options.state` роутер сохраняет значения в своём внутреннем хранилище. Пользователи не увидят передаваемые значения в адресной строке браузера.

### Получение

Чтобы получить переданные таким образом значения, вызовите функцию [`useMetaParams()`](libraries/router/reference/hooks/useMetaParams) в коде целевой страницы.

```TypeScript
// File2.tsx

// Получение и обработка параметров
import { useMetaParams } from '@vkontakte/vk-mini-apps-router';

// Получение параметров
const params = useMetaParams<{action: string, value: number}>();

// Обработка параметров ...
if (params.action == 'play') {
    // ...
}

if (params.value == 10) {
    // ...
}

```

`useMetaParams` вернёт либо объект с параметрами, либо `null`, если параметры не передавались.

## Резюме

Следующая таблица содержит краткую информацию о способах передачи значений.

| Способ | Объявление | Указание | Получение | Примечания |
| --- | --- | --- | --- | --- |
| [Path-параметры](#Path-параметры) | [Объявляются](#Объявление%20маршрутов,%20содержащих%20параметры%20в%20пути) при создании маршрутов как часть навигационного пути, например `/user:id`. | Указываются:&#x0d;&#x0a;&bull; [В строке URL](#Способ%201%20—%20укажите%20значение%20в%20строке%20URL).&#x0d;&#x0a;&nbsp;&nbsp;&nbsp;— либо —&#x0d;&#x0a;&bull; C помощью [параметров методов `push()` и `replace()`](#Способ%202%20—%20используйте%20параметры%20методов%20push()%20и%20replace()). | [`useParams()`](#Получение%20значения%20в%20коде) | Значения видны в адресной строке. |
| [Query-параметры](#Query-параметры) | Не объявляются. | Указываются в строке URL [после символа `?`](#Указание%20query-параметров): `/path?param=value`. | [`useSearchParams()`](#Получение%20query-параметров) | Значения видны в адресной строке. |
| [Дополнительные параметры методов `push()` и `replace()`](#Дополнительные%20параметры%20методов%20push()%20и%20replace()) | Не объявляются. | Указываются с помощью [специального параметра](#Указание) методов `push()` и `replace()`. | [`useMetaParams()`](#Получение) | Не видны в адресной строке. Используют внутреннее хранилище роутера. |

## Материалы по теме

* [Настройка маршрутов](libraries/router/setting-routes)

* [Навигация в приложении](libraries/router/navigation)

* [useParams](libraries/router/reference/hooks/useParams)

* [useSearchParams](libraries/router/reference/hooks/useSearchParams)

* [useMetaParams](libraries/router/reference/hooks/useMetaParams)

* [Библиотека vk-mini-apps-router](libraries/router)
