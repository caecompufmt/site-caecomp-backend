import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Schedule from '../../Models/Schedule'
export default class SchedulesController {
  public async index({ response }: HttpContextContract) {
    const schedules = await Schedule.all()

    return response.json({ schedules })
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      'description',
      'title',
      'start_hour',
      'end_hour',
      'date',
      'vacancies',
      'description',
      'link',
    ])

    const schedule = await Schedule.create(data)

    return response.json({ schedule })
  }

  public async show({ response, params }: HttpContextContract) {
    const schedule = await Schedule.findOrFail(params.id)

    return response.json({ schedule })
  }

  public async update({ request, response, params }: HttpContextContract) {
    const schedule = await Schedule.findOrFail(params.id)

    const data = request.only([
      'description',
      'title',
      'start_hour',
      'end_hour',
      'date',
      'vagas',
      'link',
    ])

    schedule.merge(data)

    await schedule.save()

    return response.json({ schedule })
  }

  public async destroy({ response, params }: HttpContextContract) {
    const schedule = await Schedule.findOrFail(params.id)
    await schedule.delete()

    return response.json({ message: 'ok' })
  }
}
