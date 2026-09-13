# Использование API | Ключи доступа | Ключ доступа пользователя

> Источник: [https://dev.vk.ru/ru/api/access-token/user-token](https://dev.vk.ru/ru/api/access-token/user-token)
<!-- ---
title: 'Использование API | Ключи доступа | Ключ доступа пользователя'
is_hidden: false
is_search_available: true
menu: 'api_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# Ключ доступа пользователя

Ключ доступа (токен) пользователя используется для вызова методов VK API от имени определённого пользователя. Он определяет, какие [права доступа](#Права%20доступа) пользователь предоставил приложению.

<!-- exclusions/_images/ru/api/access-tokens/user-token/vk_id.png -->
<!-- exclusions/_images/ru/api/access-tokens/user-token/VKWebAppGetAuthToken.png -->
:::carousel
![alt=Приложение VK ID запрашивает доступ к данным пользователя;title=Приложение VK ID запрашивает доступ к данным пользователя](c3a9e3ee027328959add21244e138e081bcb53aa4bd0d1200d9e4154 "-5485343816329484148")
![alt=Мини-приложение запрашивает доступ к данным пользователя;title=Мини-приложение запрашивает доступ к данным пользователя](bff3df649cc625b99b1aaa522f07c0ab904f43cb6d893a60ccfdd097 "-3583967890873219494")
:::

Способ получения ключа доступа зависит от типа приложения, из которого выполняется запрос к VK API:

| Способ получения | Для каких приложений | Где использовать |
| --- | --- | --- |
| [Событие `VKWebAppGetAuthToken`](#Событие%20VK%20Bridge) | Игра или мини-приложение | Клиентская часть игры или мини-приложения |
| [Сервис авторизации VK ID](#Сервис%20авторизации%20VK%20ID) | Любое приложение или сайт (Standalone-приложение) | Клиентская или серверная часть приложения |

## Особенности работы

* Срок действия ключа доступа пользователя — 1 час.
* Ключ доступа, полученный через [событие `VKWebAppGetAuthToken`](#Событие%20VK%20Bridge), предназначен для вызовов API из клиентской части игры или мини‑приложения. 
* Для серверных запросов от имени пользователя используйте ключ, полученный через [сервис авторизации VK ID](#Сервис%20авторизации%20VK%20ID).

## Права доступа

* Права доступа определяют, с какими разделами данных VK может работать ключ доступа. Например, для получения номера телефона пользователя нужен ключ с правами `phone`. Подробнее — в разделе [Права доступа и приватность](api/privacy#Права%20доступа%20для%20ключа%20доступа%20пользователя).

* При получении ключа доступа через [сервис авторизации VK ID](#Сервис%20авторизации%20VK%20ID) базовые права доступны сразу после создания приложения. Для получения расширенных прав требуется подтверждение профиля бизнеса. 

    > Часть расширенных прав, например доступ к отдельным пользовательским данным VK ID, может предоставляться после индивидуального согласования. Для запроса таких прав напишите на [devsupport@corp.vk.com](mailto:devsupport@corp.vk.com).

## Получить ключ

### Событие VK Bridge

Если вы запрашиваете ключ доступа пользователя для мини-приложения или игры VK, используйте событие `VKWebAppGetAuthToken` библиотеки VK Bridge.

Подробнее — в документации события [`VKWebAppGetAuthToken`](bridge/VKWebAppGetAuthToken).

### Сервис авторизации VK ID

Если вы запрашиваете ключ доступа пользователя для работы вашего сервиса или сайта, используйте [сервис авторизации VK ID](https://id.vk.com/about/business/go/). 

Вы можете получить ключ одним из способов:

* **C помощью библиотеки VK ID SDK**

    Шаги получения ключа зависят от типа вашего приложения: [Web](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/web/install), [Android](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/android/install), [iOS](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/ios/install).

    &mdash; или &mdash;

* **Без SDK, используя HTTP-запрос**

    Шаги получения ключа зависят от типа вашего приложения: [Web](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/web/auth-without-sdk), [Android](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/android/auth-without-sdk), [iOS](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/ios/auth-without-sdk).

> Мы рекомендуем использовать SDK-библиотеку. Она включает готовый код для отрисовки формы ввода имени пользователя и пароля, а также даёт возможность использовать вход по [One Tap](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/intro/main#Vhod-po-One-Tap).
>
> Если не используете SDK, форму ввода понадобится реализовать самостоятельно, а вход по One Tap будет недоступен. При создании формы необходимо соблюдать [требования VK к дизайну кнопки](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/guidelines/design-rules).

При запросе ключа доступа учитывайте права, включённые в настройках приложения в VK ID:
* Базовые — имя, фамилия, фото профиля, пол, дата рождения, почта.
* Расширенные — номер телефона. 

<!-- exclusions/_images/ru/api/access-tokens/user-token/scopes.png -->
![alt=Доступы в настройках приложения;title=Доступы в настройках приложения](7c50e5466c0a27a80dc8140fa39e6ee2d2e92ea6d8540b72313be0d4 "8915969675252762196")

Базовые права доступны сразу после создания приложения в сервисе авторизации VK ID. Для получения расширенных прав требуется подтверждение профиля бизнеса. Подробнее о создании приложения и настройке доступов — в [документации VK ID](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/create-application).

## Отозвать ключ доступа пользователя

Если вы создавали ключ доступа пользователя в сервисе авторизации VK ID, вы можете отозвать выданные разрешения. Подробнее — в [документации VK ID](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/api-description#Otzyv-razreshenij-dostupov-polzovatelya-dlya-prilozheniya).

## Материалы по теме

* [Справочник методов API VK ID](https://id.vk.com/about/business/go/docs/ru/vkid/latest/vk-id/connection/api-description)
