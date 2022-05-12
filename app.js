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
let myString = ["Fizz", "Buzz", "FizzBuzz"];
for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
        console.log(myString["#'s divisible by 3"])
    }
    else if (i % 5 === 0) {
        console.log(myString["#'s divisible by 5"])
    }
    else if (i % 3 && 5 === 0){
        console.log(mystring["#'s divisible by 3 && 5, 3, or 5"])
    }
}
// To start, running same script as before but for ODD #'s
// I know that there is a Else If statement that'll follow the first "if" that should account for the Divisible by 5 indecies
// I understand the concept but dont know how to articulate it in JS
// ...moving on


// GETTING TO KNOW YOU - 
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the kenny array with "Gameboy".
const newKenny = kenny.replace("Kenny", "Gameboy");
// found this article online but still not getting the correct console.log
// https://www.w3schools.com/jsref/jsref_replace.asp
// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
const newJimClark = jimClark.replace(186, ([1] ++1);
// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
const newRyan = ryan.replace("Denver", "Gotham City");
// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop
reuben.push("Chicago")
// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
const newJimHaff = jimHaff.replace("All cities", ["New York", "Singapore", "Cumberland"]);
// 6. passed on Bonus because of time constraints (t-Minus 8 minutes to start of class)