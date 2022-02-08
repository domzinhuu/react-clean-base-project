import { HttpPostClient } from 'data/protocols/http/http-post-client'

export class RemoteAuthentication {
  constructor (private readonly htpPostClient: HttpPostClient, private readonly url: string) { }
  async auth (): Promise<void> {
    await this.htpPostClient.post({ url: this.url })
  }
}
