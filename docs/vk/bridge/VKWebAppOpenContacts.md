# VK Bridge | VKWebAppOpenContacts

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppOpenContacts](https://dev.vk.ru/ru/bridge/VKWebAppOpenContacts)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Пользователи | VKWebAppOpenContacts'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppOpenContacts

`VKWebAppOpenContacts` запрашивает доступ к телефонной книге на устройстве, открывает окно выбора контакта из телефонной книги и получает данные контакта. 

## Пример

```JavaScript
bridge.send('VKWebAppOpenContacts')
  .then((data) => { 
    if (data.phone) {
      // Данные контакта получены
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
| ВКонтакте | Android, iOS |
| Одноклассники | Android, iOS |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppOpenContactsResult` и `VKWebAppOpenContactsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если приложение запущено в фоновом режиме.
* `User denied`, если пользователь закрыл телефонную книгу.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `phone` | `string` | Номер телефона в формате, в котором он хранится в телефонной книге. |
| `first_name` | `string` | Имя пользователя, указанное в телефонной книге. |
| `last_name` | `string` | Фамилия пользователя, указанная в телефонной книге. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppOpenContactsResult`

Сигнализирует, что данные контакта получены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppOpenContactsResult",
    data: {
      phone: "79217770099",
      first_name: "Персик",
      last_name: "Рыжий" 
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppOpenContactsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Материалы по теме

* [VKWebAppGetPhoneNumber](bridge/VKWebAppGetPhoneNumber)
* [VKWebAppGetFriends](bridge/VKWebAppGetFriends)
