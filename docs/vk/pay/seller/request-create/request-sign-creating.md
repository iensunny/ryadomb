# Как сформировать подпись запроса

> Источник: [https://dev.vk.ru/ru/pay/seller/request-create/request-sign-creating](https://dev.vk.ru/ru/pay/seller/request-create/request-sign-creating)
Все запросы к [API платёжной системы](pay/seller/general-description) нужно подписывать. Для этого вам понадобится приватный ключ доступа, который вам выдали при [подключении](pay/seller/general-description#Как%20подключить) к VK Pay.

## Чтобы получить подпись запроса

1. Возьмите URL [запроса](pay/seller/request-create) без схемы и домена, с ведущим символом «/», но без завершающего «/». Например, в случае запроса `https://api.money.mail.ru/money/2-03/transaction/get/` для подписи нужно взять строку `/money/2-03/transaction/get`.
2. Сформируйте JSON [поля `data`](pay/seller/request-create#Основные%20параметры%20запроса), состоящий из заголовка `header` и тела запроса `body`, и закодируйте данные в BASE64-строку.
    
    **Пример JSON поля `data`**
    
    ```JSON
    {"body":{"transaction_id":"5B5FEF96-CCFF-11EB-B2C9-F3FB221CDBE2"},"header":{"ts":1721663752,"client_id":196669}}
    ```
    
    **Пример кодировки в формате BASE64**
    
    ```
    eyJib2R5Ijp7InRyYW5zYWN0aW9uX2lkIjoiNUI1RkVGOTYtQ0NGRi0xMUVCLUIyQzktRjNGQjIyMUNEQkUyIn0sImhlYWRlciI6eyJ0cyI6MTcyMTY2Mzc1MiwiY2xpZW50X2lkIjoxOTY2Njl9fQ==
   ```
   
3. Последовательно объедините строку, полученную из URL на шаге 1, закодированное в BASE64-строку поле `data` из шага 2 и приватный ключ доступа.
    В примере использовано значение ключа доступа: `928e0c62564fdb4c862e422f8ca3c49e578c7cdf`.
    
    **Пример конкатенации**
    
    ```
    /money/2-03/transaction/geteyJib2R5Ijp7InRyYW5zYWN0aW9uX2lkIjoiNUI1RkVGOTYtQ0NGRi0xMUVCLUIyQzktRjNGQjIyMUNEQkUyIn0sImhlYWRlciI6eyJ0cyI6MTcyMTY2Mzc1MiwiY2xpZW50X2lkIjoxOTY2Njl9fQ==928e0c62564fdb4c862e422f8ca3c49e578c7cdf
    ```
    
4. От полученной после объединения строки вычислите криптографический хеш SHA256 в HEX-представлении. Используйте полученное значение в параметре `signature` при [отправке запроса](pay/seller/request-create).
    
    ```
    1658b9a8c0e8c86d4e9785e44901a8d30ff59d37
    ```
