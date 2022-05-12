/*## Return of the Closets

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript*/
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
/*```

### Alien Attire
1. Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

### Dress 'em Up
1. Let's create some outfits for both Kristyn and Thom. Select 3 elements from `kristynsCloset` and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using `thomsCloset`. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)*/

let kristyShoe = kristynsCloset.shift();
console.log(kristyShoe);

thomsCloset[2].push(kristyShoe);

for(let i = 0; i<thomsCloset.length;i++){
  for(let j = 0; j<thomsCloset[i].length; j++)
  console.log(thomsCloset[i][j]);
}

let sentence = "Kristyn is wearing "+ kristynsCloset[1] + " with " + kristynsCloset[2] + " and " + kristynsCloset[4];
console.log(sentence);

let sentence2 = "Thom is wearing "+ thomsCloset[0][0] + " with " + thomsCloset[1][1] + " and " + thomsCloset[2][2];
console.log(sentence2);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let item1 = thomsCloset[Math.floor(getRandomInt(10) % 3)][Math.floor(getRandomInt(10) % 3)];


let item2 = thomsCloset[Math.floor(getRandomInt(10) % 3)][Math.floor(getRandomInt(10) % 3)];


let item3 = thomsCloset[Math.floor(getRandomInt(10) % 3)][Math.floor(getRandomInt(10) % 3)];

let outfit = "Thom is wearing " + item1 + " with some " + item2 + " and " + item3;
console.log(outfit);

/*### Dirty Laundry
Continue looking at the closet arrays:
1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

### Inventory
2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.*/

  
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + kristynsCloset[i]);

}
console.log(thomsCloset[0] + thomsCloset[1] + thomsCloset[2])

