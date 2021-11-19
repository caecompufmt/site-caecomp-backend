import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Speaker from 'App/Models/Speaker'

export default class SpeakersController {
    public async index({ response }: HttpContextContract) {
        const speakers = await Speaker.all()
    
        return response.json({ speakers })
      }

      public async store({ request, response }: HttpContextContract) {
        const data = request.only([
          'id',
          'event_id',
          'name',
          'description',
          'abstract',
          'avatar',
        ])
    
        const speakers = await Speaker.create(data)
    
        return response.json({ speakers })
      }

      public async show({ response, params }: HttpContextContract) {
        const speaker = await Speaker.findOrFail(params.id)
    
        return response.json({ speaker })
      }

      public async update({ request, response, params }: HttpContextContract) {
        const speaker = await Speaker.findOrFail(params.id)
    
        const data = request.only([
            'id',
            'event_id',
            'name',
            'description',
            'abstract',
            'avatar',
        ])
    
        speaker.merge(data)
    
        await speaker.save()
    
        return response.json({ speaker })
      }

      public async destroy({ response, params }: HttpContextContract) {
        const speaker = await Speaker.findOrFail(params.id)
        await speaker.delete()
    
        return response.json({ message: 'ok' })
      }
}
