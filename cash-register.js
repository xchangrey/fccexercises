//JavaScript Algorithms and Data Structures Projects: Cash Register
let money = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  
let output = {status: null, change:[]};
  
let change = cash - price;
  
let cashRegister = cid.reduce((total, item) =>{
    total.total += item[1];
    total[item[0]] = item[1];
    return total;
},{total:0});
    
  if(cashRegister.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  
  if(cashRegister.total < change) {
    output.status = "INSUFFICIENT__FUNDS";
  }
  
let result = money.reduce((acc, curr) => {
 let currentValue = 0;
  
  while(cashRegister[curr.name] > 0 && change >= curr.val) {
    change -= curr.val;
    cashRegister[curr.name] -= curr.val;
    currentValue += curr.val;
    change = Math.round(change*100)/100;
  }
  
  if(currentValue > 0) {
    acc.push([curr.name, currentValue])
  }
  
  return acc;
  
}, []);
  
  
  if(result.length < 1 || change > 0){
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  
  // Here is your change, ma'am.
  
  output.status = "OPEN";
  output.change = result;
  return output;
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



