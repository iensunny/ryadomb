# Управление группами тестировщиков

> Источник: [https://dev.vk.ru/ru/games/development/testing](https://dev.vk.ru/ru/games/development/testing)
Вы можете управлять [группами тестировщиков](games/settings/test-groups) игры c помощью методов API.

:::note
**Важно!** Методы для управления группами тестировщиков используются с [сервисным ключом доступа мини-приложения](games/settings/development/keys#Сервисный%20ключ) и могут быть вызваны только на сервере.
:::

Для вызова методов API используйте [GET- или POST-запросы](api/api-requests).

## Получение

Вызовите метод [получения информации о группе тестировщиков](method/apps.getTestingGroups) с помощью POST-запроса.

```bash
curl -X POST 'https://api.vk.ru/method/apps.getTestingGroups' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'group_id=<ИДЕНТИФИКАТОР_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'v=<ВЕРСИЯ_API>'
```

## Создание

Вызовите метод [создания группы тестировщиков](method/apps.updateMetaForTestingGroup) с помощью POST-запроса.

```bash
curl -X POST 'https://api.vk.ru/method/apps.updateMetaForTestingGroup' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'group_id=<ИДЕНТИФИКАТОР_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'webview=<URL_МИНИ_ПРИЛОЖЕНИЯ>' \
  -F 'name=<НАЗВАНИЕ_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'platforms=<ДОСТУПНЫЕ_ПЛАТФОРМЫ_МИНИ_ПРИЛОЖЕНИЯ>' \
  -F 'user_ids=<ИДЕНТИФИКАТОРЫ_ПОЛЬЗОВАТЕЛЕЙ_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'v=<ВЕРСИЯ_API>'
```

## Редактирование

Вызовите метод [редактирования группы тестировщиков](method/apps.updateMetaForTestingGroup) с помощью POST-запроса.

```bash
curl -X POST 'https://api.vk.ru/method/apps.updateMetaForTestingGroup' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'group_id=<ИДЕНТИФИКАТОР_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'webview=<URL_МИНИ_ПРИЛОЖЕНИЯ>' \
  -F 'name=<НАЗВАНИЕ_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'platforms=<ДОСТУПНЫЕ_ПЛАТФОРМЫ_МИНИ_ПРИЛОЖЕНИЯ>' \
  -F 'user_ids=<ИДЕНТИФИКАТОРЫ_ПОЛЬЗОВАТЕЛЕЙ_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'v=<ВЕРСИЯ_API>'
```

### Добавление пользователей

Вызовите метод [добавления пользователей в группу тестировщиков](method/apps.addUsersToTestingGroup) с помощью POST-запроса.

```bash
curl -X POST 'https://api.vk.ru/method/apps.addUsersToTestingGroup' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'user_ids=<ИДЕНТИФИКАТОРЫ_ПОЛЬЗОВАТЕЛЕЙ_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'group_id=<ИДЕНТИФИКАТОР_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'v=<ВЕРСИЯ_API>'
```

### Удаление пользователей

Вызовите метод [удаления пользователей из групп тестировщиков](method/apps.removeUsersFromTestingGroups) с помощью POST-запроса.

```bash
curl -X POST 'https://api.vk.ru/method/apps.removeUsersFromTestingGroups' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'user_ids=<ИДЕНТИФИКАТОРЫ_ПОЛЬЗОВАТЕЛЕЙ_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'v=<ВЕРСИЯ_API>'
```

## Удаление группы тестировщиков

Вызовите метод [удаления группы тестировщиков](method/apps.removeTestingGroup) с помощью POST-запроса.

```bash
curl -X POST 'https://api.vk.ru/method/apps.removeTestingGroup' \
  -H 'Authorization: Bearer <КЛЮЧ_ДОСТУПА>' \
  -F 'group_id=<ИДЕНТИФИКАТОР_ГРУППЫ_ТЕСТИРОВЩИКОВ>' \
  -F 'v=<ВЕРСИЯ_API>'
```
