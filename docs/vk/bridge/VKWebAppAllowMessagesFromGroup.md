# VK Bridge | Сообщества | VKWebAppAllowMessagesFromGroup

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAllowMessagesFromGroup](https://dev.vk.ru/ru/bridge/VKWebAppAllowMessagesFromGroup)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppAllowMessagesFromGroup'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAllowMessagesFromGroup

:::note
**Важно!** Событие станет доступно пользователям после того, как ваше приложение пройдёт модерацию.

* [Модерация мини-приложений](mini-apps/settings/moderation)
* [Модерация игр](games/settings/moderation)
:::

`VKWebAppAllowMessagesFromGroup` показывает окно с запросом прав доступа на отправку сообщений от имени сообщества.

## Пример

```JavaScript
bridge.send('VKWebAppAllowMessagesFromGroup', {
  group_id: 166562603,
  key: 'dBuBKe1kFcdemzB' 
  })
  .then((data) => { 
    if (data.result) {
      // Пользователь разрешил отправку сообщений от имени сообщества
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
| ВКонтакте | Android, iOS, Mobile Web, Web |
| Одноклассники | Android, iOS, Mobile Web, Web |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `group_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор сообщества. |
| `key` &#x0d;&#x0a;*необязательное* | `string` | Произвольная строка. Этот параметр можно использовать для идентификации пользователя. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAllowMessagesFromGroupResult` и `VKWebAppAllowMessagesFromGroupFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `User denied`, если пользователь запретил отправку сообщений от имени сообщества.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если пользователь разрешил отправку сообщений от имени сообщества. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAllowMessagesFromGroupResult`

Сигнализирует, что пользователь разрешил отправку сообщений от имени сообщества. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAllowMessagesFromGroupResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAllowMessagesFromGroupFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

 [VKWebAppAllowMessagesFromGroup](https://vk.cc/bZfqcr)

## Материалы по теме

* [Игровые и социальные механики — Личные сообщения от игры](games/promotion/game-mechanics/messages)
