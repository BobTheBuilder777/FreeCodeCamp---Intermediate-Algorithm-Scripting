// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.    

function uniteUnique() {
    //create an empty array to store the final result.
    var finalArray = [];
    //loop through the arguments object to make the program work with two or more arrays instead of one.
    for (var i = 0; i < arguments.length; i++) {
        var arrayArguments = arguments[i];
        //loop through the current array
        for(var j = 0; j < arrayArguments.length; j++) {
            // if the value is not already in the final array (returns -1), push into the final array.
            if ((finalArray.indexOf(arrayArguments[j]) === -1)) {
                finalArray.push(arrayArguments[j]);
            }
        }
    }
    return finalArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));