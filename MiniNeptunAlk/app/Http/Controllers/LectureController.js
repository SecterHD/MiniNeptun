'use strict'

const Lecture = use("App/Model/Lecture");
const Course = use("App/Model/Course");

class LectureController {

    *
    deleteLecture(request, response) {
        const lectures = yield Lecture.all();
        yield response.sendView('deleteLecture', {
            lectures: lectures.toJSON()
        })
    }

    *
    addLecture(request, response) {
        yield response.sendView('addLecture')
    }

    *
    addCourse(request, response) {
        const lectures = yield Lecture.all();
        yield response.sendView('addCourse', {
            lectures: lectures.toJSON()
        })
    }

    *
    showCourseData(request, response) {
        var course = yield Course.findBy('id', request.param('id'));

        yield response.sendView('editCourse', {
            course: course.toJSON()
        });
    }
}

module.exports = LectureController