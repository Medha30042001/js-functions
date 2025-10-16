//my attempt
//https://onecompiler.com/javascript/43zmy6pbt


function checkPasswordStrength(password){
  if(password.length<6){
    return 'Weak';
  }
  
  let hasLetter = false;
  let hasNumber = false;
  let hasSpecial = false;
  for(let i=0; i<password.length; i++){
    if((password[i]>='a' && password[i]<='z')||(password[i]>='A' && password[i]<='Z')){
      hasLetter = true;
    }
    else if((password[i]>='0' && password[i]<='9')){
      hasNumber = true;
    }
    else{
      hasSpecial = true;
    }
  }
  if((hasLetter && !hasNumber && !hasSpecial)||(hasLetter && hasNumber && !hasSpecial)){
    return 'Moderate';
  }
  if(hasLetter && hasNumber && hasSpecial){
    return 'Strong';
  }
}

console.log(checkPasswordStrength('12345'));
console.log(checkPasswordStrength('password'));
console.log(checkPasswordStrength('Pass123!'));
