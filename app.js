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


// 7 - Kristyn and Thom have their outfits ready for class


// 8 - I loops through their closets


// 9 - Project Euler Problem 1

