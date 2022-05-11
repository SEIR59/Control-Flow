// 1. Easy Going
for (let i = 1; i <= 20; i++ ){
    console.log(i)
}
// 2. Excited Kitten
for (let b = 1; b <= 20; b++){
    console.log(`Love me, pet me! HSSSSSS!`)
}
let phrases = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..." , "...why does the red dot always get away..."];
let phrase = phrases[Math.floor(Math.random() * phrases.length)];
for (let b = 1; b <= 20; b++){
    if (b % 2 === 0){
        console.log(`${phrase}`)
    } else {
        console.log(`Not an even number`)
    }
}