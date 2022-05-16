// Easy going 

for (let i =1; i <= 20; i++) {
    console.log(i)
}
	
// Get Even 

for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) 
        console.log(i)
 }

// Excited Kitten 

  // 1 
 for (let i = 0; i <= 20; i++) {
	console.log('Love me, pet me! HSSSSSS!')
 }
 //2

 let catSays = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."]
 for (let i = 0; i <= 20; i++) {
    console.log(i) 
    console.log('Love me, pet me! HSSSSSS!')
    if(i % 2 === 0)
    console.log(catSays[(Math.floor(Math.random() * 3))])
 }
// Fizz Buzz

for (let i = 1; i <= 100; i++) {
	console.log(i);
	if ( (i%3 === 0) && (i%5 === 0)) {
		console.log('Fizz Buzz');
	} else if (i % 5 === 0) {
		console.log('Buzz');
	} else if ( i % 3 === 0) {
		console.log('Fizz');
	}
}
// Getting to Know You 


Use the following arrays to answer the questions below (name, age, hometown):
```javascript
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
```
iconst kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1
kenny[0] = 'Gameboy';


// 2
jimClark[1]++;

//3
ryan[2] = 'Gotham City';

//4
reuben.pop();
reuben.push('Chicago');

//5
jimHaff.pop()
jimHaff.push("New York", "Miami", "Houston");

//6
jimHaff.splice(2,1)

// Yell at the Ninja Turtles //

// 1
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// 2
for (let i = 0; i < ninjaTurtles.length; i++) {
		console.log(ninjaTurtles[i].toUpperCase());
}

// Return of the Closets //
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

// Alien Attire - #1
const kristynsShoe = kristynsCloset[0];
kristynsCloset.splice(0,1);
thomsCloset[2].push(kristynsShoe);

//Dress 'em Up - #1
console.log("Kristyn is wearing a " + kristynsCloset[3] +" with a " 
	+ kristynsCloset[4] + " and a " + kristynsCloset[5]  +"." );
console.log("Thom is wearing a " + thomsCloset[0][2] +" with " 
	+ thomsCloset[1][0] + " and a " + thomsCloset[2][2]  +"." );
	
// Dirty Laundry //
// 1
for (let i = 0; i < kristynsCloset.length; i++) {
	console.log("WHIRR: Now washing " + kristynsCloset[i]);
}

// 2
for (let i = 0; i < thomsCloset.length; i++) {
	console.log(thomsCloset[i]);
}
	
	
