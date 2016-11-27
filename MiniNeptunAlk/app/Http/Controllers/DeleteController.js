'use strict'

const Lecture = use("App/Model/Lecture");
const Course = use("App/Model/Course");
const Database = use('Database');
const Join = use('App/Model/Join');
const User = use("App/Model/User");

class DeleteController {

    *
    deleteJoin(request, response) {
        var join = yield Join.findBy('id', request.param('id'));
        yield join.delete();
        yield request
            .with({
                success: [{
                    message: 'A kurzusról lejelentkezés történt!'
                }]
            })
            .flash()
        response.redirect('back');
    }

    *
    deleteStudent(request, response) {
        var student = yield User.findBy('id', request.param('id'));

        const joins = yield Join.query().where('user_id', request.param('id'));
        for (var i = 0; i < joins.length; i++) {
            var join = yield Join.findBy('id', joins[i].id);
            yield join.delete();
        }
        yield student.delete();
        yield request
            .with({
                success: [{
                    message: 'A hallgató törlése sikeres!'
                }]
            })
            .flash()
        response.redirect('back');
    }

    *
    deleteLectureSubmit(request, response) {
        var lecture = yield Lecture.findBy('id', request.param('id'));
        const courses = yield Course.query().where('lecture_id', lecture.id);
        for (var i = 0; i < courses.length; i++) {
            const joins = yield Join.query().where('course_id', courses[i].id);
            for (var j = 0; j < joins.length; j++) {
                var join = yield Join.findBy('id', Joins[j].id);
                yield join.delete();
            }
            var course = yield Course.findBy('id', courses[i].id);
            yield course.delete();
        }
        yield lecture.delete();
        yield request
            .with({
                success: [{
                    message: 'A tárgy törlése sikeres!'
                }]
            })
            .flash()
        response.redirect('back');
    }

    *
    deleteCourse(request, response) {
        var course = yield Course.findBy('id', request.param('id'));

        const joins = yield Join.query().where('course_id', course.id);
        for (var i = 0; i < joins.length; i++) {
            var join = yield Join.findBy('id', joins[i].id);
            yield join.delete();
        }
        yield course.delete();
        yield request
            .with({
                success: [{
                    message: 'A kurzus törlése sikeres!'
                }]
            })
            .flash()
        response.redirect('/lectures');
    }
}

module.exports = DeleteController