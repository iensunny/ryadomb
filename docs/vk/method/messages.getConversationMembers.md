# messages.getConversationMembers

> Источник: [https://dev.vk.ru/ru/method/messages.getConversationMembers](https://dev.vk.ru/ru/method/messages.getConversationMembers)
Метод получает список участников беседы.

## Параметры

| Параметр | Тип | Обязательный | Описание |
|---|---|---|---|
| `peer_id` | `integer` | да | **Обязательный параметр.** Идентификатор назначения. Возможные значения:<br>* Для пользователя — идентификатор пользователя.<br>* Для групповой беседы — `2000000000` + идентификатор беседы. <br>* Для сообщества — идентификатор сообщества со знаком `-`. |
| `offset` | `positive` | нет | **Необязательный параметр.** Смещение для возвращения участников беседы относительно начала списка. |
| `count` | `positive` | нет | **Необязательный параметр.** Количество возвращаемых участников беседы. |
| `extended` | `checkbox` | нет | **Необязательный параметр.** Информация о том, возвращать ли параметры `profiles` и `groups`. Возможные значения:<br>* `1` — возвращать параметры `profiles` и `groups`.<br>* `0` — не возвращать параметры `profiles` и `groups`. |
| `fields` | `string` | нет | Дополнительные поля [пользователей](reference/objects/user) и [сообществ](reference/objects/group), которые необходимо вернуть. |
| `group_id` | `integer` | нет | **Необязательный параметр.** Идентификатор сообщества (для сообщений сообщества с ключом доступа пользователя). |

## Результат

Метод возвращает объект. Поля объекта:

| Поле | Тип | Описание |
| --- | --- | --- |
| `count` | `integer` | Количество участников беседы. |
| `items` | `array[object]` | Массив участников беседы. Поля объектов в массиве:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `member_id` (`integer`) — идентификатор участника беседы.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `invited_by` (`integer`) — идентификатор пользователя, который пригласил участника.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `join_date` (`integer`) — дата и время добавления в беседу в секундах ([Unix Timestamp](https://www.unixtimestamp.com/)).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `is_admin` (`boolean`) — информация о том, является ли пользователь администратором. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `1` — пользователь является администратором.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `0` — пользователь не является администратором.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `can_kick` (`boolean`) — информация о том, может ли пользователь исключить участника. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `1` — пользователь может исключить участника.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `0` — пользователь не может исключить участника. |
| `chat_restrictions` | `object` | Информация о настройках беседы. Поля объекта:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `admins_promote_users` (`boolean`)&nbsp;— информация о том, только ли администраторы беседы могут повышать пользователей до прав администратора. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — только администраторы могут повышать пользователей до прав администратора.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — другие участники могут повышать пользователей до прав администратора.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `only_admins_edit_info` (`boolean`) — информация о том, только ли администраторы могут редактировать информацию беседы. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — только администраторы могут редактировать информацию беседы.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — другие участники могут редактировать информацию беседы.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `only_admins_edit_pin` (`boolean`)&nbsp;— информация о том, только ли администраторы могут менять закреплённое сообщение. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — только администраторы могут менять закреплённое сообщение.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — другие участники могут менять закреплённое сообщение.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `only_admins_invite` (`boolean`) — информация о том, только ли администраторы могут приглашать пользователей в беседу. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — только администраторы могут приглашать пользователей в беседу.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — другие участники могут приглашать пользователей в беседу.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `only_admins_kick` (`boolean`) — информация о том, только ли администраторы могут исключать пользователей из беседы. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `true` — только администраторы могут исключать пользователей из беседы.&#x0d;&#x0a; &nbsp;&nbsp;&nbsp;&nbsp; &bullet; `false` — другие участники могут исключать пользователей из беседы. |
| `profiles` | `array[object]` | Массив объектов [пользователей](reference/objects/user). |
| `groups` | `array[object]` | Массив объектов [сообществ](reference/objects/group). |

Пример ответа:

```JSON
{
  "response": {
    "count": 1,
    "items": [
      {
        "member_id": -182536237,
        "invited_by": -182536237,
        "is_admin": true,
        "is_owner": true,
        "join_date": 1574008940
      }
    ],
    "chat_restrictions": {
      "admins_promote_users": false,
      "only_admins_edit_info": false,
      "only_admins_edit_pin": false,
      "only_admins_invite": false,
      "only_admins_kick": false
    },
    "groups": [
      {
        "id": 182536237,
        "name": "cb group",
        "screen_name": "callbackph",
        "is_closed": 1,
        "type": "group",
        "photo_50": "https://sun9-78.userapi.com/s/v1/ig2/7tIlPaFq-UiFergmYV3xB2sHvZf7kyT1IUp0HFFDzoVCXAnNFbPTUkmizx_uYX__Xpaut0y-9XHffnHbNnIGHg8A.jpg?size=50x50&quality=96&crop=233,67,533,533&ava=1",
        "photo_100": "https://sun9-78.userapi.com/s/v1/ig2/n0BS4LLNsoLHUODVmK77Mj5bAbpeYJ1datlajZTNnO-KcX17jaOvLVaAfX7eOa2wmFMLzxLFhkIoKaxxB_hZNPlE.jpg?size=100x100&quality=96&crop=233,67,533,533&ava=1",
        "photo_200": "https://sun9-78.userapi.com/s/v1/ig2/CgJozSA9LE__6lIPLKqmoRuGjNV3pKS5ANBDPHE4fvewYen2-mPfZBDlOpAFjgilAIf0JayLTpgZDQs7V3S5eJ9l.jpg?size=200x200&quality=96&crop=233,67,533,533&ava=1"
      }
    ]
  }
}
```

## Права доступа

`messages_ex`

## Типы ключа

`group_access`, `is_standalone`

## Ошибки

- 917
- 927
- 995
