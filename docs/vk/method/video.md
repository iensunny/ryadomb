# video

> Источник: [https://dev.vk.ru/ru/method/video](https://dev.vk.ru/ru/method/video)
Методы для работы с видеозаписями.

- [Video](method/video)
  - [video.add](method/video.add) — Метод добавляет видеозапись в список видеозаписей пользователя.
  - [video.addAlbum](method/video.addAlbum) — Создает пустой альбом видеозаписей.
  - [video.addToAlbum](method/video.addToAlbum) — Позволяет добавить видеозапись в альбом.
  - [video.createComment](method/video.createComment) — Cоздает новый комментарий к видеозаписи.
  - [video.delete](method/video.delete) — Удаляет видеозапись со страницы пользователя.
  - [video.deleteAlbum](method/video.deleteAlbum) — Удаляет альбом видеозаписей.
  - [video.deleteComment](method/video.deleteComment) — Удаляет комментарий к видеозаписи.
  - [video.edit](method/video.edit) — Метод редактирует данные видеозаписи.
  - [video.editAlbum](method/video.editAlbum) — Редактирует альбом с видео.
  - [video.editComment](method/video.editComment) — Изменяет текст комментария к видеозаписи.
  - [video.get](method/video.get) — Метод возвращает информацию о видеозаписях.
  - [video.getAlbumById](method/video.getAlbumById) — Позволяет получить информацию об альбоме с видео.
  - [video.getAlbums](method/video.getAlbums) — Возвращает список альбомов видеозаписей пользователя или сообщества.
  - [video.getAlbumsByVideo](method/video.getAlbumsByVideo) — Метод возвращает список альбомов, в которых находится видеозапись.
  - [video.getComments](method/video.getComments) — Возвращает список комментариев к видеозаписи.
  - [video.getLongPollServer](method/video.getLongPollServer) — Позволяет получать данные о новых событиях трансляции в режиме реального времени.
  - [video.getOembed](method/video.getOembed) — Метод возвращает код для встраивания видео в `iframe`. 
  - [video.getPublicSectionFeed](method/video.getPublicSectionFeed) — Метод позволяет получать ссылку на выбранный тематический фид.
  - [video.getThumbUploadUrl](method/video.getThumbUploadUrl)
  - [video.removeFromAlbum](method/video.removeFromAlbum) — Позволяет убрать видеозапись из альбома.
  - [video.reorderAlbums](method/video.reorderAlbums) — Позволяет изменить порядок альбомов с видео.
  - [video.reorderVideos](method/video.reorderVideos) — Позволяет переместить видеозапись в альбоме.
  - [video.report](method/video.report) — Позволяет пожаловаться на видеозапись.
  - [video.reportComment](method/video.reportComment) — Позволяет пожаловаться на комментарий к видеозаписи.
  - [video.restore](method/video.restore) — Восстанавливает удаленную видеозапись.
  - [video.restoreComment](method/video.restoreComment) — Восстанавливает удаленный комментарий к видеозаписи.
  - [video.save](method/video.save) — Метод получает адрес сервера, на который необходимо [загрузить](api/upload/video-in-profile) видео, а также данные этого видео.

:::note
**Примечание.** Приложение может вызвать этот метод не более 5&nbsp;000 раз в сутки.
:::
  - [video.saveUploadedThumb](method/video.saveUploadedThumb)
  - [video.search](method/video.search) — Метод получает список видеозаписей в соответствии с заданными критериями поиска.
  - [video.startStreaming](method/video.startStreaming) — Получает RTMP-адрес для трансляции видео.
  - [video.stopStreaming](method/video.stopStreaming) — Завершает трансляцию.
