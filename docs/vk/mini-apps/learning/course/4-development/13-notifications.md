# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | 13. Уведомления

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/13-notifications](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/13-notifications)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | 13. Уведомления'
is_hidden: false
is_search_available: true
menu: 'main_menu'
type: 'page' 
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

#### Модуль: [4. Разработка](mini-apps/learning/course/4-development)

# Урок 13. Уведомления

:::vkvideo
https://vk.ru/video-166562603_456239286
:::

## Главное в уроке

* Уведомления — важный механизм взаимодействия с аудиторией. Используйте уведомления, чтобы привлечь пользователей в приложение и сообщить об изменениях. Отправлять уведомления могут только мини-приложения, опубликованные в каталоге.

* Вы можете использовать [уведомления разных типов](https://dev.vk.ru/mini-apps/promotion/social-mechanics/notifications/overview): массовые, автоматические или разовые. Например, для сообщения пользователям о выполнении заказа лучше всего подходят разовые уведомления.

* Существуют лимиты на отправку уведомлений. При их превышении пользователь не увидит уведомления.

* По умолчанию уведомления отключены. Чтобы запросить разрешение на отправку уведомлений, вызовите событие [`VKWebAppAllowNotifications`](https://dev.vk.ru/bridge/VKWebAppAllowNotifications).

    ```JavaScript
    bridge.send('VKWebAppAllowNotifications')
      .then((data) => {
        if (data.result) {
          // Разрешение получено
        }
      })
      .catch((error) => { /* … */ });
    };
    ```

    Пользователь также может разрешить или запретить мини-приложению отправлять ему уведомления в меню этого мини-приложения.

* Чтобы узнать, есть ли у мини-приложения разрешение на отправку уведомлений пользователю, который запустил это мини-приложение, проверьте параметр запуска [`vk_are_notifications_enabled`](https://dev.vk.ru/ru/mini-apps/development/launch-params#Параметры) либо выполните API-запрос [`apps.isNotificationsAllowed`](https://dev.vk.ru/method/apps.isNotificationsAllowed).

* Чтобы отправить разовое уведомление, выполните запрос [`notifications.sendMessage`](https://dev.vk.ru/method/notifications.sendMessage) из серверной части мини-приложения. Для отправки запроса используйте [сервисный ключ доступа](mini-apps/settings/development/keys#Сервисный%20ключ) из настроек вашего мини-приложения.

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Уведомления](https://dev.vk.ru/mini-apps/promotion/social-mechanics/notifications/overview)
* [Параметры запуска — vk_are_notifications_enabled](https://dev.vk.ru/mini-apps/development/launch-params#vk_are_notifications_enabled)
* [API-запрос `apps.isNotificationsAllowed`](https://dev.vk.ru/method/apps.isNotificationsAllowed)
* [API-запрос `notifications.sendMessage`](https://dev.vk.ru/method/notifications.sendMessage)

<!-- Коммент от Жени Прохорова и Олег Мифле. Хз куда его пока деть, пока здесь.
 
Evgeniy Prokhorov
@e.prokhorov
· 1 day ago
Developer
@o.mifle добавь плиз сюда ссылки на код бекенда и описание на что обратить внимание для - работа с пушами

Oleg Mifle
Oleg Mifle
@o.mifle
· 1 day ago
Developer
Интеграция с ВК \App\Integrations\VK\Push\ApiClient
Слушатель, который вызывает пуши \App\Listeners\SendPushListener
Обратить внимание следует на то, что пользователь может заблокировать отправку себе уведомлений, по этому первым делом следует проверить можно ли пользователю отправлять пуши \App\Listeners\SendPushListener::isNotificationAllowed, после этого отправить сам пуш \App\Listeners\SendPushListener::send
-->

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/12-mobile-devices)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/14-maps)
:::
