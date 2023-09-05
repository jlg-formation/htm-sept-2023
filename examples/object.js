"use strict";

var obj = {
  toto: 123,
  titi: 34,
  tutu: false,
  tata: "12",
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(
    "Hello I am " + this.name + " and I am " + this.age + " years old."
  );
};

const charly = {};
Object.setPrototypeOf(charly, Person.prototype);
Person.bind(charly)("Charly", 25);

charly.sayHello();

const alice = new Person("Alice", 14);
alice.sayHello();
console.log("alice: ", alice);
const bob = new Person("Bob", 19);
console.log("bob: ", bob);
bob.sayHello();

console.log(bob.sayHello === alice.sayHello);
console.log(Object.getPrototypeOf(bob) === Object.getPrototypeOf(alice));
