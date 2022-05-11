for(let i=0;i<20;i++){
    console.log(i+1);
  }

//Commit 2 - Get Even answered
for(let i=0;i < 200;i+=2){
    console.log(i+2);
   }
   

//"Commit 3 - Excited Kittens answered"
//1
for(let i=0;i < 20;i++){
    console.log("Love me, pet me! HSSSSSS!");
   }
//2
const catSaying = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..." ];

for(let i=0;i < 20;i++){
  let rn = Math.floor(Math.random() * 3);
  
  if (i%2 === 0){
     console.log(catSaying[rn]);
  }
  else{
    console.log("Love me, pet me! HSSSSSS!");
  }
}


//"Commit 4 - Fizz Buzz answered"
for(let i=1;i < 101;i++){
    if( i%5 === 0 && i%3 === 0 ){
      console.log("FizzBuzz");
    }
    else if(i%5 === 0 ){
      console.log("Buzz");
    }
    else if(i%3 === 0){
      console.log("Fizz");
    }
    else{
      console.log(i);
    }
    }

//"Commit 5 - Getting to Know You answered"

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


kenny[0] = "Gameboy";

jimClark[1] +=1;

ryan[2] = "Gotham City";

reuben.pop();
reuben.push("Chicago");

jimHaff.pop();
jimHaff.push("New York","Seoul","Tokyo");

jimHaff.splice(2,1);


