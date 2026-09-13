# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | 19. Эффективная работа с API ВКонтакте

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/19-effective-work-with-api](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/19-effective-work-with-api)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | 19. Эффективная работа с API ВКонтакте'
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

# Урок 19. Эффективная работа с API ВКонтакте

:::vkvideo
https://vk.ru/video-166562603_456239293
:::

## Главное в уроке

* ВКонтакте ограничивает частоту API-запросов от мини-приложений к своим серверам. При превышении ограничений возвращается ошибка `"Too many requests per second"`.

* Один из способов сократить количество вызовов — изучить параметры API-запросов и при возможности использовать один запрос для изменения группы значений.

* Накладываемые ограничения зависят от вида ключа доступа, который используется при вызове. Поэтому ещё один возможный способ — отправлять часть API-запросов из клиентской части мини-приложения. Эти запросы используют другой вид ключа доступа по сравнению с серверной частью.

* Третий способ сократить количество вызовов — использовать [хранимые процедуры](https://dev.vk.ru/ru/mini-apps/settings/development/stored-procedures). Это функции на языке VKScript, которые хранятся и выполняются на серверах ВКонтакте. Вы создаёте хранимые процедуры в [настройках мини-приложения](https://dev.vk.ru/ru/mini-apps/settings/development/stored-procedures). Каждая процедура может выполнять до 25 запросов, а запускается всего одним запросом.

* Чтобы выполнить процедуру, вызовите событие [`VKWebAppCallAPIMethod`](https://dev.vk.ru/bridge/VKWebAppCallAPIMethod) библиотеки VK Bridge в клиентской части мини-приложения либо отправьте следующий запрос из серверной части:

    `POST https://api.vk.ru/method/execute.ИМЯ-ПРОЦЕДУРЫ`

* Результаты запросов, которые вызываются в хранимой процедуре, не передаются по сети, что экономит трафик и увеличивает общую скорость работы мини-приложения.

* Запросы в рамках одной процедуры могут работать последовательно или параллельно. Параллельное выполнение значительно ускоряет выполнение процедуры.

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Хранимые процедуры](https://dev.vk.ru/ru/mini-apps/settings/development/stored-procedures)
* [Событие VKWebAppCallAPIMethod](https://dev.vk.ru/bridge/VKWebAppCallAPIMethod)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/18-counters)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/20-conclusion)
:::
