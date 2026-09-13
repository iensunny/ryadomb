# Отладка

> Источник: [https://dev.vk.ru/ru/mini-apps/development/debugging](https://dev.vk.ru/ru/mini-apps/development/debugging)
## Отладка в браузере

У событий VK Bridgе, которые поддерживаются в десктопной версии, в [справочнике](bridge/overview) указана платформа **Web**. Самый простой способ протестировать получение таких событий — включить десктопную версию мини-приложения и перехватывать их прямо в браузере.

Откройте мини-приложение в браузере, перейдите в инструменты разработчика и на вкладке **Консоль** (**Сonsole**) введите код:

```JavaScript
window.addEventListener('message', (event) => {
    if (event.data?.type === 'vk-connect') {
        console.log(event);
    }
});
```

Код перехватит сообщения от мини-приложения и покажет, что они содержат.

## Отладка на мобильных устройствах

### Консоль Eruda

[Eruda](https://www.npmjs.com/package/eruda) — это консоль с инструментами разработчика для отладки мини-приложений для Android и iOS, которая работает подобно консоли браузера.

![alt=Внешний вид консоли Eruda;title=Консоль Eruda;](2ee9ea947d491716ff871cf99bb6988b312f552c571c43659e3f456c "3458132706005602856")

#### Как включить консоль

Чтобы разработчики могли использовать консоль Eruda для отладки мини-приложения, [администраторы](mini-apps/settings/managers) этого мини-приложения должны активировать её в [панели управления](mini-apps/settings/overview) мини-приложением. Сделать это может администратор с правами [создателя](mini-apps/settings/managers#Создатель) мини-приложения, администратор [с полным доступом](mini-apps/settings/managers#Администратор%20с%20полным%20доступом) или администратор [с частичным доступом](mini-apps/settings/managers#Администратор%20с%20частичным%20доступом) с правом «Редактирование».

1. Откройте [список приложений](https://dev.vk.com/admin/apps-list) и перейдите в настройки вашего мини-приложения.

1. Переключитесь в раздел [Настройки &rarr; Дополнительные](mini-apps/settings/general/additional) и в блоке **Консоль Eruda** выберите **Включена**.

   ![alt=Настройки включения консоли Eruda;title=Настройки включения консоли](1dfd4084afbb13fe0661bd5f2953d9cf4461a9a604a13fb1b5ba24da "6849752295276198559")

#### Как использовать консоль

1. Запустите мини-приложение.
1. Нажмите на кнопку &bull;&bull;&bull;.
1. В меню выберите **Показать консоль**. Если консоль уже открыта, в меню отобразится пункт **Скрыть консоль**.

   ![alt=Внешний вид консоли Eruda;title=Консоль Eruda;](69b379336503d73ea4c17583f6518d50c3838eb714504264ea1a5505 "7055597577703582535")

1. Чтобы открыть отладочную консоль прямо внутри мини-приложения, нажмите на появившийся значок в правом нижнем углу.

:::note
**Примечание.** Консоль Eruda встроена в [библиотеку `create-vk-mini-app`](mini-apps/getting-started#1.%20Создайте%20проект%20мини-приложения), которая используется для создания мини-приложений из шаблона и доступна для:

* Мобильного приложения (Android и iOS).
* Мобильной версии сайта ([m.vk.com](https://m.vk.com)).
* Десктопной версии сайта ([vk.com](https://vk.com)).
  :::

Пример работы консоли можно посмотреть в мини-приложении [Eruda](https://vk.com/app6876702).

<!-- ### iOS

Чтобы отлаживать работоспособность архива в O D R-режиме, [отправьте и протестируйте архив O D R](mini-apps/development/on-demand-resources). -->

### Chrome DevTools

Отладка осуществляется в десктопной версии браузера. Чтобы отладить мини-приложение для Android, используйте на Android-устройствах [Сhrome Remote debugging](https://developer.chrome.com/docs/devtools/remote-debugging).

Чтобы мини-приложение отображалось в Chrome Developer Tools:

1. Подключите устройство к компьютеру по USB.
1. Выполните [шаг 1](https://vk.cc/cgf8in) и [шаг 2](https://vk.cc/cgf8kx) инструкции по удалённой отладке Android-устройств.
1. Откройте приложение ВКонтакте на Android, перейдите в **Настройки**&nbsp;&rarr; **Debug** и включите **Отладка WebView**.
   > Чтобы пункт Debug отображался в настройках, перейдите в **Настройки**&nbsp;&rarr; **О приложении** и нажмите на иконку VK 11 раз.

Теперь при отладке по USB открытое на Android-устройстве мини-приложение будет отображаться в Сhrome DevTools: `chrome://inspect/#devices`.

## Отладка при помощи vk-bridge-mock

Если под рукой нет Android-устройства, используйте библиотеку [`vk-bridge-mock`](https://www.npmjs.com/package/@vkontakte/vk-bridge-mock), которая позволит эмулировать получение данных при работе на компьютере. При вызове событий библиотеки вам вернутся тестовые данные, которые можно использовать для отладки.

### Использование библиотеки

1. Установите библиотеку:

    ```sh
    npm install @vkontakte/vk-bridge-mock || yarn add @vkontakte/vk-bridge-mock
    ```

1. В файле `index.js` подключите библиотеку:

    ```JavaScript
    import bridge from '@vkontakte/vk-bridge-mock';
    ```

1. Используйте методы объекта `bridge`:

    ```JavaScript
    bridge.subscribe((e) => {
 
      if (e.detail.type === 'VKWebAppGetUserInfoResult') {
      // do something
      }
    });
 
    bridge.send('VKWebAppGetUserInfo', {});
    ```

### Пример возвращаемых тестовых данных

```JSON
{
  "type": "VKWebAppGetUserInfoResult",
  "data": {
    "id": 743784474,
    "bdate": "21.12.2000",
    "bdate_visibility": 1,
    "city": {
      "id": 2,
      "title": "Санкт-Петербург"
    },
    "country": {
      "id": 1,
      "title": "Россия"
    },
    "photo_200": "https://sun1-91.userapi.com/s/v1/ig2/Dcf-SWu7nVYDDldq9oQegiC06VqsSa43-HpDxzPjrvFCUUk9nSevY2Uf9xzm0bxvLfgsTOH6XiiW-zeLcDhPDj_w.jpg?size=200x200&quality=96&crop=26,26,204,204&ava=1",
    "photo_max_orig": "https://sun1-91.userapi.com/s/v1/ig2/trHNebJQhG4BmLxC8h4hOpDU6bKRy6uJi586wcyFcCj5fzrwYk7AtoNab-RSil0Bp9b569VQyGK_skG9e6oK7Ap7.jpg?size=256x256&quality=96&crop=0,0,256,256&ava=1",
    "sex": 2,
    "photo_100": "https://sun1-91.userapi.com/s/v1/ig2/M4vtl7tcmeP6ANUgE0vU7JZWuJszbHaN5QcCcK2xD66EIc6SeSA1NyFVLTSOt2iLOkFhJSJ4DawEJGOjzKtszMpR.jpg?size=100x100&quality=96&crop=26,26,204,204&ava=1",
    "first_name": "Персик",
    "last_name": "Рыжий",
    "can_access_closed": true,
    "is_closed": false
  }
}
```

### Изменение тестовых данных

Если вам нужно изменить тестовые данные, чтобы посмотреть, как будет вести себя мини-приложение, если пользователь, например, не указал город, данные можно переопределить:

```JavaScript
import { response as res } from  '@vkontakte/vk-bridge-mock';
res.VKWebAppGetUserInfo.data = {
  type: 'VKWebAppGetUserInfoResult',
  data: {
    city: {
      id: 1,
      title: 'London'
    },
    country: {
      id: 1,
      title: 'UK'
    },
    photo_200: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    photo_max_orig: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    sex: 0,
    photo_100: 'https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg',
    first_name: 'Friedrich',
    last_name: 'Engels',
  }
}
```

### Поддерживаемые события

Библиотека `vk-bridge-mock` поддерживает работу с событиями:

*  [`VKWebAppInit`](bridge/VKWebAppInit)
*  [`VKWebAppGetAuthToken`](bridge/VKWebAppGetAuthToken)
*  [`VKWebAppCallAPIMethod`](bridge/VKWebAppCallAPIMethod)
*  [`VKWebAppGetGeodata`](bridge/VKWebAppGetGeodata)
*  [`VKWebAppGetUserInfo`](bridge/VKWebAppGetUserInfo)
*  [`VKWebAppGetPhoneNumber`](bridge/VKWebAppGetPhoneNumber)
*  [`VKWebAppGetClientVersion`](bridge/VKWebAppGetClientVersion)
*  [`VKWebAppGetEmail`](bridge/VKWebAppGetEmail)

## Тестирование приложения


Чтобы проверить новые функции или показать изменения в мини-приложении определённым пользователям ВКонтакте, настройте тестовые группы в панели управления. В каждой тестовой группе можно указать ссылку на версию мини-приложения, которая будет доступна только участникам этой группы.

Подробнее — в разделе [Тестовые группы](mini-apps/settings/test-groups).
