class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      "Hello I am " + this.name + " and I am " + this.age + " years old."
    );
  }
}

class Employee extends Person {
  constructor(name, age, salary, company) {
    super(name, age);
    this.salary = salary;
    this.company = company;
  }

  congratulate() {
    this.salary = this.salary * 1.1;
  }
}

const eve = new Employee("Eve", 45, 1000, "CHR Huy");
console.log("eve: ", eve);
eve.congratulate();
console.log("eve: ", eve);
