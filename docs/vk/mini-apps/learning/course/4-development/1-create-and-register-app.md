# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | Урок 1. Создание и регистрация мини-приложения

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/1-create-and-register-app](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/1-create-and-register-app)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | Урок 1. Создание и регистрация мини-приложения'
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

# Урок 1. Создание и регистрация мини-приложения

:::vkvideo
https://vk.ru/video-166562603_456239273
:::

## Главное в уроке

* Мини-приложения — веб-приложения, которые запускаются и работают внутри интерфейса ВКонтакте. Для их создания можно использовать любые современные технологии и инструменты веб-разработки. Обычно авторы используют Node.js.

* Проще всего создать код мини-приложения из шаблона [create-vk-mini-app](https://dev.vk.ru/mini-apps/getting-started/create-vk-mini-app). Сгенерированный проект будет включать все необходимые библиотеки.

* Созданное мини-приложение надо обязательно зарегистрировать ВКонтакте. Сделать это можно на портале для разработчиков — [dev.vk.ru](https://dev.vk.ru).  

* Сервер мини-приложения должен быть доступен в интернете. Чтобы сделать доступным ваш локальный веб-сервер, используйте [библиотеку VK Tunnel](https://dev.vk.ru/libraries/tunnel): запустите сервер приложения локально, запустите VK Tunnel, после создания туннеля укажите адрес сервера в настройках мини-приложения.

* Запустить созданное приложение можно по прямой ссылке, например `https://vk.ru/app12345`. Вместо `12345` укажите идентификатор из [настроек мини-приложения](mini-apps/settings/overview#Где%20найти%20ID%20мини-приложения?).

* Для постоянной работы файлы мини-приложения надо разместить на хостинге. Проще всего разместить их на хостинге ВКонтакте. Он бесплатный и поддерживает HTTPS-соединение. Для добавления файлов на хостинг ВКонтакте воспользуйтесь [библиотекой vk-mini-apps-deploy](https://dev.vk.ru/mini-apps/development/hosting/overview).

## Примеры командной строки

#### Создание проекта из шаблона

```yarn
yarn create @vkontakte/vk-mini-app  my-app-name
```

```npm
npx init @vkontakte/vk-mini-app  my-app-name
```

```npx
npx @vkontakte/create-vk-mini-app  my-app-name
```

#### Запуск VK Tunnel

:::note
**Из-за технических работ с 2 октября 2025 года VK Tunnel недоступен**

При подключении сервис вернёт ошибку. Для отладки и демонстрации ваших веб-приложений рекомендуем временно использовать сторонние решения.
:::

Сначала запустите сервер мини-приложения локально.

```Командная&nbsp;строка
npm run start 
```

Потом запустите VK Tunnel.

```Командная&nbsp;строка
npm run tunnel 
```

#### Запуск мини-приложения

```URL&nbsp;для&nbsp;запуска
https://vk.ru/app12345
```

— или —

```URL&nbsp;для&nbsp;запуска
https://m.vk.ru/app12345
```

Вместо `12345` подставьте ID вашего приложения из [настроек](mini-apps/settings/overview#Где%20найти%20ID%20мини-приложения?).

#### Размещение файлов на хостинге ВКонтакте

```Командная&nbsp;строка
npm run deploy
```

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Первые шаги (документация мини-приложений)](https://dev.vk.ru/mini-apps/getting-started)
* [Пакет create-vk-mini-app](https://dev.vk.ru/mini-apps/getting-started/create-vk-mini-app/)
* [Библиотека VK Tunnel](https://dev.vk.ru/libraries/tunnel)
* [Хостинг статики для мини-приложений](https://dev.vk.ru/ru/mini-apps/development/hosting/overview)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/2-vkui)
:::
