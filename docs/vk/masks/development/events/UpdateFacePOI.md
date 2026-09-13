# UpdateFacePOI

> Источник: [https://dev.vk.ru/ru/masks/development/events/UpdateFacePOI](https://dev.vk.ru/ru/masks/development/events/UpdateFacePOI)
Событие обновления ключевых точек `UpdateFacePOI` используется для получения координат ключевых точек лица. Вызывается для каждого кадра и лица.

```AngelScript
void Init()
{
    SubscribeToEvent("UpdateFacePOI", "HandleUpdateFacePOI");
}

void HandleUpdateFacePOI(StringHash eventType, VariantMap& eventData){
    uint nFace = eventData["NFace"].GetUInt();
    bool detected = eventData["Detected"].GetBool();
    Vector3 poiMap = eventData["PoiMap"].GetVariantMap()["chin"].GetVector3();
}
```

## Данные события

| Ключ | Описание |
| - | - |
| `NFace` | Номер лица: `0` или `1`. |
| `Detected` | Найдено ли лицо. |
| `PoiMap` | Мап координат точек лица:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `right_eye` — правый глаз;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `left_eye` — левый глаз;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `middle_eyes` — переносица;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `forehead` — лоб;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `nose` — нос;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mouth` — центр рта;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `right_cheek` — центр правой щеки;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `left_cheek` — центр левой щеки;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `lower_lip` — нижняя губа;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `upper_lip` — верхняя губа;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `chin` — подбородок. |
