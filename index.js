// Your code here
class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

  speak() {
    return `${this.name} says meow!`
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

  speak() {
    return `${this.name} says woof!`
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

<<<<<<< HEAD
  speak() {
    if (this.sex == "male") {
      return `It's me! ${this.name}, the parrot!`
    } else {
      return `${this.name} says squawk!`
    }
  }
}
=======
 
>>>>>>> 022714d8cd43e9b27e152ec64f51503fa7f7b067
