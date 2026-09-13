# VK Bridge | VKWebAppDownloadFile

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppDownloadFile](https://dev.vk.ru/ru/bridge/VKWebAppDownloadFile)
<!-- ---
title: 'VK Bridge | Текст и медиафайлы | VKWebAppDownloadFile'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppDownloadFile

`VKWebAppDownloadFile` позволяет скачать файл на устройство.

## Пример

### Приложение на JavaScript

```JavaScript
bridge.send("VKWebAppDownloadFile", {"url": "https://sun9-28.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg", "filename": "test.jpg"});
```

### Сайт

```JavaScript
vkBridge.send("VKWebAppDownloadFile", {"url": "https://sun9-28.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg", "filename": "test.jpg"});
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS |
| Одноклассники | Android |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `url` *обязательное* | `string` | Ссылка на файл, который необходимо скачать. |
| `filename` *обязательное* | `string` | Название файла, который будет скачан. |

## Результат

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

```JavaScript
bridge.send("VKWebAppDownloadFile")
.then( (data) => { 
  if (data.result) {
    // Файл скачивается
  }
  else {
    // Ошибка
  }
})
.catch( (error) => {
  // Ошибка
  console.log("Ошибка: " + error.error_type, error.error_data);
});
```

#### `.then()`

В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если файл скачивается.&#x0d;&#x0a;`false` — в ином случае. |

#### `.catch()`

В качестве ответа платформа возвращает объект с информацией об ошибке:

```JSON
{
  "data": {
    "error_type": "...",
    "error_data": {
      ...
    }
  }
}
```

Это общий объект для всех методов VK Bridge. Подробнее о нём можно узнать в описании [обработки результатов](bridge/getting-started#Обработка%20ошибок).

### События

#### Пример обработки

```JavaScript
// Подписаться на события библиотеки
bridge.subscribe(eventHandler);

// Обработчик событий
function eventHandler(e) {

  switch(e.detail.type) {
    case "VKWebAppDownloadFileResult":
      if (e.detail.data.scrollTop) {
        // Файл скачивается
      }
      else {
        // Ошибка
      }
      break;
    case "VKWebAppDownloadFileFailed":
      // Ошибка
      console.log(e.detail.data.error_type, 
                  e.detail.data.error_data);
      break;

    // ...

  }
}
```

#### VKWebAppDownloadFileResult

`VKWebAppDownloadFileResult` сигнализирует, что файл скачивается.

В обработчик события на стороне пользователя передаётся объект следующей структуры:  

```JavaScript
{
  detail: 
  {
    type: "VKWebAppDownloadFileResult",
    data: {
    "result": true
    }
  }
}
```

В качестве ответа, платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если файл скачивается.&#x0d;&#x0a;`false` — в ином случае. |

#### VKWebAppDownloadFileFailed

`VKWebAppDownloadFileFailed` информирует об ошибке.

В обработчик события на стороне пользователя передаётся объект следующей структуры:

```JavaScript
{
  detail: 
  {
    type: "VKWebAppDownloadFileFailed",
    data: {
      error_type: "...",
      error_data: {
        ...
      },
      request_id: 3
    }
  }
}
```

Это общий объект для всех методов VK Bridge. Подробнее о нём можно узнать в описании [обработки результатов](bridge/getting-started#Обработка%20ошибок).
