# VK Bridge | VKWebAppGetGrantedPermissions

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetGrantedPermissions](https://dev.vk.ru/ru/bridge/VKWebAppGetGrantedPermissions)
<!-- ---
title: 'VK Bridge | Доступы и разрешения | VKWebAppGetGrantedPermissions'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetGrantedPermissions

`VKWebAppGetGrantedPermissions` позволяет получить список разрешений, выданных мобильному приложению.

Чтобы пользователь мог выдать нужные разрешения на iOS, откройте системные настройки устройства. Для этого добавьте в нужное место своего мини-приложения ссылку: 

```HTML
<a href="app-settings:" target="_blank">
```

## Пример

```JavaScript
bridge.send('VKWebAppGetGrantedPermissions')
  .then((data) => { 
    if (data.permissions) {
      // Список разрешений получен
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

* С помощью [событий](#События) `VKWebAppGetGrantedPermissionsResult` и `VKWebAppGetGrantedPermissionsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `permissions` | `array[string]` | Список разрешений, выданных мобильному приложению. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `camera` — разрешено использовать камеру, чтобы делать фотографии и записывать видео.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `location` — разрешено запрашивать местоположение устройства.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `photo` — доступ к фотографиям и видео на мобильном устройстве с iOS.&#x0d;&#x0a;&#x0d;&#x0a; Пустой результат означает, что никакие разрешения не выданы. Есть ли доступ к фотографиям, можно проверить только на iPhone. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetGrantedPermissionsResult`

 сигнализирует, что список разрешений получен. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppGetGrantedPermissionsResult",
    data: {
      "permissions": [
        "camera",
        "location",
        "photo"
      ]
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetGrantedPermissionsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppGetGrantedPermissions](https://vk.com/app6909581#VktXZWJBcHBHZXRHcmFudGVkUGVybWlzc2lvbnNAJTdCJTdE)
