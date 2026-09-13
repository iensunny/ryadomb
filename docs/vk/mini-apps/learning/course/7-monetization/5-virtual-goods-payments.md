#### Модуль: [7. Монетизация](mini-apps/learning/course/7-monetization)    

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/7-monetization/5-virtual-goods-payments](https://dev.vk.ru/ru/mini-apps/learning/course/7-monetization/5-virtual-goods-payments)
# Урок 5. Продажа виртуальных ценностей: разовая оплата и подписки

:::vkvideo
https://vk.com/video-166562603_456239253
:::

## Главное в уроке

* Чтобы добавить разовую оплату:

    1. В клиентской части мини-приложения вызовите событие [`VKWebAppShowOrderBox`](https://dev.vk.com/bridge/VKWebAppShowOrderBox).
    1. В серверной мини-приложения части верните информацию о товаре.
    1. Выдайте пользователю товар.
    1. В серверной части мини-приложения в ответ на платёжное уведомление передайте статус, что товар выдан. ВКонтакте автоматически переведёт голоса со счёта пользователя на счёт вашего приложения.

* Чтобы добавить подписку:

    1. В клиентской части мини-приложения вызовите событие [`VKWebAppShowSubscriptionBox`](https://dev.vk.com/bridge/VKWebAppShowSubscriptionBox).
    1. В серверной части верните информацию о подписке.
    1. В ответ на платёжное уведомление передайте статус, что подписка создана, отменена или возобновлена.
    
## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend),    
    cмотрите фрагменты кода по #M7L5.
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Платежи виртуальной валютой](https://dev.vk.com/ru/api/payments/overview)
* [Обмен данными между ВКонтакте и приложением](https://dev.vk.com/ru/api/payments/vk#Обмен%20данными%20между%20ВКонтакте%20и%20приложением)
* [Платежи за подписки](https://dev.vk.com/ru/api/payments/subscriptions/vk)
* [Типы уведомлений](https://dev.vk.com/ru/api/payments/notifications/vk#Типы%20уведомлений)
* [Обработка платёжных уведомлений](https://dev.vk.com/ru/api/payments/notifications/vk)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/7-monetization/4-virtual-goods-selling)

[Следующий урок &rarr;](mini-apps/learning/course/7-monetization/6-digital-and-physical-goods)
:::
