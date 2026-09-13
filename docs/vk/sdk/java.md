# Библиотеки | SDK | Java SDK

> Источник: [https://dev.vk.ru/ru/sdk/java](https://dev.vk.ru/ru/sdk/java)
<!-- ---
title: 'Библиотеки | SDK | Java SDK'
is_hidden: false
is_search_available: true
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to: 
lang: ru
--- -->

# Java SDK

Страница Java SDK на Github:
[`https://github.com/VKCOM/vk-java-sdk`](https://github.com/VKCOM/vk-java-sdk).

Java-библиотека для взаимодействия с API ВКонтакте, упрощающая внедрение OAuth-авторизации и вызов методов API.

Эта библиотека была создана с использованием VK API JSON Schema.
Страница проекта JSON-схема на Github:
[`https://github.com/VKCOM/vk-api-schema`](https://github.com/VKCOM/vk-api-schema).
В схеме используется [версия API](reference/versions) – :version.

## Требования

*  [JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html) версии 1.8 или выше.
*  [Gradle](https://gradle.org/) версии 2.13 или выше.

## Зависимости

В проекте используются:
*  [Apache Http Client](https://hc.apache.org) версии 4.5.8.
*  [SLF4J](https://www.slf4j.org/) версии 1.7.26.
*  [Apache Commons Lang](https://commons.apache.org/proper/commons-lang/) версии 3.6.
*  [Apache Commons Collections](https://commons.apache.org/proper/commons-collections/) версии 4.3.
*  [Apache Commons IO](https://commons.apache.org/proper/commons-io/) версии 2.6.
*  [Google Gson](https://github.com/google/gson) версии 2.8.5.

## Актуальная версия

Актуальный [релиз](https://search.maven.org/search?q=g:com.vk.api%20AND%20a:sdk).

Подключение зависимости в Maven:
```maven 
<dependency>
  <groupId>com.vk.api</groupId>
  <artifactId>sdk</artifactId>
  <version>LATEST_VERSION</version>
</dependency>
```

Подключение зависимости в Gradle:
```gradle
dependencies {
  compile 'com.vk.api:sdk:LATEST_VERSION'
}
```

Подключение зависимости в SBT:
```sbt
libraryDependencies += "com.vk.api" % "sdk" % "LATEST_VERSION"
```

## Подготовка к использованию

[Создайте приложение ВКонтакте](https://vk.com/editapp?act=create). Выберите подходящий тип.

Укажите название, подтвердите действие по SMS. Вы будете перенаправлены на страницу с настройками.

В дальнейшем вам потребуются ID приложения (в документации обозначается как `API_ID`), секретный ключ (`CLIENT_SECRET`) и доверенный redirect URI (`REDIRECT_URI`).

## Логирование

Библиотека использует `SLF4J` для логирования. Чтобы включить логирование, нужно добавить привязку для конкретного фреймворка логирования. Подробнее в [документации SLF4J](https://www.slf4j.org/manual.html#swapping).
### JDK Logger

Maven:
```maven
<dependencies>
    <dependency>
        <groupId>org.slf4j</groupId>
        <artifactId>slf4j-jdk14</artifactId>
        <version>1.7.26</version>
    </dependency>
</dependencies>
```


Gradle:
```Gradle
dependencies {
    compile group: 'org.slf4j', name: 'slf4j-jdk14', version: '1.7.26'
}
```
Добавьте файл `logging.properties` с конфигурацией (расположен в `src/main/resources`)
```java
.level=INFO
handlers=java.util.logging.ConsoleHandler
java.util.logging.ConsoleHandler.level=FINEST
deng.level=FINEST
```

Установить системную переменную, указывающую путь до файла:
```java 
-Djava.util.logging.config.file=logging.properties
```

### log4j2

Maven:
```maven
<dependencies>
    <!-- Binding for Log4J -->
    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-slf4j-impl</artifactId>
      <version>2.11.2</version>
    </dependency>
    
    <!-- Log4j API and Core implementation required for binding -->
    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-api</artifactId>
      <version>2.11.2</version>
    </dependency>
    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-core</artifactId>
      <version>2.11.2</version>
    </dependency>
</dependencies>

```

Gradle:
```gradle 
dependencies {
    //Binding for Log4J -->
    compile group: 'org.apache.logging.log4j', name: 'log4j-slf4j-impl', version: '2.11.2'
    
    //Log4j API and Core implementation required for binding
    compile group: 'org.apache.logging.log4j', name: 'log4j-api', version: '2.11.2'
    compile group: 'org.apache.logging.log4j', name: 'log4j-core', version: '2.11.2'
}
```

Добавить конфигурационный файл `src/main/resources/log4j2.xml`:
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<Configuration status="info">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n"/>
        </Console>
    </Appenders>

    <Loggers>
        <Root level="info">
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```

## Инициализация

Создайте объект `VkApiClient` следующим образом:
```java 
TransportClient transportClient = new HttpTransportClient();
VkApiClient vk = new VkApiClient(transportClient);
```

Обратите внимание, вы можете использовать транспортный клиент по своему выбору. Мы используем [Apache Http Client](https://hc.apache.org/).

## Авторизация

Библиотека предусматривает несколько способов авторизации, основанных на реализации `OAuth 2.0` в API ВКонтакте. Пожалуйста, ознакомьтесь с [документацией](api/access-token/getting-started), прежде чем начать.

### Authorization Code Flow для пользователя
<!-- не актуальное -->
Authorization Code Flow позволяет вызывать методы API с серверной стороны.

Эта схема авторизации состоит из двух этапов — получение авторизационного кода (`code`) и обмен его на ключ доступа. Сначала вам необходимо получить `code` ([инструкция](api/access-token/authcode-flow-user)), а затем выполнить второй этап:

```java
UserAuthResponse authResponse = vk.oAuth()
    .userAuthorizationCodeFlow(APP_ID, CLIENT_SECRET, REDIRECT_URI, code)
    .execute();

UserActor actor = new UserActor(authResponse.getUserId(), authResponse.getAccessToken());
```

Метод принимает в качестве параметров `ID` приложения, секретный ключ, `redirect URI`, список [прав доступа](api/privacy#Права%20доступа) и `code`, полученный на первом этапе.

После успешного выполнения будет создан объект `UserActor`. Вы можете обращаться к API ВКонтакте от имени пользователя.

### Authorization Code Flow для сообщества

Отличие этой схемы от предыдущей заключается в том, что вам необходимо передавать параметр `groupId`, чтобы получить ключ доступа сообщества. Пожалуйста, прочитайте [подробное руководство](https://id.vk.com/about/business/go/docs/ru/vkid/latest/oauth/oauth-vkontakte/authcode-flow-community).
```java 
GroupAuthResponse authResponse = vk.oAuth()
    .groupAuthorizationCodeFlow(APP_ID, CLIENT_SECRET, REDIRECT_URI, code)
    .execute();

GroupActor actor = new GroupActor(groupId, authResponse.getAccessTokens().get(groupId));
```

После успешного выполнения будет создан объект `GroupActor`. Вы можете обращаться к API ВКонтакте от имени сообщества.

### Обработка ошибки `need_validation`

В процессе авторизации вы можете получить ошибку `"need_validation"`. Используйте такой код для ее обработки:
```java 
UserAuthResponse authResponse;
try {
    authResponse = vk.oAuth()
        .userAuthorizationCodeFlow(APP_ID, CLIENT_SECRET, REDIRECT_URI, code)
        .execute();
} catch (OAuthException e) {
    e.getRedirectUri();
}

UserActor actor = new UserActor(authResponse.getUserId(), authResponse.getAccessToken());
```

### Client Credentials Flow
<!-- не актуальное -->
Эта схема позволяет получить ключ доступа для работы с методами секции [`secure`](method/secure). Обратите внимание, ключ привязан к IP и не подходит для работы с другими методами. Мы рекомендуем использовать сервисный ключ из настроек приложения.

```java 
ServiceClientCredentialsFlowResponse authResponse = vk.oAuth()
    .serviceClientCredentialsFlow(APP_ID, CLIENT_SECRET)
    .execute();
    
ServiceActor actor = new ServiceActor(APP_ID, authResponse.getAccessToken());
```

После успешного выполнения будет создан объект `ServiceActor` и вы сможете вызывать методы VK API от имени приложения.

## Запросы к API

[Полный список методов API](method).

### Запрос от имени пользователя

```java
GetResponse getResponse = vk.wall().get(actor)
    .ownerId(1)
    .count(100)
    .offset(5)
    .filter("owner")
    .execute();
```

### Запрос с универсальными параметрами

```java 
List<UserXtrCounters> users = vk.users().get(actor)
    .userIds("1")
    .fields(UserField.VERIFIED, UserField.SEX)
    .lang(Lang.EN)
    .execute();
```
[Полный список параметров](api/api-requests).

### Публикация фотографии на стене пользователя

```java
PhotoUpload serverResponse = vk.photos().getWallUploadServer(actor).execute();
WallUploadResponse uploadResponse = vk.upload().photoWall(serverResponse.getUploadUrl(), file).execute();
List<Photo> photoList = vk.photos().saveWallPhoto(actor, uploadResponse.getPhoto())
     .server(uploadResponse.getServer())
     .hash(uploadResponse.getHash())
     .execute();

Photo photo = photoList.get(0); 
String attachId = "photo" + photo.getOwnerId() + "_" + photo.getId();
GetResponse getResponse = vk.wall().post(actor)
    .attachments(attachId)
    .execute();
```

## Execute-запросы

[Подробная информация о методе execute](method/execute).

### Использование `code`

```java 
JsonElement response = vk.execute().code(actor, "return API.wall.get({\"count\": 1})")
    .execute();
```

### Хранимая процедура

```java 
JsonElement response = vk.execute().storageFunction(actor, "foo")
    .funcV(2) // set storage function version
    .unsafeParam("user_id", 1) // set storage function argument
    .execute();
```


### Пакетные запросы

```java 
JsonElement response = vk.execute().batch(actor,
        vk.database().getChairs(1).count(10),
        vk.database().getCities(1),
        vk.groups().getMembers(actor).groupId(groupId)
).execute();

```

## Обработка ошибок


### Общий случай

```java 
try {
    vk.wall().post(actor)
        .message("Hello world")
        .execute();
} catch (ApiWallLinksForbiddenException e) {
    // Links posting is prohibited
} catch (ApiException e) {
    // Business logic error
} catch (ClientException e) {
    // Transport layer error
}

```


### Капча

```java 
String captchaSid = null;
String captchaImg = null;

try {
    vk.wall().post(actor).message("Hello world").execute();
} catch (ApiCaptchaException e) {
    captchaSid = e.getCaptchaSid();
    captchaImg = e.getCaptchaImg();
}

//Showing captcha image...

if (captchaImg != null) {
    vk.wall().post(actor)
        .message("Hello world")
        .captchaSid(captchaSid)
        .captchaKey(captchaKey)
        .execute();
}

```

## Обработка событий Callback API

Переопределите методы из класса CallbackApi, чтобы обрабатывать события:
```java 
public class CallbackApiHandler extends CallbackApi {
  @Override
  public void messageNew(Integer groupId, Message message) {
    System.out.println(message.getText());
  }
}

```
### Обработка событий Callback API Long Poll

Включите Callback API Long Poll для нужного сообщества и выберите события, за которыми хотите следить. 
```java 
HttpTransportClient httpClient = HttpTransportClient.getInstance();
VkApiClient vk = new VkApiClient(httpClient);
vk.groups().setLongPollSettings(groupActor).enabled(true)
                                           .wallPostNew(true)
                                           .messageNew(true)
                                           .execute();

```
Переопределите методы из класса `CallbackApiLongPoll`, чтобы обрабатывать события, и создайте нужный конструктор:

```java
public class CallbackApiLongPollHandler extends CallbackApiLongPoll {
    public CallbackApiLongPollHandler(VkApiClient client, UserActor actor, Integer groupId) {
      super(client, actor, groupId);
    }

    public CallbackApiLongPollHandler(VkApiClient client, GroupActor actor) {
      super(client, actor);
    }

    @Override
    public void messageNew(Integer groupId, Message message) {
      System.out.println("messageNew: " + message.toString());
    }

    @Override
    public void wallPostNew(Integer groupId, WallPost wallPost) {
      System.out.println("wallPostNew: " + wallPost.toString());
    }
}
```
Чтобы использовать созданный `CallbackApiLongPollHandler`, который переопределяет методы из `CallBackApiLongPoll`, необходимо создать его экземпляр и вызвать метод `run`

```java 
CallbackApiLongPollHandler handler = new CallbackApiLongPollHandler(vk, groupActor);
handler.run();
```

Пример использования Callback API Long Poll можно найти в разделе `examples` как `group-bot`, который логирует все события.
 
## Примеры использования

В качестве примера использования SDK мы выпустили бота [YouTrack](https://github.com/VKCOM/vk-java-sdk/wiki/YouTrack-bot).
