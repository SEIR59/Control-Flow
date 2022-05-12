// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i < 21; i++) {
    console.log(i)
}

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
for (let j = 0; j <= 200;  j += 2) {
    console.log(j)
}

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
/*1.*/ 

for (let k = 0; k <= 21; k++) {
    let randomStr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];
    if (k % 2 == 0) {
        console.log(randomStr[Math.floor(Math.random() * 3)])
     } else 
       console.log('Love me, pet me! HSSSSSS!');
}

// Fizz Buzz
// Write a javascript application that logs all numbers from 1 - 100 AND:
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".

 for (let L = 1; L <= 100; L++) {
     if (L % 3 === 0 && L % 5 === 0) {
        console.log('FizzBuzz')
     }
     else if (L % 5 === 0) {
         console.log('Buzz')
     }
     else if (L % 3 === 0) {
        console.log('Fizz')
     }
     else 
        console.log(L)
 }

//  Use the following arrays to answer the questions below (name, age, hometown):

 const kenny = ["Kenny", 1000, "Austin"];

 const jimHaff = ["Jim H", 16, "All cities"];

 const reuben = ["Reuben", 22, "Durham"];

 const jimClark = ["Jim C", 186, "LA"];

 const ryan = ["Ryan", 65, "Denver"];

// Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the kenny array with "Gameboy".
 kenny.splice(0,1,'Gameboy')
// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.
jimClark[1] = jimClark[1] + 1
// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".
ryan.splice(2, 1, 'Gotham City')
// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)
reuben.splice(2, 1, 'Chicago')
// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
jimHaff.splice(2, 1, 'Austin','Dallas','Houston')
// Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()
console.log(jimHaff)

// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// Use a for loop to call .toUpperCase() on each of them and print out the result.

// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.
let ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
    for (let M = 0; M <= 3 ; M++) {
        console.log(ninjaTurtles[M].toUpperCase())
    }
    // Alien Attire

    // Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.
   
    // Dress 'em Up

    // Let's create some outfits for both Kristyn and Thom. Select 3 elements from kristynsCloset and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using thomsCloset. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)
    
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
          "blue button-up"
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

    kristynsShoe = kristynsCloset.shift()

    console.log(`Kristyn is wearing ${kristynsCloset[3]}, a ${kristynsCloset[1]}, ${kristynsCloset[5]}`)

    console.log(`Thom is wearing a ${thomsCloset[0][1]}, ${thomsCloset[1][1]}, and a pair of ${thomsCloset[2][2]}`)

    for (let q = 0;q  < kristynsCloset.length; q++) {
        console.log(`WHIRR: Now washing ${kristynsCloset[q]}`)
    }
    for (let r = 0; r < thomsCloset.length; r++) {
        console.log(thomsCloset[r])
    }
        
    // Multiples of 3 and 5
// Yes, you might have tackled this earlier, but try it again (don't look back at your other code 👀)

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.
total = 0
 for(let S = 0; S < 1000; S++) {
     if (S % 3 === 0 || S % 5 === 0) {
         console.log(total += S)
 }
}