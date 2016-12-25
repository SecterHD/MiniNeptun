'use strict'

const Lecture = use("App/Model/Lecture");
const Course = use("App/Model/Course");
const Database = use('Database');
const Join = use('App/Model/Join');
const Validator = use('Validator');

class SubmitController {

    *
    editCourseData(request, response) {
        var post = request.post();
        var courseData = {
            id: request.param('id'),
            capacity: post.capacity,
            teacher_name: post.teacher_name
        };

        const validation = yield Validator.validateAll(courseData, Course.rules)

        if (validation.fails()) {
            yield request
                .with({
                    errors: [{
                        message: 'Nem adta meg a férőhelyek számát,vagy a tanár nevét!'
                    }]
                })
                .flash()

            response.redirect('back')
            return
        }

        var course = yield Course.findBy('id', courseData.id);

        course.capacity = courseData.capacity;
        course.teacher_name = courseData.teacher_name;
        yield course.save();
        yield request
            .with({
                success: [{
                    message: 'A kurzus módosítása sikeres!'
                }]
            })
            .flash()
        response.redirect('/lectures')
    }

    *
    addCourseSubmit(request, response) {
        var post = request.post();
        var courseData = {
            teacher_name: post.teacher,
            capacity: post.capacity,
            lecture_id: post.lecture_id
        };

        const validation = yield Validator.validateAll(courseData, Course.rules)

        if (validation.fails()) {
            yield request
                .with({
                    errors: [{
                        message: 'Nem adta meg a férőhelyek számát,vagy a tanár nevét!'
                    }]
                })
                .flash()

            response.redirect('back')
            return
        }

        var course = yield Course.create(courseData);

        yield course.save();
        yield request
            .with({
                success: [{
                    message: 'Sikeresen elindult az új kurzus!'
                }]
            })
            .flash()
        response.redirect('/lectures')
    }

    *
    joinCourse(request, response) {
        var post = request.post();
        var joinData = {
            course_id: request.param('id'),
            user_id: request.currentUser.id
        };

        const number = yield Database.table('joins').count('student_id as count').where('course_id', joinData.course_id);
        const course = yield Course.findBy('id', joinData.course_id);
        if (number[0].count >= course.capacity) {
            yield request
                .with({
                    errors: [{
                        message: 'A kurzus megtelt!'
                    }]
                })
                .flash()
            response.redirect('/lectures')
            return;
        }

        const courses = yield Course.query().where('lecture_id', course.lecture_id);
        var alreadyJoinedToLecture = false;
        for (var i = 0; i < courses.length && !alreadyJoinedToLecture; i++) {
            const join = yield Join.query().where('user_id', joinData.user_id).where('course_id', courses[i].id);
            if (join.length != 0) {
                alreadyJoinedToLecture = true;
            }
        }
        if (alreadyJoinedToLecture) {
            yield request
                .with({
                    errors: [{
                        message: 'Ebből a tárgyből már jár egy kurzusra!'
                    }]
                })
                .flash()
            response.redirect('/lectures')
            return;
        }

        const joinValid = yield Join.query().where('user_id', joinData.user_id).where('course_id', joinData.course_id);
        if (joinValid.length == 0) {
            var join = yield Join.create(joinData);
            yield join.save();
            yield request
                .with({
                    success: [{
                        message: 'Sikeresen felvette a kurzust!'
                    }]
                })
                .flash()
            response.redirect('/lectures');
            return;
        }
        response.redirect('/lectures')
        return;
    }

    *
    addLectureSubmit(request, response) {
        var post = request.post();
        var lectureData = {
            lecturename: post.name
        };

        const validation = yield Validator.validateAll(lectureData, Lecture.rules)

        if (validation.fails()) {
            yield request
                .with({
                    errors: [{
                        message: 'Már létezik ilyen nevű tárgy!'
                    }]
                })
                .flash()

            response.redirect('back')
            return
        }

        var lecture = yield Lecture.create(lectureData);
        yield lecture.save();
        yield request
            .with({
                success: [{
                    message: 'Új tárgy sikeresen felvéve!'
                }]
            })
            .flash()
        yield response.redirect('/lectures');
    }

    *
    ajaxAddLectureSubmit(request, response) {
        var post = request.post();
        var lectureData = {
            lecturename: post.name
        };

        const validation = yield Validator.validateAll(lectureData, Lecture.rules)

        if (validation.fails()) {
            yield request
                .with({
                    errors: [{
                        message: 'Már létezik ilyen nevű tárgy!'
                    }]
                })
                .flash()

            response.send({ success: false });
            return
        }

        var lecture = yield Lecture.create(lectureData);
        yield lecture.save();
        yield request
            .with({
                success: [{
                    message: 'Új tárgy sikeresen felvéve!'
                }]
            })
            .flash()
        response.send({ success: true });
    }

    *
    ajaxAddCourseSubmit(request, response) {
        var post = request.post();
        var courseData = {
            teacher_name: post.teacher,
            capacity: post.capacity,
            lecture_id: post.lecture_id
        };

        const validation = yield Validator.validateAll(courseData, Course.rules)

        if (validation.fails()) {
            yield request
                .with({
                    errors: [{
                        message: 'Nem adta meg a férőhelyek számát,vagy a tanár nevét!'
                    }]
                })
                .flash()

            response.send({ success: false });
            return
        }

        var course = yield Course.create(courseData);

        yield course.save();
        yield request
            .with({
                success: [{
                    message: 'Sikeresen elindult az új kurzus!'
                }]
            })
            .flash()
        response.send({ success: true });
    }
}

module.exports = SubmitController