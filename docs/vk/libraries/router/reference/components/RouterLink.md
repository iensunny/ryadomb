# Библиотеки | vk-mini-apps-router | Справочник | Компоненты | RouterLink

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/components/RouterLink](https://dev.vk.ru/ru/libraries/router/reference/components/RouterLink)
<!-- libraries/router/reference/components/RouterLink -->

# RouterLink

`RouterLink` — React-компонент для создания ссылок в вашем приложении с поддержкой переходов по маршрутам, созданным с помощью библиотеки [vk-mini-apps-router](libraries/router).

Для создания ссылок с помощью других компонентов, например `<Button>` или `<Link>`, вам нужно написать код  обработчика события `onClick`, а также указать атрибут `href` с адресом перехода, который зависит от используемого [типа роутера](libraries/router/router-types).

В `RouterLink` вы можете указать адрес для перехода в одном из свойств. Создавать обработчик `onClick` не нужно. Также не нужно учитывать тип роутера при указании адреса перехода.

## Пример

```TypeScript
import { useEnableSwipeBack, useActiveVkuiLocation, RouterLink, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

// ... 

<InfoRow header="Links">
    <RouterLink to="/persik">My Cat</RouterLink>
    <RouterLink
        to={{ pathname: routes.default_root.default_view.persik_0, hash: "10" }}
        params={{ emotion: 'sad' }}
    >
        Sad persik
    </RouterLink>
    <RouterLink
        to={{ pathname: "/user/contacts", hash: "10" }}
    >
        Contacts
    </RouterLink>
</InfoRow>
```

## Свойства

| Свойство | Тип | Описание |
| --- | --- | --- |
| `to`&#x0d;&#x0a;*обязательное* | [`NavigationTarget`](libraries/router/navigation#NavigationTarget) | Конечная точка для перехода. Можно указать одним из трёх способов. Подробности — в разделе [NavigationTarget](libraries/router/navigation#NavigationTarget). |
| `replace`&#x0d;&#x0a;*необязательное* | `boolean` | Указывает, заменит ли новый адрес текущий в истории переходов (`true`) или новый адрес будет добавлен в конец истории (`false`). Значение по умолчанию: `false`. |
| `target`&#x0d;&#x0a;*необязательное* | `string` | Указывает окно, в котором будет открыт новый URL. Возможные значения — такие же, как в стандартном HTML:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_blank`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_parent`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_self`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_top`&#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию: `_self`. |
| `onClick`&#x0d;&#x0a;*необязательное* | `код` | Код, который будет выполняться при нажатии на ссылку. Если свойство `to` указывает на какой-либо адрес, то выполнится и переход на этот адрес, и выполнение кода в обработчике `onClick`. |
| `params`&#x0d;&#x0a;*необязательное* | `object` | Объект, поля которого содержат значения [path-параметров](libraries/router/parameters#Path-параметры), указанных в пути.&#x0d;&#x0a;&#x0d;&#x0a;Указать path-параметры можно и в `to`. Использование `params` может быть удобнее при кодировании и понятнее при чтении кода. Подробности — в разделе [Path-параметры](libraries/router/parameters#Path-параметры). |

Компонент `RouterLink` также содержит свойства компонента [`Link]`(https://vkui.io/components/link) из библиотеки [VKUI](libraries/vkui). Кроме того, он содержит стандартные свойства, используемые в React-компонентах, например `children`, которое предоставляет доступ к вложенным JSX-элементам.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
