#### Модуль: [4. Разработка](mini-apps/learning/course/4-development)

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/9-request-auth](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/9-request-auth)
# Урок 9. Авторизация запросов к серверу мини-приложения

:::vkvideo
https://vk.com/video-166562603_456239282
:::

## Главное в уроке

* Клиентская часть мини-приложения работает в iframe или WebView и взаимодействует с серверной частью. Авторизация запроса — процедура, которую сервер выполняет для каждого запроса, чтобы убедиться, что он пришёл от доверенного источника.

* Для авторизации используются [параметры запуска мини-приложения](https://dev.vk.com/mini-apps/development/launch-params). Вы можете получить их в клиентской части мини-приложения при старте из свойства `window.location.search` или в любое время позже с помощью события [`VKWebAppGetLaunchParams`](https://dev.vk.com/bridge/VKWebAppGetLaunchParams).

* Возможный алгоритм проверки выглядит так:

    * В клиентской части мини-приложения закодируйте строку с параметрами запуска в base64-формате и включите полученное значение в заголовок запроса, который отправляется на сервер.

    * При получении запроса сервер извлечёт это значение и вычислит подпись параметров запуска по установленному алгоритму. Затем он сравнит полученное значение с параметром `sign`, который является частью переданной строки. Значения должны быть равны. Разница означает возможную подмену данных.

* Алгоритм вычисления подписи использует [защищённый ключ](https://dev.vk.com/ru/mini-apps/settings/development/keys#Защищённый%20ключ) из настроек мини-приложения, который известен вам, разработчику мини-приложения, и недоступен третьим лицам.

* Параметр запуска `vk_ts` содержит информацию о времени создания подписи. Если подпись была сформирована более часа назад, мы рекомендуем не обрабатывать запрос, а запросить новые данные от клиентской части.

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend)
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend),    
    cмотрите фрагменты кода по #M4L9.
* [Мини-приложение «Блюдо дня»](https://vk.com/app51773283)
* [Проверка подлинности данных](https://dev.vk.com/mini-apps/development/protect-with-signature)
* [Параметры запуска мини-приложений](https://dev.vk.com/mini-apps/development/launch-params)
* [Подпись параметров запуска](https://dev.vk.com/mini-apps/development/launch-params-sign)
* [Событие VKWebAppGetLaunchParams](https://dev.vk.com/bridge/VKWebAppGetLaunchParams)
* [Событие VKWebAppCreateHash](https://dev.vk.com/bridge/VKWebAppCreateHash)

<!-- Коммент от Жени Прохорова и Олег Мифле. Хз куда его пока деть, пока здесь.

Evgeniy Prokhorov
@e.prokhorov
· 1 day ago
Developer
@o.mifle добавь плиз сюда ссылки на код бекенда и описание на что обратить внимание для - авторизация, про тс и параметры запуска

Oleg Mifle
Oleg Mifle
@o.mifle
· 1 day ago
Developer
Авторизация выполняется через механимз guardов в фреймворке Laraverl.  Сам guard находится тут \Illuminate\Contracts\Auth\Guard. Проверка подписи осуществляется в сервисе \App\Services\VkLaunchParamsService::isSigned, проверка времени жизни токена происходит тут же \App\Services\VkLaunchParamsService::isExpired`. Если подпись в параметрах не сошлась с подписью, вычисленную в время или срок выдачи токена был больше часа назад, авторизации не произойдёт.
-->

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/8-working-with-backend)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/10-odr)
:::
