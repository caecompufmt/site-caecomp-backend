import 'mocha'
import { expect } from 'chai'
import { step } from 'mocha-steps'
import faker from 'faker-br'
import axios from 'axios'
import { createDefaultUser } from '../integration/seed/user.seed'
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

  step('Schedule upload', async function () {
    // let user = await createDefaultUser()
    const schedulePayload = {
      description: 'Descrição de curso',
      title: `Curso typescript com prof ${faker.name.firstName()}`,
      start_hour: '8',
      end_hour: '18',
      date: '2022-04-30',
      vacancies: '3',
      link: 'google.com',
    }
    const response = await client.post('api/programacao', schedulePayload)
    expect(response.data.schedule.description).to.equal(schedulePayload.description)
    expect(response.data.schedule.title).to.equal(schedulePayload.title)
    expect(response.data.schedule.start_hour).to.equal(schedulePayload.start_hour)
    expect(response.data.schedule.end_hour).to.equal(schedulePayload.end_hour)
    expect(response.data.schedule.date).to.equal(schedulePayload.date)
    expect(response.data.schedule.vacancies).to.equal(schedulePayload.vacancies)
    expect(response.data.schedule.link).to.equal(schedulePayload.link)
    expect(response.status).to.equal(200)
  })
})
