/*Easy Going

//#1

for (let i = 1; i < 21; i++) {
    console.log(i);
}

// Get Even

#1

for (let i = 0; i < 201; i += 2) {
     console.log(i);
}


// Excited Kitten

// #1

for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
// #2
const myArr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
const random = Math.floor(Math.random() * myArr.length);
    if (i %2 === 0) {
        console.log(myArr[random])}
    }


// Fizz Buzz

for (let i = 0; i < 100; i++) {
    // console.log(i);
    if (i %3 === 0 && i %5 ===0) {
        console.log("Fizz Buzz");
    } else if (i %3 === 0) {
        console.log("Fizz")
    } else if (i %5 === 0) {
        console.log("Buzz")
    } 
    }

// Getting to Know You

//#1
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


kenny.shift();
kenny.unshift("Gameboy");
console.log(kenny);
//#2
jimClark.splice(1, 1, "187");
console.log(jimClark);
//#3
ryan.splice(2, 1, "Gotham City");
console.log(ryan);
//#4
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
//#5
jimHaff.splice(2, 1, "Dallas", "San Antonio", "El Paso");
console.log(jimHaff);
//#6
jimHaff.splice(2, 1);
console.log(jimHaff);


//Yell at the Ninja Turtles
// #1
const turtArr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// #2
for (let i = 0; i < turtArr.length; i++) {
    console.log(turtArr[i].toUpperCase());
}
// Bonus #3
*/

// Alien Attire

//#1
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

  let kristynsShoe = kristynsCloset.shift();
  console.log(kristynsShoe)
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset);

  //Dress 'em Up
//#2

  console.log(`Kristyn is wearing a ${kristynsCloset[2]}, ${kristynsCloset[3]}, and a ${kristynsCloset[1]}.`);
  console.log(`Thom is wearing a ${thomsCloset[2][0]}, a ${thomsCloset[0][2]}, and ${thomsCloset[1][0]}.`);
