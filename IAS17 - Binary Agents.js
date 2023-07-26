function binaryAgent(str) {
    // split string into array of 8 digit binary blocks
    let blocks = str.split(/(\d{8})/);
    // check if the block is not a white space, and is not an empty string
    let binary = blocks.filter(block => block !== " " && Boolean(block));    
    // alternative method Use the map method to trim() whitespaces into empty strings, then remove empty strings from arrap using filter(boolean), leaving only the binary bits
    // let binary = blocks.map(block => block.trim()).filter(Boolean); 
    // convert array of binary bits to their corresponding decimal numbers with parseInt(arg1, 2)
    let decimal = binary.map(bit => parseInt(bit, 2));
    // convert array of decimal unicode numbers to array of characters with map(code => String.fromCharCode(code)) method
    let characters = decimal.map(code => String.fromCharCode(code));
    // Join array of characters to form sentence, return array
    let sentence = characters.join("");
  return sentence;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));