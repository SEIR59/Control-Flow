// ## Easy Going
// 1. Write a for loop that will log the numbers 1 through 20.
// for (let num = 1; num <= 20; num++){
//     console.log(num);
// }

// ## Get Even
// 1. Write a `for` loop that will log only the even numbers in 0 through 200.
// >Hint: Think about the increment expression.
// for (let num = 0; num <= 200; num++) {
//     if (num % 2 === 0) {
//         console.log(num)
//     }
// }

// ## Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// for (let i = 0; i < 20; i++) {
//     console.log(i,"Love me, pet me! HSSSSSS!")
// }
// 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
const responseText = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 0; i < 20; i++) {
    if(i % 2 === 0) {
        console.log(responseText[Math.floor(Math.random() * responseText.length)]);
    } else {
        console.log(i,"Love me, pet me! HSSSSSS!")
    }
}
