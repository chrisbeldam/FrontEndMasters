// // Create an object using bracket and dot notation that represents characters and related data from cludeo

// var cluedo = {};

// cluedo.murderer = "??";
// cluedo["weapons"] = ["Gun","Laser","Bomb"];
// cluedo.characters = ["Miss Scarlet","Colonel Mustard"];

// cluedo.murdered = "You!!";

// cluedo.suspects = ["Mr Green", "Mrs White"];
// console.log(cluedo);

// var secret = {}

// secret.message = "This is a secret";
// secret.person = "Me";

// console.log(secret);

// var person = {
    
// };

// person.name = "Chris";
// person.age = 20;
// person.gender = "Male";

// console.log(person);

function person(age, gender, name) {
    this.age = age;
    this.gender = gender;
    this.name = "Name";
}

var me = new person(12, "Male","Chris");
console.log(me);