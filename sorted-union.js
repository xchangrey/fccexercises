// Sorted Union

function uniteUnique(arr) {
  let argsArray = Array.prototype.slice.call(arguments);
  let combinedArray = argsArray.reduce((acc, currVal) => acc.concat(currVal.filter(function(el){
    return acc.indexOf(el) == -1;
  })));
  
  return combinedArray;

}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);