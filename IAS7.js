/*
i want to write a javascript function that takes 3 arguments. the first is a sentence, the second is a word that may or may not be present in the sentence, 
and the third is the word that all occurences in the sentence should be replaced with. The third argument should preserve the case of the word that it is replacing.
*/
function myReplace(str, before, after) {
    // use the replaceAll method to replace all occurences of the before argument with the after argument
    // the after argument is the return value of a function that takes the match as an argument
  return str.replaceAll(before, function(match) {
    // check if the first letter of the match is uppercase. Returns true or false. match is the value of the before argument, specified by the replaceAll method
    if (match[0] === match[0].toUpperCase()) {
        // If previous condition is true, return the first letter of the after argument capitalized and concatenated with the rest of the after argument
        return after[0].toUpperCase() + after.slice(1);
    }
    // If previous condition is false (meaning the before argument is lower case), return the after argument as lower case
    else {
      return after[0].toLowerCase() + after.slice(1);
    }
});
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("I think we should look up there", "up", "Down"));