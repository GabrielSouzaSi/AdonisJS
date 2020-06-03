'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinesPointsSchema extends Schema {
  up() {
    this.create('line_point', (table) => {
      table.increments()
      table.integer('line_id').unsigned().references('id').inTable('lines').onDelete('CASCADE').index('line_id')
      table.integer('point_id').unsigned().references('id').inTable('points').onDelete('CASCADE').index('point_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('line_point')
  }
}

module.exports = LinesPointsSchema
