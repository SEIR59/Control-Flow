// 1.
console.log("EASY GOING")
for (let i = 1; i < 21; i++) {
    console.log(i);
}

// 2.
console.log("GET EVEN")
for (let i = 0; i < 201; i += 2) {
    console.log(i);
}

// 3. 
console.log("EXCITED KITTEN")
for (let i = 1; i <= 20; i++) {
   console.log("Love me, pet me! HSSSSSS!");
}

console.log("EXCITED KITTEN 2")
let kittyWhy = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let form = Math.floor(Math.random() * 4);
for (let i = 1; i <= 20; i++) {
    if (even[i] = even) {
        console.log(form)
    }
    else console.log("Love me, pet me! HSSSSSS!")
 }

// 4.
console.log("FIZZ BUZZ")
for (let i = 1; i < 101; i++) {
     if (i % 3 === 0) {
         console.log("Fizz");
     }
     else if (i % 5 === 0) {
         console.log("Buzz")
     }
     else if (i % 15 === 0) {
         console.log("FizzBuzz")
     }
     else console.log(i);
 }

// 5.
console.log("GETTING TO KNOW YOU")
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny.shift();
kenny.unshift("Gameboy");
console.log(kenny);

jimClark.splice(1, 1, 187);
console.log(jimClark);

ryan.pop();
ryan.push("Gotham City");
console.log(ryan);

reuben.pop();
reuben.push("Chicago");
console.log(reuben);

jimHaff.pop();
jimHaff.push("NYC", "LA", "Miami");
jimHaff.splice(2, 1);
console.log(jimHaff);

// 6. 
console.log("YELL AT THE NINJA TURTLES")
let ninjaTurtles = ["donatello", "Leonardo", "Raphael", "Michaelangelo"];
let bigLetters = [];
for ( i = 0; i < ninjaTurtles.length; i++) {
    bigLetters[i] = ninjaTurtles[i].toUpperCase();
}
console.log(bigLetters);