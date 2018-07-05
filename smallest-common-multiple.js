// Intermediate Algorithm Scripting: Smallest Common Multiple

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let arrOfNums =[];
  
  for(let i = min; i <= max; i++){
      arrOfNums.push(i);
  }
  
  //Using Euclid's algo
 let gcd = (a, b) => b === 0 ? a : gcd(b, a%b);

 let leastCommonMult = arrOfNums[0];
 for(let j = 1; j < arrOfNums.length; j++){
   let greatest = gcd(leastCommonMult, arrOfNums[j]);
   leastCommonMult = (leastCommonMult * arrOfNums[j]) / greatest;
 }
  return leastCommonMult;
}


smallestCommons([18,23]);