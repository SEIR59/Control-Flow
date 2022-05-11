
// 1. Write a for loop that will log the numbers 1 through 20.

// const myNum = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let i = 0; i < myNum.length; i++){
//   console.log(myNum[i])
// }

// ## Get Even
// 1. Write a `for` loop that will log only the even numbers in 0 through 200.
//    > Hint: Think about the increment expression.

// for (let i = 0; i <= 200; i+=2){
//     console.log(i);
// }

// ## Excited Kitten

// 1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// for (i = 0; i < 20; i++){
//   console.log("Love me, pet me! HSSSSSS!")
// }


// // 2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.



// for (i = 0; i < 20; i++){
//   console.log("Love me, pet me! HSSSSSS!")
// } 

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// function getRandom() {
//   return Math.random();
// }

// > Hint: You will need to use Math.random()

// ![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)


// ## Fizz Buzz

// > NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

// Write a javascript application that logs all numbers from 1 - 100 **AND**:

for (let i = 1; i< 101; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log("Fizzbuzz");
  } else if (i % 3 === 0){
    console.log("Fizz");
  } else if (i % 5 === 0){
    console.log("Buzz");
  }
}

// 1. If a number is divisible by 3 log "Fizz" instead of the number.

// 1. If a number is divisible by 5 log "Buzz" instead of the number.

// 1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz".





