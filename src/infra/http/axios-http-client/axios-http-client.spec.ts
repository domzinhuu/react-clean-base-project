import faker from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
  test('Deve chamar o axios com a url correta', async () => {
    const sut = new AxiosHttpClient()
    const fakeUrl = faker.internet.url()
    await sut.post({ url: fakeUrl })

    expect(mockedAxios).toHaveBeenCalledWith(fakeUrl)
  })
})
