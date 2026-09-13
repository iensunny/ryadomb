# groups.tagBind

> Источник: [https://dev.vk.ru/ru/method/groups.tagBind](https://dev.vk.ru/ru/method/groups.tagBind)
Позволяет «привязывать» и «отвязывать» теги сообщества к беседам.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `group_id` | `positive` | да | Идентификатор группы. |
| `tag_id` | `positive` | да | Идентификатор тега. |
| `user_id` | `positive` | да |  |
| `act` | `string` | да | Действие с тегом:<br>* `"bind"` —  привязать.<br>* `"unbind"` — отвязать. |

## Права доступа

`groups_ex`

## Типы ключа

`group_access`, `is_standalone`
