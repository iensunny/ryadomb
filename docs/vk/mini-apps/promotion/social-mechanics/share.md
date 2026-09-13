# Поделиться в сообщении

> Источник: [https://dev.vk.ru/ru/mini-apps/promotion/social-mechanics/share](https://dev.vk.ru/ru/mini-apps/promotion/social-mechanics/share)
Пользователи могут поделиться мини-приложением со своими друзьями в личных сообщениях. Чтобы пользователи могли отправлять ссылки на мини-приложение, воспользуйтесь [библиотекой VK Bridge](#Как%20реализовать).

<!--
exclusions/_images/games/promotion/game-mechanics/share/share-in-dialog.png
-->

![alt=Поделиться в сообщении;title=Поделиться в сообщении](170fb33fb16e6731e18689722b67d73cb7e551a595727d7b537e4d84 "6678690020749439885")

При отправке в личные сообщениях будет добавлен [сниппет](mini-apps/settings/general/design#Иконка%20для%20каталога%20и%20сниппетов) мини-приложения.

> **Обратите внимание:** в разделе [Мои приложения](https://dev.vk.com/ru/admin/apps-list) &rarr; **Редактировать** &rarr; **Настройки** &rarr; **Оформление** вы можете загрузить изображение, которое будет отображаться в сниппете.

<!--
exclusions/_images/games/promotion/game-mechanics/share/shared.png
-->
![alt=Пример сниппета мини-приложения в личном сообщении;title=Пример сниппета мини-приложения в личном сообщении](2d84d923adef07e9095c6ccc4a9a58832f1a53ca85f0e89a4f3141ca "7768978955113537896")

## Как реализовать

Чтобы поделиться мини-приложением, вызовите событие [`VKWebAppShare`](bridge/VKWebAppShare) библиотеки [VK Bridge](bridge/overview).

Пример вызова:

```JavaScript
bridge.send('VKWebAppShare', {
  link: 'https://vk.com/vkappsdev'
  })
  .then((data) => { 
    if (data.result) {
      // Сообщение отправлено
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
```

Если вы подключили библиотеку VK Bridge [в HTML-коде страницы](bridge/getting-started#Включение%20скрипта%20в%20HTML-код%20страницы), используйте в вызове имя объекта `vkBridge` вместо `bridge`.

На платформе Android у события `VKWebAppShare` есть возможность выбрать **Поделиться в истории**. Подробнее о размещении в истории — в разделе [Истории в профиле пользователя](mini-apps/promotion/social-mechanics/stories).

## Материалы по теме

* [Истории в профиле пользователя](mini-apps/promotion/social-mechanics/stories)
* [Сообщения сообщества](mini-apps/promotion/social-mechanics/messages)
* [Уведомления](mini-apps/promotion/social-mechanics/notifications/overview)
