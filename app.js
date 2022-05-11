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

