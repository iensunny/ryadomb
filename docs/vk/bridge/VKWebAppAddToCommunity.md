# VK Bridge | VKWebAppAddToCommunity

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppAddToCommunity](https://dev.vk.ru/ru/bridge/VKWebAppAddToCommunity)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Сообщества | VKWebAppAddToCommunity'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppAddToCommunity

`VKWebAppAddToCommunity` вызывает окно выбора сообщества и устанавливает в него приложение: мини-приложение или плагин.

* [Создание мини-приложений](mini-apps/getting-started)
* [Плагины для сообществ](plugins/overview)

Перед вызовом события из приложения включите [Запуск приложения из сообщества](mini-apps/settings/general/information#Запуск%20приложения%20из%20сообщества).

## Пример

```JavaScript
bridge.send('VKWebAppAddToCommunity')
  .then((data) => { 
    if (data.group_id) {
      // Приложение установлено в сообщество
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
| `hide_success_modal` &#x0d;&#x0a;*необязательное* | `boolean` | Указывает, нужно ли скрывать модальное окно об успешном добавлении приложения в сообщество. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — скрывать модальное окно.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — показывать модальное окно.&#x0d;&#x0a;&#x0d;&#x0a;Используется только в десктопной версии. На других платформах модальное окно не отображается.|

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppAddToCommunityResult` и `VKWebAppAddToCommunityFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если приложение запущено в фоновом режиме.
* `User denied`, если пользователь закрывает окно выбора сообщества.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `group_id` | `string` | Идентификатор сообщества, в котором установлено приложение. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppAddToCommunityResult`

Сигнализирует, что приложение установлено в сообщество. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppAddToCommunityResult",
    data: {
      group_id: "166562603"
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppAddToCommunityFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppAddToCommunity](https://vk.cc/bZfqOq) 

## Материалы по теме

* [Настройки мини-приложения](mini-apps/settings/overview)
* [Плагины для сообществ](plugins/overview)
