// queetion 1
//for(i =1; i < 21;i++){
//    console.log(i);
//}

// question 2
//for(let i=0;i <201;i+=2){
//  console.log(i);
// }

// question 3
/*
let even = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

let all = ["Love me, pet me! HSSSSSS!"];

for (let i = 1; i < 21; i++) {
  console.log(all);

  if (i % 2 === 0) {
    console.log(even[Math.floor(Math.random() * even.length)]);
  }
} */

// queston 4
/*
let one = "Fizz";
let two = "Bizz";

for (let i = 1; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(one + two);
  } else if (i % 5 === 0) {
    console.log(two);
  } else if (i % 3 === 0) {
    console.log(one);
  }
  // else if (i%3===0) {
  // console.log();
  //}
}  */

// question 5

/*
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


kenny[0]="Gameboy";
console.log(`Jim Clark decides that ` + kenny[0] + ` can't be named "` + kenny[0] + `" anymore.`);

jimClark[1]++;
console.log(jimClark[1]);

ryan[2]= "Gotham City";
console.log(ryan[2]);

reuben.pop();
console.log(reuben);
reuben.push("Chicago");
console.log(reuben);

jimHaff.pop();
console.log(jimHaff);
jimHaff.push("Addis Abeba","Washington DC","Kenya");
console.log(jimHaff); 

jimHaff.splice(2,2);
console.log(jimHaff);
*/

//question 6

/* const nMembers = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let i = 0; i < nMembers.length; i++) {
  console.log(nMembers[i].toUpperCase());
}

for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    console.log(nMembers[i].toUpperCase());
  } else {
    console.log(nMembers[i].toLowerCase());
  }
}
*/

// question 7

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
  console.log(kristynsShoe);
  
  thomsCloset[2,2].push(kristynsShoe);
  console.log(thomsCloset);
   
  console.log("Kristyn is wearing " +kristynsCloset[4] + ", a " +kristynsCloset[2] + " and " + kristynsCloset[0] );
  let yo = Math.floor(Math.random() * 2);
  let xo = Math.floor(Math.random() * 2);
  let zo = Math.floor(Math.random() * 2);
  let ao = Math.floor(Math.random() * thomsCloset[yo].length);
  let bo = Math.floor(Math.random() * thomsCloset[yo].length);
  let co = Math.floor(Math.random() * thomsCloset[yo].length);
  console.log("Thom is wearing " + thomsCloset[yo][ao] + ", a " + thomsCloset[xo][bo] + " and " + thomsCloset[zo][co]);
  
  


