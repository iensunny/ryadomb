# Библиотеки | vk-mini-apps-router | Справочник | Объекты | NavigationOptions 

> Источник: [https://dev.vk.ru/ru/libraries/router/reference/objects/NavigationOptions](https://dev.vk.ru/ru/libraries/router/reference/objects/NavigationOptions)
<!-- libraries/router/reference/objects/NavigationOptions -->

# NavigationOptions

`NavigationOptions` — вспомогательный объект, который используется методами объекта [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator) при переходе по страницам приложения.

## Объявление

```TypeScript
export interface NavigationOptions {
  keepSearchParams?: boolean;
}
```

## Свойства

Объект содержит только следующие свойства.

| Свойство | Тип | Описание |
| --- | --- | --- |
| `keepSearchParams`&#x0d;&#x0a;*необязательное* | `boolean` | Указывает, должны ли [методы навигации](libraries/router/reference/objects/RouteNavigator#Методы) сохранять query-параметры при переходе.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Если `keepSearchParams: true`, то [роутер](libraries/router) сохранит параметры вида `...?param1=value1` при переходе на новую страницу.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Если `keepSearchParams: false`, то query-параметры будут сброшены.&#x0d;&#x0a;&#x0d;&#x0a;Значение по умолчанию: `false`. |
| `state`&#x0d;&#x0a;*необязательное* | `any` | Значение или объект, который будет передан при переходе на новую страницу. Подробности использования — в разделе [Передача параметров](libraries/router/navigation#Передача%20параметров). |

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [Использование параметров](libraries/router/parameters)

* [RouteNavigator.push](libraries/router/reference/objects/RouteNavigator/push)

* [RouteNavigator.replace](libraries/router/reference/objects/RouteNavigator/replace)

* [Справочник vk-mini-apps-router](libraries/router/reference)
