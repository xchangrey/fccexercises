//JavaScript Algorithms and Data Structures Projects: Cash Register

function checkCashRegister(price, cash, cid) {
let output = {status: null, change:[]};
const change = cash - price;
const cashRegister = cid.reduce((total, item) =>{
    total.total += item[1];
    total[item[0]] = item[1];
    return total;
},{total:0});
  
if(cashRegister.total === change) {
    output["status"] = "CLOSED";
    output["change"] = cid;
    return output;
}
  
if(cashRegister.total < change) {
  output.status = "INSUFFICIENT FUNDS";
  return output;
}
  
if(cashRegister.total > change) {
  output.status = "OPEN";
  output.change = cashRegister.sort((a, b) =>{
   let first = a.
  });
}

  // Here is your change, ma'am.

}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);



