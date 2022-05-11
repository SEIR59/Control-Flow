// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.

for (let i=1; i<=20; i++) console.log(i)


//****************************************************************************************************************************************************************************************

// ## Get Even
// 1. Write a `for` loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.

for (let i=0; i<=200; i+=2) console.log(i)


//****************************************************************************************************************************************************************************************

// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

let i = 1;
const catArr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
while (i<=20){
    i % 2 === 0 ? console.log(catArr[Math.floor(Math.random() * catArr.length - 1)]) : console.log('Love me, pet me! HSSSSSS!')
    i++
}

//****************************************************************************************************************************************************************************************

// ## Fizz Buzz 

// >NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

// Write a javascript application that logs all numbers from 1 - 100 **AND**: 

//   1. If a number is divisible by 3 log "Fizz" instead of the number.
  
//   1. If a number is divisible by 5 log "Buzz" instead of the number.
  
//   1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".

for (let i=1; i<=100; i++){
    if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz')
    if (i % 3 === 0) console.log('Fizz')
    if (i % 5 === 0) console.log('Buzz')
    console.log(i)
}


//****************************************************************************************************************************************************************************************

// ## Getting to Know You
// Use the following arrays to answer the questions below (name, age, hometown):
// ```javascript
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
// ```
// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the `kenny` array with "Gameboy".

kenny[0] = 'Gameboy'

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

jimClark[1] += 1
console.log(jimClark[1])

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

ryan[2] = 'Gotham City'

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

reuben.pop()
reuben.push('Chicago')

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

jimHaff.pop()
jimHaff.push(['Boulder', 'Golden', 'Denver'])

// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)

jimHaff[2].splice(0,1)
console.log(jimHaff)


//****************************************************************************************************************************************************************************************

// ## Return of the Closets

// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

// ```javascript

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // Thom's closet is more complicated. Check out this nested data structure!!

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
// ```### Alien Attire
// 1. Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

const kristynsShoe = kristynsCloset[0]
thomsCloset[2].push(kristynsShoe)

// ### Dress 'em Up
// 1. Let's create some outfits for both Kristyn and Thom. Select 3 elements from `kristynsCloset` and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using `thomsCloset`. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)

kristynsOutfit = `Kristyn is wearing a ${kristynsCloset[Math.floor(Math.random() * kristynsCloset.length - 1)]}, a ${kristynsCloset[Math.floor(Math.random() * kristynsCloset.length - 1)]}, and a ${kristynsCloset[Math.floor(Math.random() * kristynsCloset.length - 1)]}. Looking fresh, Kristyn!!`;
thomsOutfit = `Thom is wearing a ${thomsCloset[0][Math.floor(Math.random() * thomsCloset[0].length)]}, a ${thomsCloset[1][Math.floor(Math.random() * thomsCloset[1].length)]}, and a ${thomsCloset[2][Math.floor(Math.random() * thomsCloset[2].length)]}. Looking fresh, Thom!!`


//****************************************************************************************************************************************************************************************

// ### Dirty Laundry
// Continue looking at the closet arrays:
// 1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

for (let i=0; i<kristynsCloset.length; i++) console.log(`WHIRR: Now washing ${kristynsCloset[i]}.`)

// ### Inventory
// 2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

for (let i=0; i<thomsCloset.length; i++){
    let typeOfClothing = (i === 0 ? 'Shirts' : i === 1 ? 'Pants' : 'Accessories')
    console.log(`${typeOfClothing}:` + JSON.stringify(thomsCloset[i]))
} 


//****************************************************************************************************************************************************************************************


// ## Multiples of 3 and 5

// _Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the **sum** of all the multiples of 3 or 5 below 1000.


const answerArr = [];
for (let i=1; i<1000; i++){
    if (i % 3 === 0 || i % 5 === 0) answerArr.push(i)
}
let sum = answerArr.reduce((a,b) => a+b)

//****************************************************************************************************************************************************************************************

// # Hungry for more?

// ## Triangles

// 0. declare a variable `argument` and set it equal to 7.

let argument = 7;

// 1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

// >Ex: `argument` is 7

// ```
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```

let str = '#';
for (let i=1; i<=argument; i++){
    console.log(str)
    str += '#'
}

// 2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.  This is deceptively tricky. 

let rightIsoscelesArr = []
while (rightIsoscelesArr.length < argument) rightIsoscelesArr.push('')

for (let i = argument - 1; i>=0; i--){
    rightIsoscelesArr[i] = '#'
    console.log(rightIsoscelesArr)
}


// ```
//       #
//      ##
//     ###
//    ####
//   #####
//  ######
// #######
// ```


// 3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

// >Ex: `argument` is 7

// ```
// #######
// ######
// #####
// ####
// ###
// ##
// #
// ```

// 4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument.  This is also tricky.

// >Ex: `argument` is 7

// ```
// #######
//  ######
//   #####
//    ####
//     ###
//      ##
//       #
// ```

// 5. Change the value of `argument` and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.

// <hr>
// &#x1F534; The commit message should read: <br>
// "Commit 10 - Triangles answered"
// <hr>

