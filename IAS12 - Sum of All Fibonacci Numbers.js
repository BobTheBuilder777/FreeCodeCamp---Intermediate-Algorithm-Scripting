function sumFibs(num) { 
  // the first 10 fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
  // create an array to store all fibonacci numbers smaller than num
  var current = 0;
  var next = 1;
  var fib = [];

  // continue as long as current number is smaller than num
  while (current <= num) { 
    // insert current number into array
    fib.push(current);
    // if next number is smaller than num
    if (next <= num) {
      fib.push(next);
    }
    // update current to equal to the sum of current and next
    current = current + next; 
    // update next to equal to the sum of the new current number and the previous next number
    next = current + next;
    }
    // filter out all the even fibonacci numbers
    // The reduce method applies a conditional statement to each element in the array. If the element passes the condition, it is added to the new array. If it does not pass the condition, it is not added to the new array.
    var oddFib = fib.filter(val => {return val % 2 !== 0});

    // sum odd fibonacci numbers in the array
    // The reduce method takes two arguments: a callback function and an initial value. Here the callback function takes two arguments: total and num. The initial value is 0. 
    var sum = oddFib.reduce(function(total, num) {return total + num;}, 0)

  return sum;
}

console.log(sumFibs(4));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));