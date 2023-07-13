/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.*/ 

// this solution uses a for loop to iterate over the array and add the numbers between the two numbers in the array
function sumAll(arr) {
    let sum = 0; // initialize a variable to hold the sum of the numbers
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) { // Math.min(...arr) returns the smallest number in the array, Math.max(...arr) returns the largest number in the array
      sum += i; 
    }
    return sum;
  }
  
  sumAll([1, 4]);