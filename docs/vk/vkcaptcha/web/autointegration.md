# Установка и подключение VK ID Captcha SDK для веб

> Источник: [https://dev.vk.ru/ru/vkcaptcha/web/autointegration](https://dev.vk.ru/ru/vkcaptcha/web/autointegration)
В инструкции описано, как установить и подключить VK ID Captcha SDK для веб-платформы, а также автоматически настроить отображение капчи и обработку результатов с помощью обработчика. Подробнее об ошибке — в статье [Ошибка с Captcha](/api/captcha-error).

Перед началом работы ознакомьтесь со [сценарием взаимодействия](vkcaptcha/web/scenario) с VK ID Captcha SDK Web и [требованиями к программному обеспечению](#Поддерживаемые%20версии%20браузеров).

Затем интегрируйте VK ID Captcha SDK Web одним из двух способов: с помощью [пакетного менеджера](#С%20помощью%20пакетного%20менеджера) (рекомендуется) или [скрипта-загрузчика](#С%20помощью%20скрипта-загрузчика).

## Поддерживаемые версии браузеров

| Браузер | Версия |
|---|---|
| Google Chrome        | 63 или новее |
| iOS Google Chrome    | 12 или новее |
| Mozilla Firefox      | 55 или новее |
| Microsoft Edge       | 79 или новее |
| Opera                | 50 или новее |
| Safari               | 12 или новее |
| Samsung Internet     | 8.2 или новее|

## С помощью пакетного менеджера

### Шаг 1. Установка

1. Для установки npm-пакета нужно настроить реестр npm-пакетов для `@vkid`:
    
    ```Командная&nbsp;строка
    npm install @vkid/captcha
    ```
1. Чтобы подключить VK ID Captcha SDK Web, установите npm-пакет `@vkid/captcha` через один из пакетных менеджеров:
    * npm
    
    ```Командная&nbsp;строка
    npm i @vkid/captcha
    ```
    * yarn
    
    ```Командная&nbsp;строка
    yarn add @vkid/captcha
    ```
    * pnpm
    
    ```Командная&nbsp;строка
    pnpm add @vkid/captcha
    ```

### Шаг 2. Интеграция обработчика для пакетного менеджера

После подключения VK ID Captcha SDK Web интегрируйте обработчик ошибки капчи в обработчик ответа Web API.

Ниже приведены примеры интеграции с автоматическим и ручным созданием виджета капчи.

**Интеграция обработчика с автосозданием виджета капчи**

```JavaScript
import { checkCaptchaError, CheckCaptchaType } from "@vkid/captcha";
  
function api(url: string, bodyParams: { [key: string]: any }) {
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyParams),
  }).then(async (response) => {
    const responseResult = await response.json();
  
    // Вызов обработчика ошибки капчи
    const { captchaType, captchaWidget } = checkCaptchaError({
      responseHeaders: response.headers,
      url: response.url,
      responseError: responseResult.error,
      withWidget: true,
    });
  
    // Известная ошибка капчи
    if (captchaType && captchaType !== CheckCaptchaType.UNKNOWN) {
      try {
        const successToken = await captchaWidget.show({
          container: document.body,
          view: 'popup',
        });
        // Повторный POST-запрос к API ВКонтакте, в который надо добавить success_token: <Полученное значение токена>
        api(url, {
          ...bodyParams,
          success_token: successToken,
        });

      } catch (error) {
        if (error === 'close') {
          // Обработка закрытия капчи в случае неуспешного прохождения или закрытия капчи пользователем
        } else {
          // Обработка внутренней ошибки капчи
        }
      }
    }
  
    // Неизвестная ошибка капчи
    if (captchaType === CheckCaptchaType.UNKNOWN) {
      //  Ваша реализация обработки неизвестной ошибки (VK ID Captcha SDK не обрабатывает такие ошибки)
    }
  });
}
```

**Интеграция обработчика с ручным созданием виджета капчи**

```JavaScript
import { CaptchaWidget, checkCaptchaError, CheckCaptchaType } from "@vkid/captcha";
  
function api(url: string, bodyParams: { [key: string]: any }) {
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyParams),
  }).then(async (response) => {
    const responseResult = await response.json();
  
    // Вызов обработчика ошибки капчи
    const { captchaType } = checkCaptchaError({
      responseHeaders: response.headers,
      url: response.url,
      responseError: responseResult.error,
      withWidget: false,
    });
  
    // Известная ошибка капчи
    if (captchaType && captchaType !== CheckCaptchaType.UNKNOWN) {
      try {
        const captchaWidget = new CaptchaWidget();
        const successToken = await captchaWidget.show({
          container: document.body,
          captchaType: captchaType,
          view: 'popup',
        });
 
        // Повторный POST-запрос к API ВКонтакте, в который надо добавить success_token: <Полученное значение токена>
        api(url, {
          ...bodyParams,
          success_token: successToken,
        });
      } catch (error) {
        if (error === 'close') {
          // Обработка закрытия капчи в случае неуспешного прохождения или закрытия капчи пользователем
        } else {
          // Обработка внутренней ошибки капчи
        }
      }
    }
  
    // Неизвестная ошибка капчи
    if (captchaType === CheckCaptchaType.UNKNOWN) {
      // Ваша реализация обработки неизвестной ошибки (VK ID Captcha SDK не обрабатывает такие ошибки)
    }
  });
}
```


## С помощью скрипта-загрузчика

### Шаг 1. Установка и инициализация

1. Чтобы установить VK ID Captcha SDK Web, добавьте скрипт-загрузчик в код вашего приложения:
    
    ```JavaScript
    <script src="https://static.vk.ru/captchaSDK/loader/1/umd/index.js"></script>
    ```
    
    :::note
    `1` — версия скрипта.
    :::
    
    После установки VK ID Captcha SDK Web будет доступен в объекте `window.vkidCaptcha`, где `vkidCaptcha` — промис.
1. Инициализируйте VK ID Captcha SDK Web:
    
    ```JavaScript
    const { CaptchaWidget } = await window.vkidCaptcha;
    ```

### Шаг 2. Интеграция обработчика для скрипта-загрузчика

После подключения VK ID Captcha SDK Web интегрируйте обработчик ошибки капчи в обработчик ответа Web API.

Ниже приведены примеры интеграции с автоматическим и ручным созданием виджета капчи.

**Интеграция обработчика с автосозданием виджета капчи**

```JavaScript
function api(url: string, bodyParams: { [key: string]: any }) {
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyParams),
  }).then(async (response) => {
    const responseResult = await response.json();
  
    const { checkCaptchaError } = await window.vkidCaptcha;
  
    // Вызов обработчика ошибки капчи
    const { captchaType, captchaWidget } = checkCaptchaError({
      responseHeaders: response.headers,
      url: response.url,
      responseError: responseResult.error,
      withWidget: true,
    });
  
    // Известная ошибка капчи
    if (captchaType && captchaType !== 'unknown') {
      try {
        const successToken = await captchaWidget.show({
          container: document.body,
          view: 'popup',
        });
 
        // Повторный POST-запрос к API ВКонтакте, в который надо добавить success_token: <Полученное значение токена>
        api(url, {
          ...bodyParams,
          success_token: successToken,
        });
      } catch (error) {
        if (error === 'close') {
          // Обработка закрытия капчи в случае неуспешного прохождения или закрытия капчи пользователем
        } else {
          // Обработка внутренней ошибки капчи
        }
      }
    }
  
    // Неизвестная ошибка капчи
    if (captchaType === 'unknown') {
      //  Ваша реализация обработки неизвестной ошибки (VK ID Captcha SDK не обрабатывает такие ошибки)
    }
  });
}
```

**Интеграция обработчика с ручным созданием виджета капчи**

```JavaScript
function api(url: string, bodyParams: { [key: string]: any }) {
  fetch(url, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyParams),
  }).then(async (response) => {
    const responseResult = await response.json();
  
    const { CaptchaWidget, checkCaptchaError } = await window.vkidCaptcha;
  
    // Вызов обработчика ошибки капчи
    const { captchaType } = checkCaptchaError({
      responseHeaders: response.headers,
      url: response.url,
      responseError: responseResult.error,
      withWidget: false,
    });
  
    // Известная ошибка капчи
    if (captchaType && captchaType !== 'unknown') {
      try {
        const captchaWidget = new CaptchaWidget();
        const successToken = await captchaWidget.show({
          container: document.body,
          captchaType: captchaType,
          view: 'popup',
        });
 
        // Повторный POST-запрос к API ВКонтакте, в который надо добавить success_token: <Полученное значение токена>
        api(url, {
          ...bodyParams,
          success_token: successToken,
        });
      } catch (error) {
        if (error === 'close') {
          // Обработка закрытия капчи в случае неуспешного прохождения или закрытия капчи пользователем
        } else {
          // Обработка внутренней ошибки капчи
        }
      }
    }
  
    // Неизвестная ошибка капчи
    if (captchaType === 'unknown') {
      // Ваша реализация обработки неизвестной ошибки (VK ID Captcha SDK не обрабатывает такие ошибки)
    }
  });
}
```

## Методы VK ID Captcha SDK при автообработке

* Проверить ответ на наличие ошибок капчи — [`checkCaptchaError()`](#checkCaptchaError()).
* Отображение капчи – [`captchaWidget.show()`](#captchaWidget.show()).
* Закрытие капчи – [`captchaWidget.close()`](#captchaWidget.close()).

### `checkCaptchaError()`

Функция для проверки ответа API на наличие ошибки капчи. Возвращает результат проверки:
* Тип капчи `captchaType`, если проверка выявила ошибку капчи.
* Виджет капчи `captchaWidget`, если тип капчи известен VK ID Captcha SDK Web.

Если пользователь успешно прошёл капчу, VK ID Captcha SDK пришлёт callback-уведомление `onClose()` и, в зависимости от типа отображения капчи `view`, выполнит одно из действий:
* Закроет капчу, если она отображена в виде всплывающего окна (`view = popup`).
* Оставит капчу на странице, если она отображена в виде блока (`view = block`).

Если вы хотите закрывать окно капчи вручную, используйте метод [`captchaWidget.close()`](#captchaWidget.close()).

#### Параметры запроса

| Параметр | Тип данных | Описание |
| --- | --- | --- |
| `responseHeaders`&#x0d;&#x0a;*обязательный* | `Headers` | Заголовки запроса API. |
| `url`&#x0d;&#x0a;*обязательный* | `string` | URL запроса API. |
| `responseError`&#x0d;&#x0a;*обязательный* | `object` | Данные ошибки, которые вы получили в ответе на запрос к API ВКонтакте. Подробнее — в [`responseError`](#Параметр%20responseError). |
| `withWidget`&#x0d;&#x0a;*необязательный* | `boolean` | Флаг создания виджета капчи. &#x0d;&#x0a;Доступные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`true` – необходимо создать и вернуть инстанс виджета капчи. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`false` – инстанс капчи создавать не нужно. |

#### Параметр `responseError`

В параметре нужно передавать данные ошибки, которые вы получили в ответе на запрос к API ВКонтакте.

**Тип данных параметра**

```JSON
{
  error_code: number | null;
  redirect_uri?: string;
}
```

Если ошибка, которую вы получили в ответе на запрос к API, не соответствует полученному типу, то вам необходимо самостоятельно определить, что это за ошибка.

Если полученный ответ — это ошибка капчи, вам нужно привести её к виду:

```JSON
{
  error_code: responseData.errorType === 'captcha' ? 14 : null,
  redirect_uri: responseData.redirect_uri,
}
```

#### Параметры ответа

| Параметр | Тип данных | Описание |
| --- | --- | --- |
| `captchaType` | `CheckCaptchaType` &#x0d;&#x0a;или &#x0d;&#x0a;`null` | Тип капчи.&#x0d;&#x0a; Возможные значения `CheckCaptchaType`: &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`type_1`, `type_2` — известные типы капчи.&#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`unknown` — неизвестный тип капчи. &#x0d;&#x0a;Вам необходимо самостоятельно отобразить капчу. Для данного типа `captchaWidget` не возвращается. |
| `captchaUrl` | `string` &#x0d;&#x0a;или &#x0d;&#x0a;`undefined` | URL капчи. Возвращается только для типов `captchaType`: `type_1`' и `type_2`. |
| `captchaWidget` | `CaptchaWidget` | Виджет капчи. |


### `captchaWidget.show()`

Метод для отображения капчи. Возвращает промис с результатом прохождения капчи:
* Токен `success_token`, если пользователь успешно прошёл капчу.
* Ошибку `error` = `close`, если пользователь закрыл окно капчи.

Если пользователь успешно прошёл капчу, VK ID Captcha SDK пришлёт callback-уведомление `onClose()` и, в зависимости от типа отображения капчи `view`, выполнит одно из действий:
* Закроет капчу, если она отображена в виде всплывающего окна (`view = popup`).
* Оставит капчу на странице, если она отображена в виде блока (`view = block`).

Если вы хотите закрывать окно капчи вручную, используйте метод [`captchaWidget.close()`](#captchaWidget.close()).

#### Схема запроса

```JSON
{
  container: HTMLElement; // HTML-элемент, в который будет вставлен виджет 
  view: 'popup' | 'block'; // Режим отображения
  autofocus: true | false; // Флаг автофокуса капчи при её отображении. Используется, только если view: `block`
  scheme?: 'light' | 'dark'; // Цветовая схема виджета 
  lang?: string; // Локализация
  onClose?: () => {} // Callback-уведомление, срабатывает при автоматическом закрытии виджета
}
```

#### Параметры запроса

| Параметр | Тип данных | Описание |
| --- | --- | --- |
| `container`&#x0d;&#x0a;*обязательный* | `HTMLElement` | HTML-элемент, в который будет вставлен виджет. |
| `view`&#x0d;&#x0a;*обязательный* | `string` | Внешний вид капчи:&#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`popup` — всплывающее окно. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`block` — блок (доступно только для `captchaType = type_1`). |
| `autofocus`&#x0d;&#x0a;*необязательный* | `boolean` | Флаг, который отвечает за автофокусировку капчи. Используется, только если `view` присвоено значение `block`. &#x0d;&#x0a;Если флаг включён, фокус на странице будет перемещён на веб-элемент с капчей. Если флаг выключен, фокус на странице останется на том же месте, где и был до появления капчи. &#x0d;&#x0a;Доступные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`true` — автофокус включён (по умолчанию). &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`false` — автофокус выключен. |
| `scheme`&#x0d;&#x0a;*необязательный* | `string` | Цветовая схема виджета:&#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`light` — светлая. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`dark` — тёмная. &#x0d;&#x0a; По умолчанию соответствует схеме страницы или приложения, куда интегрирована капча. |
| `lang`&#x0d;&#x0a;*необязательный* | `string` | Язык локализации. Если не передать значение, оно будет определено на сервере. &#x0d;&#x0a;Доступные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`ru` – русский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`uk` – украинский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`en` – английский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`es` – испанский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`de` – немецкий. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`pl` – польский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`fr` – французский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`uz` – узбекский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`tr` – турецкий. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`kk` – казахский. &#x0d;&#x0a; &nbsp;&nbsp; &bullet;&nbsp;`be` – белорусский. &#x0d;&#x0a;&#x0d;&#x0a;Пример: `ru` |
| `onClose`&#x0d;&#x0a;*необязательный* | `() => void` | Callback-уведомление о закрытии капчи, вызывается после закрытия капчи. |

#### Схема ответа

```JavaScript
promise resolve <token>
promise reject <error>
```

#### Параметры ответа

| Параметр | Тип данных | Описание |
| --- | --- | --- |
| `token` | `string` | Токен успешного прохождения капчи `success_token`. |
| `error` | `string` | Ошибка `сlose`, если пользователь закрыл капчу. |

### `captchaWidget.close()`

Метод для ручного закрытия капчи. В ответе ничего не возвращается.

**Пример вызова метода**

```JavaScript
captchaWidget.close();
```
