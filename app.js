//1. Easy Going
let i = 0;

//for(let i = 1; i <= 20; i++) {
//   console.log(i)
//}


//2. Get even 
//for(let i = 0; i <= 200; i += 2){
//   console.log(i)
//}



//3. Excited Kitted
//for(i = 0; i < 20; i++) {
//    console.log("Love me, pet me! HSSSSSS!" )
//}

//4. FizzBuzz
function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")

    } else
        console.log(i)
}
}

console.log(fizzbuzz());