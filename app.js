// Easy Going
console.log("Easy going");
for ( let i = 1; i <= 20; i++) {
    console.log(i)
}

console.log("Get Even");
// Get Even // 0 is an even number. //
for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("Excited Kitten");
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
console.log("Fizz Buzz");
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
console.log("Getting to know you");
// Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
console.log("Before");
console.log(kenny);
console.log(jimHaff);
console.log(reuben);
console.log(jimClark);
console.log(ryan);
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

console.log("After");
console.log(kenny);
console.log(jimHaff);
console.log(reuben);
console.log(jimClark);
console.log(ryan);
console.log("Yell at the Ninja turtles");
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
console.log("Return of the Closets");
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
    let firstItemkristyn;
    let secondItemkristyn;
    let thirdItemkristyn;
    
    let numOfItemskristyn = kristynsCloset.length;
    firstItem = kristynsCloset[Math.floor(Math.random() * numOfItemskristyn)];
    secondItem = kristynsCloset[Math.floor(Math.random() * numOfItemskristyn)];
    thirdItem = kristynsCloset[Math.floor(Math.random() * numOfItemskristyn)];



    let todaysOutfitKristyn = `Kristyn is wearing ${firstItem}, a ${secondItem} and a ${thirdItem}.`; 
    console.log(todaysOutfitKristyn);

    // Thoms Outfit
    let firstItemTom;
    let secondItemTom;
    let thirdItemTom;
    
    let numOfItemsTom = thomsCloset[0].length;
    let numOfItemsTwoTom = thomsCloset[1].length;
    let numOfItemsThreeTom = thomsCloset[2].length;
    firstItemTom = thomsCloset[0][Math.floor(Math.random() * numOfItemsTom)];
    secondItemTom = thomsCloset[1][Math.floor(Math.random() * numOfItemsTwoTom)];
    thirdItemTom = thomsCloset[2][Math.floor(Math.random() * numOfItemsThreeTom)];


    let todaysOutfitTom = `Thom is wearing a ${firstItemTom}, some ${secondItemTom} and a ${thirdItemTom}.`; 
    console.log(todaysOutfitTom);

    // 2. Dirty Laundry
    // kristynsCloset
    let numItemsToWashKristyn = kristynsCloset.length
    for (let i = 0; i < numItemsToWashKristyn; i++) {
        console.log(`WHIRR: Now washing ${kristynsCloset[i]}`);
    }

    // thomsCloset
    let numItemsToWashTom;
    for (let i = 0; i < thomsCloset.length; i++) {
        numItemsToWashTom = thomsCloset[i].length
        for (let j = 0; j < numItemsToWashTom; j++) {
            console.log(`WHIRR: Now washing ${thomsCloset[i][j]}`);
        }
    }

    // 2. Inventory
    const thomsInventory = {

    };

    for (let i = 0; i < thomsCloset.length; i++) {
        if ( i === 0) {
            thomsInventory.shirts = thomsCloset[i];
        } else if (i === 1) {
            thomsInventory.pants = thomsCloset[i];
        } else if (i === 2) {
            thomsInventory.accessories = thomsCloset[i];
        }
    }
    console.log("Thoms Inventory");
    console.log(thomsInventory['shirts']);    
    console.log(thomsInventory['pants']);
    console.log(thomsInventory['accessories']);

    console.log("Multiples of 3 and 5");
// Multiples of 3 and 5
let total = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        total += i;
    }
}
console.log(total);

console.log("Hungry for more?")
// Hungry for more?
console.log("Triangle 1");
// Triangles 1
const argument1 = 7;
let currentLine1 = "";
for (let i = 0; i < argument1; i++) {
    currentLine1 = currentLine1.concat("#") 
    console.log(currentLine1);
}
console.log("Triangle 2");
// Triangles 2
const argument2 = 7;
let currentLine2 = "";
for (let i = 0; i < argument2; i++) {
    let extraSpace = "";
    for (let j = i + 1; j < argument2; j++) {
        extraSpace = extraSpace.concat(" ");
    }
    currentLine2 = currentLine2.concat("#") 
    console.log(extraSpace + currentLine2);
}
console.log("Triangle 3");
// Triangles 3
let currentLine3;
const argument3 = 7;
for (let i = 0; i < argument3; i++) {
    currentLine3 = ""
    for (let j = i; j < argument3; j++) {
        currentLine3 = currentLine3.concat("#");
    }
    console.log(currentLine3);
}
console.log("Triangle 4");
// Triangles 4
const argument4 = 7;
let extraSpace4 = "";
for (let i = 0; i < argument4; i++) {
    let currentLine = "";
    for (let j = i; j < argument4; j++) {
        currentLine = currentLine.concat("#") 
    }
    extraSpace4 = extraSpace4.concat(" ");
    console.log(extraSpace4 + currentLine);
}
console.log("Find the Median");
// find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
let arrLength = nums.length;
nums.sort(function(a, b) {
  return a - b;
});

let numsMedian;
0 - 24
if (arrLength % 2 === 0) {
    console.log("even");
    numsMedian = ((nums[(arrLength/2)] + nums[(arrLength/2) + 1]) / 2);
} else {
    console.log("odd");
    numsMedian = (nums[(arrLength + 1) / 2]);
}

console.log(numsMedian);