# Кнопка

> Источник: [https://dev.vk.ru/ru/reference/objects/button](https://dev.vk.ru/ru/reference/objects/button)
Объект `button`, описывающий информацию о кнопке, содержит следующие поля:

## `title`
`string`
Название кнопки. 

## `action`
`object`
Действие для кнопки. Объект, который содержит следующие поля:
* `type` (`string`) — тип действия. Возможные значения:
    * `open_url` — открыть адрес из поля `url`;
* `url` (`string`) — URL для перехода. 



## Версии ниже 5.60

### `title`
`string`
Название кнопки. 

### `url`
`string`
URL, на который ведет кнопка.
