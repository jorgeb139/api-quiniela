/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/all-games', 'FixturesController.index')
  Route.get('/home', 'HomeController.index')
  Route.get('/product/:id', 'ProductsController.show')
  Route.post('/review/:id', 'ReviewsController.store')
  Route.get('/review/:id', 'ReviewsController.index')
  Route.group(() => {
    Route.post('/sign-up', 'UsersController.store') 
  }).prefix('/auth')
}).prefix('/api')
