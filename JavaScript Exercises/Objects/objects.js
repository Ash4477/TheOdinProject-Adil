// Object Basics

// Create
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },

    // simpler syntax
    bio() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
      },
      introduceSelf() {
        console.log(`Hi! I'm ${this.name[0]}.`);
      },
};

// Access

// Dot Notation
person.age;
person.bio();

// Bracket Notation
person["age"];
person["name"]["first"];
