import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Schedule extends BaseSchema {
  protected tableName = 'schedules'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title', 255).notNullable()
      table.string('description', 255).nullable()
      table.time('start_hour').notNullable()
      table.time('end_hour').nullable()
      table.string('date', 10).notNullable()
      table.integer('vacancies').nullable()
      table.string('link', 255).nullable()
      table.integer('event_id').unsigned().references('id').inTable('events').onDelete('CASCADE')
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
