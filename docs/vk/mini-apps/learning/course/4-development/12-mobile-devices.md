# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | 12. Особенности разработки для мобильных устройств

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/12-mobile-devices](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/12-mobile-devices)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | 12. Особенности разработки для мобильных устройств'
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

# Урок 12. Особенности разработки для мобильных устройств

:::vkvideo
https://vk.ru/video-166562603_456239285
:::

## Главное в уроке

* Большинство пользователей запускают мини-приложения на мобильных устройствах.

* При создании и отладке мини-приложений серверный код работает на компьютере разработчика. Используйте [VK Tunnel](https://dev.vk.ru/libraries/tunnel), чтобы сделать этот сервер доступным в интернете. При отладке не забудьте указать URL, сгенерированный в VK Tunnel, в настройках мини-приложения.

    Адрес, генерируемый VK Tunnel, меняется от запуска к запуску. Используйте файл `vk-tunnel-config.json`, чтобы в таких случаях автоматически обновлять настройки мини-приложения.  

* Для отладки клиентской части можно использовать [консоль Eruda](https://dev.vk.ru/mini-apps/development/debugging). Она подобна инструментам разработчика в десктопных браузерах.

* Чтобы сделать мини-приложения максимально похожими на iOS-приложения, библиотека VKUI реализуют специальную поддержку жеста [Swipe Back](https://vkui.io/components/view) и компонента [`PullToRefresh`](https://vkui.io/components/pull-to-refresh). VK Bridge предоставляет события для поддержки Swipe Back.

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Документация VK Tunnel](https://dev.vk.ru/libraries/tunnel)
* [Отладка на мобильных устройствах](https://dev.vk.ru/mini-apps/development/debugging#Отладка%20на%20мобильных%20устройствах)
* [Событие VKWebAppSetSwipeSettings](https://dev.vk.ru/bridge/VKWebAppSetSwipeSettings)
* [iOS Swipe Back (документация VKUI)](https://vkui.io/components/view)
* [PullToRefresh (документация VKUI)](https://vkui.io/components/pull-to-refresh)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/11-working-with-vk-api)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/13-notifications)
:::
