// // Easy Going
// Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20; i++ ){
//     console.log(i)
// }
// Get Even
// Write a `for` loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.
for (let i= 0; i <= 200; i += 2 ){
    console.log(i)
}


// // Excited Kitten
// for (let b = 1; b <= 20; b++){
//     console.log(`Love me, pet me! HSSSSSS!`)
// }
// let phrases = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..." , "...why does the red dot always get away..."];
// for (let b = 1; b <= 20; b++){
//     let randomPhrase = Math.floor(Math.random() * phrases.length);
//     if (b % 2 === 0){
//         console.log(`${phrases[randomPhrase]}`)
//     } else {
//         console.log(`Not an even number`)
//     }
// }


// // Fizz Bizz
// for (let c = 1; c <= 100; i ++){
//     if (c % 3 === 0 && c % 5 === 0){
//         console.log(`FizzBuzz`)
//     }
//     else if (c % 5 === 0) {
//         console.log(`Buzz`)
//     }
//     else if (c % 3 === 0){
//         console.log(`Fizz`)
//     }
// }


// Getting to know you
// Use the following arrays to answer the questions below (name, age, hometown):
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the `kenny` array with "Gameboy".
// kenny[0] = 'Gameboy'
// console.log(kenny);

// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
// jimClark[1] = jimClark[1]+1
// console.log(jimClark);

// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
// ryan[2] = 'Gotham City'
// console.log(ryan);

// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
// reuben.pop();
// console.log(reuben);
// reuben.push('Chicago');
// console.log(reuben);

// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code]
// jimHaff.splice(2, 1,'Indy','Chicago','Nashville');
// console.log(jimHaff)

// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`]
// jimHaff.splice(2,2);
// console.log(jimHaff);


// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

// Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.
// for (let i = 0; i < turtles.length; i++){
//     turtles[i] = turtles[i].toUpperCase();
//     console.log(turtles[i]);
// }


// Return of the Closets
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

// //   1. Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
//   let lostShoe = kristynsCloset.splice(0,1);
//   console.log(lostShoe);
//   console.log(kristynsCloset);

//   thomsCloset[2].push(lostShoe[0]);
//   console.log(thomsCloset);