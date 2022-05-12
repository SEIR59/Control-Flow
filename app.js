// //EASY GOING
// for (let i = 1; i <= 20; i++) {
//     console.log(i)
// }

// Get Even
// for (let i = 1; i <= 200; i++) {
//     i += 1
//     console.log(i);
// }

// Excited Kitten
 const dialog = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red do always get away..."];

 for (let i = 1; i <= 20; i++) {
     if (i % 2 === 0) {
         console.log(dialog[Math.floor(Math.random() * dialog.length)])
     } else {
        console.log("Love me, pet me! HSSSSS!")
    }
}

// Fizz Buzz
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else {
//         console.log(i)
//     }
// }