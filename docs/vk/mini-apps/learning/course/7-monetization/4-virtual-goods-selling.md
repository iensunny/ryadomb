#### Модуль: [7. Монетизация](mini-apps/learning/course/7-monetization)    

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/7-monetization/4-virtual-goods-selling](https://dev.vk.ru/ru/mini-apps/learning/course/7-monetization/4-virtual-goods-selling)
# Урок 4. Продажа виртуальных ценностей: реализация взаимодействия

:::vkvideo
https://vk.com/video-166562603_456239252
:::

## Главное в уроке

* В настройках мини-приложения в разделе **Платежи** нужно указать адрес серверной части для уведомлений, а среди тестировщиков — кого-нибудь из администраторов. Тестировщики покупают товары и подписки, не затрачивая реальные голоса. Тестовые уведомления имеют суффикс `_test` в названии.
* Все уведомления отправляются в виде POST-запросов на указанный адрес. Прежде чем приступить к их обработке, проверьте подпись запроса.
* Если в процессе обработки платёжного уведомления что-то пошло не так, нужно вернуть ошибку, чтобы серверная часть ВКонтакте знала, как действовать дальше.

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Платежи виртуальной валютой](https://dev.vk.com/api/payments/overview)
* [Проверка подлинности запроса](https://dev.vk.com/api/payments/notifications/vk#Подпись%20параметров)
* [Коды ошибок](https://dev.vk.com/api/payments/notifications/vk#Коды%20ошибок)
* [Тестирование платежей](https://dev.vk.com/ru/api/payments/testing)
* [Обработка платёжных уведомлений](https://dev.vk.com/ru/api/payments/notifications/vk)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/7-monetization/3-virtual-goods)

[Следующий урок &rarr;](mini-apps/learning/course/7-monetization/5-virtual-goods-payments)
:::
