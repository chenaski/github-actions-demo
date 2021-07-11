import { random } from './index'

test('works', () => {
  Array(100)
    .fill(0)
    .forEach(() => {
      const result = random({ min: 1, max: 10 })

      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
    })
})

test('default `min` value is `0`', () => {
  Array(100)
    .fill(0)
    .forEach(() => {
      const result = random({ max: 10 })

      expect(result).toBeGreaterThanOrEqual(0)
      expect(result).toBeLessThanOrEqual(10)
    })
})
