import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

interface SutTypes {
  httpPostClientSpy: HttpPostClientSpy
  sut: RemoteAuthentication
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(httpPostClientSpy, url)

  return {
    httpPostClientSpy: httpPostClientSpy,
    sut
  }
}

describe('Remote Authentication', () => {
  test('Garantir que internamente ao chamar auth vai chamar o HttpClient', async () => {
    const { sut, httpPostClientSpy } = makeSut('other_url')
    await sut.auth()

    expect(httpPostClientSpy.url).toBe('other_url')
  })
})
