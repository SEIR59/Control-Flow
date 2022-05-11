
//commit 1 Easy Going
for(let k = 1; k <= 20; k+=1){
    console.log(k); }
    

//commit 2 Get_Even

for(let i =0;i <=200; i+=2){
    console.log(i);
}

//commit 3 Excited Kitten


let catPhrase = ["...the catnip made me do it...", "...why does the red dot always get away..." ]
let generate = Math.floor((Math.random()) * catPhrase.length);
let generate2 = Math.floor((Math.random()) * catPhrase.length);
var catArray =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for (var q =0; q<catArray.length; q++){
    if(catArray[q] % 2 ===0)
    console.log(catPhrase[generate])
else if(catArray[q] % 4===0){
    console.log(catPhrase[generate2])
}

    
else{
    console.log("...human...why you taking pictures of me?...")
}

} 
//its choshing a random phase every refresh, but not every log 




// Commit 4 Fizz Buzz

for(let f = 1; f <= 200; f+=1)
if(f %15===0){
    console.log("FizzBuzz")
}

else if(f % 3 ===0){
    console.log("Fizz")

}else if(f % 5 ===0){
    console.log("Buzz")
}
else{
console.log(f)
}


//commit 5 Getting to know you

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// 1.
const indexOfKenny = kenny.indexOf('Kenny');
console.log(indexOfKenny);
if(indexOfKenny !==-1)
kenny[indexOfKenny] = 'Gameboy'
console.log(kenny)

// 2.
jimHaff[1] +=1;
console.log(jimHaff);

// 3.
const indexOfRyan = ryan.indexOf('Denver');
console.log(indexOfRyan);
if(indexOfRyan !==-1)
ryan[indexOfRyan] = 'Gotham City'
console.log(ryan)

// 4.
reuben.pop();
reuben.push("chicago");
console.log(reuben);

// 5.
jimHaff.pop();
jimHaff.push("Philly","Atlanta","Boston");
console.log(jimHaff);


// Commit 6 Yell at the Ninja Turtles
let turtle= ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let t = 0; t<turtle.length; t++){
    console.log(turtle[t].toUpperCase()); 
}
    
