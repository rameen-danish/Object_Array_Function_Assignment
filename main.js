#! usr/bin/env node
//Rameen Rashid
//29-5-2024
//                                      ***Object , Array and Function Assignment***
console.log("\n \t \t \t ***Object , Array and Function Assignment***");
/*Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure.
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list.*/
console.log("\n Assignment 1: Building Your Friend List");
let people = {
    friends: []
};
let friend1 = {
    firstName: "Rameen",
    lastname: "Rashid",
    id: 123
};
let friend2 = {
    firstName: "Areeba",
    lastname: "Majid",
    id: 134
};
let friend3 = {
    firstName: "Zaeema",
    lastname: "Zia",
    id: 145
};
people.friends.push(friend1, friend2, friend3); //adding friend object to the friends array within the people object
console.log(people);
/*Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".*/
console.log("\n Assignment 2:Manipulating an Array: Rearranging Words \n");
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]; //scrambled array which was given in question
scrambledArray.splice(2, 4); //start from index 2 and delete 4 elements (treu,123,am,a)
scrambledArray.pop(); //remove "I" from array
scrambledArray.unshift("I"); // add "I" on starting af an array
scrambledArray.splice(1, 0, "am", "a"); //add "am" and "a" on index 1 of an  array
let join = scrambledArray.join(" "); //converts array into a single string 
console.log(`"${join}"`); // print desired output
/*Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
console.log("\n Assignment 3: Company Product Catalog \n");
const inventory = [];
let mobile = {
    name: "Tecno",
    model: "Camoni7",
    cost: 50000,
    quantity: 50
};
let laptop = {
    name: "HP",
    model: "Zbook",
    cost: 80000,
    quantity: 30
};
let airpods = {
    name: "AirBud",
    model: "Audionic 550",
    cost: 10000,
    quantity: 100
};
inventory.push(mobile, laptop, airpods);
console.log("Products in Inventory:", inventory);
console.log("\n Quantity of the third product:", inventory[2].quantity);
//add more product to the ineventory
let tablet = {
    name: "Apple iPad",
    model: "Air 5",
    cost: 152999,
    quantity: 40
};
inventory.push(tablet);
console.log("\n Adding more products to the inventory:", inventory[3]);
console.log("\n Current Inventory", inventory);
//increase the cost of 1st product in the inventory
inventory[0].cost += 10000;
console.log("\n Increase the cost of 1st product in the inventory:", inventory[0]);
//Removing 
let removedProduct = inventory.splice(1, 1);
console.log("\n Product is removed from the ineventory:", removedProduct);
console.log("\n Current Inventory", inventory);
/*Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/
console.log("\n Assignment 4: Student List Organizer \n");
;
//Student List
const students = [
    { name: "Abeeha", seniorStatus: true, assignmentCompleted: true },
    { name: "Rameen", seniorStatus: true, assignmentCompleted: true },
    { name: "Iqra", seniorStatus: false, assignmentCompleted: true },
    { name: "Zaeema", seniorStatus: false, assignmentCompleted: false },
    { name: "Areeba", seniorStatus: true, assignmentCompleted: true },
    { name: "Bismah", seniorStatus: false, assignmentCompleted: false },
];
console.log("\n Student List:", students);
//Find Senior students with Assignment
console.log("\n List of senior students who completed their assignments:");
students.forEach(function (findSeniorStudent) {
    if (findSeniorStudent.seniorStatus === true && findSeniorStudent.assignmentCompleted === true) {
        console.log(`${findSeniorStudent.name} is a senior student and she completed all her assignments.`);
    }
});
//Class List Update:
console.log("\n Update Class List:");
students.forEach(function (removeStudent) {
    if (removeStudent.seniorStatus === true && removeStudent.assignmentCompleted === true) {
        console.log(removeStudent);
    }
});
export {};
