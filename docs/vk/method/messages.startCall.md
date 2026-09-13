# messages.startCall

> Источник: [https://dev.vk.ru/ru/method/messages.startCall](https://dev.vk.ru/ru/method/messages.startCall)
Старт нового звонка от имени пользователя или от сообщества

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `integer` | нет | Идентификатор сообщества (отрицательное число) |

## Результат

Возвращает объект, который содержит следующие поля:
join_link - ссылка на звонок
call_id - id звонка

> Обратите внимание: методы для работы со звонками были перенесены в новую секцию [calls](https://dev.vk.com/method/calls). Старые методы звонков из секции messages были помечены устаревшими и могут быть удалены в будущих версиях API. Вместо метода messages.startCall используйте метод [calls.start](https://dev.vk.com/method/calls.start).
