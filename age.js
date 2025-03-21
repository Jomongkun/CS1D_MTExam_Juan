//the user to enter their age
let age = prompt("Enter your age:");

//input the number
age = Number(age);

// Check the user's age category using conditional statements
let category;

if (age < 5) {
    category = "Toddler (under 5 years)";
} else if (age >= 5 && age <= 12) {
    category = "Child (5-12 years)";
} else if (age >= 13 && age <= 19) {
    category = "Teenager (13-19 years)";
} else if (age >= 20 && age <= 35) {
    category = "Young Adult (20-35 years)";
} else if (age >= 36 && age <= 60) {
    category = "Middle-Aged (36-60 years)";
} else {
    category = "Senior (over 60 years)";
}

// Log the appropriate category message
console.log(`
    Enter your age: ${age}
    You belong to the category: ${category}`);