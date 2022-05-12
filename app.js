//#####Easy Going######//
//Write a for loop that will log the numbers 1 through 20.
const a1 = [];
for(let i = 1; i < 21; i++) {
    a1.push(i);
}
console.log(a1);

//#####Get Even######//
//Write a for loop that will log only the even numbers in 0 through 200.
const a2 = [];
for(let i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
        a2.push(i);
    }
}
console.log(a2);

//#####Excited Kitten######//
//Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
for(let i = 1; i < 21; i++) {
    let msg = " Love me, pet me! HSSSSSS!";
    console.log(i + msg);
}

//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
let a3 = ["...human...why you taking pictures of me?...", "..the catnip made me do it...", "...why does the red dot always get away..."];
for(let i = 1; i < 21; i++) {
    if (i % 2 == 0) {
        let j = Math.floor((Math.random() * 3));
        let rdmMsg = a3[j];
        console.log(i + rdmMsg);
    }
}

//#####Fizz Buzz######//
//Write a javascript application that logs all numbers from 1 - 100 AND:
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".
for(let i = 1; i < 101; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log(i + " FizzBuzz");
    } else if (i % 3 == 0) {
        console.log(i + " Fizz");
    } else if (i % 5 == 0) {
        console.log(i + " Buzz");
    } 
}
