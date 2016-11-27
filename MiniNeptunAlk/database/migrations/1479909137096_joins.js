'use strict'

const Schema = use('Schema')

class JoinsTableSchema extends Schema {

  up () {
    this.create('joins', (table) => {
      table.increments()
      table.integer('course_id').notNullable()
      table.integer('user_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('joins')
  }

}

module.exports = JoinsTableSchema
