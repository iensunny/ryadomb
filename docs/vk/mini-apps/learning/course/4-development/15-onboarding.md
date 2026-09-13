# Мини-приложения | Образовательные материалы | Видеокурс | Модуль 4. Разработка | 15. Онбординг

> Источник: [https://dev.vk.ru/ru/mini-apps/learning/course/4-development/15-onboarding](https://dev.vk.ru/ru/mini-apps/learning/course/4-development/15-onboarding)
<!-- ---
title: 'Мини-приложения | Видеокурс | Модуль 4. Разработка | 15. Онбординг'
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

# Урок 15. Онбординг

:::vkvideo
https://vk.ru/video-166562603_456239289
:::

## Главное в уроке

* Онбординг, или вводный инструктаж, представляет собой ряд информационных экранов (слайдов) с поясняющими текстами и изображениями. Они помогают пользователям быстро ознакомиться с приложением.

* Чтобы показать такие ознакомительные экраны, вызовите событие [`VKWebAppShowSlidesSheet`](https://dev.vk.ru/bridge/VKWebAppShowSlidesSheet) библиотеки VK Bridge.

* Изображение для слайда кодируется как [base64-строка](https://vk.cc/5mpsES). Пример получения такой строки — в исходном коде нашего приложения «Блюдо дня». Платформа накладывает [ограничения](https://dev.vk.ru/bridge/VKWebAppShowSlidesSheet#Параметры%20слайда) на размер изображений.

* По результатам вызова события `VKWebAppShowSlidesSheet` вы можете понять, какие экраны пользователь посмотрел, а какие пропустил.

* Мы рекомендуем не перегружать пользователей и не показывать более 3-4 ознакомительных экранов подряд. Если нужно больше, разделите их на несколько групп и показывайте в разных разделах приложения.

<!-- 
    ```JavaScript
    bridge.send('VKWebAppShowSlidesSheet', {
      slides: [        
        {
          media: {
            blob: 'data:image/png;base64,[IMAGE_DATA]',
            type: 'image'
          },
          title: 'Заголовок слайда',
          subtitle: 'Описание слайда под заголовком'        
        }
      ]
    })
    .then((data) => {
      if (data.result) {
        // Слайды показаны
      }
    })
    .catch((error) => {
      // Ошибка
      console.log(error);
    });
    ```

* Поле `slides` — массив, каждый элемент которого соответствует одному слайду. 
-->

## Полезные ссылки

* [Клиентская часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-frontend),    
    cмотрите фрагменты кода по #M4L15.
* [Серверная часть (исходный код)](https://github.com/VKCOM/vk-mini-apps-course-backend)
* [Мини-приложение «Блюдо дня»](https://vk.ru/app51773283)
* [Информационные экраны](https://dev.vk.ru/mini-apps/development/information-screens)
* [Событие VKWebAppShowSlidesSheet](https://dev.vk.ru/bridge/VKWebAppShowSlidesSheet)

:::course_navigation
[&larr; Предыдущий урок](mini-apps/learning/course/4-development/14-maps)

[Следующий урок &rarr;](mini-apps/learning/course/4-development/16-storage)
:::
