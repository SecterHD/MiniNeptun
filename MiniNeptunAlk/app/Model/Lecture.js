'use strict'

const Lucid = use('Lucid')

class Lecture extends Lucid {
    static get rules () {
        return {
            lecturename: 'required|unique:lectures'
        }        
    } 

    course () {
        return this.hasMany('App/Model/Course')
    }
}

module.exports = Lecture