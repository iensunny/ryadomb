# VK Bridge | Позвонить пользователю

> Источник: [https://dev.vk.ru/ru/bridge/call](https://dev.vk.ru/ru/bridge/call)
<!-- ---
title: 'VK Bridge | Звонки | Позвонить пользователю'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# Позвонить пользователю

Чтобы инициировать звонок из приложения, перенаправьте пользователя по ссылке:

```
https://vk.com/call?id={user_id}
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS |
| Одноклассники | – |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `user_id` &#x0d;&#x0a;*обязательное* | `integer` | Идентификатор пользователя. |
