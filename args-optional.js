//Intermediate Algorithm Scripting: Arguments Optional

function addTogether() {

  let params = [].slice.call(arguments);

  if(!params.every(function(param){
    return typeof param === "number";
  })){
    return undefined;
  } else {
    if(params.length > 1){
      return params.reduce((a,b)=> a+b);
    } else {
      let first = params[0];
      return function(second){
        if(typeof second !== "number"){
          return undefined;
        } else {
          return first + second;
        }
      }
     
    }
  }
  
}

addTogether(2)([3]);