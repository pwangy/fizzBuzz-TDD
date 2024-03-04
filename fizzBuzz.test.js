const fizzBuzz = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('is a function', () => {
        expect(typeof fizzBuzz).toEqual('function')
    }),
    it('should return the number if it is not divisible by 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1)
        expect(fizzBuzz(2)).toBe(2)
        expect(fizzBuzz(4)).toBe(4)
        expect(fizzBuzz(7)).toBe(7)
        expect(fizzBuzz(8)).toBe(8)
        expect(fizzBuzz(11)).toBe(11)
    })
})
