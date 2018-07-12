//Intermediate Algorithm Scripting: Map the Debris

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let firstOp = 2 * Math.PI;
  let newArr = [];
 
  let getOrbitalPeriod = function(avgAlt, GM, earthRadius) {
    return Math.round(firstOp * Math.sqrt(Math.pow(avgAlt + earthRadius, 3) / GM));
  };
  
  arr.forEach(el => newArr.push({
    name: el.name,
    orbitalPeriod: getOrbitalPeriod(el.avgAlt, GM, earthRadius)
  }));
  
 return newArr;
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
