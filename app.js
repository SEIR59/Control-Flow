// Easy Going

for (let i = 1; i < 21; i++)
    console.log(i)

// Get Even

for (let i = 0; i < 200; i += 2)
    console.log(i)

// Fizz Buzz

const myCatSayings = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 0; i < 20; i++) {
    let sayings = Math.floor(Math.random() * myCatSayings.length)
    if (i % 2 === 0) {
        console.log(myCatSayings[sayings])
    } else {
        console.log("Love me, pet me! HSSSSSS!")
    }
}
// Fizz Buzz

for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 === 0) {
        console.log("FizzBuzz")
    }
}

// Getting to Know You

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the kenny array with "Gameboy".

kenny.splice(0, 1, "Gameboy")

console.log(kenny)

// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

jimClark[1] = jimClark[1] + 1;

console.log(jimClark)

// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan.splice(2, 1, "Gotham City")

console.log(ryan)

// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop()

reuben.push("Chicago")

console.log(reuben)

// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
console.log(jimHaff)

jimHaff.splice(2, 1, "LA", "SD", "NY")

console.log(jimHaff)

// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()


jimHaff.splice(2, 1)

console.log(jimHaff)

// Yell at the Ninja Turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (i = 0; i < 4; i++)
    console.log(ninjaTurtles[i].toUpperCase())

// Return of the Closets

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
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

// Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

kristynsShoe = kristynsCloset.splice(0, 1)
// console.log(kristynsShoe)

thomsCloset[2] = kristynsShoe.splice(0, 1)

console.log(thomsCloset)

// Let's create some outfits for both Kristyn and Thom. Select 3 elements from kristynsCloset and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using thomsCloset. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)



console.log("Kristyn is wearing a " + kristynsCloset[0] + ", " + kristynsCloset[3] + ", " + kristynsCloset[2] + ".")

console.log("Thom is wearing a " + thomsCloset[0][1] + ", " + thomsCloset[1][0] + ", " + thomsCloset[2][0] + ".")

// Dirty Laundry

for (i = 0; i < kristynsCloset.length; i++)
    console.log("WHIRR: Now washing " + kristynsCloset[i])
// Inventory
for (i = 0; i < thomsCloset.length; i++)
    console.log(i)

// Multiples of 3 and 5

sum = 0;

for (i = 0; i < 1001; i++){
  if (i % 3 === 0 || i % 5 === 0){
    sum += i;
  }
}
console.log(sum)





