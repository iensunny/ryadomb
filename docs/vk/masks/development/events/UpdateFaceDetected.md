# UpdateFaceDetected

> Источник: [https://dev.vk.ru/ru/masks/development/events/UpdateFaceDetected](https://dev.vk.ru/ru/masks/development/events/UpdateFaceDetected)
Событие `UpdateFaceDetected` сообщает о найденном или потерянном лице в кадре. Вызывается для каждого кадра.

```AngelScript
void Init()
{
    SubscribeToEvent("UpdateFaceDetected", "HandleUpdateFaceDetected");
}

void HandleUpdateFaceDetected(StringHash eventType, VariantMap& eventData){
    uint nFace = eventData["NFace"].GetUInt();
    bool detected = eventData["Detected"].GetBool();
    float confidence = eventData["Confidence"].GetFloat();
}
```

## Данные события

| Ключ | Тип | Описание |
| --- | --- | --- |
| `NFace` | `integer` | Номер лица (`0` или `1`). |
| `Detected` | `boolean` | Лицо найдено (`true`) или потеряно (`false`). |
| `Confidence` | `float` | Вероятность того, что найдено именно лицо. Значение от `0.0` до `1.0`.&#x0d;&#x0a;Значение имеет смысл проверять в случае, когда лицо было найдено (`Detected == true`). |
