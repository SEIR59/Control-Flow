1. easy going
// for (i = 0; i <= 20; i++)
// console.log(i);

2. even answered
//for(i = 0; i<=200; i +=2)
// Console.log(i)

3. excited kitten
//for (let a = 1; a <= 20; a++){
  //  console.log(`Love me, pet me! HSSSSS!`)
//}
//let phrase = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..."]
//let randomPhrase = (Math.floor(Math.random) * phrases.length);
//for (let a = 1; a <=20; a++){
    //if (a % 2 === 0){
        //console.log(`${phrases[Math.floor(Math.random) * phrase.length)]}`)
    //} else {
        //console.log(`Not an even number`)
    //}
//}

4. //Fizz buzz
//or (i = 1; i <= 100; i++){
    //if(i % 3 === 0) {
        //console.log("Fizz")
    //} else if (i % 5 === 0){
        //console.log("Buzz")
   // } else if (i % 3, 5 === 0){
       // console.log("FizzBuzz")}
    //}

    //5. getting to know you


    //const kenny = ["Kenny", 1000, "Austin"];
    //const jimHaff = ["Jim H", 16, "All cities"];
    //const reuben = ["Reuben", 22, "Durham"];
    //const jimClark = ["Jim C", 186, "LA"];
    //const ryan = ["Ryan", 65, "Denver"];
    //
    //kenny[0] = "Gameboy"
    //console.log(kenny);
    
    //jimClark[1] = jimClark[1] + 1;
    //console.log(jimClark[1]);
    
    //ryan[2] = "Gotham City"
    //console.log(ryan);
    
    //reuben.pop();
    //console.log(reuben);
    //reuben.push("Chicago");
    //console.log(reuben);
    
    //jimHaff.pop();
    //jimHaff.push("Singapore", "Hong Kong", "Shanghai");
    //console.log(jimHaff);

6. yell at the ninja turtles

const ninjaTurtles = [Donatello, Leonardo, Raphael, Michaelangelo];

for(i = 0; i <ninjaTurtles.length; i++);

ninjaTurtle[i] = ninjaturtle[i].toUpperCase();
console.log(ninjaTurtle);

7. Return of the Closets
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

//Alien Attire
//1. Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.shift();
console.log(kristynsCloset);
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset);


//Dress 'em Up
//1. Let's create some outfits for both Kristyn and Thom. Select 3 elements from `kristynsCloset` and inject them into a sentence that reads, for example, "Kristyn is wearing green pants, a right sock, and marshmallow peeps" so that "green pants", "right sock", and "marshmallow peeps" are dynamically injected into the string. Do the same thing for Thom using `thomsCloset`. (Here's a suggestion that's not required: If you really want to challenge yourself, see if you can make the selections randomly from each of their arrays.)

let testArrayK = [];
while (testArrayK.length < 3) {
    let tempValK = Math.floor(Math.random() * kristynsCloset.length)
    if (!testArrayK.includes(tempValK)){
        testArrayK.push(tempValK);
    }
}

console.log(`Kristyn is wearing ${kristynsCloset[testArrayK[0]]}, ${kristynsCloset[testArrayK[1]]}, and ${kristynsCloset[testArrayK[2]]}`)

let testArrayT = [];
while (testArrayT.length < 3) {
    let tempValT = Math.floor(Math.random() * thomsCloset.length)
    if (!testArrayT.includes(tempValT)){
        testArrayT.push(tempValT);
    }
}

console.log(`Thom is wearing ${thomsCloset[testArrayT[0]]}, ${thomsCloset[testArrayT[1]]}, and ${thomsCloset[testArrayT[2]]}`)


8.Dirty Laundry

for (let i = 0; i < kristynsCloset.length; i++) {
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
}


//2. Thom wants to do inventory on his closet. Using **bracket notation**, log the **arrays** (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

for (let i = 0; i < thomsCloset.length; i++) {
    console.log(thomsCloset[i]);
}