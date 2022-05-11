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

