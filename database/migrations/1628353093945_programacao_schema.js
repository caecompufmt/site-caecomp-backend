'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')


class ProgramacaoSchema extends Schema {
  up () {
    this.create('programacaos', (table) => {
      table.increments('id').primary()
      table.string('description', 255).notNullable()
      table.string('title', 255).notNullable()
      table.timestamps('start_hour').notNullable()
      table.timestamps('end_hour').notNullable()
      table.string('date', 10).notNullable()
      table.integer('vagas')
      table.string('link', 255)
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  down () {
    this.drop('programacaos')
  }
}

module.exports = ProgramacaoSchema
