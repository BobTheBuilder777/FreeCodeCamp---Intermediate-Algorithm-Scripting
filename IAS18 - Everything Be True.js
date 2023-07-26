function truthCheck(collection, pre) {
    let allTrue = collection.every(obj => Boolean(obj[pre]))

  return allTrue;
}

console.log(truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot"));