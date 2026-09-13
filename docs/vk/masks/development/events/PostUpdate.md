# PostUpdate

> Источник: [https://dev.vk.ru/ru/masks/development/events/PostUpdate](https://dev.vk.ru/ru/masks/development/events/PostUpdate)
Событие `PostUpdate` вызывается после всех обновлений.

В обработчике этого события стоит менять свойство видимости узлов, так как `PostUpdate` — это самое последнее событие, которое вызывается прямо перед отрисовкой кадра. Здесь удобно управлять видимостью узлов, так как остальные события уже не могут как-то на неё повлиять.

```AngelScript
void Init()
{
    SubscribeToEvent("PostUpdate", "HandlePostUpdate");
}

void HandlePostUpdate(StringHash eventType, VariantMap& eventData){
    float timeStep = eventData["TimeStep"].GetFloat();
}
```

## Данные события

| Ключ | Описание |
| - | - |
| `TimeStep` | Время прошедшее от предыдущего кадра в секундах. |
