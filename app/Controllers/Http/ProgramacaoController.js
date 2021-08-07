'use strict'

const Programacao = use("App/Models/Programacao");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with programacaos
 */
class ProgramacaoController {
  /**
   * Show a list of all programacaos.
   * GET programacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const programacao = await Programacao.all();
    
    return programacao;
  }

  /**
   * Render a form to be used for creating a new programacao.
   * GET programacaos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new programacao.
   * POST programacaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(["description", "title", "start_hour", "end_hour", "date", "vagas", "link"]);
    
    const programacao = await Programacao.create(data);
    
    return programacao;
  }

  /**
   * Display a single programacao.
   * GET programacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing programacao.
   * GET programacaos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update programacao details.
   * PUT or PATCH programacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const programacao = await Programacao.findOrFail(params.id);
    const data = request.only(["description", "title", "start_hour", "end_hour", "date", "vagas", "link"]);
    
    programacao.merge(data);
    await programacao.save();
    
    return programacao
  }

  /**
   * Delete a programacao with id.
   * DELETE programacaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const programacao = await Programacao.findOrFail(params.id);
    await programacao.delete();
  }
}

module.exports = ProgramacaoController
