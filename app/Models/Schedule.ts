import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Event from './Event'

export default class Schedule extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column({ columnName: 'start_hour' })
  public startHour: string

  @column({ columnName: 'end_hour' })
  public endHour: string

  @column()
  public date: Date

  @column()
  public vacancies: number

  @column()
  public link: string

  @column({ columnName: 'event_id' })
  public eventId: number

  @belongsTo(() => Event)
  public event: BelongsTo<typeof Event>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
