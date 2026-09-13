# Создание плагинов

> Источник: [https://dev.vk.ru/ru/masks/development/plugin-creation](https://dev.vk.ru/ru/masks/development/plugin-creation)
Если вы разработали некоторый скрипт и хотите в дальнейшем использовать его в других масках, удобнее будет упаковать его в плагин. Плагин легче повторно использовать и проще сопровождать в разработке.

> **Совет.** Проектируйте плагины так, чтобы каждый плагин решал отдельную задачу.

## Шаблон плагина

[Скачайте архив с шаблоном плагина](https://mask.vk.me/template/template_plugin.zip).

Описание кода плагина:

* Класс `template` — реализация плагина. Этот класс обязательно должен наследоваться от `BasePlugin` из включаемого файла `#include "ScriptEngine/Plugins/BasePlugin.as"`.
* Переменная `pluginName` — название плагина, которое должно совпадать с названием определяемого класса. Движок будет искать плагин по названию в каталоге масок, чтобы получить его параметры.
* Функция `Init()` — описывает порядок инициализации плагина. В случае успеха необходимо вернуть `true`. Если плагин инициализировать не удалось, верните `false`. Функция принимает два параметра. Первый `JSONValue& plugin_config` — конфигурация плагина в формате `.json`, второй `MaskEngine::Mask@ mask` — объект, который содержит эффекты текущей маски.
* Функция `LoadSettings()` — описывает порядок чтения конфигурации. Посмотрите пример чтения разных типов данных.

```AngelScript
#include "ScriptEngine/Plugins/BasePlugin.as"

class template: BasePlugin {
    String pluginName = "template";

    bool Init(const JSONValue & plugin_config, MaskEngine::Mask @ mask) override {
        LoadSettings(plugin_config);

        // ...

        return true;
    }
    void LoadSettings(const JSONValue & plugin_config) override {
        if (plugin_config.Get("name").GetString().ToLower() == pluginName.ToLower()) {
            // ...
        }
    }
}
```

## Как движок ищет плагин

Допустим, в `mask.json` объявлен плагин `randomtest`. Движок масок будет пытаться найти файл `randomtest.as` в следующих каталогах:

* В корне маски, в каталоге `Plugins/`.
* В корне маски, в каталоге `ScriptEngine/Plugins/`.
* Во [встроенных ресурсах](masks/development/assets) приложения по пути `ScriptEngine/Plugins/`.

Если плагин не найден ни по одному из путей, то его конфигурация будет проигнорирована.

> **Совет.** Собственные плагины имеет смысл размещать в корне маски, в каталоге `Plugins/`.
