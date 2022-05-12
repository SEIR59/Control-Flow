// 1 - Easy Going
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2 - Get Even
for (let i = 0; i <= 200; i += 2) {
    console.log(i)
}

// 3 - Excited Kittens
for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
    if ((i % 2) === 0) {
        const temp = Math.floor(Math.random() * 3)
        if (temp === 0) {
            console.log("...human...why you taking pictures of me?...")
        }
        else if (temp === 1) {
            console.log("...the catnip made me do it...")
        }
        else if (temp === 2) {
            console.log("...why does the red dot always get away...")
        }
    }
}

// 4 - Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if ((i % 3) === 0) {
        if ((i % 5) === 0) {
            console.log('FizzBuzz')
        }
        else {
            console.log('Fizz')
        }
    }
    else if ((i % 5) === 0) {
        console.log('Buzz')
    }
    else {
        console.log(i);
    }
}

// 5 - Getting to Know You
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

kenny[0] = "Gameboy"

jimClark[1] = jimClark[1] + 1

ryan[2] = "Gotham City"

reuben.pop()
reuben.push("Chicago")

jimHaff.pop()
jimHaff.push("Baltimore", "Seattle", "Austin")

// 6 - Yell at the Ninja Turtles
const arr = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        arr[i] = arr[i].toUpperCase();
    }
    else {
        arr[i] = arr[i].toLowerCase();
    }
}

// 7 - Kristyn and Thom have their outfits ready for class

// Kristyn's closet
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

const kristynsShoe = kristynsCloset.shift()
thomsCloset[2].unshift(kristynsShoe)

const kristynsOutfit = []
for (let i = 0; i < 3; i++) {
    const nextItem = Math.floor(Math.random() * kristynsCloset.length)
    kristynsOutfit.push(kristynsCloset[nextItem])
    kristynsCloset.splice(1, nextItem)
}
console.log("Kristyn is wearing " + kristynsOutfit[0] + ", "
    + kristynsOutfit[1] + ", and " + kristynsOutfit[2])

const thomsOutfit = []
for (let i = 0; i < 3; i++) {
    const currentSection = thomsCloset[i]
    const nextItem = Math.floor(Math.random() * currentSection.length)
    thomsOutfit.push(currentSection[nextItem])
    thomsCloset[i].splice(1, nextItem)
}
console.log("Thom is wearing " + thomsOutfit[0] + ", "
    + thomsOutfit[1] + ", and " + thomsOutfit[2])

// 8 - I loops through their closets
for (let i = 0; i < kristynsCloset.length; i++) {
    console.log("WHIRR: Now washing " + kristynsCloset[i])
}

console.log(thomsCloset)

// 9 - Project Euler Problem 1]
let sum = 0
for (let i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i
    }
}
console.log(sum)