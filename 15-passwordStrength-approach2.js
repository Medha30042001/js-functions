//approach by Venugopal Burli - Doubt Clarification Session
//https://onecompiler.com/javascript/43ztatwhq

function checkPasswordStrength(password){
  
  if(password.length<6){
     console.log('Weak Password');
  }else{
    let letterCount = 0;
    let numberCount = 0;
    let spCharCount = 0;
    for(let i=0; i<password.length; i++){
      if(password[i]>='a'  && password [i] <='z' || password[i]>='A'  && password [i] <='Z'){
        letterCount++;
      }else if(password[i]>=0 && password[i]<=9){
        numberCount++;
      }else{
        spCharCount++;
      }
    }
    if(spCharCount>0)
    {
      console.log('Strong Password');
    } else{
      console.log('Moderate Password');
    } 
  }
}

checkPasswordStrength('Medha@2001');
checkPasswordStrength('Medha');
checkPasswordStrength('Medha2001');

checkPasswordStrength("12345");       // Should return "Weak"
checkPasswordStrength("password");   // Should return "Moderate"
checkPasswordStrength("Pass123!");   // Should return "Strong"


// let firstChar = 'v'; //9 or &

// let lcount = 0;
// let nCount = 0;

// if(firstChar>='a' && firstChar<='z'){
//   lcount++;
// }
// else if(firstChar>=0 || firstchar<=9){
//   nCount++;
// }
// else{
//   spChar++;
// }
// console.log(lcount, nCount, spChar);
