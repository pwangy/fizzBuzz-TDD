const fizzBuzz = require('./index')

describe('fizzBuzz', () => {
    it('is a function', () => {
        expect(typeof fizzBuzz).toEqual('function')
    }),
    it('should return 1 for 1', () => {
        expect(fizzBuzz(1)).toEqual(1)
    }), 
    it('should return 2 for 2', () => {
        expect(fizzBuzz(2)).toEqual(2)
    }),
    it('should return fizz when the number is divisible by 3', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })
})

// test('should return fizz when the number is divisible by 3', () => {
//     expect(fizzBuzz(3)).toEqual('Fizz'),
//     expect(fizzBuzz(6)).toBe('Fizz'),
//     expect(fizzBuzz(12)).toBe('Fizz')
// })