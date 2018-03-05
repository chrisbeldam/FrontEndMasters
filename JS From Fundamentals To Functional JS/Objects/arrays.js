var person = []; // Arrays are objects so .dot notation works the same way as objects
// person.name = "Mrs White";

// var who = person.name;

// console.log(who);

// typeof person === "object"; // Would return true, as an array is an object

var plea = "wouldShe";
person.name = "Mrs White";
person["plea"] = "I would never";
person.plea; // You can use dot notation to look up something you made with bracket notation
console.log(person.plea);