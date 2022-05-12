
//Count 1 - 20 in console, Easy Going
for(let i = 1; i <= 20; i++){
    console.log(i);
}

//Even numbers 0-200, Get Even
for(let i = 0; i <= 200; i+=2){
    console.log(i);
}

//Log text 20 times, even numbers produce another text at random points, Excited Kitten
let a = 0;
let catSpeaks = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

while(a < 20){
    let randomText = Math.floor(Math.random() * 3);
    console.log("Love me, pet me! HSSSSSS!");
    if(a % 2 == 0){
        console.log(catSpeaks[randomText]);
    }
    a++;
}

//Fizz Buzz
let b = 1;
while(b <= 100){
    if(b % 3 == 0 && b % 5 == 0){
        console.log("FizzBuzz");
    }else if(b % 3 == 0){
        console.log("Fizz");
    }else if(b % 5 == 0){
        console.log("Buzz");
    }else{
    console.log(b);
    }
    b++;
}