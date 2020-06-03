'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Point extends Model {
    lines () {
        return this.belongsToMany('App/Models/Line')
    }
}

module.exports = Point
