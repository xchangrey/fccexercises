//Intermediate Algorithm Scripting: Steamroller

function steamrollArray(arr) {
  // I'm a steamroller, baby
let flattenedArr = [];
 
function flatten(arr){
  for(let i = 0; i < arr.length; i++){
    if(!Array.isArray(arr[i])){
      flattenedArr.push(arr[i]);
    } else {
      flatten(arr[i]);
    }
  }
 }
  
flatten(arr);
  
return flattenedArr;
}

steamrollArray([1, [2], [3, [[4]]]]);