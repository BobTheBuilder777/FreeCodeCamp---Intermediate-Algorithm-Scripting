// This is a function that takes an array and removes all elements that match the given arguments.
function destroyer(arr) {
// create an array to store the arguments. The first argument is an array, the rest are the elements to remove.
    const args = Array.from(arguments);
    // create a separate array for the elements to remove
    const remove = args.slice(1);
    // create a separate array for the first element which is the array to remove elements from
    // let filtered = args[0]; // this works the same as the line below
    let filtered = arr;
    // loop through the array and remove the elements from the array
    for (let i = 0; i < remove.length; i++) {
        filtered = filtered.filter(element => element !== remove[i]);
    }
// return the filtered array
return filtered;
  }
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));