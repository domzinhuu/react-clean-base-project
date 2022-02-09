import faker from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Deve chamar o axios com a url e verbo correta ', async () => {
    const sut = makeSut()
    const fakeUrl = faker.internet.url()
    await sut.post({ url: fakeUrl })

    expect(mockedAxios.post).toHaveBeenCalledWith(fakeUrl)
  })
})
