# VK Games | Разработка | Хостинг статики | Файл vk-hosting-config.json

> Источник: [https://dev.vk.ru/ru/games/development/hosting/config-file](https://dev.vk.ru/ru/games/development/hosting/config-file)
<!-- ---
title: 'VK Games | Разработка | Хостинг статики | Файл vk-hosting-config.json'
is_hidden: false
is_search_available: true
type: 'page'
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Файл `vk-hosting-config.json`

Конфигурационный файл `vk-hosting-config.json` хранит настройки для загрузки компонентов игры на хостинг. Эти настройки использует библиотека [vk-miniapps-deploy](https://github.com/VKCOM/vk-miniapps-deploy).

Подробнее о размещении файлов игры на хостинге, ограничениях и возможных ошибках — в разделе [Хостинг статики для игр](games/development/hosting/overview).

## Пример

```JSON
{
  "static_path": "build",
  "app_id": 123456,
  "endpoints": {
    "mobile": "index.html",
    "web": "index.html",
    "mvk": "index.html"
  }
}
```

## Параметры конфигурационного файла

| Поле | Описание |
| --- | --- |
| `static_path` | Папка, которая содержит файлы для размещения на хостинге. В примере выше это папка `build`.&#x0d;&#x0a;&#x0d;&#x0a;Указывайте путь к папке относительно файла `vk-hosting-config.json`. |
| `app_id` | Идентификатор игры. Идентификатор отображается в [панели управления игрой](games/settings/overview#Где%20найти%20ID%20игры?). Вы можете не указывать это значение в файле `vk-hosting-config.json`. Тогда вам нужно будет сохранить идентификатор игры в переменной окружения [`MINI_APPS_APP_ID`](games/development/hosting/ci#Переменные%20окружения) до выкладки файлов на хостинг.|
| `endpoints` | Имена файлов загрузки вашего проекта в папке `static_path`, которые будут использоваться при запуске игры:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `mobile` — на мобильных устройствах.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `web` — из десктопной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bull; `mvk` — из мобильной версии сайта.&#x0d;&#x0a;&#x0d;&#x0a;При загрузке файлов на хостинг библиотека vk-mini-apps-deploy сформирует URL для запуска игры в формате: `https://<адрес_сервера>/<путь_к_файлу_загрузки>`. Путь к файлу включает его название и задаётся от корня папки `static_path`. Полученный URL также указывается в панели управления игрой в разделе [Размещение](games/settings/general/placement). |
| `noprompt` | Параметр, который определяет, будет ли библиотека запрашивать подтверждения при выкладке. Если указано `1`, библиотека не задаёт вопросы в командной строке и использует значения по умолчанию. Используйте этот режим для автоматической загрузки файлов на хостинг, например из системы CI/CD. Подробнее — в разделе [Добавление файлов на хостинг из автоматических сборок](games/development/hosting/ci). |
| `proxy_url` | Параметр, который добавляет возможность выполнять все API-запросы через заданный прокси-сервер. |

## Материалы по теме

* [Хостинг статики для игр](games/development/hosting/overview)

* [Добавление файлов на хостинг из автоматических сборок](games/development/hosting/ci)
