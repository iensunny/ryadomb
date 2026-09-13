# messages.forceCallFinish

> Источник: [https://dev.vk.ru/ru/method/messages.forceCallFinish](https://dev.vk.ru/ru/method/messages.forceCallFinish)
Метод используется для принудительного завершения звонка

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `call_id` | `string` | да | id звонка |

## Результат

После успешного выполнения возвращает 1.

> Обратите внимание: методы для работы со звонками были перенесены в новую секцию [calls](https://dev.vk.com/method/calls). Старые методы звонков из секции messages были помечены устаревшими и могут быть удалены в будущих версиях API. Вместо метода messages.forceCallFinish используйте метод [calls.forceFinish](https://dev.vk.com/method/calls.forceFinish).
