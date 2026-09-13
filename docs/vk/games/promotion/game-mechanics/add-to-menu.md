# Добавление игры в левое меню

> Источник: [https://dev.vk.ru/ru/games/promotion/game-mechanics/add-to-menu](https://dev.vk.ru/ru/games/promotion/game-mechanics/add-to-menu)
Чтобы пользователи чаще возвращались в игру, упростите её запуск. Левое меню десктопной версии ВКонтакте — популярный способ запуска, который помогает удерживать игроков. Игра появится в левом меню, когда пользователь добавит её в избранное.

<!-- /exclusions/_images/ru/games/promotion/game-mechanics/add-to-menu/game-in-left-menu.png -->
![alt=Ссылка на игру в левом меню;title=Ссылка на игру в левом меню](2a401d4a6db173e869189a70614547bef94a2a3de75b68d2b2dd34a8 "-1556404092383521273")

## Как реализовать

### Способ 1

Пользователь может добавить игру в избранное из экшен-меню:

* В десктопной версии нужно выбрать **Действия &rarr; Добавить в избранное**.
* На мобильных устройствах нужно выбрать **&bull;&bull;&bull; &rarr; В избранное**.

<!-- /exclusions/_images/ru/games/promotion/game-mechanics/add-to-menu/add-to-favorites-1.png -->
<!-- /exclusions/_images/ru/games/promotion/game-mechanics/add-to-menu/add-to-favorites-2.png -->
:::carousel
![alt=Добавление игры в левое меню самостоятельно;title=Добавление игры в левое меню самостоятельно](324a4a662b139ec7e42dfebbf3ed4284c49316713b722e3ffceaedd6 "8531633441866914308")
![alt=Добавление игры в левое меню самостоятельно;title=Добавление игры в левое меню самостоятельно](75562abfae4025eebb4680dbcb6f5a0b1b76cdd3c887da7d0bf5b270 "7614867461192050624")
:::

После этого игра появится в левом меню десктопной версии ВКонтакте.

### Способ 2

Вы можете предложить пользователю добавить игру в избранное с помощью события [`VKWebAppAddToFavorites`](bridge/VKWebAppAddToFavorites). После согласия пользователя игра появится в левом меню.

```JavaScript
bridge.send('VKWebAppAddToFavorites')
  .then((data) => { 
    if (data.result) {
      // Игра добавлена в левое меню...
    }
  })
  .catch ((error) => {
    console.log(error); // Ошибка...
  });
```

<!-- /exclusions/_images/ru/games/promotion/game-mechanics/event-window.png -->
<!-- добавить скриншот с окном после вызова события ![alt=Добавление игры в левое меню;title=Добавление игры в левое меню](b7ab5f741be4cc1522274b4af28493cdba3be0398547db74af19e267 "6788345214002195815")-->

Если вы подключили библиотеку VK Bridge [в HTML-коде страницы](games/getting-started#2.%20Подключите%20VK%20Bridge), в вызове надо использовать имя объекта `vkBridge` вместо `bridge`.  

Если игра уже добавлена в левое меню, диалоговое окно не показывается. ВКонтакте сообщает, что вызов прошёл успешно, и выполнение переходит в `then`-обработчик.  

## Советы

* Предложите бонус за добавление игры в избранное. Пользователи получат награду и быстрый запуск, а вы — больше возвратов в игру.
* Не предлагайте добавить игру в избранное сразу после запуска. Пусть пользователь познакомится с игрой.
* Когда в игре произошло какое-нибудь важное обновление, она может отправить оповещение пользователю с помощью API-метода [`secure.sendNotification`](method/secure.sendNotification).

    Для привлечения внимания пользователя отправьте также API-запрос [`secure.setCounter`](method/secure.setCounter), чтобы установить счётчик уведомлений на значке игры в левом меню.

    :::note
    **Важно!** Указанные методы используют [сервисный ключ доступа](games/settings/development/keys#Сервисный%20ключ) и могут быть [вызваны](api/api-requests#Пример) только на сервере.
    :::

## Удаление игры из левого меню

Чтобы удалить игру из левого меню, наведите курсор на игру и перейдите в настройки. В появившемся окне на вкладке **Избранные игры и приложения** снимите галочку напротив игры. Сохраните изменения.

<!-- /exclusions/_images/ru/games/promotion/game-mechanics/remove-game-from-left-menu.png -->
![alt=Удаление игры из левого меню;title=Удаление игры из левого меню](4349f8eb64c35ca8e5c06bb8ee892a00880a2a61c7d1af7776b06bb8 "1272007757656993819")

## Материалы по теме

* [Игровые и социальные механики](games/promotion/game-mechanics/overview)
* [Добавление игры на главный экран Android-устройства](games/promotion/game-mechanics/add-to-home-screen)
* [Событие `VKWebAppAddToFavorites`](bridge/VKWebAppAddToFavorites)
* [`secure.sendNotification`](method/secure.sendNotification)
* [`secure.setCounter`](method/secure.setCounter)
