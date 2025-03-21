// Collect user information 
let user = {
    fullName: prompt("Full Name:"),   // user's full name
    age: prompt("Age:"),              // user's age
    favoriteNumber: prompt("Favorite Number:"), // user's favorite number
    favoriteColor: prompt("Favorite Color:")  // user's favorite color
};

// Display the collected user information
console.log(`
    Full Name: ${user.fullName}
    Age: ${user.age}
    Favorite Number: ${user.favoriteNumber}
    Favorite Color: ${user.favoriteColor}
`);