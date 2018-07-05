//Intermediate Algorithm Scripting: Steamroller

function steamrollArray(arr) {
  // I'm a steamroller, baby
let flattenedArr = [];
 
function flatten(arr){
  for(let i = 0; i < arr.length; i++){
      !Array.isArray(arr[i]) ? flattenedArr.push(arr[i]) : flatten(arr[i]);
  }
}
  
flatten(arr);
  
return flattenedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);