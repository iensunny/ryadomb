# Поделиться игрой

> Источник: [https://dev.vk.ru/ru/games/promotion/game-mechanics/share](https://dev.vk.ru/ru/games/promotion/game-mechanics/share)
Игрой можно поделиться со своими друзьями и подписчиками. 

## В Одноклассниках

* В десктопной и мобильной веб-версиях можно поделиться только записью на стене.
* На Android и iOS: 
  * Поделиться на своей стене или на стене сообщества.
  * Отправить в личные сообщения.
  * Дополнить текстом и отправить в ленту.
  * Отправить в приложение.
  * Скопировать ссылку.

<!-- exclusions/_images/games/promotion/game-mechanics/share/ok.png -->
![alt=Пост для размещения в ленте в Одноклассниках;title=Пост для размещения в ленте в Одноклассниках](5dda0259c191f1ad5ee170a8b227dd90f7ab7457b88e39a97a60dcd0 "-4099539294541370247")

## ВКонтакте

* На любой платформе можно отправить ссылку в личные сообщения.
* На Android и iOS можно поделиться в истории.

<!-- exclusions/_images/games/promotion/game-mechanics/share/vk.png -->
![alt=Поделиться в сообщении ВКонтакте;title=Поделиться в сообщении ВКонтакте](5474556b1ae94806d89bdc3e14b3d0cb3eed12eb8ea48a91266f835e "7966212117878885636")

Запись в истории публикуется от имени игрока, а не от имени игры. При отправке в личные сообщения будет добавлен [сниппет](games/settings/general/design#Иконка%20для%20каталога%20и%20сниппетов) игры.

<!-- exclusions/_images/games/promotion/game-mechanics/share/snippet.png -->
![alt=Пример сниппета игры в личном сообщении;title=Пример сниппета игры в личном сообщении](1caabfa7bd16cebddf3458c401ff3c052f14b386df9a15bea81e42fc "8706671131815848031")

## Как реализовать

### Способ 1

Пользователь может отправить ссылку на игру ВКонтакте с помощью кнопки **Поделиться**.

<!-- /exclusions/_images/ru/games/promotion/game-mechanics/share/share-desktop.png -->
![alt=Кнопка «Поделиться» в десктопной версии;title=Кнопка «Поделиться» в десктопной версии](60b1bf21183a1cf93fb89978e98f34b7681e4760c5bbbcd3f3209002 "6524484811675440480")

### Способ 2

Чтобы показать диалоговое окно для отправки ссылки, вызовите событие [`VKWebAppShare`](bridge/VKWebAppShare) библиотеки [VK Bridge](bridge/overview).

Пример вызова:

```JavaScript
bridge.send('VKWebAppShare', {
  link: 'https://vk.com/vkappsdev'
  })
  .then((data) => { 
    if (data.result) {
      // История опубликована, сообщение отправлено
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
```

Если вы подключили библиотеку VK Bridge [в HTML-коде страницы](games/getting-started#2.%20Подключите%20VK%20Bridge), используйте в вызове имя объекта `vkBridge` вместо `bridge`.

## Материалы по теме

* [Игровые и социальные механики](games/promotion/game-mechanics/overview)

* [Приглашения](games/promotion/game-mechanics/invites)

* [Запросы](games/promotion/game-mechanics/requests)

* [Истории в профиле пользователя](games/promotion/game-mechanics/stories)
