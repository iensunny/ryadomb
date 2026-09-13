# Первые шаги

> Источник: [https://dev.vk.ru/ru/bridge/getting-started](https://dev.vk.ru/ru/bridge/getting-started)
Этот раздел описывает шаги, которые необходимо выполнить в мини-приложении или игре для подключения и инициализации [библиотеки VK Bridge](bridge/overview), а также примеры вызова событий и обработки результатов. Представленные инструкции подходят для любой операционной системы.

Для работы с VK Bridge:

1. Настройте [окружение](mini-apps/software-installation).
1. Подготовьте проект вашего мини-приложения или игры. Если у вас еще нет проекта, вы можете использовать шаблон [`create-vk-mini-app`](mini-apps/getting-started/create-vk-mini-app).
1. Добавьте в проект вашего мини-приложения или игры [библиотеку VK Bridge](#Подключение%20библиотеки).
1. Вызовите [событие VK Bridge](#Вызов%20события).
1. Обработайте полученный результат при помощи методов:
    * [`bridge.send`](#bridge.send)
    * [`bridge.subscribe`](#bridge.subscribe)

## Подключение библиотеки

Если вы используете шаблон проекта [`create-vk-mini-app`](mini-apps/getting-started/create-vk-mini-app), отдельно подключать библиотеку VK Bridge не нужно.

:::note
После подключения библиотеки в коде приложения обязательно нужно вызвать событие инициализации [`VKWebAppInit`](bridge/VKWebAppInit). Оно информирует платформу ВКонтакте о старте приложения и инициализирует параметры, необходимые для работы библиотеки.
:::

Есть несколько способов подключения библиотеки к приложению. Мы рекомендуем [способ с использованием менеджеров пакетов](#Через%20пакет%20npm).

### Через пакет npm

1. Перейдите в созданный проект приложения:

    ```sh
    cd <ПУТЬ_К_ПРИЛОЖЕНИЮ>
    ```

1. Установите библиотеку:

    ```sh
    npm install @vkontakte/vk-bridge || yarn add @vkontakte/vk-bridge
    ```

1. Чтобы инициализировать VK Bridge, в файле `index.js` вашего проекта вызовите событие [`VKWebAppInit`](bridge/VKWebAppInit):

    ```JavaScript
    import bridge from '@vkontakte/vk-bridge';

    // Отправляет событие инициализации нативному клиенту
    bridge.send("VKWebAppInit");      
    ```
    
   Событие `VKWebAppInit` должно быть отправлено до загрузки основных ресурсов приложения. Допустимый промежуток — не более 30 секунд после запуска приложения. Убедитесь, что ваше приложение обрабатывает это событие раньше других событий VK Bridge.

### Включение скрипта в HTML-код страницы

Этот способ подходит, если при разработке HTML-приложения вы не используете менеджеры пакетов, такие как `npm` или `yarn`.

1. В код каждой HTML-страницы, где вы будете вызывать библиотеку, добавьте ссылку на файл `browser.min.js`. Файл минифицирован, время его загрузки минимально. 

    Подключить файл можно несколькими способами:

    * Добавьте ссылку на копию файла, расположенную на сервисе [unpkg.com](https://unpkg.com). В этом случае вам не нужно будет следить за выходом обновлений библиотеки — последняя версия будет подтягиваться автоматически. Для подключения используйте:

        ```HTML
        <script src="https://unpkg.com/@vkontakte/vk-bridge/dist/browser.min.js"></script>  
        ```

        — или —   

    * Скопируйте файл `browser.min.js` в свой проект и в коде страниц ссылайтесь на эту копию. В этом случае вам придётся самостоятельно следить за выходом новых версий библиотеки и обновлять её в проекте вручную.

        >В [репозитории](https://www.npmjs.com/package/@vkontakte/vk-bridge?activeTab=code) VK Bridge этот файл находится в папке `dist`.

        — или —

    * Разместите файл на любом CDN-сервере и ссылайтесь на него.

        > **Обратите внимание!** Сервис [unpkg.com](https://unpkg.com) или другой CDN-сервер может быть недоступен в регионе, в котором находится пользователь приложения. Проблемы с подключением к таким внешним сервисам могут привести к увеличению времени загрузки приложения или сбоям в её работе.
        >
        > Наша рекомендация для создания приложения — используйте менеджеры пакетов, например `npm` или `yarn`, и подключайте библиотеку VK Bridge с [их помощью](#Через%20пакет%20npm).

2. Чтобы инициализировать VK Bridge, добавьте в код страницы вызов события [`VKWebAppInit`](bridge/VKWebAppInit):

    ```HTML
    <script>
      vkBridge.send("VKWebAppInit", {});
    </script>
    ```

   Событие `VKWebAppInit` должно быть отправлено до загрузки основных ресурсов приложения. Допустимый промежуток — не более 30 секунд после запуска приложения. Убедитесь, что ваше приложение обрабатывает это событие раньше других событий VK Bridge.

Обратите внимание: когда вы включаете .js-файл библиотеки в HTML-код своих страниц, в JavaScript-коде надо использовать имя объекта `vkBridge`, а не `bridge`.

## Вызов события

Используйте события объекта `bridge`:

```JavaScript
// Подписывается на события, отправленные нативным клиентом
bridge.subscribe((e) => console.log(e)); 
    
// Отправляет событие нативному клиенту
bridge.send("VKWebAppInit", {});      
    
// Проверяет, поддерживается ли событие на текущей платформе, и
// вызывает это событие 
bridge.supportsAsync("VKWebAppResizeWindow").then( res => {
    if (res) {
        bridge.send("VKWebAppResizeWindow", {"width": 800, "height": 1000});
    }
});

```

> [Список всех событий VK Bridge](bridge/overview)

## Обработка результата

### `bridge.send`

При использовании метода `bridge.send` вернётся промис. Работа с промисами не требует подключения дополнительных библиотек.

```JavaScript
// Отправка события
bridge.send('VKWebAppGetEmail')
  .then((data) => {
    if (data.result) {
      // Обработка события в случае успеха
      console.log(data.email);
    } else {
      // Ошибка
    }
  })
  .catch((error) => {
    // Обработка события в случае ошибки
    console.log(error);
  });
```

> Подробнее о промисах:
>
> * [developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)
>
> * [learn.javascript.ru/promise](https://learn.javascript.ru/promise)

### `bridge.subscribe`

При использовании метода `bridge.subscribe` в общем случае вернётся событие:

* С постфиксом `Result`, если метод выполнился успешно.
* С постфиксом `Failed`, если метод выполнился с ошибкой.

События могут иметь другие постфиксы. Они подробно описаны на странице конкретного события.

```JavaScript
// Подписывается на события, отправленные нативным клиентом
bridge.subscribe(event => {
  if (!event.detail) {
    return;
  }

  switch(event.detail.type) {
    case 'VKWebAppOpenCodeReaderResult':
      if (event.detail.data.result) {
        // Обработка события в случае успеха
        console.log(event.detail.data.result);
      } else {
        // Ошибка
      }
      break;
    case 'VKWebAppOpenCodeReaderFailed':
      // Обработка события в случае ошибки
      console.log(event.detail.data.error_type, event.detail.data.error_data);      
      break;
  }
});
```

## Обработка ошибок

При работе с VK Bridge в ответе могут возвращаться ошибки в объекте `data`.

```JSON
{
  "type": "EventNameFailed", 
  "data": { 
    "error_type": "...",
    "error_data": {}
  } 
}
```

Параметры объекта `data`:

| Параметр | Тип | Описание |
|---|---|---|
|`error_type` | `string` | Тип ошибки. Возможные значения:&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `client_error` — ошибки, возникающие на клиенте;&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `api_error` — ошибки API;&#x0d;&#x0a;&nbsp;&nbsp; &bullet; `auth_error` — ошибки авторизации. |
|`error_data` | `object` | Дополнительные данные ошибки, которые зависят от `error_type`. См. описание ниже. |
|`request_id` | `integer` | Информация, которая используется для внутренних целей: успешного выполнения или отклонения промиса. |

### `client_error`

К этому типу относятся ошибки, связанные с некорректным синтаксисом событий VK Bridge. Параметры объекта `error_data`:

| Параметр | Тип | Описание |
|---|---|---|
|`error_code` | `integer` | Код ошибки. См. список возможных значений в таблице ниже. |
|`error_reason` | `string` | Описание ошибки. |
|`error_description` | `string` | **Необязательное поле**. Детальное описание ошибки. |

| Код ошибки (`error_code`) |  Описание (`error_reason`) |
|---|---|
|1 | Unknown error |
|2 | Missing required params |
|3 | Connection lost |
|4 | User denied |
|5 | Invalid params |
|6 | Unsupported platform |
|7 | No device permission |
|8 | Need user permission |
|9 | This action cannot be performed in the background |
|10 | Requests limit reached |
|11 | Access denied |
|12 | Uninitialized App |
|13 | Custom error for every handler |
|20 | No ads |

### `api_error`

К этому типу относятся ошибки, перечисленные на странице [Возвращаемые ошибки](reference/errors) или в описании метода. Параметры объекта `error_data`:

| Параметр | Тип | Описание |
|---|---|---|
|`error_code` | `integer` | Код ошибки. |
|`error_msg` | `string` | Описание ошибки. |
|`request_params` | `array` | Массив, содержащий параметры запроса к API. |

### `auth_error`

К этому типу относятся ошибки, которые возвращаются в ходе авторизации. Параметры объекта `error_data`:

| Параметр | Тип | Описание |
|---|---|---|
|`error` | `integer` | Код ошибки. |
|`error_reason` | `string` | Описание ошибки. |
|`error_description` | `array` | **Необязательное поле**. Детальное описание ошибки. |
