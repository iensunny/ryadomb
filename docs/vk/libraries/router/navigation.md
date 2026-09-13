# Навигация в приложении

> Источник: [https://dev.vk.ru/ru/libraries/router/navigation](https://dev.vk.ru/ru/libraries/router/navigation)
## О навигации

Для навигации в [мини-приложении](mini-apps/overview) используйте объект [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator), который предлагает библиотека [vk-mini-apps-router](libraries/router). Он содержит методы для выполнения переходов и работы с историей переходов.

| Метод&nbsp;объекта&nbsp;`RouteNavigator`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Описание |
| --- | --- |
| [`push(path, params, options)`](libraries/router/reference/objects/RouteNavigator/push) | Выполняет переход по указанному пути и добавляет путь в историю переходов. Если в истории переходов есть записи, относящиеся к будущим переходам, они будут удалены. |
| [`replace(path, params, options)`](libraries/router/reference/objects/RouteNavigator/replace) | Выполняет переход по указанному пути и заменяет текущую запись в истории переходов. Другие записи из истории не удаляются.  |
| [`back()`](libraries/router/reference/objects/RouteNavigator/back) | Выполняет возврат на предыдущую запись в истории переходов. |

## Пример

Чтобы получить объект `RouteNavigator`, вызовите [`useRouteNavigator()`](libraries/router/reference/hooks/useRouteNavigator).

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function PersikPage() {
  const routeNavigator = useRouteNavigator();
  
  return (
    <Button onClick={() => routeNavigator.push('/')}>На главную</Button>
  );
}
```

:::note
**Важно!** Вызов `useRouteNavigator()` должен находиться в рамках компонента `<RouterProvider>...</RouterProvider>`.
:::

## Как работает переход?

При выполнении перехода библиотека инициирует перерисовку React-компонентов. Вызов [`useActiveVkuiLocation()`](libraries/router/reference/hooks/useActiveVkuiLocation) возвращает информацию о `Root`, `View`, `Panel` и других компонентах, которые соответствуют новому пути.

```TypeScript
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

export function App() {
  // Получаем активные View и Panel
  const { view: activeView, panel: activePanel } = useActiveVkuiLocation();

  return(
    // Указываем View и Panel для отрисовки
    <Root activeView={activeView | DEFAULT_VIEW}>
      <View nav="default_view" activePanel={activePanel | DEFAULT_PANEL}> 
        <Panel nav="home_panel">...</Panel>
        <Panel nav="persik_panel">...</Panel>
      </View>
    </Root>
  )
}
```

## Использование ссылок

Для создания ссылок в приложении можно использовать компонент [`RouterLink`](libraries/router/reference/components/RouterLink), который входит в библиотеку vk-mini-apps-router, либо воспользоваться сторонними компонентами, например `Link` или HTML-элементами `<a>`.

При использовании компонента `RouterLink` просто укажите маршрут для перехода в атрибуте `to`.

```TypeScript
<RouterLink to="/persik/show">Покажите Персика</RouterLink>
```

При использовании HTML-элементов или сторонних компонентов маршрут надо привести в поддерживаемый формат.
Если в таких случаях указать маршрут так, как он определён в вашем приложении, ссылка может не сработать.

```HTML
<a href="/contacts/screen1">...</a>  <!-- Ссылка может не сработать -->
<Link href="/contacts/screen2">...</Link>  <!-- Ссылка может не сработать -->
```

Формат значения значения `href` зависит от [типа роутера](libraries/router/router-types), который использует ваше приложение.

| Тип рoутера | Поддерживаемый формат ссылки |
| --- | --- |
| [Hash](libraries/router/router-types#Hash-роутер) | `<a href="/#/contacts/screen1">...</a>` |
| [HashParam](libraries/router/router-types#HashParam-роутер) | `<a href="/#path=%2Fcontacts%2Fscreen1">...</a>` |
| [Browser](libraries/router/router-types#Browser-роутер) | `<a href="/contacts/screen1">...</a>` |

:::note
**Важно!** Указание адресов напрямую в коде элементов, как показано в примерах выше, является проблемой для приложений, которые работают как на платформе ВКонтакте, так и вне её, поскольку они используют разные типы роутеров. Такой подход также затрудняет смену типа роутера, потому что для неё придётся обновлять все ссылки в коде.
:::

Чтобы обойти эти проблемы, используйте функцию [`useHref(...)`](libraries/router/reference/hooks/useHref). Она вернёт значение, которое соответствует типу роутера, используемому в текущий момент. Это значение можно вставить в атрибут `href`.

Кроме того, мы рекомендуем использовать обработчик события `onClick`, в котором вызывать [методы объекта `RouteNavigator`](#О%20навигации). Код обработчика не зависит от вида роутера. Для получения кода обработчика удобно использовать функцию [`useLinkClickHandler(...)`](libraries/router/reference/hooks/useLinkClickHandler).

```TypeScript
import { useHref, useLinkClickHandler } from '@vkontakte/vk-mini-apps-router';

<Link 
  href={useHref('/contacts/screen1')} 
  onClick={useLinkClickHandler('/contacts/screen1')}>
  ...
</Link>
```
## NavigationTarget

Есть три способа задать конечную точку перехода:

1. С помощью строки. Подробнее — в разделе [Навигация по строкам](libraries/router/navigation#Навигация%20по%20строкам).
1. С помощью объекта `Page` или `PageWithRoot`. Подробнее — в разделе [Навигация по идентификаторам объектов](libraries/router/navigation#Навигация%20по%20идентификаторам%20объектов).
1. С помощью URL-объекта. Подробнее — в разделе [Навигация при помощи URL-объекта](libraries/router/navigation#Навигация%20при%20помощи%20URL-объекта).

>Если для перехода вы используете `PageWithParams` или строку типа `/path/:param`, укажите дополнительные [параметры](libraries/router/parameters).

### Навигация по строкам

В простом случае вы передаёте в методы [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) и [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace) желаемый URL для перехода.

```TypeScript
routeNavigator.push('/');
routeNavigator.push('/persik');
routeNavigator.push('/user/123');
```

Обратите внимание, что мы не используем символ `#` и ключевое слово `path` в URL. В них нет необходимости при навигации с помощью методов объекта `RouteNavigator`. Подробности — в разделе [Формат внешних и внутренних ссылок](libraries/router/hash-in-links).

### Навигация по идентификаторам объектов

Методы [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) и [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace) могут также принимать объекты, полученные при [настройке маршрутов с помощью `RoutesConfig.create(...)`](libraries/router/setting-routes).

```TypeScript
routeNavigator.push(routes.default_root.default_view.home_panel);
routeNavigator.push(routes.default_root.default_view.persik_panel, { 'emotion': 'sad' });
routeNavigator.push(routes.default_root.default_view.persik_panel.persik_modal, { 'emotion': 'sad' });
```

Для указания объектов для перехода используйте синтаксис вида `routes.root.view.panel`.

Удобство навигации по объектам заключается в том, что среда разработки будет давать подсказки с именами объектов и информацией о параметрах.

### Навигация при помощи URL-объекта

В методы [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push) и [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace) можно передавать URL-объекты с указанием парамеров, не формируя при этом строку:

```TypeScript
{pathname?: string | Page | PageWithParams, hash?: string, search?: URLSearchParams | Record<string, string> | string}
```

Пример перехода с указанием хеша без параметров пути:

```TypeScript
routeNavigator.push({pathname: ‘/persik’, search: {name: ‘persik’, hash: ‘10’}});
```

Результатом такого перехода будет путь `/persik?name=persik#10`.

Пример перехода с указанием search-параметров:

```TypeScript
let persik_panel = routes.default_root.default_view.persik_panel 
routeNavigator.push({
  pathname: persik_panel, 
  search: {name: ‘persik’}, 
  hash: ‘10’
}, { emotion: 'sad' });
```

В таком случае мы перейдём на страницу `/persik/sad?name=persik#10`.

## Навигация назад

Для возврата на предыдущую запись в истории переходов вызовите метод [`RouteNavigator.back()`](libraries/router/reference/objects/RouteNavigator/back). Он работает так же, как браузерная кнопка «Назад».

```TypeScript
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export function SomePage() {
  const routeNavigator = useRouteNavigator();
  
  return (
    <Button onClick={() => routeNavigator.back()}>Вернуться</Button>
  );
}
```

Если пользователь открыл приложение по прямой ссылке и уже находится на первой загруженной странице, то нажатие на кнопку «Назад» приведёт к выходу из мини-приложения. Чтобы предотвратить выход, используйте функцию [`useFirstPageCheck()`](libraries/router/reference/hooks/useFirstPageCheck).

```TypeScript
import { useFirstPageCheck } from '@vkontakte/vk-mini-apps-router';

// Проверка, является ли страница первой загруженной
const isFirstPage = useFirstPageCheck();

return (
  <PanelHeader
    before={<PanelHeaderBack onClick={() => isFirstPage ? routeNavigator.push('/') : routeNavigator.back()} />}
  >
    Текст заголовка
  </PanelHeader>
)
```

Код выше отлавливает ситуацию, когда пользователь пытается перейти назад с первой загруженной страницы приложения, и перенаправляет его на главную страницу приложения.  

## Передача параметров

Если при настройке маршрутов вы использовали [параметры](libraries/router/parameters), то при переходе вы должны указывать значение, а не имя параметра. Например, если маршрут объявлен как `/user/:id`, то для перехода передайте URL `/user/123`.

Если страница использует параметры в URL после символа `?`, укажите эти параметры в строке URL, например `/user/contacts?action=edit&value=123`.

Кроме того, вы может передать значения целевой странице с помощью специального параметра методов `push()` и `replace()`.

Подробности разных способов передачи значений — в разделе [Использование параметров](libraries/router/parameters).

## Блокировка переходов

Вам может потребоваться блокировать переход с какого-либо экрана в вашем приложении. Например, вы можете блокировать продвижение, если пользователь не ввёл требуемые данные. Библиотека vk-mini-apps-router предоставляет специальные возможности для этого. Подробности&nbsp;— в разделе [Блокировка навигации](libraries/router/blocking-navigation).

## Материалы по теме

* [Настройка маршрутов](libraries/router/setting-routes)

* [Использование параметров](libraries/router/parameters)

* [Использование роутера для отрисовки страниц](libraries/router/setup#Шаг%203.%20Используйте%20роутер%20для%20отрисовки%20страниц)

* [Формат внешних и внутренних ссылок](libraries/router/hash-in-links)

* [Объект RouteNavigator](libraries/router/reference/objects/RouteNavigator)

* [Блокировка навигации](libraries/router/blocking-navigation)

* [История навигации](libraries/router/navigation_history)

* [Обработка ошибок](libraries/router/handling-errors)

* [Поддержка анимации](libraries/router/animation)

* [Библиотека vk-mini-apps-router](libraries/router)
