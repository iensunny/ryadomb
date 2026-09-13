# VK Bridge | VKWebAppSetViewSettings

> Источник: [https://dev.vk.ru/ru/bridge/VKWebAppSetViewSettings](https://dev.vk.ru/ru/bridge/VKWebAppSetViewSettings)
<!-- ---
title: 'VK Bridge | Внешний вид | VKWebAppSetViewSettings'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# VKWebAppSetViewSettings

`VKWebAppSetViewSettings` устанавливает тему для значков в статус-баре и цвет статус-бара.

## Пример

```JavaScript
bridge.send('VKWebAppSetViewSettings', {
  status_bar_style: 'dark',
  action_bar_color: '#ffffff'
  })
  .then((data) => { 
    if (data.result) {
      // Тема и цвет установлены
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });
```

## Совместимость

| Площадки | Платформы |
| --- | --- |
| ВКонтакте | Android, iOS |
| Одноклассники | Android, iOS |

## Параметры

| Поле | Тип | Описание |
| --- | --- | --- |
| `status_bar_style` &#x0d;&#x0a;*обязательное* | `string` | Тема для значков статус-бара. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `light` — светлая.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `dark` — тёмная. |
| `action_bar_color` &#x0d;&#x0a;*необязательное* | `string` | Цвет экшен-бара в формате HEX-кода. Например: `#00ffff`. Используйте значение `none` для задания прозрачного цвета.&#x0d;&#x0a;&#x0d;&#x0a;Поле работает только на Android. |
| `navigation_bar_color` &#x0d;&#x0a;*необязательное* | `string` | Цвет навигационного бара в формате HEX-кода. Например: `#00ffff`.&#x0d;&#x0a;&#x0d;&#x0a;Поле работает только на Android. |

## Результат

Проверить результат можно:

* Используя объект [`Promise`](#Объект%20Promise), который возвращается вызовом `bridge.send(...)`.

* С помощью [событий](#События) `VKWebAppSetViewSettingsResult` и `VKWebAppSetViewSettingsFailed`.

[Подробнее о проверке результатов при вызовах VK Bridge](bridge/getting-started#Обработка%20результата).

### Объект `Promise`

Если обращение к платформе прошло успешно, управление будет передано в `then`-обработчик объекта `Promise`. В качестве ответа платформа возвращает объект со следующим полем:

| Поле | Тип | Описание |
| --- | --- | --- |
| `result` | `boolean` | `true`, если тема и цвет установлены. |

Если при обращении к платформе произошла ошибка, управление передаётся в метод `catch`. В качестве ответа платформа возвращает [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех событий VK Bridge.

### События

#### `VKWebAppSetViewSettingsResult`

Сигнализирует, что тема и цвет установлены. В обработчик события на стороне пользователя передаются следующие данные:  

```JavaScript
{
  detail: {
    type: "VKWebAppSetViewSettingsResult",
    data: {
      result: true
    }
  }
}
```

Передаваемый объект подобен объекту, возвращаемому при [успешном выполнении промиса](#Объект%20Promise).

#### `VKWebAppSetViewSettingsFailed`

Информирует об ошибке, которая произошла при взаимодействии с платформой.

В обработчик события на стороне пользователя передаётся [объект с информацией об ошибке](bridge/getting-started#Обработка%20ошибок), общий для всех методов VK Bridge.

#### Пример обработки событий

Подробнее — в разделе [Обработка результата](bridge/getting-started#Обработка%20результата).
