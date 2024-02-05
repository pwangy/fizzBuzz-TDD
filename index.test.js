const fizzBuzz = require('./index')

describe('fizzBuzz', () => {
    it('is a function', () => {
        expect(typeof fizzBuzz).toEqual('function')
    }),
    it('should return 1 for 1', () => {
		expect(fizzBuzz(1)).toBe(1)
	})
})
