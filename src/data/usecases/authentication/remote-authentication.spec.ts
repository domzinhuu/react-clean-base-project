import { RemoteAuthentication } from '@/data/usecases/authentication'
import { HttpPostClientSpy } from '@/data/test'
import { mockAccountModel, mockAuthentication } from '@/domain/test'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { HttpStatusCode } from '@/data/protocols/http'
import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'
import faker from '@faker-js/faker'

interface SutTypes {
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>
  sut: RemoteAuthentication
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParams, AccountModel>()
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

  test('Deve lançar um InvalidCredentialsError se o HttpPostClient retornar 401', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Deve lançar um UnexpectedError se o HttpPostClient retornar 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Deve lançar um UnexpectedError se o HttpPostClient retornar 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Deve lançar um UnexpectedError se o HttpPostClient retornar 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.auth(mockAuthentication())

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Deve retornar o accountModel se HttpPostClient retornar 200', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const httpResult = mockAccountModel()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const account = await sut.auth(mockAuthentication())

    expect(account).toEqual(account)
  })
})
