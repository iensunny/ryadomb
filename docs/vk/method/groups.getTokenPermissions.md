# groups.getTokenPermissions

> Источник: [https://dev.vk.ru/ru/method/groups.getTokenPermissions](https://dev.vk.ru/ru/method/groups.getTokenPermissions)
Возвращает настройки прав для ключа доступа сообщества.

## Результат

Возвращает объект, который содержит поля:
* `mask` (`integer`) — битовая маска ключа доступа;
* `permissions` (`array`) — массив объектов, описывающих права доступа. Каждый объект в массиве содержит поля:
   * `setting` (`integer`) — битовая маска права доступа;
   * `name` (`string`) — название права доступа.

## Типы ключа

`group_access_only`
