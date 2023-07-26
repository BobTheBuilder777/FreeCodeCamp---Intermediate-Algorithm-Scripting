function orbitalPeriod(arr) {
    /*
    Kepler's third Law to calculate orbital period T = 2 * pi * sqrt(a**3 / GM); const GM = 398600.4418; const earthRadius = 6367.4447; a = earthRadius + avgAlt
    */ 
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const pi = Math.PI;
    for (let obj of arr){
        const a = earthRadius + obj.avgAlt;
        let T = Math.round(2 * pi * Math.sqrt(a**3 / GM));
        // create a new key orbitalPeriod, and set its value to T
        obj["orbitalPeriod"] = T;
        // delete the avgAlt property
        delete obj["avgAlt"];
    }
    return arr;
  }
  
 // console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))