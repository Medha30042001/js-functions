//my attempt
//https://onecompiler.com/javascript/43zmwffyh

function greetUser(userName){
  let user = userName;
  if(!userName){
    user = 'Guest';
  }
  console.log('Hello, ' + user);
}

let name = require('fs').readFileSync(0, 'utf-8').trim();
greetUser(name);
