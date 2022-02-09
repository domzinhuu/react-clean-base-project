import faker from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { HttpPostParams } from '@/data/protocols/http'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockAxiosResult = {
  data: faker.datatype.json(),
  status: faker.datatype.number()
}

mockedAxios.post.mockResolvedValue(mockAxiosResult)
const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => ({ url: faker.internet.url(), body: faker.random.arrayElement() })

describe('AxiosHttpClient', () => {
  test('Deve chamar o axios com os valores correto ', async () => {
    const sut = makeSut()
    const request = mockPostRequest()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Deve retornar o statusCode e body corretamente', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())

    expect(httpResponse).toEqual({
      statusCode: mockAxiosResult.status,
      body: mockAxiosResult.data
    })
  })
})
