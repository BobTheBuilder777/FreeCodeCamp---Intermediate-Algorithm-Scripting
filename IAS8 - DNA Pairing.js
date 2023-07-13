/*how can i use javascript to split a string into an array of arrays, each of the subarray should contain one element of the the original string.
I will then loop through the array and arrays, and pair each nucleotide with its base pair*/
// ("GCG") --> [[G], [C], [G]] --> [[G, C], [C, G], [G, C]]
function pairElement(str) {
  // split the string into an array of characters
  var arr = [...str];
  // split the array of characters into an array of arrays, where each array contains a character and its pair
  var arr2 = arr.map(x =>[x]);
  // loop through the array of arrays
  for (let i = 0; i < arr2.length; i++) {
  // if the character is G, push C into the subarray
    if (arr2[i][0] === "G") {
      arr2[i].push("C");
    } 
  // if the character is C, push G into the subarray
    else if (arr2[i][0] === "C") {
      arr2[i].push("G");
    }
  // if the character is A, push T into the subarray
    else if (arr2[i][0] === "A") {
      arr2[i].push("T");
    }
  // if the character is T, push A into the subarray
    else if (arr2[i][0] === "T") {
      arr2[i].push("A");
    }
  }
    return arr2;
  }
  
  console.log(pairElement("GCG"));
  console.log(pairElement("ATCGA"));

