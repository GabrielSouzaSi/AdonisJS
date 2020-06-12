'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


Route.post("/auth", "SessionController.create");

Route.resource('/users', 'UserController')
  .apiOnly()
  .middleware(['auth', 'is:(administrator)'])

Route.resource('/permissions', 'PermissionController')
  .apiOnly()
  .middleware('auth')

Route.resource('/roles', 'RoleController')
  .apiOnly()
  .middleware('auth')

Route.resource('lines', 'LineController').apiOnly()
Route.resource('points', 'PointController').apiOnly()
Route.resource('schedule', 'ScheduleController').apiOnly()
Route.resource('bus', 'BusController').apiOnly()
