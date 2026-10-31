// Exercise 1: Formatting and Naming
console.log("Exercise 1");
var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
  console.log("The variable is equal to 10.");
}


// Exercise 2: Defining Core Data Types
console.log("Exercise 2");
let courseName = `JavaScript Foundations`;
let gradeAverage = 95.5;
let assignmentComplete = true;

console.log(courseName);
console.log(gradeAverage);
console.log(assignmentComplete);


// Exercise 3: Single-Line Comments
console.log("Exercise 3");

// Stores the current score earned by the student.
let currentScore = 95;
console.log(currentScore);


// Exercise 4: Equality Comparison
console.log("Exercise 4");
console.log('100' == 100);
console.log('100' === 100);


// Exercise 5: Ternary Operator
console.log("Exercise 5");

let isWeekend = false;
let schedule;
schedule = isWeekend === true ? "Day off" : "Work day";
console.log(schedule);


// Exercise 6: If/Else Structure
console.log("Exercise 6");

let userAge = 16;
if (userAge >= 18) {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}


// Exercise 7: Logical AND Operator
console.log("Exercise 7");

let hasPermission = true;
let itemCount = 3;
if (hasPermission === true && itemCount < 5) {
  console.log("Ready to process");
}


// Exercise 8: For Loop
console.log("Exercise 8");

for (let iteration = 1; iteration <= 5; iteration++) {
  console.log(iteration);
}


// Exercise 9: Loop Control
console.log("Exercise 9");

for (let iterationNumber = 0; iterationNumber <= 9; iterationNumber++) {
  if (iterationNumber === 7) {
    break;
  }
  console.log(iterationNumber);
}


// Exercise 10: Ensuring Execution
console.log("Exercise 10");

let counter = 10;
do {
  console.log("Running once");
} while (counter < 10);


// Exercise 11: Function Definition
console.log("Exercise 11");

function calculateArea(width, height) {
  return width * height;
}
let resultArea = calculateArea(5, 10);
console.log(resultArea);


// Exercise 12: Array Manipulation
console.log("Exercise 12");

let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape');
fruitList.shift();
console.log(fruitList);
console.log(fruitList.indexOf('Banana'));


// Exercise 13: Array Copying
console.log("Exercise 13");

let originalData = ['Red', 'Blue', 'Green'];
let clonedData = originalData.slice();
console.log(originalData);
console.log(clonedData);
// slice() makes shallow copy. Nested objects share references.

// Exercise 14: Object Constructor
console.log("Exercise 14");

function Animal(species, sound) {
  this.species = species;
  this.sound = sound;
}
console.log(Animal);


// Exercise 15: Object Instantiation
console.log("Exercise 15");

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];

console.log(animalArray);