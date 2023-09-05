function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(
    "Hello I am " + this.name + " and I am " + this.age + " years old."
  );
};

function Employee(name, age, salary, company) {
  Person.bind(this)(name, age);
  this.salary = salary;
  this.company = company;
}

Employee.prototype.congratulate = function () {
  this.salary = this.salary * 1.1;
};

Object.setPrototypeOf(Employee.prototype, Person.prototype);

const eve = new Employee("Eve", 45, 1000, "CHR Huy");
console.log("eve: ", eve);
eve.congratulate();
console.log("eve: ", eve);
