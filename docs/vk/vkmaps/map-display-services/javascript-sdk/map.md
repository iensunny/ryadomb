# Карта

> Источник: [https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/map](https://dev.vk.ru/ru/vkmaps/map-display-services/javascript-sdk/map)
Карта на странице связана с объектом `Map`. Он предоставляет методы и свойства, позволяющие изменять карту из кода. При создании карты `MMR GL JS` инициализирует её и возвращает объект `Map`.

## Параметры

| Название | Тип | Описание |
| --- | --- | --- |
| `container` | `HTMLElement`&#x0d;&#x0a;или&#x0d;&#x0a;`string` | HTML-элемент или идентификатор блока, в который `MMR GL JS` будет рендерить карту. Указанный элемент не должен содержать дочерних элементов. |
| `minZoom`| `number` | Минимальный уровень zoom (`0-20`). По умолчанию — `0`. |
| `maxZoom`| `number` | Максимальный уровень zoom (`0-20`). По умолчанию — `20`. |
| `minPitch`| `number` | Минимальный уровень наклона карты (`0`-`85`). По умолчанию — `0`. |
| `maxPitch`| `number` | Максимальный уровень наклона карты (`0`-`85`). По умолчанию — `85`. |
| `style` | `object`&#x0d;&#x0a;или&#x0d;&#x0a;`string` | Стиль карты в формате JSON или ссылка на стиль. Это JSON-объект, составленный по правилами оформления стилей.&#x0d;&#x0a;  &bull; `light` — mmr://api/styles/light_style.json&#x0d;&#x0a;  &bull; `dark` — mmr://api/styles/dark_style.json&#x0d;&#x0a;  &bull; `main` — mmr://api/styles/main_style.json |
| `hash` | `boolean`&#x0d;&#x0a;или&#x0d;&#x0a;`string)` | Если `true`, все параметры страницы (`zoom`, `latitude`, `longitude` and `pitch`) будут синхронизированы в URL через # параметра. По умолчанию — `false`. Пример: `http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60` |
| `interactive` | `boolean` | Если `false` (по умолчанию), карта не будет реагировать ни на какой элемент управления (мышь, экран, клавиатура). |
| `bearingSnap` | `number` | Граница, измеряемая в градусах, которая определяет, когда пеленг карты будет привязан к северу. По умолчанию — `7`. |
| `pitchWithRotate` | `boolean` | Если `false`, управление наклоном карты с помощью `drag to rotate` будет отключено. По умолчанию — `true`. |
| `clickTolerance` | `number` | Максимальное количество пикселей, на которое пользователь может переместить указатель мыши во время щелчка, чтобы он считался допустимым щелчком (в отличие от перетаскивания мыши). По умолчанию — `3`. |
| `attributionControl` | `boolean` | Если `true` (по умолчанию), [AttributionControl](vkmaps/map-display-services/javascript-sdk/additional-objects#AttributionControl) будет добавлен на карту. |
| `customAttribution` | `string`&#x0d;&#x0a;или&#x0d;&#x0a;`Array<string>` | Строка или строки для отображения в [AttributionControl](vkmaps/map-display-services/javascript-sdk/additional-objects#AttributionControl). Возможно только, если `attributionControl=true`. |
| `failIfMajorPerfomanceCaveat` | `boolean` | Если `true`, инициализация карты завершится с ошибкой, если производительность карты будет неприемлемой. По умолчанию — `false`. |
| `preserveDrawingBuffer` | `boolean` | Если `true`, холст карты можно экспортировать в изображение с расширением `.png`, используя `map.getCanvas().toDataUrl()`. По умолчанию установлен в `false` для улучшения производительности. |
| `antialias` | `boolean` | Если `true`, gl контекст будет создан с применением MSAA сглаживания, которое может быть полезно для сглаживания кастомных слоев. По умолчанию установлен в `false`, для улучшения производительности. |
| `refreshExpiredTiles` | `boolean` | Если `false`, то карта не будет запрашивать тайлы после истечения срока их жизни в соответствии с заголовками `cacheControl` и `expires`. По умолчанию — `true`. |
| `maxBounds` | [`LngLatBoundsLike`](vkmaps/map-display-services/javascript-sdk/additional-objects#LngLatBoundsLike) | Если установлено, карта будет ограничена заданными границами. |
| `scrollZoom` | `boolean`&#x0d;&#x0a;или&#x0d;&#x0a;`object` | Если `true` (по умолчанию), то увеличение с помощью скрола работает. Значение объекта передается в качестве параметров [ScrollZoomHandler](vkmaps/map-display-services/javascript-sdk/handlers#ScrollZoomHandler). |
| `boxZoom` | `boolean` | Если `true` (по умолчанию), взаимодействие типа `box zoom` включено (см. подробнее [BoxZoomHandler](vkmaps/map-display-services/javascript-sdk/handlers#BoxZoomHandler)). |
| `dragRotate` | `boolean` | Если `true` (по умолчанию), взаимодействие типа `drag to rotate` включено (см. подробнее [DragRotateHandler](vkmaps/map-display-services/javascript-sdk/handlers#DragRotateHandler)). |
| `dragPan` | `boolean`&#x0d;&#x0a;или&#x0d;&#x0a;`object` | Если `true` (по умолчанию), взаимодействие типа `drag to pan` включено (см. подробнее [DragPanHandler](vkmaps/map-display-services/javascript-sdk/handlers#DragPanHandler)). |
| `keyboard` | `boolean` | Если `true` (по умолчанию), можно использовать клавиатуру и сочетания клавиш для взаимодействия с картой (см. подробнее  [KeyboardHandler](vkmaps/map-display-services/javascript-sdk/handlers#KeyboardHandler)). |
| `doubleClickZoom` | `boolean` | Если `true` (по умолчанию), взаимодействие типа `double click to zoom` включено (см. подробнее [DoubleClickZoomHandler](vkmaps/map-display-services/javascript-sdk/handlers#DoubleClickZoomHandler)). |
| `touchZoomRotate` | `boolean`&#x0d;&#x0a;или&#x0d;&#x0a;`object` | Если `true` (по умолчанию), взаимодействие типа `pinch to rotate and zoom` включено. (см. подробнее ( [TouchZoomRotateHandler](vkmaps/map-display-services/javascript-sdk/handlers#TouchZoomRotateHandler)) |
| `touchPitch` | `boolean`&#x0d;&#x0a;или&#x0d;&#x0a;`object` | Если `true` (по умолчанию), взаимодействие типа `drag to pitch` включено. (см. подробнее [TouchPitchHandler](vkmaps/map-display-services/javascript-sdk/handlers#TouchPitchHandler)) |
| `trackResize` | `boolean` | Если `true` (по умолчанию), карта будет автоматически менять свой размер при изменении окна. |
| `center` | [`LngLatLike`](vkmaps/map-display-services/javascript-sdk/geometry#LngLatLike) | Начальная точка карты. Если центр не указан в параметрах конструктора, `MMR GL JS` будет смотреть его в объекте стиля карты. Если он также не указан в стиле, то по умолчанию он будет равен `[0, 0]`. Примечание: используется порядок координат долготы, широты (в отличие от широты, долготы) для соответствия `GeoJSON`. |
| `zoom`| `number` | Начальный уровень масштаба карты. Если уровень масштаба не указан в параметрах конструктора, `MMR GL JS` будет смотреть его в объекте стиля карты. Если он также не указан в стиле, то по умолчанию он будет равен `0`. |
| `bearing`| `number` | Начальный пеленг (поворот) карты, измеренный в градусах против часовой стрелки с севера. Если пеленг не указан в параметрах конструктора, `MMR GL JS` будет искать его в объекте стиля карты. Если он также не указан в стиле, то по умолчанию он будет равен `0`. |
| `pitch`| `number` | Начальный шаг (наклон) карты, измеряемый в градусах от плоскости экрана (`0`-`85`). Если шаг не указан в параметрах конструктора, `MMR GL JS` будет искать его в объекте стиля карты. Если он также не указан в стиле, то по умолчанию он будет равен `0`. |
| `bounds` | [`LngLatBoundsLike`](vkmaps/map-display-services/javascript-sdk/additional-objects#LngLatBoundsLike) | Начальные границы карты. Если заданы границы, то он переопределяет `center` и `zoom`. |
| `fitBoundsOptions` | `object` | Параметры объекта следует использовать только при подгонке исходных границ приведенных выше (`bounds`). |
| `renderWorldCopies` | `boolean` | Если это `true` (по умолчанию), то несколько копий мира будут отображаться бок о бок за пределами -180 и 180 градусов долготы. Если установлено значение `false`:&#x0d;&#x0a;  &bull; Когда карта будет увеличена настолько, что ни одно изображение мира не заполнит весь контейнер карты, за пределами 180 и -180 градусов долготы останется пустое пространство.&#x0d;&#x0a;  &bull; Объекты, пересекающие 180 и -180 градусов долготы, будут разрезаны надвое (одна часть будет расположена на правом краю карты, а другая — на левом) на каждом уровне масштабирования. |
| `maxTileCache`| `number` | Максимальное количество плиток, хранящихся в кэше для данного источника (`source`). Если этот параметр опущен, размер кэша будет динамически определяться в зависимости от текущего окна просмотра. По умолчанию — `null`. |
| `localIdeographFontFamily` | `string` | Определяет CSS font-family для локального переопределения генерации глифов в `CJK Unified Ideographs`, `Hiragana`, `Katakana` и `Hangul Syllables`. В этих языковых структурах настройки шрифта из стиля карты будут игнорироваться, кроме `font-weight` (`light`/`regular`/`medium`/`bold`). Установите значение `false`, чтобы включить настройки шрифта из стиля карты для этих глифов. По умолчанию — `sans-serif`. |
| `localFontFamily` | `string` | Определяем CSS font-family для переопределения генерации всех глифов. Настройки шрифта из стиля карты будут игнорироваться, кроме `font-weight` (`light`/`regular`/`medium`/`bold`). Если этот параметр установлен, то он переопределяет настройку в `localIdeographFontFamily`. По умолчанию — `sans-serif`. |
| `transformRequest` | `RequestTransformFunction` | Функция выполняется до выполнения URL-запроса. Она может использоваться для изменения URL, установки заголовков или свойства `credentials` для кросс-доменных запросов. По умолчанию — `null`. |
| `collectResourceTiming` | `boolean` | Если `true`, то информация Resource Timing API будет доступна для запросов выполняемых `GeoJSON` и `Vector Tile` (эта информация обычно недоступна из основного потока `JavaScript`). Информация будет возвращена в свойстве `ResourceTiming`. По умолчанию — `false`. |
| `fadeDuration`| `number` | Управление длительности анимации `fade-in`/`fade-out` для коллизий подписей в миллисекундах. Этот параметр не влияет на продолжительность переходов стиля во время выполнения или перекрестного затухания растровых плиток. По умолчанию — `300`. |
| `crossSourceCollisions` | `boolean` | Если `true` (по умолчанию), то символы из нескольких источников могут сталкиваться друг с другом во время обнаружения столкновения. Если значение `false`, обнаружение коллизий выполняется отдельно для символов в каждом источнике. |
| `accessToken` | `string` | Если указан, тогда будет использоваться этот токен вместо того, который указан в `mmrgl.accessToken`. По умолчанию — `null`. |
| `locale` | `object` | Патч для применения к таблице локализации по умолчанию для строк пользовательского интерфейса, например, подсказок управления. Объект `locale` сопоставляет идентификаторы строк пользовательского интерфейса в пространстве имен с переведенными строками на целевом языке; см. `src/ui/default_locale.js`, например, со всеми поддерживаемыми строковыми идентификаторами. Объект может указывать все строки пользовательского интерфейса (тем самым добавляя поддержку нового перевода) или только подмножество строк (тем самым исправляя таблицу перевода по умолчанию). По умолчанию — `null`. |

#### Пример

```JavaScript
var map = new mmrgl.Map({
    container: 'map',
    center: [37.6165, 55.7505],
    zoom: 8,
    style: styleObject,
    hash: true,
    transformRequest: (url, resourceType)=> {
            if(resourceType === 'Source' && url.startsWith('http://myHost')) {
                return {
                    url: url.replace('http', 'https'),
                    headers: { 'my-custom-header': true},
                    credentials: 'include'  // Include cookies for cross-origin requests
                }
        }
    }
});
```

## Методы

[Методы объекта Map (a...h)](vkmaps/map-display-services/javascript-sdk/map/methods-a-h/)

[Методы объекта Map (i...r)](vkmaps/map-display-services/javascript-sdk/map/methods-i-r/)

[Методы объекта Map (s...z)](vkmaps/map-display-services/javascript-sdk/map/methods-s-z/)

## События

[События объекта Map](vkmaps/map-display-services/javascript-sdk/map/events/)
