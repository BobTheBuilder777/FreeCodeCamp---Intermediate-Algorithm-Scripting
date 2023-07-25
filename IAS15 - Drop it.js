function dropElements(arr, func) {
    // create a copy of the original array
    let remArr = arr.slice();
    // iterate as many times as there are elements in the original array
    for (let element of arr){
        // for the first element that evaluates to true, return the remaining elements
        if (func(remArr[0]) == true){
            return remArr;
        }
        // otherwise, remove the current first element of the copy array
        else{
            remArr.shift();
        }
    }
    // if non of the elements evaluated to true, all of the elements will have been removed and the coy array will be empty. return the empty array
    return remArr;
  }
  
  //console.log(dropElements([1, 2, 3], function(n) {return n < 3; }));
  //console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
  //console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
  console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));