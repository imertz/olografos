import { Olografos } from '../src/index'

test('val', () => {
  // const t = () => {
  //   throw new TypeError('Please enter a valid number')
  // }

  expect(Olografos(5)).toBe('πέντε')
  expect(Olografos(200)).toBe('διακόσια')
  expect(Olografos(3)).toBe('τρία')
  expect(Olografos(-12312)).toBe('μείον δώδεκα χιλιάδες τριακόσια δώδεκα')
})

// test('toString', () => {
//   expect(new Num(5).toString()).toBe('5')
// })

// test('addAll', () => {
//   expect(Num.addAll([new Num(5), new Num(2), new Num(13)]).val()).toBe(20)
// })
