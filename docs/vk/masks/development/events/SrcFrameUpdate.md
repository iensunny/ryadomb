# SrcFrameUpdate

> Источник: [https://dev.vk.ru/ru/masks/development/events/SrcFrameUpdate](https://dev.vk.ru/ru/masks/development/events/SrcFrameUpdate)
Событие обновления кадра `SrcFrameUpdate` позволяет получить подробную информацию о кадре с камеры. Вызывается перед каждой отрисовкой.

```AngelScript
void Init() {
    SubscribeToEvent("SrcFrameUpdate", "HandleSrcFrameUpdate");
}

void HandleSrcFrameUpdate(StringHash eventType, VariantMap & eventData) {
    Vector2 size = eventData["Size"].GetVector2();
    Vector2 targetSize = eventData["TargetSize"].GetVector2();
    float angle = eventData["Angle"].GetFloat();
    bool isFrontCamera = eventData["IsFrontCamera"].GetBool();
}
```

## Данные события

| Ключ | Описание |
| - | - |
| `Size` | Размер кадра с камеры. |
| `TargetSize` | Размер `render target`. |
| `Angle` | Угол поворота кадра в градусах. |
| `IsFrontCamera` | Фронтальная ли сейчас камера. |
