/*Easy Going

#1

for (let i = 1; i < 21; i++) {
    console.log(i);
}

Get Even

#1

for (let i = 0; i < 201; i += 2) {
     console.log(i);
}


// Excited Kitten

// #1

for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!")
// #2
const myArr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
const random = Math.floor(Math.random() * myArr.length);
    if (i %2 === 0) {
        console.log(myArr[random])}
    }
*/

// Fizz Buzz

for (let i = 0; i < 100; i++) {
    // console.log(i);
    if (i %3 === 0 && i %5 ===0) {
        console.log("Fizz Buzz");
    } else if (i %3 === 0) {
        console.log("Fizz")
    } else if (i %5 === 0) {
        console.log("Buzz")
    } 
    }
