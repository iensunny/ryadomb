#### Модуль: [4. Разработка](mini-apps/learning/course/4-development)

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/6-subscribe](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/6-subscribe)
# Урок 6. Подписка на события VK Bridge и их особенности

:::vkvideo
https://vk.com/video-166562603_456239279
:::

## Главное в уроке

* Чтобы получать нотификации от платформы VK Mini Apps, подпишитесь на события VK Bridge.

* Чтобы подписаться, создайте обработчик `bridge.subscribe()`.

    Этот обработчик вызывается для всех событий VK Bridge, поэтому в его коде надо проверить тип входящего события и только потом выполнить необходимые действия.

* В VKUI версии 6.0 и выше отсутствует встроенная поддержка VK Bridge. Её надо добавлять самостоятельно.

* Большинство событий VK Bridge работают на всех доступных платформах, но некоторые могут не поддерживаться. Например, события для работы с виброоткликом недоступны, когда мини-приложение работает в десктопной версии сайта.

* Чтобы проверить, доступно ли какое-либо событие или нет, используйте метод `bridge.supportsAsync(...)`:

    ```TypeScript
    bridge.supportsAsync("VKWebAppGetFriends").then( res => {
        if (res) {
            // Событие VKWebAppGetFriends поддерживается
            // ...
        }
    });
    ```

    :::note
    Ранее для проверки использовался `bridge.supports(...)`, но сейчас он устарел и может возвращать неактуальную информацию.
    :::

* Чтобы получить информацию о пользователе, который работает с мини-приложением, используйте событие [`VKWebAppGetUserInfo`](https://dev.vk.com/bridge/VKWebAppGetUserInfo).

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend),    
    cмотрите фрагменты кода по #M4L6.
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Документация библиотеки VK Bridge](https://dev.vk.com/bridge/overview)
* [Вызов событий VK Bridge](https://dev.vk.com/bridge/getting-started#Вызов%20события)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/5-bridge)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/7-vkui-adaptivity)
:::
