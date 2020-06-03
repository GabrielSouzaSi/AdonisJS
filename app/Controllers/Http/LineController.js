'use strict'

const Line = use("App/Models/Line")
const Database = use('Database')
const { validateAll } = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with lines
 */
class LineController {
    /**
     * Show a list of all lines.
     * GET lines
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        // const lines = await Line.all()
        // const lines_points = await Database
        // .table('lines')
        // .innerJoin('line_point', 'line_point.line_id', 'lines.id')
        // .innerJoin('points', 'line_point.point_id', 'points.id')

        // return lines_points
        const test = await Line.query().with('points').fetch()

        return test
    }

    /**
     * Render a form to be used for creating a new line.
     * GET lines/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) { }

    /**
     * Create/save a new line.
     * POST lines
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {
            const erroMessage = {
                'number.required': 'O campo Número é obrigatório!',
                'number.min': 'O mínimo de caracteres é 3 no campo número!',
                // 'number.unique': 'O número da linha deve ser único!',
                'description.required': 'Nome da Linha é obrigatório!',
                'sense.required': 'O Sentido da Linha é obrigatório!',
            }

            const validation = await validateAll(request.all(), {
                number: 'required|min:3',
                description: 'required',
                sense: 'required'
            }, erroMessage)

            if (validation.fails()) {
                return response.status(401).send({ message: validation.messages() })
            }
            const { points, ...data } = request.only(["number", "description", "sense", "route", "points"])

            const line = await Line.create(data)

            if (points && points.length > 0 ) {
                await line.points().attach(points)
                await line.load('points')
            }

            return line

        } catch (err) {
            return response.status(500).send({ error: `Erro: ${err.message}` })
        }
    }

    /**
     * Display a single line.
     * GET lines/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) { }

    /**
     * Render a form to update an existing line.
     * GET lines/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) { }

    /**
     * Update line details.
     * PUT or PATCH lines/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {
        const line = await Line.findOrFail(params.id)

        const { points, ...data } = request.only(["number", "description", "sense", "route", "points"])

        line.merge(data)

        await line.save()

        if (points && points.length > 0) {
            await line.points().sync(points)
            await line.load('points')
        }

        return line
    }

    /**
     * Delete a line with id.
     * DELETE lines/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
        const line = await Line.findOrFail(params.id)

        await line.delete()
    }
}

module.exports = LineController