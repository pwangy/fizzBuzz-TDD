const fizzBuzz = (n) => {
	// for (var n = 1; n <= 15; n++) {
		if (n % 3 === 0 && n % 5 === 0) {
			return 'fizzbuzz'
			// console.log('fizzbuzz')
		} else if (n % 5 === 0) {
			return 'buzz'
			// console.log('buzz')
		} else if (n % 3 === 0) {
			return 'fizz'
			// console.log('fizz')
		} else {
			return n
			// console.log(n)
		}
	}
// }

module.exports = fizzBuzz
