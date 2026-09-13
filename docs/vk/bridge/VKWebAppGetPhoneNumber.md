# VK Bridge | VKWebAppGetPhoneNumber

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetPhoneNumber](https://dev.vk.ru/ru/bridge/VKWebAppGetPhoneNumber)
<!-- ---
title: 'VK Bridge | Пользователи и сообщества | Пользователи | VKWebAppGetPhoneNumber'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetPhoneNumber

`VKWebAppGetPhoneNumber` показывает окно с запросом доступа к номеру телефона пользователя.

> **Совет.** Если вам требуется запросить не только номер телефона, но и адрес электронной почты, используйте вызов [карточки контактов](bridge/VKWebAppGetPersonalCard).

## Пример

```JavaScript
bridge.send('VKWebAppGetPhoneNumber')
  .then((data) => { 
    if (data.phone_number) {
      // Номер телефона получен
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
| Одноклассники | iOS, Mobile Web, Web |

## Параметры

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppGetPhoneNumberResult` и `VKWebAppGetPhoneNumberFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

Возможные ошибки:

* `This action cannot be performed in the background`, если мини-приложение запущено в фоновом режиме.
* `User denied`, если пользователь запретил доступ к номеру телефона.

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующими полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `phone_number` | `string` | Номер телефона пользователя. |
| `sign` | `string` | Подпись полученных данных. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetPhoneNumberResult`

Сигнализирует, что номер телефона получен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetPhoneNumberResult",
    data: {
      sign: "YdUTMy8uAmFXUqzMsAUjYFTZ1cUfhRJBpTjmqgZBCtg",
      phone_number: "79111234567" 
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetPhoneNumberFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Вычисление подписи

Для подписи последовательно объединяются значения:

* Идентификатор мини-приложения `app_id`.
* [Защищённый ключ](mini-apps/settings/development/keys#Защищённый%20ключ) `api_secret`.
* Идентификатор пользователя `user_id`.
* Пара `$field_name.$field_value`, вернувшаяся в событии.

От полученной после объединения строки вычисляется криптографический хеш SHA256 в байтовом представлении, затем хеш кодируется с помощью алгоритма Base64 Encode.

Пример формирования подписи события на PHP, где `app_id = 7770000`, `api_secret = W7kVvxVxZ4`, `user_id = 162447`, `field_name = phone_number`, `field_value = 70000000000`:

```PHP
$sign = rtrim(strtr(base64_encode(hash('sha256', '7770000W7kVvxVxZ4162447phone_number70000000000', true)), '+/', '-_'), '=');
```

## Особенности использования

Событие `VKWebAppGetPhoneNumber` предназначено для разового получения телефонного номера. Ответ пользователя о доступе к данным профиля не сохраняется. При повторном вызове события платформа снова запросит разрешение на доступ.

Такой подход, с одной стороны, помогает вашему приложению всегда работать с актуальными данными, а с другой — предотвращает скрытый сбор информации о пользователях, который могут вести недобросовестные разработчики.

Если вашему приложению надо повторно использовать телефонный номер пользователя, запросите его снова либо сохраните номер на стороне приложения и предоставьте возможность изменения по запросу.

## Песочница

[VKWebAppGetPhoneNumber](https://vk.cc/bZfjAn)

## Материалы по теме

* [VKWebAppGetPersonalCard](bridge/VKWebAppGetPersonalCard)

* [VKWebAppGetUserInfo](bridge/VKWebAppGetUserInfo)
