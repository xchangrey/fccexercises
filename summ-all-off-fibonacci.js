// Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  let next = 1;
  let prev = 0;
  let fiboArr = [];
  for(let i = 0; i < num; i++){
    let curr = prev + next;
    prev = next;
    next = curr;
    if(curr % 2 !== 0 && curr <= num){
      fiboArr.push(curr);
    }
  }
 let final = fiboArr.reduce((a, b)=> (a+b));
  return final + 1;
}

sumFibs(1000);


// Sorted Union

function uniteUnique(arr) {
  let argsArray = Array.prototype.slice.call(arguments);
  let combinedArray = argsArray.reduce((acc, currVal) => acc.concat(currVal.filter(function(el){
    return acc.indexOf(el) == -1;
  })));
  
  return combinedArray;

}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);


