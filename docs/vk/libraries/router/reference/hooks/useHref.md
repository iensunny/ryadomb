# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useHref

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useHref](https://dev.vk.ru/ru/libraries/router/reference/hooks/useHref)
<!-- libraries/router/reference/hooks/useHref -->

# useHref

Используйте функцию `useHref(...)`, чтобы получить адрес для перехода на экран вашего приложения. Этот адрес соответствует [типу роутера](libraries/router/router-types) в вашем приложении и может использоваться для создания внешних ссылок на экран.

| Маршрут | Создаваемая ссылка |
| --- | --- |
| `/contacts/edit` | [Hash-роутер](libraries/router/router-types#Hash-роутер):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `/#/contacts/edit`&#x0d;&#x0a;[HashParam-роутер](libraries/router/router-types#HashParam-роутер):&nbsp;`/#path=%2Fcontacts%2Fedit`&#x0d;&#x0a;[Browser-роутер](libraries/router/router-types#Browser-роутер):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `/contacts/edit` |

Созданную ссылку можно применять в атрибуте `href` элементов `<a>` и `<Link>` в вашем приложении. Также, её можно использовать для создания внешней ссылки на экран приложения. Для этого к ней надо добавить адрес приложения, например `https://vk.com/app12345/#/contacts/edit`.

## Пример

```TypeScript
import { routes } from '../routes';
import { useHref, Link } from '@vkontake/vk-mini-apps-router';

const pageURL = useHref('/contacts/edit');
const pageWithParamsURL = useHref(
  routes.default_root.default_view.persik_0, 
  { params: { emotion: `sad` } }
);

<Link href={pageURL}>Edit Contacts</Link>
<Link href={pageWithParamsURL}>Persik</Link>
```

## Объявление

```TypeScript
export function useHref(to: NavigationTarget, { relative }: { relative?: RelativeRoutingType} = {}): string
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `to`&#x0d;&#x0a;*обязательный* | [`NavigationTarget`](libraries/router/navigation#NavigationTarget) | Конечная точка для перехода. Можно указать одним из трёх способов. Подробности — в разделе [NavigationTarget](libraries/router/navigation#NavigationTarget). |
| `relative`&#x0d;&#x0a;*необязательный* | `object` | Зарезервирован для использования в будущем. |
| `params`&#x0d;&#x0a;*необязательный* | `object` | Объект, поля которого содержат значения [path-параметров](libraries/router/parameters#Path-параметры), указанных в пути.&#x0d;&#x0a;&#x0d;&#x0a;Указать path-параметры можно и в `to`. Использование `params` может быть удобнее при кодировании и понятнее при чтении кода. Подробности — в разделе [Path-параметры](libraries/router/parameters#Path-параметры). |

## Результат

Функция возвращает ссылку для экрана, маршрут которого указан в параметре `NavigationTarget`.

С помощью библиотеки vk-mini-apps-router вы можете создавать роутеры [разных типов](libraries/router/router-type). Функция учитывает тип роутера, который использует ваше приложение, и возвращает ссылку в правильном формате.

## Особенности использования

Вызовы функции `useHref()` должны проходить в рамках компонента [`RouterProvider`](libraries/router/reference/components/RouterProvider).

## Материалы по теме

* [useLinkClickHandle](libraries/router/reference/hooks/useLinkClickHandle)

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
