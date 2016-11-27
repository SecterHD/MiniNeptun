'use strict'

const Schema = use('Schema')

class CoursesTableSchema extends Schema {

  up () {
    this.create('courses', (table) => {
      table.increments()
      table.integer('capacity').notNullable()
      table.integer('lecture_id').notNullable()
      table.string('teacher_name', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }

}

module.exports = CoursesTableSchema
