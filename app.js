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
jimHaff.splice(0,1);