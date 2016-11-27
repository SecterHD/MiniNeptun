'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  static get rules () {
        return {
            ncode: 'required|unique:users',
            firstname: 'required',
            lastname: 'required',
            password: 'required',
            isAdmin: 'required'
        }        
    } 

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

    course () {
    return this.belongsTo('App/Model/Course')
  }

  join() {
    return this.belongsTo('App/Model/Joins')
  }

}

module.exports = User
