// // Easy Going
// // Write a for loop that will log the numbers 1 through 20.
for (let i = 0; i <= 20; i++){
    console.log(i)
}

// // Get Even
// // Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i = i + 2){
    console.log(i)
}

// Excited Kitten
// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// 2. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

for (let i = 0; i <= 20; i++){
    console.log("Love me, pet me! HSSSSSS!")
    r = Math.floor(Math.random()*3)
    if (r === 0) {
        console.log("...human...why you taking pictures of me?...")
    }
    else if (r === 1) {
        console.log("...the catnip made me do it...")
    }
    else if (r === 2) {
        console.log("...why does the red dot always get away...")
    }
}