import 'mocha'
import faker from 'faker-br'
import axios from 'axios'

interface userDTO {
  email: string
  first_name: string
  password: string
  token?: string
}

export async function createDefaultUser(): Promise<userDTO> {
  let client
  client = axios.create({
    baseURL: `http://0.0.0.0:3333/`,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const userPayload = {
    email: faker.internet.email().toLowerCase(),
    first_name: `${faker.name.firstName()}`,
    password: '123456@Cc',
  }
  let response = await client.post('api/register', userPayload)
  const loginPayload = {
    email: userPayload.email,
    password: userPayload.password,
  }
  response = await client.post('api/login', loginPayload)
  if (response.status !== 200) {
    throw new Error('Error on user registration')
  }
  const res = {
    email: userPayload.email as string,
    first_name: userPayload.first_name as string,
    password: userPayload.password as string,
    token: response.data.token as string,
  } as userDTO
  return res
}
