// Easy Going
for ( let i = 1; i <= 20; i++) {
    console.log(i)
}

// Get Even // 0 is an even number. //
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Excited Kitten
const arrKittenSpeak = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
let randomNum;
for (let i = 0; i < 20; i++){
    console.log("Love me, pet me! HSSSSSS!");
    if (i % 2 === 0) {
        randomNum = Math.floor(Math.random() * 3);
        console.log(arrKittenSpeak[randomNum]);
    }
}

// Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz " + i);
    } else if (i % 3 === 0) {
        console.log("Fizz " + i);
    } else if ( i % 5 === 0) {
        console.log("Buzz " + i);
    } else {
        console.log(i)
    }
}

// Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
// 1.
kenny[0] = "Gameboy"

// 2.
jimClark[1] = jimClark[1] + 1;

// 3.
ryan[2] = "Gotham City";

// 4.
reuben.pop();
reuben.push("Chicago");

// 5.
jimHaff.pop();
jimHaff.push("New York", "Goshen", "Ozone Park");

// 6. 
jimHaff.splice(2,1);

// Yell at the Ninja turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
let currentTurtle;
let funkyTurtle = "";
for (let i = 0; i < ninjaTurtles.length; i++) {
    funkyTurtle = "";
    currentTurtle = ninjaTurtles[i].toLowerCase();
    currentTurtle = currentTurtle.split('');
    for (let j = 0; j < currentTurtle.length; j++) {
        if ( j % 2 === 0) {
             currentTurtle[j] = currentTurtle[j].toUpperCase();
        }
        funkyTurtle = funkyTurtle.concat(currentTurtle[j]);
    }
    console.log(funkyTurtle);
}

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

    // Alien Atire
    let kristynsShoe = kristynsCloset.shift();
    thomsCloset[2].push(kristynsShoe);

    //  Dress 'e, Up
    // Kristyn's outfit
    let firstItem;
    let secondItem;
    let thirdItem;
    
    let numOfItems = kristynsCloset.length;
    firstItem = kristynsCloset[Math.floor(Math.random() * numOfItems)];
    secondItem = kristynsCloset[Math.floor(Math.random() * numOfItems)];
    thirdItem = kristynsCloset[Math.floor(Math.random() * numOfItems)];



    let todaysOutfit = `Kristyn is wearing ${firstItem}, a ${secondItem} and a ${thirdItem}.`; 
    console.log(todaysOutfit);

    // Thoms Outfit
    let firstItem;
    let secondItem;
    let thirdItem;
    
    let numOfItems = thomsCloset[0].length;
    let numOfItemsTwo = thomsCloset[1].length;
    let numOfItemsThree = thomsCloset[2].length;
    firstItem = thomsCloset[0][Math.floor(Math.random() * numOfItems)];
    secondItem = thomsCloset[1][Math.floor(Math.random() * numOfItemsTwo)];
    thirdItem = thomsCloset[2][Math.floor(Math.random() * numOfItemsThree)];
    console.log(numOfItems + " " + firstItem)
    console.log(numOfItemsTwo + " " + secondItem)
    console.log(numOfItemsThree + " " + thirdItem)





    let todaysOutfit = `Thom is wearing a ${firstItem}, some ${secondItem} and a ${thirdItem}.`; 
    console.log(todaysOutfit);