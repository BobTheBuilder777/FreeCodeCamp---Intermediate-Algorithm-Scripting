function diffArray (arr1, arr2) {
  // create an empty array to store the symmetric difference
  const newArr = []
  // loop through the first array
  for (let i = 0; i < arr1.length; i++) {
    // if the current element is not included in the second array
    if (!arr2.includes(arr1[i])) {
      // push the current element to the new array
      newArr.push(arr1[i])
    }
  }
  // loop through the second array
  for (let j = 0; j < arr2.length; j++) {
    // if the current element is not included in the first array
    if (!arr1.includes(arr2[j])) {
    // push the current element to the new array
      newArr.push(arr2[j])
    }
  }
  // return the new array
  return newArr
}
// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
