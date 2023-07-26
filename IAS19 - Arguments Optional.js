function addTogether(first, second) {
    // if no arguments are passed, return undefined
    if (arguments.length === 0) {
      return undefined;
    }
    // if only one argument is passed and it is a finite number, return a new function
    if (arguments.length === 1 && Number.isFinite(first)) {
      return function(second) {
        // if the second argument is also a finite number, return the sum of both
        if (Number.isFinite(second)) {
          return first + second;
        }
        // otherwise, return undefined
        else {
          return undefined;
        }
      };
    }
    // if two arguments are passed and both are finite numbers, return their sum
    if (arguments.length === 2 && Number.isFinite(first) && Number.isFinite(second)) {
      return first + second;
    }
    // otherwise, return undefined
    else {
      return undefined;
    }
  }

  //console.log(addTogether(2,3));
  let x = addTogether(2)
  console.log(x(3));