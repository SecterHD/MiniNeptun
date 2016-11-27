'use strict'

const Database = use('Database');
const User = use("App/Model/User");
const Join = use('App/Model/Join');

class ViewController {

    *
    profile(request, response) {
        const dataArray = yield Database
            .table('lectures')
            .innerJoin('courses', 'lecture_id', 'lectures.id')
            .innerJoin('joins', 'course_id', 'courses.id')
            .where('user_id', request.currentUser.id);

        const whereActualZero = yield Database.table('courses');
        const actual = yield Database.table('joins').groupBy('course_id').select('course_id').count('student_id as count');

        for (var j = 0; j < whereActualZero.length; j++) {
            var isFound = false;
            for (var i = 0; i < actual.length && !isFound; i++) {
                if (whereActualZero[j].id == actual[i].course_id) {
                    isFound = true;
                }
            }
            if (!isFound) {
                actual.push({
                    course_id: whereActualZero[j].id,
                    count: 0
                });
            }
        }

        yield response.sendView('profile', {
            dataArray: dataArray,
            actual: actual
        });
    }

    *
    student(request, response) {
        const users = yield User.all();

        const whereJoinNumberZero = yield Database.table('users');
        const joinNumber = yield Join.query().groupBy('user_id').select('user_id').count('course_id as count');

        for (var j = 0; j < whereJoinNumberZero.length; j++) {
            var isFound = false;
            for (var i = 0; i < joinNumber.length && !isFound; i++) {
                if (whereJoinNumberZero[j].id == joinNumber[i].user_id) {
                    isFound = true;
                }
            }
            if (!isFound) {
                joinNumber.push({
                    user_id: whereJoinNumberZero[j].id,
                    count: 0
                });
            }
        }

        yield response.sendView('students', {
            users: users.toJSON(),
            joinNumber: joinNumber
        })

    }

    *
    showCourses(request, response) {
        const dataArray = yield Database
            .table('lectures')
            .innerJoin('courses', 'lecture_id', 'lectures.id')
            .innerJoin('joins', 'course_id', 'courses.id')
            .where('user_id', request.param('id'));

        const whereActualZero = yield Database.table('courses');
        const actual = yield Database.table('joins').groupBy('course_id').select('course_id').count('student_id as count');

        for (var j = 0; j < whereActualZero.length; j++) {
            var isFound = false;
            for (var i = 0; i < actual.length && !isFound; i++) {
                if (whereActualZero[j].id == actual[i].course_id) {
                    isFound = true;
                }
            }
            if (!isFound) {
                actual.push({
                    course_id: whereActualZero[j].id,
                    count: 0
                });
            }
        }

        yield response.sendView('studentCourses', {
            dataArray: dataArray,
            actual: actual
        })
    }

    *
    list(request, response) {
        const dataArray = yield Database
            .table('lectures')
            .innerJoin('courses', 'lecture_id', 'lectures.id');

        const whereActualZero = yield Database.table('courses');
        const actual = yield Database.table('joins').groupBy('course_id').select('course_id').count('student_id as count');

        for (var j = 0; j < whereActualZero.length; j++) {
            var isFound = false;
            for (var i = 0; i < actual.length && !isFound; i++) {
                if (whereActualZero[j].id == actual[i].course_id) {
                    isFound = true;
                }
            }
            if (!isFound) {
                actual.push({
                    course_id: whereActualZero[j].id,
                    count: 0
                });
            }
        }

        yield response.sendView('lectures', {
            dataArray: dataArray,
            actual: actual
        });
    }

}

module.exports = ViewController