function sumPrimes(num) {
    let currNum = 2;
    let allNumArr = [];
    // generate an array of numbers starting with 2
    while (num >= currNum){
        allNumArr.push(currNum);
        currNum++;
    }
    // filter non primes from array and output a new array containing prime numbers
    var primeArr = allNumArr.filter(function(number) {
        // test the divisibility of a number from 2 up to the square root of the number. This uses the fact that if a number has a divisor between 1 and itself, it must also
        // have a divisor between 1 and its sqrt. it reduces the number of iterations needed to find out if a number is prime.
        for (let i = 2; i <= Math.sqrt(number); i++){
            // If the number can be divided by any number between 2 and its sqrt, it is not a prime, and should be excluded from the primeArr array
            if (number % i === 0){
                return false;
            }
        }
        // if the number is not divisible by any number between 1 and its sqrt, it is prime and should be included in the primeArr array
        return true;
    })

    // sum array of prime numbers
    var sumPrime = primeArr.reduce(function(sum, num){
        return sum + num;
    });
    console.log(primeArr);
  return sumPrime;
}

// console.log(sumPrimes(10)); // 2, 3, 5, 7 = 17
// console.log(sumPrimes(20)); // 2, 3, 5, 7, 11, 13, 17, 19
// console.log(sumPrimes(30)); // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29
console.log(sumPrimes(977));