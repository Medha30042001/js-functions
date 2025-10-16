//my attempt
//https://onecompiler.com/javascript/43zm59b9b

function calculateEnergyBill(unitsConsumed){
  let cost = 0;
  if(unitsConsumed<=100){
    cost = unitsConsumed*5;
  }else if(unitsConsumed>100 && unitsConsumed<=200){
    cost = 500 + ((unitsConsumed-100)*8);
  }else cost = 500 + 800 + ((unitsConsumed-200)*10) + 100;
  return cost;
}

let units = require('fs').readFileSync(0, 'utf-8').trim();
console.log(calculateEnergyBill(parseInt(units, 10)));
