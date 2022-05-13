// EASY GOING 1 - Creating a for loop of 1 through 20
for (let i = 1; i <= 20; i++) {
    console.log(i);
};
// started this with a 0 instead of a 1 changed it and console logged in chrome, got the right answer
// Note: Roberto Ramos helped with grasp of concepts on for loops prior to starting homework
// loading via git


// GET EVEN 2 - creating a loop that logs even numbers only up to 200
for (let i = 2; i < 202; i+=2) {
    console.log(i);
};
// first tried by multiplying by "i*2", then by adding via "i+2", then went to google
// my answer was close found the solution here: 

// Stephen Van Delinder on Feb 15, 2015
// You need to create a for loop that initializes the variable to 2, console.log the 
// variable to the screen, and add two to the variable on each iteration. Said another way: 
// starting at two, as long as i is less than 25, add two and log the new variable to the screen.


// EXCITED KITTEN - A. Log String 20 Times, B. Log at Random 1 of 4 Strings
for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
};
// A. Same concept as Exercise 1, only changing the console.log output to string.
let catComments = [0, 1, "...human...why you taking pictures of me?...", 3, "...the catnip made me do it...", 5, "...why does the red dot always get away..."]
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(catComments[i])
    }
}
// Moving on from this problem found articles on math.random but unclear on how to work into function
// got creative and placed odd numbers in the array at the odd index spaces, all even spaces are strings
// Found this article on running math.random couldnt wrap mind around articulating w/ JS syntax the strings fromcatComments
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Note also used a reference to figure out how to console.log even numbers only here:
// https://stackoverflow.com/questions/66837818/how-to-print-odd-and-even-numbers-in-javascript


// FIZ BUZZ logging all numbers 1-100: A. If divisible by 3 log "Fizz", B. If divisible by 5 log "Buzz", C. if divisbile by both log "FizzBuzz"
function myString (parameter) {
    for (let i = 0; i < parameter; i++) {
        if (i % 15 === 0) {
            console.log("FizBuzz")
        }
        else if (i % 5 === 0) {
            console.log("Buzz")
        }
        else if (i % 3 === 0) {
            console.log("Fizz")
        }
    }
}
console.log(myString(100));
// To start, running same script as before but for ODD #'s
// I know that there is a Else If statement that'll follow the first "if" that should account for the Divisible by 5 indecies
// I understand the concept but dont know how to articulate it in JS
// ...moving on
// finsihing up got the answer right


// GETTING TO KNOW YOU - 
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the kenny array with "Gameboy".
kenny.splice(0, 1, "Gameboy")
console.log(kenny)
// Answer: https://www.javascripttutorial.net/javascript-array-splice/ (disregard below notes)
// found this article online but still not getting the correct console.log
// https://www.w3schools.com/jsref/jsref_replace.asp
// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] += 1;
console.log(jimClark)
//Answer: https://bobbyhadz.com/blog/javascript-increment-values-in-array
// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.splice(2, 1, "Gotham City");
console.log(ryan)
// Answer: https://www.javascripttutorial.net/javascript-array-splice/
// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.splice(-1)
console.log(reuben)
reuben.push("Chicago")
console.log(reuben)
// Answer: *removal of Durham w/ splie-1* https://stackoverflow.com/questions/19544452/remove-last-item-from-array
// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.splice(2, 3, "New York", "Sacremento", "Alexandria");
console.log(jimHaff)
// 6. passed on Bonus because of time constraints (t-Minus 8 minutes to start of class)


// YELL AT THE NINJA TURTLES
// 1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const littleTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
console.log(littleTurtles)
const ninjaTurtles = [];

littleTurtles.forEach(element => {
    ninjaTurtles.push(element.toUpperCase())
})
console.log(ninjaTurtles)
// 2. Use a for loop to call .toUpperCase() on each of them and print out the result.
// Answer: *.toUpperCase logic-- Note: to self Review* https://bobbyhadz.com/blog/javascript-convert-all-elements-of-array-to-uppercase


// unfinished assignment =0(!!!!!!!
//Finishing UP:

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
  let kristynShoe = kristynsCloset.shift()
  console.log(kristynsCloset)
  console.log(kristynShoe)
  thomsCloset[2].push(kristynShoe)
  console.log(thomsCloset);


  // Got stuck here so I took to the debugging channel
  // Got help from Bryce Henderson

  
console.log("Krystn is wearing "  + kristynsCloset[2] + " " + kristynsCloset[1] + " and " + kristynsCloset[0]);
console.log("Thom is rather dapper in his " + thomsCloset[0][1] + " " + thomsCloset[1][0] + " and " + thomsCloset[2][1]);


// Mental fatigue is setting in have to get sleep in order to focus and retain tomorrows lesson.

for (let i = 0; i < kristynsCloset.length; i++) {
    console.log("WHIRR: Now washing " +kristynsCloset[i])
}

for (let i = 0; i <= thomsCloset[0].length; i++) {
    console.log(thomsCloset[i]);
}

// got that one right just by thinking through it!! right on the first go around!!!!!! super proud of myself for that one!!!
// got through Thoms closet with the same profeciency!!! its starting to stick!!!

