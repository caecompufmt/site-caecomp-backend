import 'mocha'
import { expect } from 'chai'
import { step } from 'mocha-steps'
import faker from 'faker-br'
import axios from 'axios'

describe('User', () => {
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
    const userPayload = {
      email: faker.internet.email().toLowerCase(),
      first_name: `${faker.name.firstName()}`,
      password: '123456@Cc',
    }
    const response = await client.post('api/register', userPayload)
    expect(response.data.type).to.equal('bearer')
    expect(response.status).to.equal(200)
  })
  step('User login', async function () {
    // Registering user
    const userPayload = {
      email: faker.internet.email().toLowerCase(),
      first_name: `${faker.name.firstName()}`,
      password: '123456@Cc',
    }
    let response = await client.post('api/register', userPayload)
    expect(response.data.type).to.equal('bearer')
    expect(response.status).to.equal(200)
    // Logging user
    const loginPayload = {
      email: userPayload.email,
      password: userPayload.password
    }
    response = await client.post('api/login', loginPayload)
    expect(response.status).to.equal(200)
  })
})