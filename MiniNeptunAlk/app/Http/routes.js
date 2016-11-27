'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.get('/', 'UserController.login');
Route.post('/', 'UserController.loginSubmit');
Route.get('/signup', 'UserController.register');
Route.post('/signup', 'UserController.registerSubmit');
Route.get('/logout', 'UserController.logout').middleware('auth');

Route.get('/lectures/addLecture', 'LectureController.addLecture').middleware('auth');
Route.get('/lectures/addCourse', 'LectureController.addCourse').middleware('auth');
Route.get('/lectures/deleteLecture', 'LectureController.deleteLecture').middleware('auth');
Route.get('/lectures/:id/edit', 'LectureController.showCourseData').middleware('auth');

Route.get('/lectures', 'ViewController.list');
Route.get('/profile', 'ViewController.profile').middleware('auth');
Route.get('/students', 'ViewController.student').middleware('auth');
Route.get('/students/:id/showCourses', 'ViewController.showCourses').middleware('auth');

Route.post('/lectures/:id/edit', 'SubmitController.editCourseData').middleware('auth');
Route.post('/lectures/:id/join', 'SubmitController.joinCourse').middleware('auth');
Route.post('/lectures/addCourse', 'SubmitController.addCourseSubmit').middleware('auth');
Route.post('/lectures/addLecture', 'SubmitController.addLectureSubmit').middleware('auth');

Route.post('/lectures/deleteLecture/:id', 'DeleteController.deleteLectureSubmit').middleware('auth');
Route.post('/profile/:id/delete', 'DeleteController.deleteJoin').middleware('auth');
Route.post('/students/:id/deleteJoin', 'DeleteController.deleteJoin').middleware('auth');
Route.post('/students/:id/deleteStudent', 'DeleteController.deleteStudent').middleware('auth');
Route.post('/lectures/:id/delete', 'DeleteController.deleteCourse').middleware('auth');


