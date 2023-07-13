/*I want to write a program that takes one argument. The argument is a string of lower case letters in alphabetical order. One or more letters may be missing. The
program should return the missing letters. If no letters are missing, the program should return undefined */

function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"; // initialize a variable to hold the alphabet
    let missing; // initialize a variable to hold the missing letters
    // get the starting index of the string in the alphabet list. For example , if the string is stvwx, the starting index is 18
    let index = alphabet.indexOf(str[0]);
    // loop through the string
    for (let i = 0; i < str.length; i++) { 
      // if the current letter is not equal to the letter in the alphabet at the current index
      if (str[i] !== alphabet[index]) {
        // assign the missing letter to the missing variable
        missing = alphabet[index];
        // break out of the loop and return the missing letter
        return missing;
      }
      else {
        // increment the value of index to check the next letter
        index++;
      }
    }
    // if no letters are missing, return undefined
    return undefined;
  }
  
  //console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("stvwx"));