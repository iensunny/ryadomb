# API-вызовы в играх

> Источник: [https://dev.vk.ru/ru/games/development/api-calls](https://dev.vk.ru/ru/games/development/api-calls)
Чтобы обмениваться данными с платформой и отправлять запросы, используйте [события библиотеки VK Bridge](bridge/overview), [методы API ВКонтакте](reference) или [API Одноклассников](https://apiok.ru).

API-cерверы ВКонтакте используют адрес `api.vk.ru`. API-серверы Одноклассников — `api.ok.ru`.

Мы рекомендуем определять адрес сервера динамически.

<!--При старте игры платформа передаёт ей [параметр запуска `api_url`](games/development/parameters). Он содержит адрес сервера для выполнения API-запросов.-->

Чтобы определять адрес во время работы игры, вызовите событие [`VKWebAppGetConfig`](bridge/VKWebAppGetConfig). Оно возвращает информацию об используемой платформе и рабочем окружении. Поле `api_host` в данных ответа содержит адрес сервера для API-запросов.

Также мы рекомендуем подписаться на событие [`VKWebAppUpdateConfig`](bridge/VKWebAppUpdateConfig). Платформа отправляет его игре при изменении параметров среды. Ответ события также содержит поле `api_host`, в котором указан адрес сервера для API-запросов.

Для вызова некоторых API-методов можно использовать событие [`VKWebAppCallAPIMethod`](bridge/VKWebAppCallAPIMethod). Оно отправляет запросы к [API ВКонтакте](reference), [API Одноклассников](https://apiok.ru/ext/) или к серверу, который использует ваша игра. Не вызывайте с помощью этого события API-методы, использующие [сервисный ключ доступа](api/access-token/getting-started#Сервисный%20ключ%20доступа). Передавать и хранить этот ключ в клиентской части приложения небезопасно.

## Материалы по теме

* [Параметры запуска](games/development/parameters)

* [Формат API-запросов](api/api-requests)

* [VKWebAppGetConfig](bridge/VKWebAppGetConfig)

* [VKWebAppUpdateConfig](bridge/VKWebAppUpdateConfig)

* [VKWebAppCallAPIMethod](bridge/VKWebAppCallAPIMethod)
