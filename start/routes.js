'use strict'

const { RouteGroup } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    console.log("aaa")
})

Route.group(() => {
    Route.get('mentor', 'MentorController.index')
    Route.get('mentor/:id', 'MentorController.show')
    Route.post('mentor', 'MentorController.store')
    Route.put('mentor/:id', 'MentorController.update')
    Route.delete('mentor/:id', 'MentorController.delete')
}).prefix('api')