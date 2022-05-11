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
//its random every time i run it, but its not random every time it runs the loop