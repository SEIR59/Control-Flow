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
