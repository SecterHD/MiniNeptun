'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', table => {
      table.increments()
      table.string('ncode', 80).notNullable().unique()
      table.string('firstname', 254).notNullable()
      table.string('lastname', 254).notNullable()
      table.string('password', 60).notNullable()
      table.boolean('isAdmin').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
