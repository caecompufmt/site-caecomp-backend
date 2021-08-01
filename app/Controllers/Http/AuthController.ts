import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '10 days',
    })
    return token.toJSON()
  }
  public async register({ request, auth, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      email: schema.string({}, [rules.email()]),
      password: schema.string(),
      first_name: schema.string(),
    })

    try {
      const payload = await request.validate({
        schema: newUserSchema,
      })

      const email = payload.email
      const password = payload.password
      const firstName = payload.first_name

      const newUser = new User()
      newUser.email = email
      newUser.password = password
      newUser.firstName = firstName
      await newUser.save()

      const token = await auth.use('api').login(newUser, {
        expiresIn: '10 days',
      })

      return token.toJSON()
    } catch (error) {
      if (error.errno === 1062) {
        return response.unprocessableEntity('e-mail already registered')
      }
      response.badRequest(error.messages)
    }
  }
}
