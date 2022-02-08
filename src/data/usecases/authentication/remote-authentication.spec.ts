import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

class HttpPostClientStub implements HttpPostClient {
  url?: string

  async post (url: string): Promise<void> {
    this.url = url
    return await Promise.resolve()
  }
}

interface SutTypes {
  httpPostClientStub: HttpPostClientStub
  sut: RemoteAuthentication
  url: string
}

const makeSut = (): SutTypes => {
  const httpPostClientStub = new HttpPostClientStub()
  const url: string = 'any_url'
  const sut = new RemoteAuthentication(httpPostClientStub, url)

  return {
    httpPostClientStub,
    sut,
    url
  }
}

describe('Remote Authentication', () => {
  test('Garantir que internamente ao chamar auth vai chamar o HttpClient', async () => {
    const { sut, httpPostClientStub, url } = makeSut()
    await sut.auth()

    expect(httpPostClientStub.url).toBe(url)
  })
})
