# Обзор

> Источник: [https://dev.vk.ru/ru/bridge/overview](https://dev.vk.ru/ru/bridge/overview)
**VK Bridge** — это JavaScript-библиотека, которая позволяет [играм](games/overview) и [мини-приложениям](mini-apps/overview) использовать [API ВКонтакте](reference) и API операционной системы на устройстве пользователя.

VK Bridge осуществляет обмен [событиями](#События%20VK%20Bridge) между пользовательскими приложениями и клиентской частью ВКонтакте: десктопной и мобильной версиями сайта, а также мобильными приложениями. Это позволяет приложениям получать доступ к данным пользователя, отправлять уведомления и использовать другие функции платформы ВКонтакте.

Исходный код библиотеки VK Bridge хранится в репозиториях:
* [npm](https://www.npmjs.com/package/@vkontakte/vk-bridge)
* [GitHub](https://github.com/VKCOM/vk-bridge)

## Начало работы

Для начала работы с VK Bridge следуйте инструкциям, представленным в разделе [VK Bridge | Первые шаги](bridge/getting-started). Для тестирования событий библиотеки вы можете использовать [песочницу VK Bridge](https://vk.com/app6909581).

:::note
После подключения библиотеки в коде приложения обязательно нужно вызвать событие инициализации [`VKWebAppInit`](bridge/VKWebAppInit). Оно информирует платформу ВКонтакте о старте приложения и инициализирует параметры, необходимые для работы библиотеки.
:::

## События VK Bridge

### Служебные

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppInit](bridge/VKWebAppInit) | Инициализировать VK Bridge. |
| [VKWebAppGetLaunchParams](bridge/VKWebAppGetLaunchParams) | Получить параметры запуска приложения. |
| [VKWebAppGetClientVersion](bridge/VKWebAppGetClientVersion) | Получить информацию о платформе ВКонтакте, на которой запущено приложение. |
| [VKWebAppGetConfig](bridge/VKWebAppGetConfig) | Получить конфигурацию приложения. |
| [VKWebAppUpdateConfig](bridge/VKWebAppUpdateConfig) | Получить информацию о смене конфигурации приложения. |
| [VKWebAppCreateHash](bridge/VKWebAppCreateHash) | Создать криптографическую подпись для передаваемых данных. |
| [VKWebAppCallAPIMethod](bridge/VKWebAppCallAPIMethod) | Вызвать метод API ВКонтакте. |

### Доступы и разрешения

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppGetAuthToken](bridge/VKWebAppGetAuthToken) | Запросить доступ к данным пользователя. |
| [VKWebAppGetCommunityToken](bridge/VKWebAppGetCommunityToken) | Запросить доступ к данным сообщества. |
| [VKWebAppCheckAllowedScopes](bridge/VKWebAppCheckAllowedScopes) | Получить список данных, к которым у приложения есть доступ. |
| [VKWebAppGetGrantedPermissions](bridge/VKWebAppGetGrantedPermissions) | Получить список разрешений, выданных мобильному приложению ВКонтакте. |

### Внешний вид

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppResizeWindow](bridge/VKWebAppResizeWindow) | Изменить размер окна приложения. |
| [VKWebAppSetViewSettings](bridge/VKWebAppSetViewSettings) | Настроить вид элементов управления приложением: статус-бара, экшн-бара, панели навигации. |

### Навигация

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppSetLocation](bridge/VKWebAppSetLocation) | Задать значение хеша в адресной строке для навигации внутри приложения. |
| [VKWebAppChangeFragment](bridge/VKWebAppChangeFragment) | Изменить значение хеша в адресной строке при навигации внутри приложения. |
| [VKWebAppLocationChanged](bridge/VKWebAppLocationChanged) | Сообщить о том, что значение хеша в адресной строке приложения изменилось. |
| [VKWebAppSetSwipeSettings](bridge/VKWebAppSetSwipeSettings) | Включить жест «смахнуть назад» (свайп). |
| [VKWebAppOpenApp](bridge/VKWebAppOpenApp) | Открыть другое приложение из текущего. |
| [VKWebAppClose](bridge/VKWebAppClose) | Закрыть приложение. |
| [VKWebAppSendToClient](bridge/VKWebAppSendToClient) | Показать окно с предложением открыть приложение на привязанном к аккаунту мобильном устройстве. |
| [VKWebAppViewHide](bridge/VKWebAppViewHide) | Сообщить о том, что пользователь переключился на другое приложение или вернулся на главный экран. |
| [VKWebAppViewRestore](bridge/VKWebAppViewRestore) | Сообщить о том, что пользователь снова открыл приложение после переключения. |
| [VKWebAppScroll](bridge/VKWebAppScroll) | Прокрутить окно приложения по вертикали. |
| [VKWebAppScrollTop](bridge/VKWebAppScrollTop) | Получить текущую позицию прокрутки относительно верха родительского окна приложения. |
| [VKWebAppScrollTopStart](bridge/VKWebAppScrollTopStart) | Начать отправку событий о прокрутке родительского окна. |
| [VKWebAppScrollTopStop](bridge/VKWebAppScrollTopStop) | Остановить отправку событий о прокрутке, начатых событием [`VKWebAppScrollTopStart`](bridge/VKWebAppScrollTopStart). |

### Монетизация

#### Реклама

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppCheckNativeAds](bridge/VKWebAppCheckNativeAds) | Проверить, есть ли на стороне пользователя рекламные материалы, доступные для показа. |
| [VKWebAppShowNativeAds](bridge/VKWebAppShowNativeAds) | Показать рекламу. |

#### Баннеры

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppShowBannerAd](bridge/VKWebAppShowBannerAd) | Показать баннерную рекламу. |
| [VKWebAppCheckBannerAd](bridge/VKWebAppCheckBannerAd) | Проверить, была ли показана баннерная реклама. |
| [VKWebAppBannerAdUpdated](bridge/VKWebAppBannerAdUpdated) | Получить статус обновления баннерной рекламы. |
| [VKWebAppHideBannerAd](bridge/VKWebAppHideBannerAd) | Скрыть баннерную рекламу. |
| [VKWebAppBannerAdClosedByUser](bridge/VKWebAppBannerAdClosedByUser) | Сообщить о том, что пользователь закрыл баннер рекламы. |

#### Покупки

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppShowOrderBox](bridge/VKWebAppShowOrderBox) | Открыть окно покупки товара. |
| [VKWebAppShowSubscriptionBox](bridge/VKWebAppShowSubscriptionBox) | Показать окно покупки, отмены или восстановления подписки. |
| [VKWebAppOpenPayForm](bridge/VKWebAppOpenPayForm) | Показать платёжное окно VK Pay. |

#### Аналитика

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppConversionHit](bridge/VKWebAppConversionHit) | Отслеживать конверсионные действия пользователей. |
| [VKWebAppRetargetingPixel](bridge/VKWebAppRetargetingPixel) | Добавить пользователя в аудиторию ретаргетинга. |
| [VKWebAppTrackEvent](bridge/VKWebAppTrackEvent) | Отправить данные в [MyTracker](https://tracker.my.com/promo). |

### Пользователи и сообщества

#### Пользователи 

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppGetEmail](bridge/VKWebAppGetEmail) | Запросить доступ к адресу электронной почты пользователя. |
| [VKWebAppGetFriends](bridge/VKWebAppGetFriends) | Показать список друзей пользователя. |
| [VKWebAppGetGeodata](bridge/VKWebAppGetGeodata) | Показать текущее местоположение пользователя. |
| [VKWebAppGetPersonalCard](bridge/VKWebAppGetPersonalCard) | Показать карточку с контактными данными пользователя. |
| [VKWebAppGetPhoneNumber](bridge/VKWebAppGetPhoneNumber) | Запросить доступ к номеру телефона пользователя. |
| [VKWebAppOpenContacts](bridge/VKWebAppOpenContacts) | Запросить доступ к контактам из телефонной книги пользователя. |
| [VKWebAppGetUserInfo](bridge/VKWebAppGetUserInfo) | Получить данные из профиля пользователя. |

#### Сообщества

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppAddToCommunity](bridge/VKWebAppAddToCommunity) | Добавить приложение в сообщество.  |
| [VKWebAppAllowMessagesFromGroup](bridge/VKWebAppAllowMessagesFromGroup) | Получить разрешение на отправку сообщений от имени сообщества. |
| [VKWebAppGetGroupInfo](bridge/VKWebAppGetGroupInfo) | Получить информацию о сообществе. |
| [VKWebAppJoinGroup](bridge/VKWebAppJoinGroup) | Предложить пользователю вступить в сообщество. |
| [VKWebAppLeaveGroup](bridge/VKWebAppLeaveGroup) | Предложить пользователю выйти из сообщества. |
| [VKWebAppSendPayload](bridge/VKWebAppSendPayload) | Отправить событие из приложения, добавленного в сообщество. |
| [VKWebAppShowCommunityWidgetPreviewBox](bridge/VKWebAppShowCommunityWidgetPreviewBox) | Показать виджет сообщества перед публикацией. |

### Социальные механики и взаимодействие

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppAddToFavorites](bridge/VKWebAppAddToFavorites) | Добавить приложение в избранное. |
| [VKWebAppAddToHomeScreen](bridge/VKWebAppAddToHomeScreen) | Добавить ярлык приложения на главный экран устройства. |
| [VKWebAppAddToHomeScreenInfo](bridge/VKWebAppAddToHomeScreenInfo) | Получить информацию о ярлыке приложения. |
| [VKWebAppRecommend](bridge/VKWebAppRecommend) | Порекомендовать приложение друзьям. |
| [VKWebAppShare](bridge/VKWebAppShare) | Поделиться ссылкой. |
| [VKWebAppShowStoryBox](bridge/VKWebAppShowStoryBox) | Открыть редактор историй. |
| [VKWebAppAllowNotifications](bridge/VKWebAppAllowNotifications) | Запросить разрешение на отправку уведомлений. |
| [VKWebAppDenyNotifications](bridge/VKWebAppDenyNotifications) | Отключить уведомления. |
| [VKWebAppOpenWallPost](bridge/VKWebAppOpenWallPost) | Открыть запись со стены в слое. |
| [VKWebAppShowInviteBox](bridge/VKWebAppShowInviteBox) | Пригласить друзей в игру. |
| [VKWebAppShowLeaderBoardBox](bridge/VKWebAppShowLeaderBoardBox) | Показать таблицу результатов. |
| [VKWebAppShowRequestBox](bridge/VKWebAppShowRequestBox) | Отправить пользователю запрос о помощи в игре. |

<!--
## Кнопка в профиле пользователя

| Событие | Сценарий использования |
 | --- | --- |
| [VKWebAppAddToProfile](bridge/VKWebAppAddToProfile) | Добавить в профиль кнопку вызова мини-приложения. | – нет в публичном репозитории (web)
| [VKWebAppRemoveFromProfile](bridge/VKWebAppRemoveFromProfile) | Удалить из профиля кнопку вызова мини-приложения. | — есть в публичном репозитории (web)
-->

### Текст и медиафайлы

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppCopyText](bridge/VKWebAppCopyText) | Копировать текст в буфер обмена. |
| [VKWebAppDownloadFile](bridge/VKWebAppDownloadFile) | Скачать файл на устройство. |
| [VKWebAppOpenCodeReader](bridge/VKWebAppOpenCodeReader) | Считать QR-код. |
| [VKWebAppShowSlidesSheet](bridge/VKWebAppShowSlidesSheet) | Показать [информационные экраны](mini-apps/development/information-screens), которые используются для знакомства с возможностями приложения. |
| [VKWebAppShowImages](bridge/VKWebAppShowImages) | Открыть нативный экран для просмотра изображений. |
| [VKWebAppTranslate](bridge/VKWebAppTranslate) | Перевести текст на другой язык. |

### Хранилище VK Storage

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppStorageSet](bridge/VKWebAppStorageSet) | Создать пару «ключ — значение». |
| [VKWebAppStorageGet](bridge/VKWebAppStorageGet) | Получить значение ключа. |
| [VKWebAppStorageGetKeys](bridge/VKWebAppStorageGetKeys) | Получить названия всех переменных. |

### Звонки

| Событие | Сценарий использования |
| --- | --- |
| [—](bridge/call) | Позвонить пользователю. |
| [VKWebAppCallStart](bridge/VKWebAppCallStart) | Создать ссылку, по которой к [звонку](mini-apps/development/calls-integration) могут подключиться пользователи. |
| [VKWebAppCallJoin](bridge/VKWebAppCallJoin) | Подключить пользователя к [звонку](mini-apps/development/calls-integration) по ссылке. |
| [VKWebAppCallGetStatus](bridge/VKWebAppCallGetStatus) | Получить информацию о состоянии текущего активного [звонка](mini-apps/development/calls-integration). |
| [VKWebAppCallLeft](bridge/VKWebAppCallLeft) | Сообщить, если пользователь вышел из [звонка](mini-apps/development/calls-integration). |
| [VKWebAppCallFinished](bridge/VKWebAppCallFinished) | Сообщить, если пользователь, создавший [звонок](mini-apps/development/calls-integration), завершил его для всех. |

### Мобильные устройства 

#### Аутентификация

События этой группы доступны только для [мини-приложений](mini-apps/overview).

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppSecureTokenRequestAccess](bridge/VKWebAppSecureTokenRequestAccess) | Запросить у пользователя разрешение на использование биометрии в качестве способа аутентификации в приложении. |
| [VKWebAppSecureTokenSet](bridge/VKWebAppSecureTokenSet) | Сохранить в защищённое хранилище произвольную строку, которая будет использоваться как ключ доступа. |
| [VKWebAppSecureTokenGet](bridge/VKWebAppSecureTokenGet) | Запустить проверку биометрии и после её успешного прохождения получить ключ доступа из защищённого хранилища. |
| [VKWebAppSecureTokenGetInfo](bridge/VKWebAppSecureTokenGetInfo) | Получить информацию о том, доступна ли на устройстве биометрия. |
| [VKWebAppSecureTokenRemove](bridge/VKWebAppSecureTokenRemove) | Удалить из защищённого хранилища ключ доступа, который был сохранён для аутентификации пользователя с помощью биометрии. |

#### Виброотклик

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppTapticImpactOccurred](bridge/VKWebAppTapticImpactOccurred) | Вызвать вибрацию при столкновении. |
| [VKWebAppTapticNotificationOccurred](bridge/VKWebAppTapticNotificationOccurred) | Вызвать вибрацию после выполнения действия. |
| [VKWebAppTapticSelectionChanged](bridge/VKWebAppTapticSelectionChanged) | Вызвать вибрацию при изменении выбора пользователем. |

#### Фонарик

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppFlashGetInfo](bridge/VKWebAppFlashGetInfo) | Получить информацию о фонарике. |
| [VKWebAppFlashSetLevel](bridge/VKWebAppFlashSetLevel) | Задать уровень яркости фонарика. |

#### Датчики

| Событие | Сценарий использования |
| --- | --- |
| [VKWebAppAccelerometerStart](bridge/VKWebAppAccelerometerStart) | Отслеживать данные акселерометра. |
| [VKWebAppAccelerometerStop](bridge/VKWebAppAccelerometerStop) | Прекратить отслеживание данных акселерометра. |
| [VKWebAppDeviceMotionStart](bridge/VKWebAppDeviceMotionStart) | Отслеживать данные о положении устройства. |
| [VKWebAppDeviceMotionStop](bridge/VKWebAppDeviceMotionStop) | Прекратить отслеживание данных о положении устройства. |
| [VKWebAppGyroscopeStart](bridge/VKWebAppGyroscopeStart) | Отслеживать данные гироскопа. |
| [VKWebAppGyroscopeStop](bridge/VKWebAppGyroscopeStop) | Прекратить отслеживание данных гироскопа. |

## Материалы по теме

* [Использование API ВКонтакте](api/overview)
* [Документация React](https://ru.react.dev/learn)
