/*
Homework - 05/11/2022
Owner: Wendy Yu
Date: 05/11/2022
*/

/** Get Even */
//1. Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//2. Write a `for` loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
  console.log(i);
}

/** Excited Kitten  */
for (let i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");

  const meow = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away...",
  ];
  //only even number log..
  if (i % 2 === 0) {
    let index = Math.floor(Math.random() * 3);
    console.log(meow[index]);
  }
}

/** Fizz Buzz */
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/** Getting to Know You */
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//1.
kenny[0] = "Gameboy";
//2.
jimClark[1] = jimClark[1] + 1;
//3.
ryan[2] = "Gotham City";
//4.
reuben.pop();
reuben.push("Chicago");
//5.
jimHaff.pop();
jimHaff.push("NYC", "Hong Kong", "DC");
//6.
console.log(jimHaff);
jimHaff.splice(2, 1);
console.log(jimHaff);

/** Yell at the Ninja Turtles */
const ninja = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for (let i = 0; i < ninja.length; i++) {
  console.log(ninja[i].toUpperCase());
}
///bonus??

/** Return of the closest */
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];
const kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push(kristynsShoe);

const kristynsOutfits = `Kristyn is wearing ${kristynsCloset[3]}, ${kristynsCloset[1]}, and ${kristynsCloset[5]}.`;
const thomOutfits = `Thom is wearing ${thomsCloset[0][3]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}.`;

/** Dirty Laundry */
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
}
/** Inventory */
for (index in thomsCloset) {
  for (ele in thomsCloset[index]) {
    console.log(thomsCloset[index][ele]);
  }
}

/** Multiples of 3 and 5 */
let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    sum += i;
  }
}
console.log("the **sum** of all the multiples of 3 or 5 below 1000:" + sum);
