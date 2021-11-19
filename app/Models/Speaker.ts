import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Speaker extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'event_id' })
  public eventId: number

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'description' })
  public description: string
  
  @column({ columnName: 'abstract' })
  public abstract: string

  @column({ columnName: 'avatar' })
  public avatar: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
