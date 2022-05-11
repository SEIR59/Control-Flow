// // // Easy Going
// // // Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i <= 20; i++){
    console.log(i)
}

// // // Get Even
// // // Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i = i + 2){
    console.log(i)
}

// // Excited Kitten
// // 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// // 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
for (let i = 0; i <= 20; i++){
    console.log("Love me, pet me! HSSSSSS!")
    r = Math.floor(Math.random()*3)
    if (r === 0) {
        console.log("...human...why you taking pictures of me?...")
    }
    else if (r === 1) {
        console.log("...the catnip made me do it...")
    }
    else if (r === 2) {
        console.log("...why does the red dot always get away...")
    }
}

// Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100 AND:
// 1. If a number is divisible by 3 log "Fizz" instead of the number.
// 2. If a number is divisible by 5 log "Buzz" instead of the number.
// 3.If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
for (let i = 1; i <= 100; i++){
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz")
    }
    else if (i%3 === 0) {
        console.log("Fizz")
    }
    else if (i%5 === 0) {
        console.log("Buzz")
    }
}

// Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the kenny array with "Gameboy".
kenny[0] = "Gameboy"

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1]++

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[2] = "Gotham City"

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop()
reuben.push("Chicago")

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
myCities = ["Seoul", "New York", "Boston"]
jimHaff.pop()
jimHaff.push(myCities)


// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()
jimHaff[2].splice(2, 1)


// Yell at the Ninja Turtles
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
members = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// 2. Use a for loop to call .toUpperCase() on each of them and print out the result.
for (let i = 0; i < members.length; i++){
    console.log(members[i].toUpperCase()) 
}
// 3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.
for (let i = 0; i < members.length; i++){
    if (i%2 === 0) {
        console.log(members[i].toUpperCase()) 
    } else {
        console.log(members[i])
    }
}

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

// Alien Attire
// 1. Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
kristynsShoe = kristynsCloset.splice(0,1)[0]
thomsCloset[2].push(kristynsShoe)

// Dress 'em Up
// 1. Let's create some outfits for both Kristyn and Thom. Select 3 elements from kristynsCloset and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using thomsCloset. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)

// Kristyn Outfits
console.log("Kristyn is wearing " + kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ", " + kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)] + ", " + kristynsCloset[Math.floor(Math.random()*kristynsCloset.length)])

// Thoms Outfits
console.log("Thom is wearing " + thomsCloset[0][Math.floor(Math.random()*thomsCloset[0].length)] + ", " + thomsCloset[1][Math.floor(Math.random()*thomsCloset[1].length)] + ", " + thomsCloset[2][Math.floor(Math.random()*thomsCloset[2].length)])
