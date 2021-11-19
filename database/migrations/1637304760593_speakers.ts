import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Speakers extends BaseSchema {
  protected tableName = 'speakers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('event_id').unsigned().references('id').inTable('events').onDelete('CASCADE')
      table.string('name', 255).notNullable()
      table.string('description', 500).nullable()
      table.string('abstract', 3500).nullable()
      table.string('avatar', 500).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
