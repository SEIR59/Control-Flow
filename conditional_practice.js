// Easy going
for(let i = 1; i<21 ; i++){
    console.log(i);
}

// Get Even
for (let i = 0; i <=200 ; i+=2 ){
    console.log(i);
  }

  // Excited Kitten
for (let i = 0 ; i<20 ; i++){
    console.log("Love me, pet me! HSSSSSS!");
    
  //index 0, which is even, is actually instance #1, which is odd. This is in addition to the previous console log.
    if (i%2 == 1 ){
      let response = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..."];
      console.log(response[Math.floor(Math.random()*3)]);
    }
  }

  // Fizz Buzz
for (let i = 1 ; i <101 ; i++){
    solution = '';
    if (i%3 ==0){
      solution +="Fizz";
    }
    if(i%5 == 0){
      solution+="Buzz";
    }
    if(solution.length == 0){
      console.log(i);
    }else{
      console.log(solution);
    }
  }

// Getting to know you
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

const people = [kenny, jimHaff, reuben, jimClark, ryan];
console.log(people);

kenny[0] = "Gameboy";
jimClark[1] +=1;
ryan[2] = "Gotham City";
reuben.pop();
reuben.push("Chicago");
jimHaff.pop();
jimHaff.push("Seattle", "San Francisco" ,"Auckland");
jimHaff.splice(jimHaff.length-3,1);

console.log(people);

//Yell at the Ninja Turtles
let nTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for( let i = 0;i< nTurtles.length;i++){
  let turtle = nTurtles[i];
  solution = '';
  for (let j = 0 ; j < turtle.length ; j++){
    if ((j+1)%2){
      solution += turtle[j].toUpperCase();
    }else{
      solution += turtle[j];
    }
  }
  console.log(solution)
  }

  // Return of the closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
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
  let kristynsShoe = kristynsCloset.shift();
  thomsCloset[2].push(kristynsShoe);
  
  //This function looks at the data structure of the first element. If it's not an array, it moves to "simple" and we pick 3 unique items. If it is an array, we pick one item from each array, currently not capped at 3, could be any number depending on number of subclosets.
  let randomOutfit = function(closet){
    outfit =[]
    if(Array.isArray(closet[0]) == false){
      //console.log('Simple Closet');
      tempcloset = closet;
      for (let i = 0; i<3 ; i++){
        let item = tempcloset.splice(Math.floor(Math.random()*tempcloset.length) , 1);
        outfit.push(item[0]);
      }
    }else{
      //console.log('Complicate closet')
      for (let i = 0 ; i < closet.length ; i++){
        tempcloset = closet[i];
        let item = tempcloset.splice(Math.floor(Math.random()*tempcloset.length) , 1);
        outfit.push(item[0]);
      }
    }
    return outfit;
  }
  //randomOutfit is called and returns a list of items.
  //console.log(randomOutfit(kristynsCloset));
  //Setup outfit array to use.
  let kOutfit = randomOutfit(kristynsCloset);
  console.log(`Kristyn is wearing her ${kOutfit[0]}, the ${kOutfit[1]}, and her signature ${kOutfit[2]}.`);
  
  let tOutfit = randomOutfit(thomsCloset);
  console.log(`Thom is wearing his ${tOutfit[0]}, the ${tOutfit[1]}, and some ugly, overly large ${tOutfit[2]}.`);

  // Dirty Laundry
for (let i = 0 ; i < kristynsCloset.length;i++){
    console.log(`WHIRR: Now washing ${kristynsCloset[i]}`)
  }
  //logging specifically the entire arrays, not each element within each array.
  for (let i = 0 ; i < thomsCloset.length;i++){
    console.log(thomsCloset[i]);
  }

  //Multiples of 3 and 5
let solution = 0;
for (let i = 0; i < 1000;i++){
  if (i%3 == 0){
    solution +=i;
  }else if (i%5 == 0){
    solution += i;
  }
} 
console.log(solution);

//Hungry for more?
//triangles

let argument = 69; //this makes the best triangles, despite being designed for two sides :wink:+:finger gun:+:confident mouth click noise:
//left iso
for (let i = 0; i < argument;i++){
  let base = ''
  for (let j = -1; j < i ; j++){
    base+='#';
  }
  console.log(base)
}
//right iso
for (let i = 0; i < argument;i++){
  let base = '';
  for (let k = 1 ; k < argument-i ; k++){
    base+=' ';
  }
  for (let j = 0; j <= i ; j++){
    base+='#';
  }
  console.log(base)
}
//upside down left iso
for (let i = 0; i < argument;i++){
  base='';
  for (let j = 0; j < argument-i; j++){
    base += '#';
  }
  console.log(base);
}

//upside down right iso
for (let i = 0; i < argument;i++){
  base='';
  for (let k = 0 ; k < i ; k++){
    base +=' ';
  }
  for (let j = 0; j < argument-i; j++){
    base += '#';
  }
  console.log(base);
}

//Find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18,12, 17, 12, 71, 18, 15, 12];
nums.sort();
//console.log(nums);
//console.log(nums.length);
if (nums.length%2 == 1){
  let dist = (nums.length-1)/2;
  console.log(nums[dist]);
}else{
  let dist = (nums.length/2);
  let median = (nums[dist-1]+nums[dist])/2;
  console.log(median);
}