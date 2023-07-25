function smallestCommons(arr) {
    // generate an array containing all integers  between the two numbers, inclusive
    arr.sort((a,b) => a - b);
    let intArr = [];
    for (let i = arr[0]; i <= arr[1]; i++){
        intArr.push(i);
    }
    // console.log("intArr = ",intArr)
    // initialize an array to collect arrays of integers
    let arrOfArr = []
    // Generate n arrays of all integers smaller than each numbers in intArr, and push into arrOfArr
    for (let i = 0; i < intArr.length; i++){
        let arr = allNum(intArr[i])
        arrOfArr.push(arr);
    }
    //console.log("arrOfArr = ",arrOfArr)
    // initialize an array to collect array of prime numbers 
    let arrOfPrime = []
    //
    for (let i = 0; i < arrOfArr.length; i++){
        let arr = primeArr(arrOfArr[i])
        arrOfPrime.push(arr);
    }
    //console.log("arrOfPrime = ",arrOfPrime)
    // iterate through the arrays of prime numbers and return arrays prime factors of the integer that they are smaller than
    let arrOfPrimeFactors = [];
    for (let i = 0; i < arrOfPrime.length; i++){
        let arr = primeFactor(intArr[i],arrOfPrime[i]);
        arrOfPrimeFactors.push(arr);
    }
    console.log("arrOfPrimeFactors = ",arrOfPrimeFactors)
    // sort all the prime factors into their own subarrays and return an array of arrays
    let LCM = lowestcommonmultiple(arrOfPrimeFactors);

    return LCM;
    }



// Define a function that generate an array of numbers smaller than a number
function allNum(num) {
    let arr = []
    for (let i=1; i<=num; i++){
        arr.push(i)
    }
    return arr;
}

// Define a function that screens an array of integers and returns an array of prime numbers
function primeArr(arr) {
    var primeArr = arr.filter(function(num) {
        if (num == 0 || num == 1){
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++ ){
            if (num % i === 0){
                return false;
            }
        } return true;
    })
    return primeArr;
}

// Define a function to check if a number is prime

function prime(num){
    // check if number is less than or equal to 1, as they are not prime
    if (num <= 1){
        return false;
    }
    if (num == 2){
        return true;
    }
    if (num % 2 == 0){
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i+=2){
        if (num % i === 0){
            return false;
        }
    }
return true;
}

//Define a function that takes as argument an integer and an array of prime numbers smaller than the integer, and returns all its prime factors
function primeFactor(integer, primes){
    if (prime(integer) == true){
        return [integer];
    }

    let factors = [];
    for (let i = 0; i < primes.length; i++){
        let quotient = integer;
        while (quotient % primes[i] === 0){
            factors.push(primes[i]);
            quotient = quotient / primes[i];
        }
    }
    return factors;
}

function lowestcommonmultiple(arr) { // e.g .arr = [ [ 3 ], [ 2, 2 ], [ 5 ], [ 2, 3 ], [ 7 ] ]
    // An object to store the maximum frequencies of each value among the subarrays
    let maxFreq = {};
    // A new array to store the result
    let result = [];
    // Loop through the original array
    for (let subarr of arr) { // e.g. subarr = [ 3 ], [ 2, 2 ], [ 5 ], [ 2, 3 ], [ 7 ]
      // An object to store the frequencies of each value in the current subarray
      let subFreq = {};
      // Loop through the current subarray
      for (let num of subarr) { // e.g. num = each number in [2, 2]
        // Increment the frequency of the current value in the current subarray
        subFreq[num] = (subFreq[num] || 0) + 1; // e.g. subfreq = {2:2} because 2 occured twice
      }
      // Loop through the keys of the subarray frequency object
      for (let key in subFreq) {
        // Update the maximum frequency of the current value if it is higher than the previous one
        // Math.max here takes two arguments = maxFreq[key] || 0, and subFreq[key], and returns whichever is higher.
        // the logical OR operator ensures that if maxFreq[key] is undefined, subFreq[key] is compared to 0 instead by Math.max
        maxFreq[key] = Math.max(maxFreq[key] || 0, subFreq[key]);
      }
    }
    // at this point, maxFreq = {3:1, 2:2, 5:1, 7:1}
    console.log(maxFreq);
    // Loop through the keys of the maximum frequency object
    for (let key in maxFreq) {
      // Convert the key to a number
      let num = Number(key);
      // Get the minimum between the maximum frequency and the total frequency of the current value
      let count = maxFreq[key];
      // Push the current value to the result array as many times as the count
      for (let i = 0; i < count; i++) {
        result.push(num);
      }
    }
  
    // Multiply all the values in the result array using the reduce method
    let product = result.reduce((acc, val) => acc * val, 1);

    // Return the product
    return product;
  }

//console.log(smallestCommons([3,7])) // correct LCM = 420
// console.log(smallestCommons([2,6])) // correct LCM = 60
// console.log(smallestCommons([1,5]))
console.log(smallestCommons([2,10])) // incorrect LCM = 2520
// console.log(smallestCommons([1,13])) 