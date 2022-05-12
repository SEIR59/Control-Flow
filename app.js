// //EASY GOING
// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// Get Even
// for (let i = 1; i <= 200; i++) {
//     i += 1
//     console.log(i);
// }

// Excited Kitten
//  const dialog = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red do always get away..."];

//  for (let i = 1; i <= 20; i++) {
//      if (i % 2 === 0) {
//          console.log(dialog[Math.floor(Math.random() * dialog.length)])
//      } else {
//         console.log("Love me, pet me! HSSSSS!")
//     }
// }

// Fizz Buzz
//  for (let i = 0; i <= 100; i++) {
//      if (i % 3 === 0) {
//          console.log("Fizz")
//      } else if (i % 3 === 0 && i % 5 === 0) {
//          console.log("FizzBuzz")
//      } else if (i % 5 === 0) {
//          console.log("Buzz")
//      } else {
//         console.log(i)
//      }
//  }

// Getting to Know You
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny[0] = "Gameboy"
// console.log(kenny);

// jimClark[1] = jimClark[1] + 1;
// console.log(jimClark[1]);

// ryan[2] = "Gotham City"

// reuben.pop();
// console.log(reuben);
// reuben.push("Chicago");
// console.log(reuben);

// jimHaff.pop();
// jimHaff.push("Singapore", "Hong Kong", "Shanghai");
// console.log(jimHaff);

// Yell at the Ninja Turtles
// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for (let i = 0; i < ninjaTurtles.length; i++) {
//     console.log(ninjaTurtles[i].toUpperCase());
// }

// Return of the Closets
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

  kristynsCloset.shift();
  console.log(kristynsCloset);
  const kristynsShoe = "left shoe";
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset);

  console.log("Kristyn is wearing " + kristynsCloset[2] + ", " + kristynsCloset[3] + " and " + kristynsCloset[0] + ".");
