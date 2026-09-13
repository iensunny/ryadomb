# Библиотеки | vk-mini-apps-router | Справочник | Hooks | useSearchParams

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/hooks/useSearchParams](https://dev.vk.ru/ru/libraries/router/reference/hooks/useSearchParams)
<!-- libraries/router/reference/hooks/useSearchParams -->

# useSearchParams

Используйте эту функцию, чтобы извлечь из URL значения [query-параметров](libraries/router/parameters#Query-параметры), например `/persik?param=123`.

## Пример

```TypeScript
import { useSearchParams } from '@vkontakte/vk-mini-apps-router';

const [params, setParams] = useSearchParams();

const [additional, setAdditional] = useState(params.get('additional'));

function updateSearch() {
 if (additional) {
  params.set('additional', additional);
 } else {
  params.delete('additional');
 }
 
    setParams(params);
}
```

## Объявление

```TypeScript
export function useSearchParams(defaultInit?: URLSearchParamsInit): [URLSearchParams, SetURLSearchParams]
```

## Параметры

| Параметр | Тип | Описание |
| --- | --- | --- |
| `defaultInit`&#x0d;&#x0a;*необязательный* | `URLSearchParamsInit` | Строка, объект или массив, которые могут использоваться для инициализации параметров. |

## Результат

Функция возвращает стандартный используемый в веб-разработке объект [`URLSearchParams`](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), а также ссылку на метод, который можно использовать для установления значений параметров в последующих вызовах.

## Особенности использования

Старые версии некоторых браузеров, например Internet Explorer 11, не поддерживают объект `URLSearchParams`. Работа функции `useSearchParams()` в таких случаях невозможна.

## Материалы по теме

* [Использование параметров](libraries/router/parameters)

* [useParams](libraries/router/reference/hooks/useParams)

* [useMetaParams](libraries/router/reference/hooks/useMetaParams)

* [Навигация в приложении](libraries/router/navigation)

* [Справочник vk-mini-apps-router](libraries/router/reference)
