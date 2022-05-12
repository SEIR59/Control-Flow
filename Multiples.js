/*## Multiples of 3 and 5

_Yes, you might have tackled this earlier, but try it again (don't look back at your other code :eyes:)_

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the **sum** of all the multiples of 3 or 5 below 1000.

:clap: You just solved [Project Euler](https://projecteuler.net/problem=1) problem 1! :clap:

>Tip: Get used to thinking about how to solve problems _now_. Will help immensely with coding challenges, and get your coding brain muscles nice and flexed for the class. Make a habit of going to Project Euler and taking a crack at the problems*/

let sum = 0;
  for( let i = 0; i < 1000; i++) {
      if(i % 3 === 0 || i % 5 === 0){
         sum +=i;
      }
  }
  console.log(sum);