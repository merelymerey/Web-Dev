'use strict';

const user = {
  name: 'John',
  surname: 'Smith',
  age: 30,
};

user.fullName = `${user.name} ${user.surname}`;
console.log(user.fullName);

delete user.age;
console.log(user);

console.log('age' in user);
console.log('name' in user);

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

const original = { value: 1 };
const copy = original;
copy.value = 42;
console.log(original.value);

const clone = { ...original };
clone.value = 100;
console.log(original.value);

const calculator = {
  value: 0,

  read() {
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
console.log(calculator.sum());
console.log(calculator.mul());

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

ladder.up().up().up().down().showStep();

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
console.log(calc.sum());
console.log(calc.mul());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    const input = 7;
    this.value += input;
  };
}

const acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value);

const person = {
  name: 'Alice',
  address: {
    city: 'Almaty',
  },
};

console.log(person?.address?.city);
console.log(person?.phone?.number);

const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2);

const money = {
  amount: 100,
  currency: 'USD',

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.amount;
    if (hint === 'string') return `${this.amount} ${this.currency}`;
    return this.amount;
  },
};

console.log(+money);
console.log(`${money}`);
console.log(money + 50);
