//my attempt
//https://onecompiler.com/javascript/43zmxhsnx

function calculateFinalPrice(orderAmount, discountCode){
  if(orderAmount<500){
    return 'Please add tems of Rs.' + (500-orderAmount) + ' to get discount'
  }
  let finalPrice = 0;
  if(discountCode==='SAVE10'){
    finalPrice = orderAmount*(1-(10/100));
  }else if(discountCode==='SAVE20'){
    finalPrice = orderAmount*(1-(20/100));
  }
  return finalPrice;
}
console.log(calculateFinalPrice(1000, 'SAVE10'));
console.log(calculateFinalPrice(2000, 'SAVE20'));
console.log(calculateFinalPrice(150));
