# Разрешить сообщения от сообщества

> Источник: [https://dev.vk.ru/ru/widgets/allow-messages-from-community](https://dev.vk.ru/ru/widgets/allow-messages-from-community)
Этот виджет позволит клиентам быстро подписаться на уведомления в личных сообщениях от сообщества, не покидая вашего сайта.

Это удобный способ организовать подписку на регулярную рассылку. После получения согласия от пользователя сообщество может отправить ему сообщение без какого-либо ограничения по срокам.

В любой момент пользователь может запретить присылать ему сообщения с помощью кнопки в диалоге с сообществом. 

## Подключение виджета

В тег `<head>` на странице вашего сайта добавьте подключение `openapi.js`:

```HTML
 <script src="https://vk.ru/js/api/openapi.js?169" type="text/javascript"></script>
```

В тело страницы добавьте элемент `<div>`, в котором будет отображаться виджет, задайте ему уникальный `id`, и добавьте в него код инициализации виджета. Например:

```HTML
<div id="vk_send_message"></div>
<script type="text/javascript">
VK.Widgets.AllowMessagesFromCommunity("vk_send_message", {height: 30}, 127864554);
</script>
```

## Дополнительные настройки

Метод `VK.Widgets.AllowMessagesFromCommunity` принимает три параметра:

* `element_id` (`string`), обязательный параметр — id элемента, который будет являться контейнером для блока с виджетом. В нашем конструкторе по умолчанию используется значение `vk_send_message`.
* `options` (`object`) — опции блока с виджетом. Объект, который может содержать поля:
  * `height` (`integer`) — высота блока в пикселях. Возможные значения: `22`, `24`, `30`.
* `group_id` (`string`) — идентификатор сообщества.

## События

При нажатии на кнопку **Получать уведомления** виджет передает событие `widgets.allowMessagesFromCommunity.allowed`. Если пользователь нажимает **Запретить уведомления**, передается событие и `widgets.allowMessagesFromCommunity.denied`. Вы можете обрабатывать эти события, используя [Open API](api/open-api/getting-started#Обработка%20событий). В функцию-обработчик будет передан один параметр — идентификатор пользователя, совершившего действие.

## Пример использования

```HTML
 <script type="text/javascript" src="https://vk.ru/js/api/openapi.js?169"></script>
    <script type="text/javascript">
      VK.Widgets.AllowMessagesFromCommunity("vk_send_message", {height: 30}, 1);
      VK.Observer.subscribe("widgets.allowMessagesFromCommunity.allowed", function f(userId) {
        console.log(userId);
        console.log("allowed");
      });
      VK.Observer.subscribe("widgets.allowMessagesFromCommunity.denied", function f(userId) {
        console.log(userId);
        console.log("denied");
      });
    </script>
```

## Код виджета

Чтобы добавить виджет на ваш сайт, просто скопируйте код для вставки на страницу, на которой вы хотите разместить виджет.
