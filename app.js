//1
for(let i = 1; i < 21; i++) {
    console.log(i);
}
//2
for(let i = 0; i <= 200; i += 2) {
    console.log(i);
  } 
  //3
  const kittenWords = ["...human...why you taking pictures of me?...", "...the catnip made me do it...",  "...why does the red dot always get away..." ]
for(let i = 0; i < 20; i++){
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 === 0){
       const index = Math.floor(Math.random() * 3);
       console.log(kittenWords[index])

    }
}
//4
for(let i = 1; i <= 100; i++) {
    
    if( i % 3 === 0 && i % 5 !== 0){
        console.log("Fizz");
    } else if(i % 5 === 0 && i % 3 !== 0){
        console.log("Buzz");
    } else if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    } else {
      console.log(i);
    }

}
//5
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
kenny[0] = "Gameboy";
console.log(kenny);
jimClark[1] += 1;
console.log(jimClark);
ryan[2] = "Gotham City";
console.log(ryan);
reuben.pop();
reuben.push("Chicago");
console.log(reuben);
jimHaff.pop();
jimHaff.push("LA", "NY", "San Fancisco");
console.log(jimHaff);
jimHaff.splice(2, 1);
console.log(jimHaff);
//6
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
    for(let i = 0; i < ninjaTurtles.length; i++) {
    const turtlNew = ninjaTurtles[i];
    console.log(turtlNew.toUpperCase())
    }
//7
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
  const kristynsShoe = kristynsCloset[0];
  console.log(kristynsShoe);
  kristynsCloset.shift();
  thomsCloset[2].push(kristynsShoe)
  console.log("Kristyn is wearing " + kristynsCloset[3] + ", a " + kristynsCloset[1] + ", and " + kristynsCloset[5]);
  console.log("Thomas is wearing " + thomsCloset[1][1] + ", a " + thomsCloset[0][2] + ", and " + thomsCloset[2][2]);
