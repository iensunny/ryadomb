# MouseEvent

> Источник: [https://dev.vk.ru/ru/masks/development/events/MouseEvent](https://dev.vk.ru/ru/masks/development/events/MouseEvent)
Событие мыши `MouseEvent` вызывается, когда пользователь касается экрана мобильного устройства или кликает мышью.

> Событие отслеживается, только если в [конфигурационном файле маски](masks/configuration) задан параметр `"mouse_input": true`.

```AngelScript
void Init()
{
    SubscribeToEvent("MouseEvent", "HandleMouseEvent");
}

void HandleMouseEvent(StringHash eventType, VariantMap& eventData){
    String event = eventData["Event"].GetString();
    Vector2 position = eventData["Position"].GetVector2();
}
```

## Данные события

| Ключ | Описание |
| - | - |
| `Event` | Пришедшее событие:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"tap"` — касание экрана;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `"doubletap"` — начало записи. |
| `Position` | Координаты касания в пространстве от `0.0` до `1.0`. |
