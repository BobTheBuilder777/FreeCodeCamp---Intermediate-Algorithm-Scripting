function translatePigLatin (str) {
  // check if first character is a consonant. [^aeiou] means any character that is not aeiou
  // Store the first consonant or consonant cluster in a an array "result"
  var regex = /^[^aeiou]+/i;
  var result = str.match(regex);
  // if first character is a consonant, remove it and any other consonants adjacent to it, add the stored consonant cluster to the end of string, add "ay" to the end
  if (result != null) {
    var newWord = str.replace(result[0], "") + result[0] + "ay";
    console.log(newWord);
  } // if it is a vowel, add "way" to the end of the string
  else {
    newWord = str + "way";
    console.log(newWord);
  }
  return newWord;
  }

// translatePigLatin("consonant");
translatePigLatin("glove");