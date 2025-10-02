class Sieve {
  NthPrime(n) {
    function isPrimeNumber(num) {
      // numbers less than 1 are not prime
      if (num <= 1) {
        return false;
      }

      // 2 is the smallest prime and only even prime number
      if (num === 2) {
        return true;
      }

      // check if divisible by 2; if so, eliminate 
      if (num % 2 === 0) {
        return false;
      }

      // check if number is prime, starting at 3
      // using the square root as a conditional cuts down the for loop to the midpoint, to help find the smaller factor of a pair of divisors
      // incrementing by 2 skips all the even numbers
      for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // if the number divided by i does not leave a remainder
        // that means, it has a divisor
        // therefore, not prime.
        if (num % i === 0) {
          return false;
        }
      }

      return true;
    };

    let allPrimes = [];

    const limit = 5000;

    // limit used for testing
    // TODO: determine far to go without a limit for scalability
    for (let i = 0; i <= limit; i++) {
      if (isPrimeNumber(i)) {
        // push prime numbers to the all primes array
        allPrimes.push(i)
        console.log(allPrimes);
      }
    }

    // return nth value of all primes
    return allPrimes[n];
  }
}

module.exports = Sieve;
