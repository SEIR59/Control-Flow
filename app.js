for (let i = 1; i < + 20; i++) {
    console.log(i);
}

for (let j = 0; j <= 200; j++) {
    if (j % 2 === 0) {
        console.log(j);
    }
}

let catArray = ["...human...why are you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for (let k = 0; k < 20; k++) {
    console.log("Love me, pet me! HSSSSSS");
    if (k % 2 === 0) {
        console.log(catArray[Math.floor(Math.random() * 2)])
    }
}


const numArray = [];

for (let l = 1; l <= 100; l++) {
    if (l % 3 === 0 && l % 5 === 0) numArray.push("FizzBuzz");
    else if (l % 3 === 0) numArray.push("Fizz");
    else if (l % 5 === 0) numArray.push("Buzz");
    else numArray.push(l);
}

console.log(numArray);

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy";
jimClark[1]++;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago";)
jimHaff.pop()
jimHaff.push("New York City", "San Francisco", "Guangzhou");

let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (let n = 0; n < ninjaTurtles.length; n++) {
    let currentTurtle = ninjaTurtles[i];

    currentTurtle.toUpperCase();
}

console.log(ninjaTurtles);

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
    ], [
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
    ], [
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
    ]
];

let kristynsShoe = kristynsCloset.splice(0, 1);
thomsCloset[2].push(kristynsShoe);

console.log(`Kristyn is wearing ${kristynsCloset[2]}, a ${kristynsCloset[4]}, and ${kristynsCloset[5]}`);

for (let m = 0; m < kristynsCloset.length; m++) {
    let currentItem = kristynsCloset[m];
    console.log(`WHIRR: Now washing ${currentItem}`);
}

let thomsShirts = thomsCloset[0];
let thomsPants = thomsCloset[1];
let thomsAccessories = thomsCloset[2];

