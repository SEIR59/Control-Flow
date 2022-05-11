// 1. Easy Going
for (let input = 1; input <= 20; input++) {
    console.log(input);
   }

// 2. Get Even
for (let i = 0; i <= 200; i +=2){
    console.log(i);
   }

// 3. Excited Kitten
const catArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let catPhrase=["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
let generate = Math.floor((Math.random(4)) * catPhrase.length);
for (let c = 0; c < catArray.length; c++){
   if(catArray[c] % 2 === 0)
       console.log(catPhrase[generate])
    else{
        console.log("Love me, pet me! HSSSSSS!")
    }
   }
//its random every time i run it the code, but its not random every time it runs the loop.

// 4. Fizz Buzz

for (let f = 1; f <= 100; f+=1)
    
    if(f % 15 ===0){
    console.log("FizzBuzz")
    }
   else if(f % 3 ===0){
       console.log("Fizz")
   }
   else if(f % 5 ===0){
       console.log("Buzz")
   }
   else {
       console.log(f)
   }