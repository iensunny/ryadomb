# Объединение точек в кластеры

> Источник: [https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/cluster](https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/cluster)
При отображении большого количества точек (объектов) на карте они могут накладываться друг на друга, что приводит к сложностям во взаимодействии с точками (объектами). Объединение точек в кластеры – это процесс объединения точек, расположенных близко друг к другу, и отображения их на карте в виде одной точки-кластера с указанием числа точек (объектов), входящих в кластер. Кластеризация осуществляется автоматически и зависит от изменения пользователем масштаба карты.

## Отображение простых HTML-кластеров

В этом примере используется кластеризация `MMR GL JS` с помощью HTML-маркеров. Вы можете использовать HTML для кластеров и маркеров вместо слоя, вручную синхронизируя кластеризованные данные и маркеры на карте.

<!-- exclusions/_images/vk-maps/clusters-on-map.png -->
![alt=Пример использования кластеризации маркеров;title=Пример использования кластеризации маркеров](6fd90295955f837c9f77eea980511c5727085a9c3073cf02ca59a584 "8305851103095213848")

### Пример кода, нужно разместить в `index.js`

```JavaScript
map.addControl(new mmrgl.NavigationControl());
 
  map.on('load', () => {
 
    // добавьте GeoJSON для выборочного набора землетрясений
    map.addSource('pins', {
      'type': 'geojson',
      'data': 'pins.geojson', // файл прикреплен к документу
      'cluster': true,
      'clusterRadius': 80,
    });
 
    // слой заглушка, чтобы при создании маркеров можно было
    // получить доступ к фичам источника earthquakes
    map.addLayer({
      'id': 'pins_circle',
      'type': 'line',
      'source': 'pins',
    });
 
    // объекты для кэширования
    const markers = {};
    let markersOnScreen = {};
 
    function updateMarkers() {
      const newMarkers = {};
      const features = map.querySourceFeatures('pins');
 
      // для каждого кластера создаем HTML-маркер и добавляем на карту
      for (const feature of features) {
        const coords = feature.geometry.coordinates;
        const props = feature.properties;
        const id = props.cluster ? props.cluster_id : props.id;
 
        let marker = markers[id];
 
        if (!marker) {
          const el = document.createElement('div');
          el.className = props.cluster ? 'cluster' : 'marker';
          el.innerHTML = props.cluster ? props.point_count : ''
 
          marker = markers[id] = new mmrgl.Marker({
            element: el
          }).setLngLat(coords)
        }
 
        newMarkers[id] = marker;
 
        if (!markersOnScreen[id]) marker.addTo(map);
      }
 
      // Удаляем маркеры, которые не видны больше
      for (const id in markersOnScreen) {
        if (!newMarkers[id]) markersOnScreen[id].remove();
      }
      markersOnScreen = newMarkers;
    }
 
    // обновление маркеров
    map.on('render', () => {
      if (!map.isSourceLoaded('pins')) return;
      updateMarkers();
    });
  });
```

[Скачать пример файла](https://cloud.mail.ru/public/3Dbg/dYvWx92Lz)
