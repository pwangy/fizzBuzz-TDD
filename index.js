const fizzBuzz = () => {
    	for (let n = 1; n < 16; n++) {
		// console.log(n)
		if (n % 3 === 0) {
			return 'Fizz'
		} else {
			return n
		}
	}
}

module.exports = fizzBuzz