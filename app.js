// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i < 21; i++) {
    console.log(i)
}

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
for (let j = 0; j <= 200;  j += 2) {
    console.log(j)
}

// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
/*1.*/ 

for (let k = 0; k <= 21; k++) {
    let randomStr = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."];
    if (k % 2 == 0) {
        console.log(randomStr[Math.floor(Math.random() * 3)])
     } else 
       console.log('Love me, pet me! HSSSSSS!');
}

