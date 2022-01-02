import 'mocha'
import { expect } from 'chai'
import { step } from 'mocha-steps'
import faker from 'faker-br'
import axios from 'axios'

describe('Schedule', () => {
  let client
  before(async () => {
    client = axios.create({
      baseURL: `http://0.0.0.0:3333/`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })

  step('User registration', async function () {
    const schedulePayload = {
      email: faker.internet.email().toLowerCase(),
      first_name: `${faker.name.firstName()}`,
      password: '123456@Cc',
    }
    const response = await client.post('api/programacao', schedulePayload)
    expect(response.data.type).to.equal('bearer')
    expect(response.status).to.equal(200)
  })
})