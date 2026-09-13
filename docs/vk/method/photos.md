# photos

> Источник: [https://dev.vk.ru/ru/method/photos](https://dev.vk.ru/ru/method/photos)
Методы для работы с фотографиями.

- [Photos](method/photos)
  - [photos.copy](method/photos.copy) — Позволяет скопировать фотографию в альбом "Сохраненные фотографии"
  - [photos.createAlbum](method/photos.createAlbum) — Создает пустой альбом для фотографий.
  - [photos.createComment](method/photos.createComment) — Создает новый комментарий к фотографии.
  - [photos.delete](method/photos.delete) — Удаление фотографии на сайте.
  - [photos.deleteAlbum](method/photos.deleteAlbum) — Удаляет указанный альбом для фотографий у текущего пользователя
  - [photos.deleteComment](method/photos.deleteComment) — Удаляет комментарий к фотографии.
  - [photos.edit](method/photos.edit) — Редактирует описание или геометку у фотографии.
  - [photos.editAlbum](method/photos.editAlbum) — Редактирует данные альбома для фотографий.
  - [photos.editComment](method/photos.editComment) — Изменяет текст комментария к фотографии.
  - [photos.get](method/photos.get) — Возвращает список фотографий в альбоме.
  - [photos.getAlbums](method/photos.getAlbums) — Возвращает список фотоальбомов пользователя или сообщества.
  - [photos.getAlbumsCount](method/photos.getAlbumsCount) — Возвращает количество доступных альбомов пользователя или сообщества.
  - [photos.getAll](method/photos.getAll) — Возвращает все фотографии пользователя или сообщества в антихронологическом порядке.
  - [photos.getAllComments](method/photos.getAllComments) — Возвращает отсортированный в антихронологическом порядке список всех комментариев к конкретному альбому или ко всем альбомам пользователя.
  - [photos.getById](method/photos.getById) — Возвращает информацию о фотографиях по их идентификаторам.
  - [photos.getChatUploadServer](method/photos.getChatUploadServer) — Метод получает адрес сервера для [загрузки обложки чата](api/upload/main-photo-in-chat).
  - [photos.getComments](method/photos.getComments) — Возвращает список комментариев к фотографии.
  - [photos.getMarketAlbumUploadServer](method/photos.getMarketAlbumUploadServer) — Метод получает адрес сервера для [загрузки фотографии подборки товаров](api/upload/main-photo-in-market) в сообществе.
  - [photos.getMessagesUploadServer](method/photos.getMessagesUploadServer) — Метод получает адрес сервера для [загрузки фотографии в личное сообщение](api/upload/photo-in-message) пользователя или в сообщение сообщества.
  - [photos.getOwnerCoverPhotoUploadServer](method/photos.getOwnerCoverPhotoUploadServer) — Метод получает адрес сервера для [загрузки обложки](api/upload/main-photo-in-group) сообщества.
  - [photos.getOwnerPhotoUploadServer](method/photos.getOwnerPhotoUploadServer) — Метод получает адрес сервера для [загрузки главной фотографии](api/upload/main-photo-in-profile) на страницу пользователя или сообщества.
  - [photos.getUploadServer](method/photos.getUploadServer) — Метод получает адрес сервера для [загрузки фотографий в альбом](api/upload/album-photos) пользователя или сообщества.
  - [photos.getUserPhotos](method/photos.getUserPhotos) — Возвращает список фотографий, на которых отмечен пользователь
  - [photos.getWallUploadServer](method/photos.getWallUploadServer) — Метод получает адрес сервера для [загрузки фотографии на стену](api/upload/wall-photo) пользователя или сообщества.
  - [photos.makeCover](method/photos.makeCover) — Делает фотографию обложкой альбома.
  - [photos.move](method/photos.move) — Переносит фотографию из одного альбома в другой.
  - [photos.reorderAlbums](method/photos.reorderAlbums) — Меняет порядок альбома в списке альбомов пользователя.
  - [photos.reorderPhotos](method/photos.reorderPhotos) — Меняет порядок фотографии в списке фотографий альбома пользователя.
  - [photos.report](method/photos.report) — Позволяет пожаловаться на фотографию.
  - [photos.reportComment](method/photos.reportComment) — Позволяет пожаловаться на комментарий к фотографии.
  - [photos.restore](method/photos.restore) — Восстанавливает удаленную фотографию.
  - [photos.restoreComment](method/photos.restoreComment) — Восстанавливает удаленный комментарий к фотографии.
  - [photos.save](method/photos.save) — Метод сохраняет фотографии в альбом после их успешной [загрузки на сервер](api/upload/album-photos).
  - [photos.saveMarketAlbumPhoto](method/photos.saveMarketAlbumPhoto) — Метод сохраняет фотографию подборки товаров сообщества после её успешной [загрузки на сервер](api/upload/main-photo-in-market).
  - [photos.saveMessagesPhoto](method/photos.saveMessagesPhoto) — Метод сохраняет фотографию в личном сообщении после её успешной [загрузки на сервер](api/upload/photo-in-message).
  - [photos.saveOwnerCoverPhoto](method/photos.saveOwnerCoverPhoto) — Метод сохраняет обложку сообщества или профиля пользователя после её успешной [загрузки на сервер](api/upload/main-photo-in-group).
  - [photos.saveOwnerPhoto](method/photos.saveOwnerPhoto) — Метод сохраняет главную фотографию после её успешной [загрузки на сервер](api/upload/main-photo-in-profile).
  - [photos.saveWallPhoto](method/photos.saveWallPhoto) — Метод сохраняет фотографии на стене после их успешной [загрузки на сервер](api/upload/wall-photo).
  - [photos.search](method/photos.search) — Осуществляет поиск изображений по местоположению или описанию.
