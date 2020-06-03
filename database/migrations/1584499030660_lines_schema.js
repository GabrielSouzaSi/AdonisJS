'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LinesSchema extends Schema {
  up () {
    this.create('lines', (table) => {
      table.increments()
      table.integer('number').notNullable()
      table.string('description').notNullable()
      table.string('sense').notNullable()
      table.json('route').notNullable()
      // table.string('latA').notNullable()
      // table.string('lgtA').notNullable()
      // table.string('latB').notNullable()
      // table.string('lgtB').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lines')
  }
}

module.exports = LinesSchema
