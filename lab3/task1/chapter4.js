// Chapter 4: Objects: The Basics
// javascript.info — Section 4

'use strict';

// ─── 4.1 Objects ─────────────────────────────────────────────────────────────
// Task: Create a user object with properties and methods.
const user = {
  name: 'John',
  surname: 'Smith',
  age: 30,
};

// Add a fullName computed property:
user.fullName = `${user.name} ${user.surname}`;
console.log(user.fullName); // John Smith

// Delete a property:
delete user.age;
console.log(user); // { name: 'John', surname: 'Smith', fullName: 'John Smith' }

// Check if a property exists:
console.log('age' in user);  // false
console.log('name' in user); // true

// Iterate over properties:
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// ─── 4.2 Object References and Copying ───────────────────────────────────────
// Task: Demonstrate that objects are copied by reference.
const original = { value: 1 };
const copy = original;
copy.value = 42;
console.log(original.value); // 42 — same object!

// Shallow clone using spread:
const clone = { ...original };
clone.value = 100;
console.log(original.value); // 42 — now independent

// ─── 4.4 Object Methods, "this" ──────────────────────────────────────────────
// Task: Create a calculator object with methods.
const calculator = {
  value: 0,

  read() {
    // In a real browser this would use prompt(); here we simulate:
    this.value = 5;
  },

  sum() {
    return this.value + this.value;
  },

  mul() {
    return this.value * this.value;
  },
};

calculator.read();
console.log(calculator.sum()); // 10
console.log(calculator.mul()); // 25

// Task: Chain methods (ladder object).
const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().up().down().showStep(); // 2

// ─── 4.5 Constructor, Operator "new" ─────────────────────────────────────────
// Task: Create a constructor function Calculator with add and subtract methods.
function Calculator() {
  this.read = function () {
    this.a = 10;
    this.b = 5;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

const calc = new Calculator();
calc.read();
console.log(calc.sum()); // 15
console.log(calc.mul()); // 50

// Task: Accumulator constructor.
function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    // Simulated: in browser would use prompt()
    const input = 7;
    this.value += input;
  };
}

const acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value); // 15 (1 + 7 + 7)

// ─── 4.6 Optional Chaining '?.' ──────────────────────────────────────────────
// Task: Safely access nested object properties.
const person = {
  name: 'Alice',
  address: {
    city: 'Almaty',
  },
};

console.log(person?.address?.city);   // Almaty
console.log(person?.phone?.number);   // undefined (no error)

// ─── 4.7 Symbol Type ─────────────────────────────────────────────────────────
// Symbols are unique identifiers.
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // false — every Symbol is unique

// ─── 4.8 Object to Primitive Conversion ──────────────────────────────────────
// Task: Implement [Symbol.toPrimitive] for an object.
const money = {
  amount: 100,
  currency: 'USD',

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.amount;
    if (hint === 'string') return `${this.amount} ${this.currency}`;
    return this.amount;
  },
};

console.log(+money);        // 100
console.log(`${money}`);    // 100 USD
console.log(money + 50);    // 150
