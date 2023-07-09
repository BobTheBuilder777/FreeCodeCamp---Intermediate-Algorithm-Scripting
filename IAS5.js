function spinalCase(str) {
  // split the string by whitespaces underscores hyphens or capital letters, and return an array
  let words = str.split(/[\s_-]+|(?=[A-Z])/)
  console.log(words);
  // convert all words to lowercase
  let lowerWords = words.map(word => word.toLowerCase());
  console.log(lowerWords);
  // join the words with hyphens
  let spinalTap = lowerWords.join("-")
  console.log(spinalTap);
  // return the string
  return spinalTap;
}

spinalCase('This Is Spinal Tap');