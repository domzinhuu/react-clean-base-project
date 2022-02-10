import { MomentDateTransform } from '.'

describe('Moment Date Adapter', () => {
  test('Deve converter uma data para o formato passado no parametro ', () => {
    const sut = new MomentDateTransform()
    const compareDate = '10/02/2022'
    const dateFormated = sut.transform(new Date(), 'DD/MM/YYYY')
    expect(dateFormated).toBe(compareDate)
  })
})
