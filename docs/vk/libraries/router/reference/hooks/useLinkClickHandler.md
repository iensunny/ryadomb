# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useLinkClickHandler

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useLinkClickHandler](https://dev.vk.ru/ru/libraries/router/reference/hooks/useLinkClickHandler)
<!-- libraries/router/reference/hooks/useLinkClickHandler -->

# useLinkClickHandler

Для создания ссылок с помощью компонентов `<Button>` или `<Link>` нужно написать код  обработчика события `onClick`, который будет выполнять переход по новому адресу. При этом адрес перехода зависит от [типа роутера](libraries/router/router-types) в вашем приложении.

Функция `useLinkClickHandler(...)` принимает адрес для перехода и создаёт код, который можно подставить в `onClick`-обработчик и использовать для перехода по указанному адресу.

## Пример

```TypeScript
import { useHref, useLinkCreateHandler } from '@vkontake/vk-mini-apps-router';

const hrefValue = useHref('/contacts/edit');
const onClickCode = useLinkCreateHandle('/contacts/edit');

<Link href={hrefValue} onClick={ onClickCode }>Редактировать</Link>
```

## Объявление

```TypeScript
export function useLinkClickHandler<E extends Element = HTMLAnchorElement>(
  to: NavigationTarget,
  {
    target?: HTMLAttributeAnchorTarget;
    replace?: boolean;
    preventScrollReset?: boolean;
    relative?: RelativeRoutingType;
  } 
  ): (event: ReactMouseEvent<E, MouseEvent>) => void 
```

## Параметры

### Параметры функции

| Параметр | Тип | Описание |
| --- | --- | --- |
| `to`&#x0d;&#x0a;*обязательный* | [`NavigationTarget`](libraries/router/navigation#NavigationTarget) | Конечная точка для перехода. Можно указать одним из трёх способов. Подробности — в разделе [NavigationTarget](libraries/router/navigation#NavigationTarget). |
| `свойства` | `object` | Объект, который описывает [свойства перехода](#Свойства%20перехода). |

### Свойства перехода

| Поле | Тип | Описание |
| --- | --- | --- |
| `target`&#x0d;&#x0a;*необязательное* | `string` | Окно, в котором будет открыт новый URL. Возможные значения — такие же, как в стандартном HTML:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_blank`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_parent`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `_self`&nbsp;&nbsp; &#x0d;&#x0a; &nbsp;&nbsp; &bull; `_top`&#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию: `_self`. |
| `replace`&#x0d;&#x0a;*необязательное* | `boolean` | Если `true`, то новый адрес заменит текущий в истории переходов.&#x0d;&#x0a;Если `false`, новый адрес будет добавлен в историю. Значение по умолчанию: `false`. |
| `preventScrollReset`&#x0d;&#x0a;*необязательное* | `boolean` | Если `true`, положение прокрутки экрана не изменится при переходе.&#x0d;&#x0a;Если `false`, прокрутка сбросится в `0`.&#x0d;&#x0a;Значение по умолчанию: `false`. |
| `relative`&#x0d;&#x0a;*необязательное* | `string`| Зарезервировано для использования в будущем. |
| `params`&#x0d;&#x0a;*необязательное* | `object` | Объект, поля которого содержат значения [path-параметров](libraries/router/parameters#Path-параметры), указанных в пути.&#x0d;&#x0a;&#x0d;&#x0a;Указать path-параметры можно и в `to`. Использование `params` может быть удобнее при кодировании и понятнее при чтении кода. Подробности — в разделе [Path-параметры](libraries/router/parameters#Path-параметры). |

## Результат

`useLinkClickHandler(...)` возвращает функцию-обработчик события `onClick`. Вы можете добавить его в используемый компонент, как показано в [примере выше](#Пример).

## Материалы по теме

* [useHref](libraries/router/reference/hooks/useHref)

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
