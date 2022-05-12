//#####Easy Going######//
//Write a for loop that will log the numbers 1 through 20.
const a1 = [];
for(let i = 1; i < 21; i++) {
    a1.push(i);
}
console.log(a1);

//#####Get Even######//
//Write a for loop that will log only the even numbers in 0 through 200.
const a2 = [];
for(let i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
        a2.push(i);
    }
}
console.log(a2);

//#####Excited Kitten######//
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for(let i = 1; i < 21; i++) {
    let msg = " Love me, pet me! HSSSSSS!";
    console.log(i + msg);
}

//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
let a3 = ["...human...why you taking pictures of me?...", "..the catnip made me do it...", "...why does the red dot always get away..."];
for(let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        let j = Math.floor((Math.random() * 3));
        let rdmMsg = a3[j];
        console.log(i + rdmMsg);
    }
}

//#####Fizz Buzz######//
//Write a javascript application that logs all numbers from 1 - 100 AND:
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
for(let i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log(i + " FizzBuzz");
    } else if (i % 3 == 0) {
        console.log(i + " Fizz");
    } else if (i % 5 == 0) {
        console.log(i + " Buzz");
    } 
}

//#####Getting to Know You######//
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
// Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the kenny array with "Gameboy".
kenny[0] = "Gameboy";
// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] += 1;
//Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan[2] = "Gotham City";
//Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.pop();
reuben.push("Chicago");
//Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.pop();
jimHaff.push("Chicago", "Ho Chi Minh", "New York");
//Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()
jimHaff.splice(4, 1);
console.log(jimHaff);

//#####Yell at the Ninja Turtles######//
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtle = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//Use a for loop to call .toUpperCase() on each of them and print out the result.
for(i = 0; i < ninjaTurtle.length; i++) {
    ninjaTurtle[i] = ninjaTurtle[i].toUpperCase();
}
console.log(ninjaTurtle);
//Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.
//Dont quite clear about the requirement