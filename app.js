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

// 5. Getting to Know You

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

//Replace the string "Kenny" in the `kenny` array with "Gameboy"
const firstName = kenny.shift();
const newName = kenny.unshift("Gameboy");
   console.log(kenny)

//Jim Clark just had his birthday; he's now a year older
jimClark[1] += 1;
console.log(jimClark);

//Change Ryan's hometown from "Denver" to "Gotham City".
const oldCity = ryan.pop();
const newCity = ryan.push("Gotham");
   console.log(ryan)
   
//Reuben left Durham for Chicago
const firstCity = reuben.pop();
const secondCity = reuben.push("Chicago");
   console.log(reuben)

// Jim Haff can be in any of the 3 cities
jimHaff.splice(2, 3, "Los Angeles", "New York", "Philly")  
   console.log(jimHaff)
// Jim forgot he can only live in 2 places at once
jimHaff.splice(2, 1, );
   console.log(jimHaff)

// 6. Yell at the Ninja Turtles

const ninjaTurtles= ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for (let t = 0; t < ninjaTurtles.length; t++){
    console.log(ninjaTurtles[t].toUpperCase());
}