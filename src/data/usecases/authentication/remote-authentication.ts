import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { HttpStatusCode } from '@/data/protocols/http/http-response'
import { InvalidCredentialsError } from '@/domain/errors/invalid-credentials-error'
import { UnexpectedError } from '@/domain/errors/unexpected-error'
import { AccountModel } from '@/domain/models/account.model'
import { Authentication, AuthenticationParams } from '@/domain/usecases/authentication'

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
