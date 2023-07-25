function steamrollArray(arr) {
    let newArr = []
    // loop through every element of the array and ...
    for (let element of arr){
        // if the element is an array, use recursion to call the function again, which will return a one level deep array and concatenate it with the newArr array
        // concat means to join the elements of two arrays into a single array, so [1, 2] and [3, 4] will become [1, 2, 3, 4] when concatenated
        if (Array.isArray(element)){
            newArr = newArr.concat(steamrollArray(element));
        }
        // if the element is not a function, push the element into the new array
        else(
            newArr.push(element)
        )
    }
    return newArr;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));