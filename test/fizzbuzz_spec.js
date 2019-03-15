const should = chai.should()

describe('Test fizzBuzz function', function () {
  it('Should return Fizz if input number is divisible by 3', function () {
    const result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('Should return Buzz if input number is divisible by 5', function () {
    const result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('Should return FizzBuzz if input number is divisible by 3 and 5', function () {
    const result = fizzBuzz(45)
    result.should.be.equal('FizzBuzz')
  })
  it('Should return the input number if input number is not divisible by 3 or 5', function () {
    const result = fizzBuzz(7)
    result.should.be.equal(7)
  })
})
