import { RemoteAuthentication } from './remote-authentication'
import faker from '@faker-js/faker'
import { HttpPostClientSpy } from '@/data/test/mock-http-client'
import { mockAuthentication } from '@/domain/test/mock-authentication'

interface SutTypes {
  httpPostClientSpy: HttpPostClientSpy
  sut: RemoteAuthentication
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(httpPostClientSpy, url)

  return {
    httpPostClientSpy: httpPostClientSpy,
    sut
  }
}

describe('Remote Authentication', () => {
  test('Garantir que internamente ao chamar auth vai chamar o HttpClient', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())

    expect(httpPostClientSpy.url).toBe(url)
  })

  test('Garantir que internamente ao chamar auth vai chamar o HttpClient com o body correto', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const authentication = mockAuthentication()
    await sut.auth(authentication)

    expect(httpPostClientSpy.body).toEqual(authentication)
  })
})
