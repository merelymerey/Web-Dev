
'use strict';


console.log('hello'.toUpperCase()); 
console.log((3.7).toFixed(0));     


console.log(6.35.toFixed(1));
console.log((6.35 * 10).toFixed(0)); 


function roundTo(num, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}
console.log(roundTo(1.2345, 2)); 
console.log(roundTo(1.235, 2)); 


function checkFinite(value) {
  return isFinite(Number(value));
}
console.log(checkFinite('15'));  
console.log(checkFinite('Inf'));  


console.log(parseInt('100px'));    
console.log(parseFloat('3.14em')); 
console.log(parseInt('0xff', 16)); 
console.log(parseInt('ff', 16));   


function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInt(1, 10)); 


function capitalize(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize('hello world')); 
function checkSpam(str) {
  const lower = str.toLowerCase();
  return lower.includes('viagra') || lower.includes('xxx');
}
console.log(checkSpam('Buy ViAgRa now'));  
console.log(checkSpam('free money'));     


function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}
console.log(truncate('What I want to tell on this topic is:', 20)); // What I want to tell…
console.log(truncate('Hi everyone!', 20));

function extractCurrencyValue(str) {
  return Number(str.slice(1));
}
console.log(extractCurrencyValue('$120')); 
const styles = ['Jazz', 'Blues'];
styles.push('Rock-n-Roll');
styles[Math.floor(styles.length / 2)] = 'Classics';
console.log(styles); 
console.log(styles.shift()); 
styles.unshift('Rap', 'Reggae');
console.log(styles); 
function sumArray(arr) {
  let total = 0;
  for (const item of arr) {
    total += item;
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4, 5])); 
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (const item of arr) {
    partialSum += item;
    if (partialSum < 0) partialSum = 0;
    if (maxSum < partialSum) maxSum = partialSum;
  }
  return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));        
console.log(getMaxSubSum([2, -1, 2, 3, -9]));   
console.log(getMaxSubSum([-1, -2, -3]));             
const users = [
  { name: 'John', age: 25 },
  { name: 'Pete', age: 30 },
  { name: 'Mary', age: 28 },
  { name: 'Jane', age: 16 },
  { name: 'John', age: 15 },
];

const adults = users.filter((u) => u.age >= 18);
console.log(adults.length); 
const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log(sortedByName.map((u) => u.name)); 


const names = users.map((u) => u.name);
console.log(names); 


const totalAge = users.reduce((sum, u) => sum + u.age, 0);
console.log(totalAge); 

function sortByAge(arr) {
  return [...arr].sort((a, b) => a.age - b.age);
}
console.log(sortByAge(users).map((u) => u.age)); 


function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
console.log(shuffle([1, 2, 3])); 
function unique(arr) {
  return [...new Set(arr)];
}
console.log(unique(['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna']));



const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        return this.current <= this.last
          ? { done: false, value: this.current++ }
          : { done: true };
      },
    };
  },
};

console.log([...range]); 
const map = new Map([
  ['name', 'John'],
  ['age', 30],
]);
console.log(map.get('name'));
function uniqueSet(arr) {
  return [...new Set(arr)];
}
console.log(uniqueSet([1, 2, 3, 2, 1])); 
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, val) => sum + val, 0);
}

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(sumSalaries(salaries)); 
function count(obj) {
  return Object.keys(obj).length;
}
console.log(count({ a: 1, b: 2, c: 3 })); 

const { name: firstName, age: years = 25 } = { name: 'Bob' };
console.log(firstName, years); 
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y); 
function topSalary(salariesObj) {
  let maxName = null;
  let maxSalary = 0;
  for (const [name, salary] of Object.entries(salariesObj)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      maxName = name;
    }
  }
  return maxName;
}
console.log(topSalary(salaries)); 
function parseDate(str) {
  const [day, month, year] = str.split('.');
  return new Date(`${year}-${month}-${day}`);
}
console.log(parseDate('30.12.2019')); 
function getSecondsToday() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - startOfDay) / 1000);
}
console.log(getSecondsToday()); 
function daysAgo(date) {
  const diff = Date.now() - date.getTime();
  return Math.round(diff / (1000 * 60 * 60 * 24));
}
console.log(daysAgo(new Date(2025, 0, 1))); 
const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

const jsonString = JSON.stringify(student, null, 2);
console.log(jsonString);

const parsed = JSON.parse(jsonString);
console.log(parsed.courses); 
const room = { number: 23 };
const meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};
room.occupiedBy = meetup; 

const safeJson = JSON.stringify(meetup, (key, value) => {
  return key === 'occupiedBy' ? undefined : value;
}, 2);
console.log(safeJson);
