# Ручная обработка капчи

> Источник: [https://dev.vk.ru/ru/vkcaptcha/Android/integration_manual](https://dev.vk.ru/ru/vkcaptcha/Android/integration_manual)
:::note
Если вы используете [`OkHttp`](https://square.github.io/okhttp/), рекомендуем применять [решение с готовым интерсептором](vkcaptcha/Android/integration#C%20помощью%20интерсепторов%20(рекомендуется)).
:::

В этой инструкции описано, как вручную настроить отображение и обработку капчи, если вы не используете `OkHttp`, а также приведены примеры [самостоятельной реализации интерсепторов](#Самостоятельная%20интеграция%20с%20помощью%20интерсепторов).

Для ручной обработки капчи в VK ID Cаptcha SDK Android используются listener-интерфейсы. Обработка зависит от типа ошибки, которая пришла от API ВКонтакте:
* [Ошибка с кодом `14`](#Обработка%20ошибки%20с%20кодом%2014). Подробнее — в разделе [Ошибка с `redirect_uri`](api/captcha-error#Ошибка%20с%20redirect_uri).
* [Заголовки `X-Challenge` и `X-Challenge-Url`](#Обработка%20заголовков%20X-Challenge%20и%20X-Challenge-URL).

Перед началом обработки нужно [подключить](vkcaptcha/Android/integration#Шаг%201.%20Подключение) VK ID Captcha SDK Android.

## Обработка ошибки с кодом `14`

1. Обработайте [ошибку капчи](api/captcha-error#Ошибка%20с%20redirect_uri) от API ВКонтакте и получите URL из поля `redirect_uri`.
    
    ```kotlin
    val url = "https://api.vk.ru/method/some_method"
    val request = Request.Builder().url(url).build()
    val response = OkHttpClient.Builder().build().newCall(request).execute()
    val responseBody = JSONObject(response.peekBody(Long.MAX_VALUE).string())
    val error14ChallengeUrl = if (responseBody.has("error")) {
        val error = responseBody.getJSONObject("error")
        val redirectUri = if (error.getInt("error_code") == 14) {
            error.getString("redirect_uri")
            }
            else {
            null
            }
    }  
    ```
    
1. Настройте отслеживание результата прохождения капчи с помощью интерфейса [`VKCaptchaResultListener`](vkcaptcha/Android/guide#VKCaptchaResultListener):
    
    ```kotlin
    val listener = object : VKCaptchaResultListener {
        override fun onResult(result: VKCaptchaResult) {
        // результат прохождения капчи
        }
    }
    ```
    
1. Чтобы отобразить капчу, вызовите метод [`VKCaptcha.openCaptcha()`](vkcaptcha/Android/guide#VKCaptcha.openCaptcha()) и передайте в нём:
   * URL, который получили из поля `redirect_uri` на шаге 1.
   * Домен, при запросе к которому пришла капча.
   * Интерфейс для отслеживания результата прохождения капчи [`VKCaptchaResultListener`](vkcaptcha/Android/guide#VKCaptchaResultListener).
    
    ```kotlin
    VKCaptcha.openCaptcha(domain, redirectUri, listener)
    ```
    
1. Получите результат прохождения капчи (токен `success_token`) в методе `onResult()` внутри переданного listener-интерфейса.
    
1. Передайте полученный токен `success_token` в query-параметре запроса к API ВКонтакте, для которого нужно было пройти капчу.
    
    ```kotlin
    val url = HttpUrl.Builder().addQueryParameter("success_token", token).build()
    val request = Request.Builder().url(url).build()           
    ```
    
## Обработка заголовков `X-Challenge` и `X-Challenge-URL`

1. Обработайте заголовки `X-Challenge` и `X-Challenge-Url` от API ВКонтакте: запомните URL  из заголовка `X-Challenge-Url` — он понадобится на следующем шаге.
    
    ```kotlin
    val url = "https://api.vk.ru/method/some_method"
    val request = Request.Builder().url(url).build()
    val response = OkHttpClient.Builder().build().newCall(request).execute()
    val challengeUrl = domain + response.headers("X-Challenge-Url").firstOrNull()
    ```
    
1. Настройте отслеживание результата прохождения капчи с помощью интерфейса [`VKCaptchaResultListener`](vkcaptcha/Android/guide#VKCaptchaResultListener):
    
    ```kotlin
    val listener = object : VKCaptchaResultListener {
        override fun onResult(result: VKCaptchaResult) {
        // результат прохождения
        when (result) {
            is VKCaptchaResult.Success -> // успешное прохождение капчи
            is VKCaptchaResult.Error -> // ошибка при прохождении капчи
        }
    }
    }
    ```
    
1. Чтобы отобразить капчу, вызовите метод [`VKCaptcha.openCaptcha()`](vkcaptcha/Android/guide#VKCaptcha.openCaptcha()).
    Передайте в нём:
    * `challengeUrl`, который вы получили при объединении `domain` и `X-Challenge-Url` на шаге 1.
    * Домен, при запросе к которому пришла капча.
    Обратите внимание, что домен нужно указывать с протоколом, например: `https://api.vk.ru`.
    * Интерфейс для отслеживания результата прохождения капчи [`VKCaptchaResultListener`](vkcaptcha/Android/guide#VKCaptchaResultListener).

    ```kotlin
    VKCaptcha.openCaptcha(domain, challengeUrl, listener)
    ```
    
1. Получите результат прохождения капчи (токен) в методе `onResult()` внутри переданного listener-интерфейса.
    
1. Передайте токен в заголовке `header` в параметре `X-Challenge-Solution`.
    
    ```kotlin
    val request = Request.Builder().header("X-Challenge-Solution", token).build()
    ```
    
## Самостоятельная интеграция с помощью интерсепторов

Вы можете [вручную настроить отображение и обработку капчи](#Обработка%20ошибки%20с%20кодом%2014), как описано выше, чтобы реализовать свой интерсептор.

Ниже приведены примеры самостоятельной реализации интерсептора для [`OkHttp`](https://square.github.io/okhttp/), которые можно использовать как основу для своей реализации:
* [При обработке ошибки с кодом `14`](#Для%20ошибки%20с%20кодом%2014). Подробнее — в разделе [Ошибка с `redirect_uri`](api/captcha-error#Ошибка%20с%20redirect_uri).
* [При обработке заголовков](#Для%20заголовков%20X-Challenge%20и%20X-Challenge-URL).

### Для ошибки с кодом `14` 

Пример реализации интерсептора для `OkHttp` при обработке ошибки с кодом `14`:

```kotlin
 //  Интерсептор, который обрабатывает ошибку с кодом `14`
public class Error14HandlingInterceptor(
    private val domains: Set<String> = emptySet(),
) : Interceptor {
 
    private val cookie = AtomicReference<String?>(null)
 
    private companion object {
        private const val CAPTCHA_ERROR_CODE = 14
        private val executor = Executors.newSingleThreadExecutor()
    }
 
    override fun intercept(chain: Interceptor.Chain): Response {
        val request = chain.request().withCookie()
        val response = chain.proceed(request)
        response.parseCookie()
        if (request.shouldSkipCaptcha()) return response
        val redirectUri = response.getRedirectUri() ?: return response
        val token = passCaptchaAndGetToken(redirectUri)
        return chain.proceed(chain.request().withCookie().withSuccessToken(token))
    }
 
    // Запускает процесс проверки капчи
    private fun passCaptchaAndGetToken(redirectUri: String): String = synchronized(this) {
        val tokenResult = AtomicReference<Result<String>>(Result.failure(Exception("No result")))
        executor.submit {
            VKCaptcha.openCaptcha(
                domain = redirectUri.toHttpUrl().run { "$scheme://$host" },
                redirectUri = redirectUri,
                listener = object : VKCaptchaResultListener {
                    override fun onResult(result: VKCaptchaResult) {
                        synchronized(tokenResult) {
                            tokenResult.set(wrapResult(result))
                            tokenResult.notifyAll()
                        }
                    }
                }
            )
        }
        synchronized(tokenResult) {
            if (tokenResult.get().getOrNull() == null) {
                tokenResult.wait()
            }
            tokenResult.get().getOrThrow()
        }
    }

    // Преобразует результат проверки капчи в результат, который содержит полученный токен
    private fun wrapResult(result: VKCaptchaResult): Result<String> {
        return when (result) {
            is VKCaptchaResult.Error -> Result.failure(Exception(result.error.message, result.error.error))
            is VKCaptchaResult.Success -> Result.success(result.token)
        }
    }
 
     // Добавляет полученный токен в запрос
    private fun Request.withSuccessToken(token: String): Request {
        return newBuilder()
            .url(url.newBuilder().addQueryParameter("success_token", token).build())
            .build()
    }
 
    // Получает redirect_uri из ответа
    private fun Response.getRedirectUri(): String? {
        val responseBody = JSONObject(peekBody(Long.MAX_VALUE).string())
        return if (responseBody.has("error")) {
            val error = responseBody.getJSONObject("error")
            if (error.getInt("error_code") == CAPTCHA_ERROR_CODE) {
                error.getString("redirect_uri")
            } else {
                null
            }
        } else {
            null
        }
    }
 
    // Проверяет, нужно ли запускать капчу для домена, переданного в запросе
    private fun Request.shouldSkipCaptcha(): Boolean {
        return !domains.contains(url.toUrl().host) && domains.isNotEmpty()
    }
 
     // Получает cookie из ответа
    private fun Response.parseCookie() {
        headers("Set-Cookie").firstOrNull { it.contains("remixstlid") }?.let(cookie::set)
    }
 
    // Добавляет cookie в запрос
    private fun Request.withCookie(): Request {
        return newBuilder().apply { cookie.get()?.let { addHeader("Cookie", it) } }.build()
    }
}
 
// Добавляет интерсептор в HTTP-клиент
OkHttpClient.Builder().addInterceptor(Error14HandlingInterceptor())          
```

### Для заголовков `X-Challenge` и `X-Challenge-URL` 

Пример реализации  интерсептора для `OkHttp` при обработке заголовков `X-Challenge-Solution` и `X-Challenge-Url`:

```kotlin
// Интерсептор, который обрабатывает ошибки в заголовках
public class CaptchaHeadersInterceptor(
    private val domains: Set<String> = emptySet(),
) : Interceptor {

    private companion object {
        private const val HEADER_CHALLENGE_SOLUTION = "X-Challenge-Solution"
        private const val HEADER_CHALLENGE_URL = "X-Challenge-Url"
        private const val HEADER_CHALLENGE = "X-Challenge"
        private val executor = Executors.newSingleThreadExecutor()
    }

    override fun intercept(chain: Interceptor.Chain): Response {
        val domain = chain.request().getDomain()
        val request = chain.request().withSavedChallengeSolution()
        val response = chain.proceed(request)
        if (shouldSkipCaptcha(response, domain)) return response
        val challengeUrl = response.headers(HEADER_CHALLENGE_URL).firstOrNull() ?: return response
        val token = passCaptchaAndGetToken(domain, challengeUrl)
        response.close()
        return chain.proceed(chain.request().withChallengeSolution(token))
    }

    // Запускает процесс проверки капчи
    private fun passCaptchaAndGetToken(
        domain: String,
        challengeUrl: String,
    ): String = synchronized(this) {
        val tokenResult = AtomicReference<Result<String>>(Result.failure(Exception("No result")))
        executor.submit {
            VKCaptcha.openCaptcha(
                domain = domain,
                redirectUri = domain + challengeUrl,
                listener = object : VKCaptchaResultListener {
                    override fun onResult(result: VKCaptchaResult) {
                        synchronized(tokenResult) {
                            tokenResult.set(wrapResult(result))
                            tokenResult.notifyAll()
                        }
                    }
                }
            )
        }
        synchronized(tokenResult) {
            if (tokenResult.get().getOrNull() == null) {
                tokenResult.wait()
            }
            tokenResult.get().getOrThrow()
        }
    }

    // Преобразует результат проверки капчи в kotlin Result
    private fun wrapResult(result: VKCaptchaResult): Result<String> {
        return when (result) {
            is VKCaptchaResult.Error -> Result.failure(Exception(result.error.message, result.error.error))
            is VKCaptchaResult.Success -> Result.success(result.token)
        }
    }
   
    // Добавляет токен в заголовок запроса X-Challenge-Solution
    private fun Request.withChallengeSolution(token: String): Request {
        return newBuilder()
            .header(HEADER_CHALLENGE_SOLUTION, token)
            .build()
    }

    // Добавляет сохранённый токен в заголовок запроса X-Challenge-Solution
    private fun Request.withSavedChallengeSolution(): Request {
        val headersToken = VKCaptcha.getToken(getDomain())
        return if (header(HEADER_CHALLENGE_SOLUTION) == null && headersToken != null) {
            newBuilder().addHeader(HEADER_CHALLENGE_SOLUTION, headerToken).build()
        } else {
            this
        }
    }

    // Проверяет, нужно ли передавать капчу в домен ответа
    private fun shouldSkipCaptcha(response: Response, domain: String): Boolean {
        return !domains.contains(domain) && domains.isNotEmpty() || response.headers(HEADER_CHALLENGE).all { it != "required" }
    }

   // Получает домен из запроса
    private fun Request.getDomain(): String {
        val url = url.toUrl()
        return URL(url.protocol, url.host, url.port, "").toString()
    }
}

// Добавляет интерсептор для обработки ошибок капчи в заголовках
OkHttpClient.Builder().addInterceptor(CaptchaHeadersInterceptor())
```
