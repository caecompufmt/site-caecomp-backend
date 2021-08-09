import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Schedule from './Schedule'

export enum EventTypes {
  COURSE = 'course',
  EVENT = 'event',
}

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: EventTypes

  @column()
  public title: string

  @column()
  public cover: string

  @column()
  public description: string

  @column()
  public place: string

  @column()
  public workload: number

  @column()
  public deadline: Date

  @column({ columnName: 'start_date' })
  public startDate: Date

  @column({ columnName: 'end_date' })
  public endDate: Date

  @column()
  public vacancies: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Schedule)
  public schedules: HasMany<typeof Schedule>
}
