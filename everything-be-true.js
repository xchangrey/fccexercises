//Intermediate Algorithm Scripting: Everything Be True
function truthCheck(collection, pre) {
  // Is everyone being true?
  let mapped = collection.map(obj => obj[pre]);
  let isTrue = bol => bol ? true : false;
  return mapped.every(isTrue);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");