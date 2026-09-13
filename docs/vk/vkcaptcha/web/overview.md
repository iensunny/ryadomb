# Общее описание

> Источник: [https://dev.vk.ru/ru/vkcaptcha/web/overview](https://dev.vk.ru/ru/vkcaptcha/web/overview)
[VK ID Captcha](vkcaptcha/overview) поставляется как отдельный SDK. В веб-браузере капча отображается через `iframe` в виде всплывающего окна или блока.

:::carousel
<!-- exclusions/_images/vk-captcha/captcha-view-success-pop-up-light.png -->
![alt=ВКапча пройдена (всплывающее окно с галочкой);title=Капча пройдена (всплывающее окно с галочкой);](3b22bf77f117d6a927a3da963929c842ca5800077cec34a4d6264518 "-2223823164838624948")
<!-- exclusions/_images/vk-captcha/captcha-view-success-pop-up-light.png -->
![alt=Капча пройдена (всплывающее окно со слайдером);title=Капча пройдена (всплывающее окно со слайдером);](b6be4960aa92413a6f16e59e66659353d7aeabbbde07a9ab11f0e0ec "-7382568121263496385")
<!-- exclusions/_images/vk-captcha/captcha-view-light-popup-audio.png -->
![alt=Капча пройдена (отображение в виде аудио);title=Капча пройдена (отображение в виде аудио);](0f8de3ea90c2d9d92d01a19e967dad6110aa7244e9684a01a869287f "3473298863333922233")
<!-- exclusions/_images/vk-captcha/captcha-view-success-block-light.png -->
![alt=Капча пройдена (отображение в виде блока);title=Капча пройдена (отображение в виде блока);](795747afd90000a0584188c1b923abca8afce00de957f6ff81a46ef5 "3240032291415037601")
:::

Для работы с капчей используются методы API ВКонтакте и VK ID Captcha SDK Web.

Перед началом работы  интегрируйте VK ID Captcha SDK Web с помощью [обработчика](vkcaptcha/web/autointegration). Обработчик ошибки капчи встраивается в API, автоматически проверяет наличие ошибки капчи и отображает капчу при наличии ошибки. Подробнее – в [сценарии взаимодействия](vkcaptcha/web/scenario) с VK ID Captcha SDK Web.
