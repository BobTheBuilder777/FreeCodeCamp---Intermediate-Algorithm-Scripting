function whatIsInAName(collection, source) {
// Create an empty array to push the objects into
let array = [];

// Loop through the objects in collection
for (let i = 0; i < collection.length; i++) {
    // Assume that the object matches the source
    let match = true;
    // for each object in collection, loop through the key value pairs
    for (let key in source) {
        // if the key value pair does not match the source key value pair, break out of the loop and continue looping through the collection
        if (collection[i][key] !== source[key]) {
            match = false;
            break;
        }
    };
// if the key value pair matches the source key value pair, push the object into the array
if (match) {
    array.push(collection[i]);
} 
};
// Return array
return array;
}

//console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));