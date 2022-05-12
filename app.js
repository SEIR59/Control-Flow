// queetion 1
//for(i =1; i < 21;i++){
//    console.log(i);
//}

// question 2
//for(let i=0;i <201;i+=2){
//  console.log(i);
// }

// question 3
/*
let even = [
  "...human...why you taking pictures of me?...",
  "...the catnip made me do it...",
  "...why does the red dot always get away...",
];

let all = ["Love me, pet me! HSSSSSS!"];

for (let i = 1; i < 21; i++) {
  console.log(all);

  if (i % 2 === 0) {
    console.log(even[Math.floor(Math.random() * even.length)]);
  }
} */

// queston 4
/*
let one = "Fizz";
let two = "Bizz";

for (let i = 1; i < 101; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(one + two);
  } else if (i % 5 === 0) {
    console.log(two);
  } else if (i % 3 === 0) {
    console.log(one);
  }
  // else if (i%3===0) {
  // console.log();
  //}
}  */
// question 5

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];


kenny[0]="Gameboy";
console.log(`Jim Clark decides that ` + kenny[0] + ` can't be named "` + kenny[0] + `" anymore.`);

jimClark[1]++;
console.log(jimClark[1]);

ryan[2]= "Gotham City";
console.log(ryan[2]);

reuben.pop();
console.log(reuben);
reuben.push("Chicago");
console.log(reuben);

jimHaff.pop();
console.log(jimHaff);
jimHaff.push("Addis Abeba","Washington DC","Kenya");
console.log(jimHaff); 

jimHaff.splice(2,2);
console.log(jimHaff);
