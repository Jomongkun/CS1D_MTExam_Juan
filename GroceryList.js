// Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    // Ask for the number of items in the list
    let itemCount = Number(prompt("Enter the number of items to add to the grocery list:"));

    // Create an empty array to store grocery items
    let groceryList = [];

    // Loop to collect the items
    for (let i = 0; i < itemCount; i++) {
        let item = prompt(`Enter item ${i + 1}:`);
        groceryList.push(item);
    }

    // Create sorted and reversed versions of the grocery list
    let groceryList_Sort = [...groceryList].sort(); // Sort alphabetically
    let groceryList_Reverse = [...groceryList].reverse(); // Reverse order

    // Display all lists using alert
    alert(`Original List: ${groceryList.join(", ")}\nSorted List: ${groceryList_Sort.join(", ")}\nReversed List: ${groceryList_Reverse.join(", ")}`);
} else {
    alert("No grocery list created.");
}
