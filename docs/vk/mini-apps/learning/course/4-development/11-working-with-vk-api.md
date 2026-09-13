# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | 11. Работа с API ВКонтакте в клиентской части приложения

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/11-working-with-vk-api](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/11-working-with-vk-api)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | 11. Работа с API ВКонтакте в клиентской части приложения'
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

# Урок 11. Работа с API ВКонтакте в клиентской части приложения

:::vkvideo
https://vk.ru/video-166562603_456239284
:::

## Главное в уроке

* API ВКонтакте поддерживает GET- и POST-запросы. URL запросов имеет следующий вид:

    `https://{адрес-сервера}/method.{имя-метода}?{параметры}`

    * `{адрес-сервера}` — `api.vk.ru`. Этот адрес можно получить динамически, вызвав событие [`VKWebAppGetConfig`](https://dev.vk.ru/bridge/VKWebAppGetConfig).

    * `{имя-метода}` — название API-запроса для вызова, например `friends.get`. Названия можно найти в разделе [API](https://dev.vk.ru/reference) портала для разработчиков.

    * `{параметры}` — URL-параметры. Обязательными являются два параметра:

        - `v` — указывает версию API, например `v=:version`.

    * Ключ доступа для вызова API передавайте в HTTP-заголовке:

        - `Authorization: Bearer <КЛЮЧ_ДОСТУПА>`

* Чтобы получить ключ доступа, вызовите событие [`VKWebAppGetAuthToken`](https://dev.vk.ru/bridge/VKWebAppGetAuthToken) библиотеки VK&nbsp;Bridge. В вызове укажите права доступа, которые получит ключ.

    ```TypeScript
    export const getAccessToken = async () => {
      try {
        const data = await bridge.send('VKWebAppGetAuthToken',
                            {
                              app_id: Number(import.meta.env.VITE_APP_ID),
                              scope: 'friends',
                            });
        return data.access_token;
      } catch (error) {
        console.log('Ошибка получения ключа доступа:', error);
      }
    };
    ```

* Чтобы отправить API-запрос, вы можете вызвать событие [`VKWebAppCallAPIMethod`](https://dev.vk.ru/bridge/VKWebAppCallAPIMethod) библиотеки VK&nbsp;Bridge.

    ```TypeScript
    export const vkApiFetch = async (method: string,params?: { [key: string]: unknown }) => {

      const accessToken = await getAccessToken();
      try {
        return await bridge.send("VKWebAppCallAPIMethod", {
            method: method,
            params: {
                v: ":version",
                access_token: accessToken ?? "",
                ...params,
            },
        });
      } catch (e) {
          return Promise.reject(e);
      }
    };
    ```

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend),    
    cмотрите фрагменты кода по #M4L11.
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Документация API ВКонтакте](https://dev.vk.ru/reference)
* [Формат запросов](https://dev.vk.ru/api/api-requests)
* [API-вызовы в мини-приложениях](https://dev.vk.ru/mini-apps/development/api-calls)
* [Событие VKWebAppGetAuthToken](https://dev.vk.ru/bridge/VKWebAppGetAuthToken)
* [Событие VKWebAppCallAPIMethod](https://dev.vk.ru/bridge/VKWebAppCallAPIMethod)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/10-odr)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/12-mobile-devices)
:::
