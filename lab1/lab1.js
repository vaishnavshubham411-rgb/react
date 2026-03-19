class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displaydetails(course, sem) {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Course: " + course); // use parameter directly
        console.log("Sem: " + sem);       // use parameter directly
    }
}

const student1 = new Person("Alice", 20);
student1.displaydetails("Computer Science", 4);