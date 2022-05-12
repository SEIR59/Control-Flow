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


//"Commit 6 - Yell at the Ninja Turtles answered"
//1
const members = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
//2
for(let i=0;i<members.length;i++){
  console.log(members[i].toUpperCase());
}
//3
for(let i=0;i<members.length;i++){

    let p = members[i].split('');
    
    for(let a=0; a< p.length;a++){
        if(a%2 === 0){
          p[a]= p[a].toUpperCase()
        }
        else{
          p[a]= p[a].toLowerCase()
        } 
      }
    p=p.join('');
    console.log(p); 
    }
   
    


//"Commit 7 - Kristyn and Thom have their outfits ready for class - array practice"
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //1 Alien Attire
let kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0,1);
thomsCloset[2].push(kristynsShoe);

//2 Dress 'em Up
let rrr =[]
while (rrr.length < 3){
  let n = Math.floor(Math.random()*kristynsCloset.length);
  if(rrr.indexOf(n) === -1) {
    rrr.push(n);
    }
}
console.log(`Kristyn is wearing ${kristynsCloset[rrr[0]]}, ${kristynsCloset[rrr[1]]}, and ${kristynsCloset[rrr[2]]}!!!`);

let lk = Math.floor(Math.random()*3);

console.log(`Thom is wearing ${thomsCloset[0][lk]}, ${thomsCloset[0][lk]}, and ${thomsCloset[0][lk]}!!!`);





