# VK Bridge | VKWebAppGetFriends

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetFriends](https://dev.vk.ru/ru/bridge/VKWebAppGetFriends)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Пользователи | VKWebAppGetFriends'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetFriends

`VKWebAppGetFriends` показывает окно выбора друзей из списка и получает информацию о них.

## Пример

```JavaScript
bridge.send('VKWebAppGetFriends')
  .then((data) => { 
    if (data) {
      // Данные о пользователях
      console.log(data.users);
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
| `multi` &#x0d;&#x0a;*обязательное* | `boolean` | Информация о том, выбрать ли нескольких друзей из списка или одного. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — выбор одного друга из списка (значение по умолчанию).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — выбор нескольких друзей из списка. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppGetFriendsResult` и `VKWebAppGetFriendsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.
* `User denied`, если пользователь закрыл окно выбора друзей.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `users` | `array[object]` | Массив объектов пользователей. Объект содержит следующие поля:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `id` (`integer`) — идентификатор пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `first_name` (`string`) — имя пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `last_name` (`string`) — фамилия пользователя.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `sex` (`integer`) — пол пользователя. Возможные значения: &#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `1` — женский.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `2` — мужской.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `0` — пол не указан.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `photo_200` (`string`) — URL квадратной фотографии пользователя с шириной 200 пикселей. Если у пользователя отсутствует фотография, возвращается `https://vk.com/images/camera_200.png`. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetFriendsResult`

Сигнализирует, что данные о пользователях получены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetFriendsResult",
    data: {
      users: [
        {
          id: 743784479,
          sex: 2,
          last_name: "Хомяк",
          first_name: "Сеня",
          photo_200: "https://sun1-88.userapi.com/s/v1/ig2/ffZYc9qa-E8wPmfGsv-7erYVc83oWBUPeZjY0KSt7i7mkJ6y5YgwrNVs8K9E8TfCK8PuWXhu3l6O5cyCnlUSUCl3.jpg?size=200x200&quality=96&crop=26,26,204,204&ava=1"
        },
        {
          id: 743784474,
          sex: 2,
          last_name: "Рыжий",
          first_name: "Персик",
          photo_200: "https://sun1-91.userapi.com/s/v1/ig2/Dcf-SWu7nVYDDldq9oQegiC06VqsSa43-HpDxzPjrvFCUUk9nSevY2Uf9xzm0bxvLfgsTOH6XiiW-zeLcDhPDj_w.jpg?size=200x200&quality=96&crop=26,26,204,204&ava=1"
        }
      ]
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetFriendsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Особенности использования

Для работы события вашему приложению не требуется предварительно получать права на доступ к данным профиля пользователя.  

Событие `VKWebAppGetFriends` предназначено для разового получения информации о друзьях пользователя. Решение пользователя не сохраняется для последующих вызовов. При повторном вызове события платформа снова покажет диалоговое окно со списком друзей.

## Песочница

[VKWebAppGetFriends](https://vk.cc/bZflVs)

## Материалы по теме

* [API-метод apps.getFriendsList](method/apps.getFriendsList)

* [API-методы Friends](method/friends)
