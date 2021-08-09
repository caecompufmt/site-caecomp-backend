import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Events extends BaseSchema {
  protected tableName = 'events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.enum('type', ['course', 'event'])
      table.string('title').notNullable()
      table.string('cover').nullable()
      table.string('description').nullable()
      table.string('place').nullable()
      table.integer('workload').notNullable()
      table.date('deadline').nullable()
      table.date('start_date').nullable()
      table.date('end_date').nullable()
      table.integer('vacancies').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
