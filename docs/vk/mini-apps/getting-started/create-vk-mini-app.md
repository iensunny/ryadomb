# Пакет create-vk-mini-app  

> Источник: [https://dev.vk.ru/ru/mini-apps/getting-started/create-vk-mini-app](https://dev.vk.ru/ru/mini-apps/getting-started/create-vk-mini-app)
Пакет `create-vk-mini-app` помогает быстро создавать [мини-приложения](mini-apps/overview). Вы получаете проект с подключёнными библиотеками и типовыми файлами, которые вы потом можете наполнять содержанием в зависимости от задачи.

С помощью пакета вы можете генерировать проекты в различных конфигурациях.  

## Исходный код

GitHub: https://github.com/VKCOM/create-vk-mini-app

## Запуск

Выполните одну из следующих команд в зависимости от используемого инструмента.

```yarn
yarn create  @vkontakte/vk-mini-app
```

```npm
npm init  @vkontakte/vk-mini-app@latest
```

```npx
npx @vkontakte/create-vk-mini-app@latest
```

```bun
bun create @vkontakte/vk-mini-app
```

#### Дальнейшие шаги

Команды, упомянутые выше, запускают скрипт для создания приложения. Скрипт последовательно запросит следующие данные:

1. Имя папки, в которой будут размещены файлы проекта. По умолчанию предлагается `mini-app`.

    Скрипт создаст подпапку с указанным именем в текущей папке.

    Если введённое имя соответствует правилам именования npm-пакетов, то оно будет использовано и для названия пакета и будет добавлено в `package.json`. Если имя папки не может быть использовано для пакета, скрипт дополнительно попросит вас указать имя пакета.

1. Язык программирования: TypeScript или JavaScript.

1. Структурный шаблон — набор библиотек, которые будут включены в проект. Подробнее о значениях — [ниже](#Структурные%20шаблоны).

После выбора шаблона скрипт создаст проект и покажет дальнейшие инструкции.

## Структурные шаблоны

Структурные шаблоны определяют набор библиотек, которые будут подключены к проекту. Вы можете выбрать один из следующих шаблонов:  

| Шаблон | Описание |
| --- | --- |
| **VKUI+Bridge+Router**&nbsp;&nbsp;&nbsp;&nbsp; | **Рекомендуемый шаблон.** Будет создано мини-приложение со следующими подключёнными библиотеками:&#x0d;&#x0a;&nbsp; &bull; [VKUI](libraries/vkui) — библиотека React-компонентов для создания UI мини-приложения.&#x0d;&#x0a;&nbsp; &bull; [VK Bridge](bridge/overview) — библиотека для взаимодействия с платформой ВКонтакте.&#x0d;&#x0a;&nbsp; &bull; [vk-mini-apps-router](libraries/router) — библиотека маршрутизации.&#x0d;&#x0a;&#x0d;&#x0a;Кроме того, в проект будут включены следующие пакеты:&#x0d;&#x0a;&nbsp; &bull; vk-miniapps-deploy — пакет для размещения файлов мини-приложения на [хостинге ВКонтакте](https://dev.vk.com/ru/mini-apps/development/hosting/overview).&#x0d;&#x0a;&nbsp; &bull; VK Tunnel — пакет для организации доступа к веб-серверу, работающему на локальном компьютере, из глобальной сети.&#x0d;&#x0a;&nbsp; &bull; @vkontakte/icons — набор иконок.&#x0d;&#x0a;&nbsp; &bull; Vite — сборщик.&#x0d;&#x0a;&nbsp; &bull; ESLint — пакет для проверки синтаксиса и правил кодирования.&#x0d;&#x0a;&nbsp; &bull; Eruda — консоль разработчика.&#x0d;&#x0a;&nbsp; &bull; React и React-DOM — стандартные React-библиотеки. |
| **VKUI+Bridge** | Будет создано мини-приложение с теми же пакетами, которые подключаются в VKUI+Bridge+Router, за исключением библиотеки маршрутизации vk-mini-apps-router. |
| **VKUI-only** | Будет создано веб-приложение со следующими подключёнными пакетами:&#x0d;&#x0a;&nbsp; &bull; VKUI&#x0d;&#x0a;&nbsp; &bull; @vkontakte/icons&#x0d;&#x0a;&nbsp; &bull; Vite&#x0d;&#x0a;&nbsp; &bull; ESLint&#x0d;&#x0a;&nbsp; &bull; React и React-DOM&#x0d;&#x0a;&#x0d;&#x0a;Созданный проект не может работать как мини-приложение, так как в нём нет библиотеки [VK Bridge](bridge/overview), которая отвечает за связь с платформой. Используйте его для создания веб-приложений, которые будут работать вне ВКонтакте. |

## Параметры командной строки

При запуске в командной строке вы можете указать дополнительные параметры, которые помогут создать проект с нужными характеристиками. Общий вид командной строки такой:

```Командная&nbsp;строка
yarn create @vkontakte/vk-mini-app [имя-папки] [параметры]
npm init @vkontakte/vk-mini-app [имя-папки] -- [параметры]
npx @vkontakte/create-vk-mini-app [имя-папки] [параметры]
bun create @vkontakte/vk-mini-app [имя-папки] [параметры]
```

> Обратите внимание на двойное тире перед списком параметров при использовании `npm init`. Оно необходимо, это требование npm.

Все параметры необязательные.

| Параметр | Описание |
| --- | --- |
| `имя-папки` | Имя папки для размещения файлов проекта. Например:&#x0d;&#x0a;&#x0d;&#x0a;`npx @vkontakte/create-vk-mini-app my-folder`|
| `--projectName={name}` | Имя пакета, которое будет указано в `package.json`.&#x0d;&#x0a;Работает в случае, когда имя папки не может использоваться для именования пакета.&#x0d;&#x0a;&#x0d;&#x0a;`npm init @vkontakte/vk-mini-app MyApp --projectName=my-app`   |
| `--typescript` | Выбор языка программирования TypeScript.&#x0d;&#x0a;&#x0d;&#x0a;`npm init @vkontakte/vk-mini-app my-app --typescript` |
| `--template={name}`&#x0d;&#x0a;или&#x0d;&#x0a;`--t=<name>` | Выбор структурного шаблона для проекта.&#x0d;&#x0a;Возможные значения `{name}`:&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vkui-bridge-router`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vkui-bridge`&#x0d;&#x0a; &nbsp;&nbsp; &bull; `vkui-only`&#x0d;&#x0a;&#x0d;&#x0a;`npx @vkontakte/create-vk-mini-app --template=vkui-bridge-router` |

## Примеры

#### Пример 1

```
npm init  @vkontakte/vk-mini-app my-mini-app -- --typescript --template=vkui-bridge-router 
```

Создаёт проект с именем `my-mini-app` на TypeScript c подключёнными библиотеками VKUI, VK Bridge и vk-mini-apps-router.

#### Пример 2

```
yarn create  @vkontakte/vk-mini-app . --projectName=my-app --template=vkui-bridge
```

Создаёт проект `my-app` в текущей папке c подключёнными библиотеками VKUI и VK Bridge. Язык программирования будет запрошен при создании.

#### Пример 3

```
yarn create  @vkontakte/vk-mini-app --typescript
```

Создаёт проект на TypeScript в текущей папке. Во время создания пакет попросит указать имя папки и структурный шаблон.

## О сборке

Проекты, созданные с помощью `create-vk-mini-app`, ориентированы на сборщик [Vite](https://vitejs.dev/). В состав проекта входит файл `vite.config.js`, который вы можете использовать для настройки сборки.

## Материалы по теме

* [Мини-приложения — Первые шаги](mini-apps/getting-started)

* [Примеры проектов](mini-apps/examples)
