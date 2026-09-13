# VK Bridge | VKWebAppGetClientVersion

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppGetClientVersion](https://dev.vk.ru/ru/bridge/VKWebAppGetClientVersion)
<!-- ---
title: 'VK Bridge | Служебные | VKWebAppGetClientVersion'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppGetClientVersion

`VKWebAppGetClientVersion` возвращает информацию о клиенте, на котором запущена ваша игра или мини-приложение.

## Пример

```JavaScript
bridge.send('VKWebAppGetClientVersion')
  .then((data) => { 
    if (data.platform) {
      // Данные пользователя получены
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

—

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppGetClientVersionResult` и `VKWebAppGetClientVersionFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект с полями:

| Поле | Тип | Описание |
| --- | --- | --- |
| `app` | `string` | Тип мобильного клиента. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkclient` — приложение «ВКонтакте».&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `vkme` — приложение «VK Мессенджер».&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `ok` — приложение «Одноклассники». |
| `build` | `string` | Версия сборки приложения хоста на мобильном устройстве. |
| `client_user_agent` | `string` | User-Agent приложения на мобильном устройстве. |
| `install_referrer` | `string` | Идентификатор отслеживания рекламы для Android. |
| `is_google_services_available` | `boolean` | Информация о том, есть ли на мобильном устройстве сервисы Google.|
| `is_new_navigation` | `boolean` | Для служебного использования. |
| `platform` | `string` | Устройство, на котором запущено ваше приложение. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `ios` — мобильное приложение для iOS.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `android` — мобильное приложение для Android.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `web` — десктопная версия сайта ВКонтакте.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `web-ok` — десктопная версия сайта Одноклассники.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mobile-web` — мобильная версия сайта ВКонтакте.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mobile-web-ok` — мобильная версия сайта Одноклассники.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `universal_web` — веб-версия или десктопное приложение VK Мессенджер. |
| `version`| `string` | Номер версии мобильного приложения для Android или iOS. При вызове события на десктопной или мобильной версии сайта в этом поле возвращается значение `0.0`. |
| `vk_client_exists` | `boolean` | Информация о том, установлено ли приложение ВКонтакте на мобильном устройстве. |



Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppGetClientVersionResult`

Сигнализирует, что данные пользователя получены. В обработчик события на стороне пользователя передаются данные:

```JavaScript
{
  detail: {
    type: "VKWebAppGetClientVersionResult",
    data: {
      "platform": "android",
      "version": "5.3.2",
      "app": "vkclient",
      "is_google_services_available": true,
      "client_user_agent": "SAK_1.93(com.vkontakte.android)/7.42-13967 (Android 12; SDK 31; arm64-v8a; samsung SM-A525F; ru; 2186x1080)",
      "build": "13967",
      "is_new_navigation": false,
      "install_referrer": "com.android.vending",
      "vk_client_exists": true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppGetClientVersionFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).

## Песочница

[VKWebAppGetClientVersion](https://vk.cc/bZftjV)
