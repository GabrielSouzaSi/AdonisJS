'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Line extends Model {
    points () {
        return this.belongsToMany('App/Models/Point')
    }
    schedules () {
        return this.hasMany('App/Models/Schedule')
    }
}

module.exports = Line
