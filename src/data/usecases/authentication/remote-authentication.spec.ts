import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

interface SutTypes {
  httpPostClientSpy: HttpPostClientSpy
  sut: RemoteAuthentication
  url: string
}

const makeSut = (): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const url: string = 'any_url'
  const sut = new RemoteAuthentication(httpPostClientSpy, url)

  return {
    httpPostClientSpy: httpPostClientSpy,
    sut,
    url
  }
}

describe('Remote Authentication', () => {
  test('Garantir que internamente ao chamar auth vai chamar o HttpClient', async () => {
    const { sut, httpPostClientSpy, url } = makeSut()
    await sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})
