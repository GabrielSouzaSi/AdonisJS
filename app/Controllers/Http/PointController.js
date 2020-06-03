'use strict'

const Point = use("App/Models/Point")
const { validateAll } = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with points
 */
class PointController {
  /**
   * Show a list of all points.
   * GET points
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const points = await Point.all()

    return points
  }

  /**
   * Render a form to be used for creating a new point.
   * GET points/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new point.
   * POST points
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    try {
      const erroMessage = {
        'number.unique': 'O Número da parada deve ser único!'
      }

      const validation = await validateAll(request.all(), {
        number: 'unique:points'
      }, erroMessage)

      if (validation.fails()) {
        return response.status(409).send({ message: validation.messages() })
      }

      const data = await request.only(["number", "sense", "adress", "district", "lat", "lgt", "climatizado"])

      const point = await Point.create(data)

      return point

    } catch (err) {
      return response.status(500).send({ error: `Erro: ${err.message}` })
    }
  }

  /**
   * Display a single point.
   * GET points/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing point.
   * GET points/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update point details.
   * PUT or PATCH points/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const point = await Point.findOrFail(params.id)

    const data = request.only(["number", "sense", "adress", "district", "lat", "lgt", "climatizado"])

    point.merge(data)
    await point.save()

    return point
  }

  /**
   * Delete a point with id.
   * DELETE points/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const point = await Point.findOrFail(params.id)

    await point.delete()
  }
}

module.exports = PointController
