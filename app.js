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
for(i = 0; i < ninjaTurtle.length; i++) {
    ninjaTurtle[i] = ninjaTurtle[i].toLowerCase();
}
console.log(ninjaTurtle);

//#####Return of the Closets######//
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.
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
  //Alien Attire. Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
  const kristynsShoe = kristynsCloset[0];
  kristynsCloset.shift();
  thomsCloset[2].push(kristynsShoe);
  //Dress 'em Up. Let's create some outfits for both Kristyn and Thom. Select 3 elements from kristynsCloset and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using thomsCloset. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)
  const aboutKristyn = "Kristyn is wearing " + kristynsCloset[3] + ", a " + kristynsCloset[1] + ", and " + kristynsCloset[5] + ".";
  const aboutThom = "Thom is wearing " + thomsCloset[0][1] + " shirt, a " + thomsCloset[1][1] + ", and " + thomsCloset[2][1] + ".";
  
  console.log(aboutKristyn);
  console.log(thomsCloset[2]);
  console.log(aboutThom);

//Dirty Laundry. Continue looking at the closet arrays: Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for(let i = 0; i < kristynsCloset.length; i++) {
    console.log("WHIRR: Now washing " + kristynsCloset[i]);
} 
//Inventory. Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.
for(let i = 0; i < thomsCloset.length; i++) {
    console.log(thomsCloset[i]);
} 

//#####Multiples of 3 and 5######//
//Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀)
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
let total = 0;
for(let i = 0; i < 1000; i++) {
    if (i % 3 == 0) {
        total = total + i;
    } else if (i % 5 == 0) {
        total = total + i;
    }
}
console.log(total);