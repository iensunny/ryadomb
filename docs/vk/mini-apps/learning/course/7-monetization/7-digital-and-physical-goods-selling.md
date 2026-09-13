#### Модуль: [7. Монетизация](mini-apps/learning/course/7-monetization)    

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/7-monetization/7-digital-and-physical-goods-selling](https://dev.vk.ru/ru/mini-apps/learning/course/7-monetization/7-digital-and-physical-goods-selling)
# Урок 7. Продажа цифровых и физических товаров: реализация

:::vkvideo
https://vk.com/video-166562603_456239255
:::

## Главное в уроке

* В работе платёжных форм участвуют четыре стороны:

    * Клиентская часть мини-приложения.
    * Серверная часть мини-приложения.
    * VK Pay — приложение-кошелёк, размещённое ВКонтакте.
    * DMR — Деньги@Mail.Ru, платёжная система. С 16 февраля 2024 года платёжный сервис сменил название и называется РНКО «ВК Платёжные решения» (ООО).

* Чтобы подключить VK Pay:

    1. [Заключите договор](https://vk.com/landings/vkpay_form), после этого вы получите доступы к оплате.
    1. Вызовите платежное окно VK Pay с помощью события [`VKWebAppOpenPayForm`](https://dev.vk.com/bridge/VKWebAppOpenPayForm), а данные для параметра `params` сформируйте в серверной части приложения:
    
        * Сформируйте данные для подписи `merchant_data` и подпись продавца `merchant_sign`.
        * Сформируйте подпись приложения `sign` и соедините строку с защищённым ключом вашего приложения.
        * Полученную строку нужно вернуть в клиентскую часть мини-приложения, чтобы с этими данными был вызван метод [`VKWebAppOpenPayForm`](https://dev.vk.com/bridge/VKWebAppOpenPayForm).

    1. Подпишитесь на событие [`VKWebAppOpenPayFormResult`](https://dev.vk.com/ru/bridge/VKWebAppOpenPayForm#VKWebAppOpenPayFormResult) в клиентской части мини-приложения и покажите пользователю результат оплаты.
    1. Дождитесь серверного платёжного уведомления, которое придёт на Сallback URL, указанный в административной панели сервиса Деньги@Mail.Ru.
    1. Проверьте подпись приложения из платёжного уведомления на сервере.
    1. Отдайте корректный ответ на запрос в Callback API.
    1. Измените статус заказа в базе данных на «Оплачен».

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend),    
    cмотрите фрагменты кода по #M5L7.
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Прием оплаты в VK Pay](https://dev.vk.com/ru/pay/getting-started)
* [Событие VKWebAppOpenPayForm](https://dev.vk.com/ru/bridge/VKWebAppOpenPayForm) 
* [API продавца для работы с платежами](https://dev.vk.com/ru/pay/seller/general-description)
* [VK Pay для юридических лиц и индивидуальных предпринимателей](https://vk.com/@pay-vk-pay-for-business)
* [Приём оплаты](https://vk.com/@pay-priem-oplaty)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/7-monetization/6-digital-and-physical-goods)

[Следующий урок &rarr;](mini-apps/learning/course/7-monetization/8-withdrawal)
:::
