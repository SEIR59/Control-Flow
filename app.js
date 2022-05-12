// 1.
console.log("Easy Going")
for (let i = 1; i < 21; i++) {
    console.log(i);
}

// 2.
console.log("Get Even")
for (let i = 0; i < 201; i += 2) {
    console.log(i);
}

// 3. 
console.log("Excited Kitten")
for (let i = 1; i <= 20; i++) {
   console.log("Love me, pet me! HSSSSSS!");
}

console.log("Excited Kitten 2")
let kittyWhy = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
let even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
for (let c = 1; c <= 20; c++) {
    if (c === even[Math.random]) {
        console.log(Math.floor(Math.random() * kittyWhy.length))
    }
    else console.log("Love me, pet me! HSSSSSS!")
 }

 // 4.
 console.log("Fizz Buzz")
 for (let i = 1; i < 101; i++) {
     if (i % 3 === 0) {
         console.log("Fizz");
     }
     else if (i % 5 === 0) {
         console.log("Buzz")
     }
     else if (i % 15 === 0) {
         console.log("FizzBuzz")
     }
     else console.log(i);
 }
