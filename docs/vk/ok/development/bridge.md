# Одноклассники | Разработка | Cобытия VK Bridge в Одноклассниках

> Источник: [https://dev.vk.ru/ru/ok/development/bridge](https://dev.vk.ru/ru/ok/development/bridge)
<!--
title: 'Одноклассники | Разработка | События VK Bridge в Одноклассниках'
is_hidden: false
is_search_available: true
type: 'page'
menu: 'main_menu'
visible_to_search_robots: true
meta_description: 
redirect_to:
lang: ru
--- -->

# События VK Bridge

На странице представлены события, которые поддерживаются в Одноклассниках. Некоторые события имеют отличия при работе ВКонтакте и в Одноклассниках. Мы указали это в таблице. Учитывайте это при разработке приложений.

## Служебные

| Событие | Платформы | Особенности |
| --- | --- | --- |
| [VKWebAppInit](bridge/VKWebAppInit)&#x0d;&#x0a;Инициализировать VK Bridge. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppGetLaunchParams](bridge/VKWebAppGetLaunchParams)&#x0d;&#x0a; Получить параметры запуска приложения. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web| В параметре `vk_platform` передаётся платформа, на которой запущено приложение: &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `desktop_web_ok` — десктопная версия сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mobile_android_ok` — приложение для Android.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mobile_iphone_ok` — приложение для iOS.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mobile_web_ok` — мобильный браузер.|
| [VKWebAppGetClientVersion](bridge/VKWebAppGetClientVersion)&#x0d;&#x0a; Получить информацию о платформе ВКонтакте, на которой запущено приложение. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web| В поле `platform` возвращается: &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `web-ok` — если приложение запущено в десктопной версии сайта.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `android` — если приложение запущено в мобильном клиенте для Android.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `ios` — если приложение запущено в мобильном клиенте для iOS.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `mobile-web-ok` — если приложение запущено в мобильном браузере.|
| [VKWebAppCallAPIMethod](bridge/VKWebAppCallAPIMethod)&#x0d;&#x0a; Вызвать метод API ВКонтакте. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web| Параметр `use_local` определяет, к какому API отправляется запрос. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — к API площадки, которая использует SDK, например [API Одноклассников](https://apiok.ru/ext/).&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — к [API Вконтакте](reference). Значение по умолчанию. |

<!--| [VKWebAppCreateHash](bridge/VKWebAppCreateHash)&#x0d;&#x0a; Создать криптографическую подпись для передаваемых данных. | Mobile&nbsp;Web &#x0d;&#x0a; Web|-->

## Доступы и разрешения

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppGetAuthToken](bridge/VKWebAppGetAuthToken)&#x0d;&#x0a; Запросить доступ к данным пользователя. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | Параметр `append_local` казывает, для какой площадки нужно получить ключ. Возможные значения: &#x0d;&#x0a; &nbsp;&nbsp; &bullet;  `true` — получить ключ для площадки, которая использует SDK (например, Одноклассники). &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — получить ключ для ВКонтакте. Значение по умолчанию.&#x0d;&#x0a;&#x0d;&#x0a;Ключ доступа вернётся в ответе в поле `local_access_token`. |
| [VKWebAppCheckAllowedScopes](bridge/VKWebAppCheckAllowedScopes)&#x0d;&#x0a; Получить список данных, к которым у приложения есть доступ. | iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppGetGrantedPermissions](bridge/VKWebAppGetGrantedPermissions)&#x0d;&#x0a;Получить список разрешений, выданных мобильному приложению Одноклассники. | Android&#x0d;&#x0a; iOS||

## Внешний вид

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppResizeWindow](bridge/VKWebAppResizeWindow)&#x0d;&#x0a; Изменить размер окна приложения.| Web | |
| [VKWebAppSetViewSettings](bridge/VKWebAppSetViewSettings)&#x0d;&#x0a; Настроить вид элементов управления приложением: статус-бара, экшен-бара, панели навигации. | Android&#x0d;&#x0a; iOS | |

## Навигация

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppSetLocation](bridge/VKWebAppSetLocation)&#x0d;&#x0a; Задать значение хеша в адресной строке для навигации внутри приложения. | Android&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppSetSwipeSettings](bridge/VKWebAppSetSwipeSettings)&#x0d;&#x0a; Включить жест «смахнуть назад» (свайп). | iOS||
| [VKWebAppOpenApp](bridge/VKWebAppOpenApp)&#x0d;&#x0a; Открыть другое приложение из текущего.| Mobile&nbsp;Web &#x0d;&#x0a; Web|Параметр `app_is_local` определяет, приложение какой площадки должно быть открыто. Возможные значения: &#x0d;&#x0a; &nbsp;&nbsp; &bullet;  `true` — открыть приложение площадки, которая использует SDK (например, Одноклассники). &#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — открыть мини-приложение ВКонтакте. Значение по умолчанию.|
| [VKWebAppClose](bridge/VKWebAppClose)&#x0d;&#x0a; Закрыть приложение. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web||
| [VKWebAppScroll](bridge/VKWebAppScroll)&#x0d;&#x0a; Прокрутить окно приложения по вертикали. | Mobile&nbsp;Web &#x0d;&#x0a; Web||
| [VKWebAppScrollTop](bridge/VKWebAppScrollTop)&#x0d;&#x0a; Получить текущую позицию прокрутки относительно верха родительского окна приложения. | Web||
| [VKWebAppScrollTopStart](bridge/VKWebAppScrollTopStart)&#x0d;&#x0a; Начать отправку событий о прокрутке родительского окна. | Web||
| [VKWebAppScrollTopStop](bridge/VKWebAppScrollTopStop)&#x0d;&#x0a; Остановить отправку событий о прокрутке, начатых событием. [`VKWebAppScrollTopStart`](bridge/VKWebAppScrollTopStart) | Web||

## Монетизация

### Реклама

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppCheckNativeAds](bridge/VKWebAppCheckNativeAds)&#x0d;&#x0a; Проверить, есть ли на стороне пользователя рекламные материалы, доступные для показа.| Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppShowNativeAds](bridge/VKWebAppShowNativeAds)&#x0d;&#x0a; Показать рекламу.| Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |

### Баннеры

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppShowBannerAd](bridge/VKWebAppShowBannerAd)&#x0d;&#x0a; Показать баннерную рекламу.| Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppCheckBannerAd](bridge/VKWebAppCheckBannerAd)&#x0d;&#x0a; Проверить, была ли показана баннерная реклама.| Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppBannerAdUpdated](bridge/VKWebAppBannerAdUpdated)&#x0d;&#x0a; Получить статус обновления баннерной рекламы. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppHideBannerAd](bridge/VKWebAppHideBannerAd)&#x0d;&#x0a; Скрыть баннерную рекламу. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppBannerAdClosedByUser](bridge/VKWebAppBannerAdClosedByUser)&#x0d;&#x0a; Сообщить, что пользователь закрыл баннер рекламы. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |

## Покупки

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppShowOrderBox](bridge/VKWebAppShowOrderBox)&#x0d;&#x0a; Открыть окно покупки товара. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppShowSubscriptionBox](bridge/VKWebAppShowSubscriptionBox)&#x0d;&#x0a; Показать окно покупки, отмены или восстановления подписки. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |

## Аналитика

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppRetargetingPixel](bridge/VKWebAppRetargetingPixel)&#x0d;&#x0a; Добавить пользователя в аудиторию ретаргетинга. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppTrackEvent](bridge/VKWebAppTrackEvent)&#x0d;&#x0a; Отправить данные в [MyTracker](https://tracker.my.com/promo). | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |

<!--| [VKWebAppConversionHit](bridge/VKWebAppConversionHit)&#x0d;&#x0a; Отслеживать конверсионные действия пользователей. | iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |-->

## Пользователи

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppGetEmail](bridge/VKWebAppGetEmail)&#x0d;&#x0a; Запросить доступ к адресу электронной почты пользователя. | iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppGetFriends](bridge/VKWebAppGetFriends)&#x0d;&#x0a; Показать список друзей пользователя. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web||
|[VKWebAppGetPhoneNumber](bridge/VKWebAppGetPhoneNumber)&#x0d;&#x0a; Запросить доступ к номеру телефона пользователя. | iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppOpenContacts](bridge/VKWebAppOpenContacts)&#x0d;&#x0a; Запросить доступ к контактам из телефонной книги пользователя. | Android&#x0d;&#x0a; iOS||
| [VKWebAppGetUserInfo](bridge/VKWebAppGetUserInfo)&#x0d;&#x0a; Получить данные из профиля пользователя. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web| Параметр `use_local` определяет, с какой площадки нужно получить данные. Возможные значения:&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `true` — с площадки, которая использует SDK, например Одноклассники.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; `false` — ВКонтакте. Значение по умолчанию. |

<!--| [VKWebAppGetGeodata](bridge/VKWebAppGetGeodata)&#x0d;&#x0a; Показать текущее местоположение пользователя. | Android | |-->

## Сообщества

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppAddToCommunity](bridge/VKWebAppAddToCommunity)&#x0d;&#x0a; Добавить приложение в сообщество. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppAllowMessagesFromGroup](bridge/VKWebAppAllowMessagesFromGroup)&#x0d;&#x0a; Получить разрешение на отправку сообщений от имени сообщества. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppGetGroupInfo](bridge/VKWebAppGetGroupInfo)&#x0d;&#x0a; Получить информацию о сообществе. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppJoinGroup](bridge/VKWebAppJoinGroup)&#x0d;&#x0a; Предложить пользователю вступить в сообщество. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |
| [VKWebAppLeaveGroup](bridge/VKWebAppLeaveGroup)&#x0d;&#x0a; Предложить пользователю выйти из сообщества. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | |

## Социальные механики и взаимодействие

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppShare](bridge/VKWebAppShare)&#x0d;&#x0a; Поделиться ссылкой. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | &nbsp;&nbsp; &bullet; В вебе и мобильном браузере можно поделиться только записью на стене. &#x0d;&#x0a; &nbsp;&nbsp; &bullet; На Android и iOS: на стене, на стене сообщества, в личных сообщениях, дополнить текстом и отправить в ленту, отправить в приложение или скопировать ссылку|
| [VKWebAppShowStoryBox](bridge/VKWebAppShowStoryBox)&#x0d;&#x0a; Открыть редактор историй. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web | &nbsp;&nbsp; &bullet; Для поля `background_type` поддерживается только значение `image`.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; Для `blob` поддерживаются значения `JPEG`, `PNG`, `SVG`.&#x0d;&#x0a; &nbsp;&nbsp; &bullet; В объекте `attachment` у параметра `type` поддерживается только значение `url`|
| [VKWebAppOpenWallPost](bridge/VKWebAppOpenWallPost)&#x0d;&#x0a; Открыть запись со стены в слое. | iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web |&#x0d;&#x0a;Если запись опубликована пользователем, то в `owner_id` нужно указать идентификатор пользователя. Если запись опубликована в группе, то нужно указать значение `0`|
| [VKWebAppShowInviteBox](bridge/VKWebAppShowInviteBox)&#x0d;&#x0a; Пригласить друзей в игру. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web  | &#x0d;&#x0a;Для игр, запущенных в десктопной и мобильной версии сайта Одноклассники, необходимо обязательно передавать параметр `message` |
| [VKWebAppShowRequestBox](bridge/VKWebAppShowRequestBox)&#x0d;&#x0a; Отправить пользователю запрос о помощи в игре. | iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web  || 
|[VKWebAppAllowNotifications](bridge/VKWebAppAllowNotifications)&#x0d;&#x0a; Запросить разрешение на отправку уведомлений. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||
|[VKWebAppDenyNotifications](bridge/VKWebAppDenyNotifications)&#x0d;&#x0a; Отключить уведомления. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||

<!--| [VKWebAppAddToHomeScreen](bridge/VKWebAppAddToHomeScreen)&#x0d;&#x0a; Добавить ярлык приложения на главный экран устройства. | Android| || [VKWebAppAddToHomeScreenInfo](bridge/VKWebAppAddToHomeScreenInfo)&#x0d;&#x0a; Получить информацию о ярлыке приложения| Android| |-->

## Текст и медиафайлы

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppCopyText](bridge/VKWebAppCopyText)&#x0d;&#x0a; Копировать текст в буфер обмена. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||
| [VKWebAppDownloadFile](bridge/VKWebAppDownloadFile)&#x0d;&#x0a; Скачать файл на устройство. | Android||
| [VKWebAppOpenCodeReader](bridge/VKWebAppOpenCodeReader)&#x0d;&#x0a; Считать QR-код. | Android&#x0d;&#x0a; iOS||
| [VKWebAppShowImages](bridge/VKWebAppShowImages)&#x0d;&#x0a; Открыть нативный экран для просмотра изображений. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web ||
| [VKWebAppTranslate](bridge/VKWebAppTranslate)&#x0d;&#x0a; Перевести текст на другой язык. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||

## Хранилище VK Storage

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppStorageSet](bridge/VKWebAppStorageSet)&#x0d;&#x0a; Создать пару «ключ — значение». | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||
| [VKWebAppStorageGet](bridge/VKWebAppStorageGet)&#x0d;&#x0a; Получить значение ключа. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||
| [VKWebAppStorageGetKeys](bridge/VKWebAppStorageGetKeys)&#x0d;&#x0a; Получить названия всех переменных. | Android&#x0d;&#x0a; iOS&#x0d;&#x0a; Mobile&nbsp;Web &#x0d;&#x0a; Web ||

## Аутентификация

События этой группы доступны только для [мини-приложений](mini-apps/overview).

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppSecureTokenRequestAccess](bridge/VKWebAppSecureTokenRequestAccess)&#x0d;&#x0a; Запросить у пользователя разрешение на использование биометрии в качестве способа аутентификации в приложении. | iOS ||
| [VKWebAppSecureTokenSet](bridge/VKWebAppSecureTokenSet)&#x0d;&#x0a; Сохранить в защищённое хранилище произвольную строку, которая будет использоваться как ключ доступа. | iOS ||
| [VKWebAppSecureTokenGet](bridge/VKWebAppSecureTokenGet)&#x0d;&#x0a; Запустить проверку биометрии и после её успешного прохождения получить ключ доступа из защищённого хранилища. | iOS ||
| [VKWebAppSecureTokenGetInfo](bridge/VKWebAppSecureTokenGetInfo)&#x0d;&#x0a; Получить информацию о том, доступна ли на устройстве биометрия. | iOS ||
| [VKWebAppSecureTokenRemove](bridge/VKWebAppSecureTokenRemove)&#x0d;&#x0a; Удалить из защищённого хранилища ключ доступа, который был сохранён для аутентификации пользователя с помощью биометрии. | iOS ||

## Мобильные устройства

### Виброотклик

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppTapticImpactOccurred](bridge/VKWebAppTapticImpactOccurred)&#x0d;&#x0a; Вызвать вибрацию при столкновении. | iOS||
| [VKWebAppTapticNotificationOccurred](bridge/VKWebAppTapticNotificationOccurred)&#x0d;&#x0a; Вызвать вибрацию после выполнения действия.| iOS||
| [VKWebAppTapticSelectionChanged](bridge/VKWebAppTapticSelectionChanged)&#x0d;&#x0a; Вызвать вибрацию при изменении выбора пользователем.| iOS||

### Фонарик

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppFlashGetInfo](bridge/VKWebAppFlashGetInfo)&#x0d;&#x0a; Получить информацию о фонарике. | Android&#x0d;&#x0a; iOS||
| [VKWebAppFlashSetLevel](bridge/VKWebAppFlashSetLevel)&#x0d;&#x0a; Задать уровень яркости фонарика. | Android&#x0d;&#x0a; iOS||

### Датчики

| Событие | Платформы | Особенности |
| --- | --- | --- | 
| [VKWebAppAccelerometerStart](bridge/VKWebAppAccelerometerStart)&#x0d;&#x0a; Отслеживать данные акселерометра. | Android&#x0d;&#x0a; iOS||
| [VKWebAppAccelerometerStop](bridge/VKWebAppAccelerometerStop)&#x0d;&#x0a; Прекратить отслеживание данных акселерометра. | Android&#x0d;&#x0a; iOS||
| [VKWebAppDeviceMotionStart](bridge/VKWebAppDeviceMotionStart)&#x0d;&#x0a; Отслеживать данные о положении устройства. | Android&#x0d;&#x0a; iOS||
| [VKWebAppDeviceMotionStop](bridge/VKWebAppDeviceMotionStop)&#x0d;&#x0a; Прекратить отслеживание данных о положении устройства. | Android&#x0d;&#x0a; iOS||
| [VKWebAppGyroscopeStart](bridge/VKWebAppGyroscopeStart)&#x0d;&#x0a; Отслеживать данные гироскопа. | Android&#x0d;&#x0a; iOS||
| [VKWebAppGyroscopeStop](bridge/VKWebAppGyroscopeStop)&#x0d;&#x0a; Прекратить отслеживание данных гироскопа. | Android&#x0d;&#x0a; iOS||

## Материалы по теме

* [Библиотека VK Bridge | Первые шаги](bridge/getting-started)
* [Параметры запуска в Одноклассниках](ok/development/launch-parameters)
