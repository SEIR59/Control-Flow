// 1. Easy Going
for (let i = 1; i <= 20; i++ ){
    console.log(i)
}
// 2. Excited Kitten
for (let b = 1; b <= 20; b++){
    console.log(`Love me, pet me! HSSSSSS!`)
}
let phrases = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..." , "...why does the red dot always get away..."];
for (let b = 1; b <= 20; b++){
    let randomPhrase = Math.floor(Math.random() * phrases.length);
    if (b % 2 === 0){
        console.log(`${phrases[randomPhrase]}`)
    } else {
        console.log(`Not an even number`)
    }
}
// Fizz Bizz
for (let c = 1; c <= 100; i ++){
    if (c / 3){
        console.log(`Fizz`)
    }
    if else (c / 5) {
        console.log(`Buzz`)
    }
    else (c / 3 && c / 5){
        console.log(`FizzBuzz`)
    }
}