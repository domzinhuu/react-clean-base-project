import { LuxonDateTransform } from '.'

describe('Luxon Date Adapter', () => {
  test('Deve converter uma data para o formato passado no parametro ', () => {
    const sut = new LuxonDateTransform()
    const compareDate = '10/02/2022'
    const dateFormated = sut.transform(new Date(), 'dd/MM/yyyy')
    expect(dateFormated).toBe(compareDate)
  })
})
