import { HttpPostClient, HttpStatusCode } from '@/data/protocols/http'
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'
import { Authentication, AuthenticationParams } from '@/domain/usecases'

export class RemoteAuthentication implements Authentication {
  constructor (private readonly htpPostClient: HttpPostClient<AuthenticationParams, AccountModel>, private readonly url: string) { }

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.htpPostClient.post({ url: this.url, body: params })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.noContent: break
      default: throw new UnexpectedError()
    }
  }
}
