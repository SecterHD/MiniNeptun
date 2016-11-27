'use strict'

const Lucid = use('Lucid')

class Join extends Lucid {
    course () {
        return this.belongsTo('App/Model/Course')
    }

    user () {
        return this.hasMany('App/Model/User')
    }
}

module.exports = Join