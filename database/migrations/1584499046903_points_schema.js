'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointsSchema extends Schema {
  up () {
    this.create('points', (table) => {
      table.increments()
      table.integer('number').notNullable().unique()
      table.string('sense').notNullable()
      table.string('adress').notNullable()
      table.string('district').notNullable()
      table.string('lat').notNullable()
      table.string('lgt').notNullable()
      table.boolean('climatizado').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('points')
  }
}

module.exports = PointsSchema
