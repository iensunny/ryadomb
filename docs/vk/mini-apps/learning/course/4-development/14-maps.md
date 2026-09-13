# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | 14. Работа с VK Картами

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/14-maps](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/14-maps)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | 14. Работа с VK Картами'
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

# Урок 14. Работа с VK Картами

:::vkvideo
https://vk.ru/video-166562603_456239287
:::

## Главное в уроке

* VK Карты строятся на основе данных [OpenStreetMap](https://www.openstreetmap.org/about).

* Для работы с VK Картами установите библиотеку MMR GL. Для этого выполните следующую команду:

    ```Командная&nbsp;строка
    npm i mmr-gl
    ```

    Также вам потребуется ключ доступа. Чтобы его получить, отправьте запрос свободной форме на [support.maps@lists.vk.team](mailto://support.maps@lists.vk.team).

* Для отображения карты мы создали специальный React-хук — `useVkMap()`. Его код вы можете найти в репозитории, который содержит исходники проекта для урока.

* Для создания маркеров на карте используйте объекты `Marker`. Значок маркера и иконка избранного блюда на нём — это React-компоненты, которые включаются в HTML-элемент маркера.

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend),    
    cмотрите фрагменты кода по #M4L14.
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Документация VK Карт](https://dev.vk.ru/vkmaps/general-information/general)
* [Сайт OpenScreenMap](https://www.openstreetmap.org/about)
* [Доступ к сервисам (документация VK Карт)](https://dev.vk.ru/vkmaps/general-information/api-key)
* [Метки и элементы управления (документация VK Карт)](https://dev.vk.ru/vkmaps/map-display-services/javascript-sdk/labels-controls)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/13-notifications)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/15-onboarding)
:::
