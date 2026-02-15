

'use strict';



let myName = 'Alice';
let myAge = 21;
console.log(myName, myAge); 


let a = 'Hello';
let b = 'World';
let temp = a;
a = b;
b = temp;
console.log(a, b); 


function toSeconds(hours, minutes) {
  return hours * 3600 + minutes * 60;
}
console.log(toSeconds(1, 30)); 


console.log(5 > 4);        
console.log('apple' > 'pineapple'); 
console.log('2' > '12');   
console.log(undefined == null); 
console.log(undefined === null); 
console.log(null == '\n0\n');    
console.log(null === +'\n0\n');  


function showSign(number) {
  if (number > 0) {
    console.log(1);
  } else if (number < 0) {
    console.log(-1);
  } else {
    console.log(0);
  }
}
showSign(5); 
showSign(-3);
showSign(0);  


function signTernary(number) {
  return number > 0 ? 1 : number < 0 ? -1 : 0;
}
console.log(signTernary(10)); 


function checkAge(age) {
  return age >= 14 && age <= 90;
}
console.log(checkAge(20));
console.log(checkAge(5));  


console.log(null || 2 || undefined); 
console.log(1 && null && 2);         
console.log(null || 2 && 3 || 4);  


let userInput = null;
let displayName = userInput ?? 'Anonymous';
console.log(displayName);


for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}


function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let num = 2;
while (num <= 30) {
  if (isPrime(num)) console.log(num);
  num++;
}


function switchDemo(value) {
  switch (value) {
    case 0:
      console.log('zero');
      break;
    case 1:
      console.log('one');
      break;
    case 2:
    case 3:
      console.log('two or three');
      break;
    default:
      console.log('other');
  }
}
switchDemo(2); 

function min(x, y) {
  return x < y ? x : y;
}
console.log(min(2, 5)); 
console.log(min(3, 3)); 


function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 10)); 


const minExpr = function (x, y) {
  return x < y ? x : y;
};
console.log(minExpr(4, 6)); 


const minArrow = (x, y) => (x < y ? x : y);
console.log(minArrow(7, 3)); 

const double = (n) => n * 2;
console.log(double(5));
