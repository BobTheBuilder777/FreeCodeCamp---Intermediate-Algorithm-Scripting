function convertHTML(str) {
    // define a regular expression of characters to be replaced
    var htmlEntities = /[&<>"']/g;

    // Define a callback function to be used to replace each matched character to their corresponding HTML entities
    // if the match is & then then the value of entity[match] is &amp; and so on
    var callback = function(match) {
        var entity = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&apos;'
        };
        return entity[match];
    }
    // use the replace method to replace each matched character with its corresponding HTML entity
    str = str.replace(htmlEntities, callback);

    return str;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));