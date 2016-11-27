'use strict'

const Schema = use('Schema')

class LecturesTableSchema extends Schema {

  up () {
    this.create('lectures', (table) => {
      table.increments()
      table.string('lecturename', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lectures')
  }

}

module.exports = LecturesTableSchema
