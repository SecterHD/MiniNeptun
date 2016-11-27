'use strict'

const Lucid = use('Lucid')

class Course extends Lucid {
    static get rules () {
        return {
            capacity: 'required',
            teacher_name: 'required'
        }        
    } 

    lecture () {
        return this.belongsTo('App/Model/Lecture')
    }

    user () {
        return this.hasOne('App/Model/User')
    }

    Join () {
        return this.hasMany('App/Model/Join');
    }
}

module.exports = Course