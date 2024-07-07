<!-- cd frontend 
npm run start

cd backend 
npm run dev -->

npm start
npm run db
(json-server --watch src/db.json --port 3005)

https://picsum.photos/280/150

Области хранения данных:

- база данныч на json-server
- BFF
- редакс стор

Сущности приложения:

- пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
- роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использование в браузере)
- категория: БД (список категорий), стор(отображение в браузере)
- изделие: БД (список изделий), стор(отображение в браузере)
- корзина: БД (список корзин), стор(отображение в браузере)
- заказ: БД (список заказов), стор(отображение в браузере)

Таблицы БД:

- пользователи - users: id / login / password / registered_at / role_id
- роли - roles: id / name
- категории - categories: id / name / category_image
- изделия - confections: id / name / confection_image / description / price
- корзина - cart: id / user_id / confection_id / count / price
- заказы - orders: id / user_id / confection_id / ordered_at / address / count / price

Схема состояние на BFF:

- сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):

- user: user_id / login / roleId
- categories: массив confection: category_id / name / imageUrl
- confection: confection_id / name / imageUrl / description / price / cart: массив cart: cart_id / count
- cart: cart_id / count / price / confections: массив confection: confection_id / name / imageUrl / price
- users: массив user: user_id / login / registeredAt / role
- orders: price / cart: массив cart: cart_id / count

{
"users": [
{
"user_id": "001",
"login": "Miran",
"password": "qwe123",
"registered_at": "2001-04-26",
"role_id": "0"
}
],
"roles": [
{
"id": "0",
"name": "Админ"
},
{
"id": "1",
"name": "Модер"
},
{
"id": "2",
"name": "Клиент"
}
],
"categories": [
{
"category_id": "001",
"name": "Медовик",
"category_image": "https://fastly.picsum.photos/id/34/280/150.jpg?hmac=LXe9Ws0WRyE2u89OHuu6g1y-br-2UiU54H5E5NzG9l0"
},
{
"category_id": "002",
"name": "Творожный",
"category_image": "https://fastly.picsum.photos/id/512/280/150.jpg?hmac=cW3KDiC7RmYVpVHR8Czs304R8iLqdwgrA8ZxS6CbHTc"
},
{
"category_id": "003",
"name": "Бисквит",
"category_image": "https://fastly.picsum.photos/id/987/280/150.jpg?hmac=GmPuYaNcCVUZlfNcneHax4jhxltdBSwwvCfGoYnhjH4"
}
],

    "orders": [
    	{
    		"order_id": "001",
    		"user_id": "001",
    		"confection_id": "001",
    		"ordered_at": "2024-10-10",
    		"cart_id": "1",
    		"adress": "Aitmatov 66a",
    		"count": "5",
    		"price": "1599"
    	}
    ],
    "confections": [
    	{
    		"confection_id": "001",
    		"name": "Медовый Торт",
    		"confection_image": "https://fastly.picsum.photos/id/220/280/150.jpg?hmac=3hrCLiIs6S79m9rxRpfJxkY95CEPFvqiZN35mhCrwFQ",
    		"description": "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.<br><br>      Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание модели развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений.",
    		"price": "1500"
    	},
    	{
    		"confection_id": "002",
    		"name": "Медовый Торт2",
    		"confection_image": "https://fastly.picsum.photos/id/367/280/150.jpg?hmac=tysnv2aILsA-xJH0yl4Otxlak2m-sYyJTiLUzHuUQPE",
    		"description": "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.<br><br>      Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание модели развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений.",
    		"price": "1500"
    	},
    	{
    		"confection_id": "003",
    		"name": "Медовый Торт3",
    		"confection_image": "https://fastly.picsum.photos/id/927/280/150.jpg?hmac=jR2vGXztlmT8EwYhVY7EDgRje9MYrQl16KSJgRD_HVY",
    		"description": "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.<br><br>      Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание модели развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений.",
    		"price": "1500"
    	},
    	{
    		"confection_id": "004",
    		"name": "Медовый Торт4",
    		"confection_image": "https://fastly.picsum.photos/id/208/280/150.jpg?hmac=jISd3ps0H5MYiNhj_bUUpSg_gzJ2LSyD50v1Te5-xdo",
    		"description": "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.<br><br>      Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание модели развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений.",
    		"price": "1500"
    	},
    	{
    		"confection_id": "005",
    		"name": "Медовый Торт5",
    		"confection_image": "https://fastly.picsum.photos/id/811/280/150.jpg?hmac=9u3Yagtu6SfhzU3EAicDvaVNr8oiKdq9Ws5m3GjqUz8",
    		"description": "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности требуют от нас анализа направлений прогрессивного развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.<br><br>      Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание модели развития. Товарищи! новая модель организационной деятельности играет важную роль в формировании систем массового участия. Значимость этих проблем настолько очевидна, что консультация с широким активом играет важную роль в формировании существенных финансовых и административных условий. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений.",
    		"price": "1500"
    	}
    ]

}
