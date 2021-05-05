Разработчик FE (front-end)

Требуется:

Создать фильтруемый/сортируемый по полям список пользователей и просмотра назначенных им задач.

Описание:

В качестве сервера можно использовать сервис https://jsonplaceholder.typicode.com/ (10 пользователей)

Главная страница содержит список пользователей - https://jsonplaceholder.typicode.com/users. 

Показываемые поля -псевдоаватар (https://via.placeholder.com/120x180),
 name, username, email, address (свести в строку "city, street, suite"). 

Список показывается с пагинацией по 3 позиции, с возможностью переключения между страницами.

Сверху списка находится фильтр по компаниям пользователей - выпадающий список всех компаний
 (company.name), после выбора в списке выводятся только пользователи работающие в этой компании. 
Есть возможность сбросить фильтр.

Список можно сортировать по всем текстовым полям, путем клика на заголовок столбца.
 Изначально отсортирован по полю name.

При клике на аватар или имя пользователя происходит переход на страницу /user/id,
 где показана карточка пользователя https://jsonplaceholder.typicode.com/users?id=7,
 включающая все его поля и выведены его задачи https://jsonplaceholder.typicode.com/todos?userId=7.
 Поля - id, title, completed - чекбокс показывающий статус выполнения, без возможности изменения.
 
Список отсортирован по статусу, сверху идут невыполненные задачи.

При переходе на страницу /user/ или при получении ответа что пользователя нет - вывести сообщение 
"Пользователь не найден" и оставить ссылку на главную страницу.

Верстка адаптивная. На экранах меньше 800 пикс таблица прокручивается внутри контейнера, 
фильтр и сортировка - выпадающие списки сверху таблицы.

