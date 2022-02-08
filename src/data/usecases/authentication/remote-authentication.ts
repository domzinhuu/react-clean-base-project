import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { AuthenticationParams } from 'domain/usecases/authentication'

export class RemoteAuthentication {
  constructor (private readonly htpPostClient: HttpPostClient, private readonly url: string) { }
  async auth (params: AuthenticationParams): Promise<void> {
    await this.htpPostClient.post({ url: this.url, body: params })
  }
}
