// Intermediate Algorithm Scripting: Sum All Primes

function sumPrimes(num) {
  let sum = 0;
  let checkPrimeNum = function(i){
    for(let j = 2; j < i ; j++){
      if(i % j === 0){
        return false;
      }
    }
    return true;
  }
    for(let i = 2; i <= num; i++){
       if(checkPrimeNum(i)){
         sum += i;
       }
  }
  
  return sum;
}

sumPrimes(10);