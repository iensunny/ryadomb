# Блокировка навигации

> Источник: [https://dev.vk.ru/ru/libraries/router/blocking-navigation](https://dev.vk.ru/ru/libraries/router/blocking-navigation)
В некоторых случаях приложению может быть необходимо удержать пользователя на экране. Например, не разрешать пользователю уйти с экрана, если он не сохранил введённые данные, или запрещать выход, если он отправил данные на сервер и пытается покинуть экран до получения ответа об окончании загрузки.

<!--В некоторых случаях приложению может быть необходимо удержать пользователя на странице. Например, не пропускать пользователя на следующий шаг формы регистрации, пока он не введёт почтовый адрес, или не давать выйти с важных экранов по кнопке «Назад».
-->

## Как заблокировать переход

Чтобы заблокировать переход, вы можете использовать:

* Метод [`block(...)`](libraries/router/reference/objects/RouteNavigator/block) объекта [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator). Вызовите этот метод при активации экрана, переход с которого нужно заблокировать.

```TypeScript

const blockerFunction: BlockerFunction = ({ historyAction, nextLocation }) => {
   var result = historyAction === "POP";
   if (! result) 
      console.log("Для выхода заполните требуемые поля.");
    return result;
};

const unblocker = routeNavigator.block(blockerFunction);
 ```

* Функцию [`useBlocker`](libraries/router/reference/hooks/useBlocker), которая позволяет предотвратить случайный выход пользователя с текущего экрана.

```TypeScript
const blockerFunction: BlockerFunction = ({
 currentLocation,
 nextLocation
}) => {
 return currentLocation.pathname !== nextLocation.pathname
}

function Component() {
 let blocker = useBlocker(blockerFunction);

 return (
   <button onClick={() => blocker.proceed()}>
     Перейти
   </button>
   <button onClick={() => blocker.reset()}>
     Остаться
   </button>
 );
}
```

## Функция BlockerFunction

Роутер будет вызывать функцию при попытке перехода c экрана. Функция должна проверять условия для выхода и возвращать `false`, если переход возможен, или `true`, если переход заблокирован. При необходимости функция может также информировать пользователя об ошибке и выполнять необходимые действия при блокировке, например переводить фокус на текстовое поле, которое требует ввода данныx.

Функция типа `BlockerFunction` использует следующие параметры:

| Параметр | Тип | Описание |
| --- | --- | --- |
| `historyAction` | `string` | Вид перехода. Возможно одно из следующих значений:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `PUSH` — переход на новую страницу и добавление адреса в историю переходов. Это значение передаётся, когда переход выполняется с помощью метода [`RouteNavigator.push(...)`](libraries/router/reference/objects/RouteNavigator/push).&#x0d;&#x0a; &nbsp;&nbsp; &bull; `REPLACE` — переход на новую страницу с заменой текущего адреса в истории переходов. Это значение передаётся, когда переход выполняется с помощью метода [`RouteNavigator.replace(...)`](libraries/router/reference/objects/RouteNavigator/replace).&#x0d;&#x0a; &nbsp;&nbsp; &bull; `POP` — переход по истории изменений. Это значение передаётся, когда переход выполняется с помощью методов, работающих с историей переходов: [`RouteNavigator.back()`](libraries/router/reference/objects/RouteNavigator/back), [`RouteNavigator.backToFirst()`](libraries/router/reference/objects/RouteNavigator/backToFirst), [`RouteNavigator.go(...)`](libraries/router/reference/objects/RouteNavigator/go), а также при попытке перехода с помощью кнопок «Назад» и «Вперёд» в браузере. |
| `nextLocation` | `string` | Путь для перехода в том виде, в каком он был [объявлен в маршруте](libraries/router/setting-routes), например `/user/edit/contacts`. |
| `currentLocation` | `string` | Текущее положение в навигации. |

## Особенности использования

Блокировка работает только внутри приложения. Причём она не зависит от того, выполняется ли переход с помощью методов объекта [`RouteNavigator`](libraries/router/reference/objects/RouteNavigator) или, например, с помощью кнопки **Назад**.

Переходы на внешние адреса не блокируются.

## Резюме

| Функция | Особенности |
| --- | --- |
| [useBlocker](libraries/router/reference/hooks/useBlocker) | &nbsp;&nbsp; &bull; Ставится один раз и уничтожается вместе с компонентом, где он вызван.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Удобно использовать для подтверждения выхода со страницы.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Может использоваться только в react-компоненте и другом хуке.&#x0d;&#x0a; &nbsp;&nbsp; &bull; Возвращает объект-блокировщик. |
| [`RouteNavigator.block`](libraries/router/reference/objects/RouteNavigator/block) | &nbsp;&nbsp; &bull; Может использоваться где угодно. &#x0d;&#x0a; &nbsp;&nbsp; &bull; При использовании в компоненте необходимо оборачивать в `useEffect`. &#x0d;&#x0a; &nbsp;&nbsp; &bull; Когда таких функций несколько, навигация не будет работать, если хотя бы одна из функций запрещает переход. &#x0d;&#x0a; &nbsp;&nbsp; &bull; Возвращает функцию для снятия блокировки. |

## Рекомендации

* Не злоупотребляйте блокировкой навигации, используйте её только в исключительных случаях.

* Мы не рекомендуем использовать более одной блокирующей функции на экране.

При использовании нескольких таких функций навигация не будет работать, если хотя бы одна из функций запрещает переход.

## Материалы по теме

* [Навигация в приложении](libraries/router/navigation)

* [RouteNavigator.block](libraries/router/reference/objects/RouteNavigator/block)

* [useBlocker](libraries/router/reference/hooks/useBlocker)

* [Библиотека vk-mini-apps-router](libraries/router)
