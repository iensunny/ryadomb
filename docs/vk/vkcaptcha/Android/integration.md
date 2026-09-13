# Подключение и автообработка капчи

> Источник: [https://dev.vk.ru/ru/vkcaptcha/Android/integration](https://dev.vk.ru/ru/vkcaptcha/Android/integration)
В инструкции описано, как установить и подключить VK ID Captcha SDK для Android-приложения, а также как настроить отображение капчи и обработку результатов с помощью интерсептора:

1. [Подключение репозитория](#Шаг%201.%20Подключение%20репозитория).
2. [Установление зависимостей](#Шаг%202.%20Установление%20зависимостей).
3. [Отображение и обработка капчи](#Шаг%203.%20Отображение%20и%20обработка%20капчи).

## Требования

Платформа Android, уровень API – `21` или новее:  `android:minSdkVersion="21"`.

## Шаг 1. Подключение репозитория

Для интеграции используйте maven-репозиторий:

```Groovy
maven {
  url("https://artifactory-external.vkpartner.ru/artifactory/vkid-sdk-android/")
}
```

## Шаг 2. Установление зависимостей

Подключите зависимости VK ID Captcha SDK Android. Текущая версия `${sdkVersion} = 0.0.5`.

```Groovy
dependencies {
   implementation "com.vk.id.captcha:vkid-captcha:${sdkVersion}"
}
```

В `Android Manifest` вашего приложения переопределите `authority` провайдера, который инициализирует SDK.

```XML
<application>
        <provider
            android:name="com.vk.id.captcha.init.SdkInitContentProvider"
            android:authorities="your.unique.authority"
            android:exported="false"
            tools:replace="authorities" />
    </application>
```

## Шаг 3. Отображение и обработка капчи

После подключения VK ID Captcha SDK Android интегрируйте капчу одним из способов:
* [С помощью интерсептора](#C%20помощью%20интерсепторов%20(рекомендуется)) — рекомендуется, если вы используете [`OkHttp`](https://square.github.io/okhttp/).
* [С помощью listener-интерфейсов](vkcaptcha/Android/integration_manual) — запасной вариант, если вы не используете `OkHttp`.

Независимо от способа интеграции (интерсептор или listener-интерфейс), обработка капчи включает два типа ошибок, которые может вернуть API ВКонтакте:
* [ошибка капчи `14`](api/captcha-error#Ошибка%20с%20redirect_uri) — содержит `"error_code": 14`,  `"error_msg": "Captcha needed"` и ссылку для инициализации сессии капчи в поле `redirect_uri`.
* заголовки `X-Challenge-Solution` и `X-Challenge-Url`  — содержат ссылку для инициализации сессии капчи.

### C помощью интерсепторов (рекомендуется)

Этот способ интеграции подходит, если вы используете [`OkHttp`](https://square.github.io/okhttp/).
Добавьте интерсептор, который реализован в VK ID Captcha SDK Android:

```kotlin
OkHttpClient.Builder()
    ...
    .addInterceptor(
        CaptchaHandlingInterceptor(
            domains = setOf("api.vk.ru") // Список доменов, для которых должна обрабатываться ошибка капчи (опционально). По умолчанию обрабатываются все домены
        )
    )
    ...
    .build()
```

Если этот интерсептор вам не походит, вы можете [реализовать свой](vkcaptcha/Android/integration_manual#Самостоятельная%20интеграция%20с%20помощью%20интерсепторов).
