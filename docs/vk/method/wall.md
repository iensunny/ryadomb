# wall

> Источник: [https://dev.vk.ru/ru/method/wall](https://dev.vk.ru/ru/method/wall)
Методы для работы с записями на стене.

- [Wall](method/wall)
  - [wall.closeComments](method/wall.closeComments) — Выключает комментирование записи.

  - [wall.createComment](method/wall.createComment) — Добавляет комментарий к записи на стене.
  - [wall.delete](method/wall.delete) — Удаляет запись со стены.
  - [wall.deleteComment](method/wall.deleteComment) — Удаляет комментарий к записи на стене.
  - [wall.edit](method/wall.edit) — :::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

Редактирует запись на стене.
  - [wall.editAdsStealth](method/wall.editAdsStealth) — Позволяет отредактировать скрытую запись.
  - [wall.editComment](method/wall.editComment) — Редактирует комментарий на стене.
  - [wall.get](method/wall.get) — Возвращает список записей со стены пользователя или сообщества.
  - [wall.getById](method/wall.getById) — Возвращает список записей со стен пользователей или сообществ по их идентификаторам.
  - [wall.getComment](method/wall.getComment) — Получает информацию о комментарии на стене.
  - [wall.getComments](method/wall.getComments) — Возвращает список комментариев к записи на стене.
  - [wall.getReposts](method/wall.getReposts) — Позволяет получать список репостов заданной записи.
  - [wall.openComments](method/wall.openComments) — Включает комментирование записи.
  - [wall.parseAttachedLink](method/wall.parseAttachedLink) — Принимает на вход ссылки и возвращает дополнительную информацию, которая может быть использована для создания сниппетов при публикации ссылки на стене пользователя и других ресурсах.
  - [wall.pin](method/wall.pin) — Закрепляет запись на стене (запись будет отображаться выше остальных).
  - [wall.post](method/wall.post) — Метод позволяет:

* Создать запись на стене.
* Предложить запись на стене публичной страницы.
* Опубликовать существующую отложенную запись.

:::note
После обновления методов **4 июня 2026 года** изображения нестандартных размеров в карусели кадрируются автоматически. Чтобы задать свои значения, используйте параметр `photo_attachments_crop`.

[Подробнее](https://vk.com/@vkappsdev-obnovlenie-raboty-metodov-wallpost-i-walledit-kadrirovanie-i)
:::

  - [wall.postAdsStealth](method/wall.postAdsStealth) — Позволяет создать скрытую запись, которая не попадает на стену сообщества и в дальнейшем может быть использована для создания рекламного объявления типа «Запись в сообществе».
  - [wall.reportComment](method/wall.reportComment) — Позволяет пожаловаться на комментарий к записи.
  - [wall.reportPost](method/wall.reportPost) — Позволяет пожаловаться на запись.
  - [wall.repost](method/wall.repost) — Метод позволяет сделать репост — скопировать запись на стену пользователя или сообщества.

  - [wall.restore](method/wall.restore) — Восстанавливает удалённую запись на стене пользователя или сообщества.
  - [wall.restoreComment](method/wall.restoreComment) — Восстанавливает удаленный комментарий к записи на стене.
  - [wall.search](method/wall.search) — Позволяет искать записи на стене в соответствии с заданными критериями.
  - [wall.unpin](method/wall.unpin) — Отменяет закрепление записи на стене.
