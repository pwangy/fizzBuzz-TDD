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
    }),
    it('should return "fizz" if the number is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('fizz')
        expect(fizzBuzz(6)).toBe('fizz')
        expect(fizzBuzz(9)).toBe('fizz')
        expect(fizzBuzz(12)).toBe('fizz')
    }), 
    it('should return "buzz" if the number is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('buzz')
        expect(fizzBuzz(10)).toBe('buzz')
    }),
    it('should return "fizzbuzz" if the number is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz')
    })
})
