# Голосовое сообщение

> Источник: [https://dev.vk.ru/ru/reference/objects/audio-message](https://dev.vk.ru/ru/reference/objects/audio-message)
Объект, описывающий голосовое сообщение, содержит следующие поля:

## `id` 
`integer`
Идентификатор голосового сообщения. 

## `owner_id` 
`integer`
Идентификатор пользователя, загрузившего голосовое сообщение.

## `duration`
`integer` 
 Длительность аудиосообщения в секундах.

## `waveform`
`array` 
Массив значений (`integer`) для визуального отображения звука.

## `link_ogg`
`string`
URL .ogg-файла.

## `link_mp3`
`string`
URL .mp3-файла.
