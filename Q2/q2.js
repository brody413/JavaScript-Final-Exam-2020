// JavaScript Document

// creating a person class object
class Person {
  constructor(name, age, gender, interests) {
    // insantce variables
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

// gives a greeting message
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

// gives a goodbye message
  bye() {
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}


// creating Person objects
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);

// creating a new Teacher object class that extends from the person class
class Teacher extends Person {
  constructor(name, age, gender, interests, subject, grade) {
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}

let Brody = new Teacher('Brody', '19', 'male', ['Programming', 'Sports'], 'JaveScript', 'I Dont Know My Grade',);
