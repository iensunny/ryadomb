# VK Bridge | VKWebAppShowCommunityWidgetPreviewBox

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppShowCommunityWidgetPreviewBox](https://dev.vk.ru/ru/bridge/VKWebAppShowCommunityWidgetPreviewBox)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppShowCommunityWidgetPreviewBox'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

#  VKWebAppShowCommunityWidgetPreviewBox

`VKWebAppShowCommunityWidgetPreviewBox` показывает экран предпросмотра виджета для сообщества.

:::note
**Важно!** Перед установкой виджета пользователь должен добавить плагин в сообщество. Чтобы добавить плагин, используйте событие VK Bridge [`VKWebAppAddToCommunity`](bridge/VKWebAppAddToCommunity). Подробнее — в разделе [Виджеты сообществ](api/community-apps-widgets/getting-started).
:::

## Пример

```JavaScript
bridge.send('VKWebAppShowCommunityWidgetPreviewBox', {
  group_id: 166562603,
  type: 'text',
  code: 'return {
    "title": "Цитата",
    "text": "Текст цитаты"
  };'})
  .then((data) => { 
    if (data.result) {
      // Экран предпросмотра показан
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS, Web |
| Одноклассники | – |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `group_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор сообщества. |
| `type` &#x0d;&#x0a;*обязательное* | `string` | Тип виджета. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `text` — выводит текст.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `list` — выводит список объектов с описанием и кнопками для действий.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `table` — выводит таблицу с данными.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `tiles` — выводит плитки с изображением и кратким описанием.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `compact_list` — выводит список элементов в компактном виде.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `cover_list` — выводит список изображений (от 1 до 3) с кнопкой для действия, заголовком и описанием.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `match` — выводит текущий результат спортивного матча.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `matches` — выводит список спортивных матчей.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `donation` — выводит прогресс пожертвований.&#x0d;&#x0a;&#x0d;&#x0a; Параметры всех поддерживаемых типов виджетов подробно описаны в разделе [Виджеты приложений сообществ](reference/objects/app-widget).|
| `code` &#x0d;&#x0a;*обязательное* | `string` | Код виджета на языке программирования VKScript.&#x0d;&#x0a;&#x0d;&#x0a; Подробная информация о синтаксисе и возможностях этого языка с примерами находится в описании метода [`execute`](method/execute#Пример%20значения%20параметра%20code). |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppShowCommunityWidgetPreviewBoxResult` и `VKWebAppShowCommunityWidgetPreviewBoxFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если экран предпросмотра показан. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppShowCommunityWidgetPreviewBoxResult`

Сигнализирует, что экран предпросмотра показан. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppShowCommunityWidgetPreviewBoxResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppShowCommunityWidgetPreviewBoxFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppShowCommunityWidgetPreviewBox](https://vk.cc/bZfr2S)
