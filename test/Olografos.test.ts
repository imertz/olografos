import { olografos } from '../src/index'

test('No options', () => {
  expect(olografos(5)).toBe('πέντε')
  expect(olografos(200)).toBe('διακόσια')
  expect(olografos(3)).toBe('τρία')
  expect(olografos(-12312)).toBe('μείον δώδεκα χιλιάδες τριακόσια δώδεκα')
})

test('With options', () => {
  expect(olografos(3, { klisi: 'geniki', genos: 'thyliko' })).toBe('τριών')
  expect(olografos(233.22, { currency: true })).toBe(
    'διακόσια τριαντατρία ευρώ και εικοσιδύο λεπτά'
  )
})

test('Throw TypeError', () => {
  expect(() => {
    // @ts-expect-error
    olografos('1')
  }).toThrow(TypeError)
})
