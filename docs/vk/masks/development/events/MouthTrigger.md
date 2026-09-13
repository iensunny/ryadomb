# MouthTrigger

> Источник: [https://dev.vk.ru/ru/masks/development/events/MouthTrigger](https://dev.vk.ru/ru/masks/development/events/MouthTrigger)
Событие открытия рта `MouthTrigger` вызывается, когда рот открылся или закрылся.

```AngelScript
void Init()
{
    SubscribeToEvent("MouthTrigger", "HandleMouthTrigger");
}

void HandleMouthTrigger(StringHash eventType, VariantMap& eventData){
    uint nFace = eventData["NFace"].GetUInt();
    bool opened = eventData["Opened"].GetBool();
}
```

## Данные события

| Ключ | Описание |
| - | - |
| `NFace` | Номер лица: `0` или `1`. |
| `Opened` | Открытие или закрытие рта:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — рот открылся;&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — рот закрылся.|
