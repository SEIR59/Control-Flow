// Easy Going

for (let i = 1; i < 21; i++)
    console.log(i)

// Get Even

for (let i = 0; i < 200; i += 2)
    console.log(i)

// Fizz Buzz

const myCatSayings = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

for (let i = 0; i < 20; i++) {
    let sayings = Math.floor(Math.random() * myCatSayings.length)
    if (i % 2 === 0) {
        console.log(myCatSayings[sayings])
    } else {
        console.log("Love me, pet me! HSSSSSS!")
    }
}



