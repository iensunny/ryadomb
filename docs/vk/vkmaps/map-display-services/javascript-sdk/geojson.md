# Добавление объектов с использованием GeoJSON

> Источник: [https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/geojson](https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/geojson)
Вы можете использовать `GeoJSON` для добавления слоя с различными объектами и описанием их оформления. 

## Гексагоны

<!-- exclusions/_images/vk-maps/geojson-example.png -->
![alt=Пример отображения гексагонов на карте;title=Пример отображения гексагонов на карте](8e6c14ac6061cee266db310922807efb8e97eab9414318550754d4ec "-2525615942936969974")

### Пример кода, нужно разместить в `index.js`

```JavaScript
map.addControl(new mmrgl.NavigationControl());
 
map.on('load', () => {
  // добавьте GeoJSON с данными
  map.addSource('hexagon', {
    'type': 'geojson',
    'data': 'hexagons.geojson', // файл прикреплен к документу
  });
 
  // Опишите правило для отображения гексагонов
  map.addLayer({
    'id': 'hexagon-fill',
    'type': 'fill',
    'source': 'hexagon',
    'layout': {},
    'paint': {
      'fill-color': ['get', 'hexcolor'],
      'fill-opacity': 0.5
    }
  });
})
```

[Скачать пример файла](https://cloud.mail.ru/public/oHvS/51UNj9q5E)
