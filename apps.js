// for (let i = 0; i<= 200; i++)
// console.log([i])

// for (let i = 0; i <= 200; i += 2)
 // console.log(i)

// for ( let i = 0; i <= 20; i++)
// console.log("Love me, pet me! HSSSSSS!")
// Math.random

// for (let i = 0; i <= 100; i++){
// if (i % 3 === 0 && i % 5 ===0){
// console.log("FizzBuzz")}

// else if (i % 3 === 0){

// console.log("Fizz")}

// else if (i % 5 === 0){
// console.log("Buzz")}


// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny[0] = "Gameboy"
// console.log(kenny)

// jimClark[1] += 1
// console.log(jimClark)

// reuben.pop(2)
// console.log(reuben)
// reuben.push("Chicago")
// console.log(reuben)

// jimHaff.pop(2)
// console.log(reuben)
// jimHaff.push("Boston","New york","Florida")
 // console.log(jimHaff)
// jimHaff.splice(2,1)
// console.log(jimHaff)

// const ninjaTurtles =(Donatello, Leonardo, Raphael, Michaelangelo)

// for (i = 0; i < ninjaTurtles.length; i++){
    // console.log(ninjaTurtles[1].toUpperCase)
// }

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
  ]
const w = kristynsCloset.slice(0,1)
console.log(w)

thomsCloset.push(w)
console.log(thomsCloset)

kristynsCloset[0,1,2]
console.log(`kristyn is wearing a ${kristynsCloset[0]}, ${kristynsCloset[1]}, and a ${kristynsCloset[2]}`)


