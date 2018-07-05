//Intermediate Algorithm Scripting: Drop it

function dropElements(arr, func) {
  // Drop them elements.
let count = arr.length;
for(let i = 0; i < count; i ++){
 if(!func(arr[0])){
   arr.shift();
 }
}
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });