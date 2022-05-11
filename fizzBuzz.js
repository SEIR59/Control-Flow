/* ## Fizz Buzz 

>NOTE: THIS IS A CLASSIC RITE-OF-PASSAGE FOR JAVASCRIPT PROGRAMMERS, ESPECIALLY ONES AT GA

Write a javascript application that logs all numbers from 1 - 100 **AND**: 

  1. If a number is divisible by 3 log "Fizz" instead of the number.
  
  1. If a number is divisible by 5 log "Buzz" instead of the number.
  
  1. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number, "Fizz", or "Buzz". */

  
  
  
  for(let i = 0; i < 101; i++){
    //console.log(i);
  if (i%3 === 0 && i%5 === 0){
    console.log("fizzbuzz")
  }else if(i%3 === 0){
    console.log("fizz");
  }else if (i%5 === 0){
    console.log("buzz");
  } 

  }