// Initialize an empty array to store colors
let favoriteColors = [];

// Use a loop to collect 3 color preferences from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter color #${i + 1}:`);
    favoriteColors.push(color);  // Add the new color to the array
    console.log(`Updated color list: ${favoriteColors}`);
}
