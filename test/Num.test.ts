import { Olografos } from '../src/index'

test('val', () => {
  const t = () => {
    throw new TypeError('Please enter a valid number')
  }

  expect(Olografos.val(5)).toBe('πέντε')
  expect(Olografos.val(200)).toBe('διακόσια')
  expect(Olografos.val(3)).toBe('τρία')
  expect(() => {
    Olografos.val(-1)
  }).toThrow('Please enter a valid number')
})

// test('toString', () => {
//   expect(new Num(5).toString()).toBe('5')
// })

// test('addAll', () => {
//   expect(Num.addAll([new Num(5), new Num(2), new Num(13)]).val()).toBe(20)
// })
