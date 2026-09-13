# Update

> Источник: [https://dev.vk.ru/ru/masks/development/events/Update](https://dev.vk.ru/ru/masks/development/events/Update)
Событие обновления `Update` вызывается для каждого кадра.

В обработчик события `Update` стоит добавить всю основную логику и необходимые расчёты. Это событие вызывается до того, как движок начнёт собирать данные узлов сцены для подготовки к отрисовке. В обработчике события можно обновлять параметры шейдеров, но не стоит изменять видимость узлов, так как уже после отправки этого события видимость может поменяться.

Для изменения видимости узлов используйте событие [`PostUpdate`](masks/development/events/PostUpdate).

```AngelScript
void Init()
{
    SubscribeToEvent("Update", "HandleUpdate");
}

void HandleUpdate(StringHash eventType, VariantMap& eventData){
    float timeStep = eventData["TimeStep"].GetFloat();
}
```

## Данные события

| Ключ | Описание |
| - | - |
| `TimeStep` | Время прошедшее от предыдущего кадра в секундах. |
