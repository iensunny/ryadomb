# Быстрый старт

> Источник: [https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/quickstart](https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/quickstart)
`MMR GL JS` — JavaScript библиотека, которая использует WebGL для рендеринга интерактивных карт.

Пример карты [https://tiles.maps.vk.com/](https://tiles.maps.vk.com/)

## Подключение на HTML-страницу

Необходимо добавить `<script>` и `<link>` в теге `<head>`. 

### Пример

```HTML
<head>
  ...
  <script src="https://maps.vk.com/sdk/js/<version>/mmr-gl.js"></script>
  <link href="https://maps.vk.com/sdk/js/<version>/mmr-gl.css" rel="stylesheet">
  ...
</head>
```

:::note
Рекомендуется использовать самую свежую версию SDK.
Для получения последней версии SDK можно указать `0` или `0.0` вместо точной версии, таким образом будет загружена последняя актуальная версия с номером `0.x.x` либо `0.0.x` соответственно.
:::

### Пример кода для инициализации карты

```HTML
<div id="map" style="width: 800px; height: 600px;"></div>
<script>
  mmrgl.accessToken = 'Token';
  var map = new mmrgl.Map({
    container: 'map',
    zoom: 8,
    center: [37.6165, 55.7505],
    style: 'mmr://api/styles/main_style.json',
    hash: true
  });
</script>
```

## Установка через npm

Устанавливаем пакет с помощью команды из примера. 

```
$~ npm install mmr-gl
```

### Пример кода на React для инициализации карты

```JavaScript
import mmrgl from 'mmr-gl';
import { useEffect } from 'react'
 
import 'mmr-gl/dist/mmr-gl.css';
 
export function Map() {
  useEffect( () => {
    mmrgl.accessToken = 'accessToken';
 
    const map = new mmrgl.Map({
      container: 'map',
      zoom: 8,
      center: [37.6165, 55.7505],
      style: 'mmr://api/styles/main_style.json',
      hash: true,
    })
 
    return () => {
      if (map) map.remove();
    }
  }
 
  return <div id="map" style={{ width: '800px', height: '600px'}} />
}
```

## Детальная информация

Более подробную информацию по использованию `MMR GL JS` SDK вы найдёте в разделах:

* [Карта](vkmaps/map-display-services/javascript-sdk/map)

* [Свойства и опции](vkmaps/map-display-services/javascript-sdk/options)

* [Метки и элементы управления](vkmaps/map-display-services/javascript-sdk/labels-controls)

* [География и геометрия](vkmaps/map-display-services/javascript-sdk/geometry)

* [Handlers (обработчики)](vkmaps/map-display-services/javascript-sdk/handlers)

* [Sources (источники)](vkmaps/map-display-services/javascript-sdk/sources)

* [Events (события)](vkmaps/map-display-services/javascript-sdk/events)

* [Использование в React приложениях](vkmaps/map-display-services/javascript-sdk/react)

* [Объединение точек в кластеры](vkmaps/map-display-services/javascript-sdk/cluster)

* [Добавление объектов с использованием GeoJSON](vkmaps/map-display-services/javascript-sdk/geojson)

* [Описание дополнительных объектов карты](vkmaps/map-display-services/javascript-sdk/additional-objects)
