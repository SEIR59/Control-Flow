// // 1. Easy Going
// for (let i = 1; i <= 20; i++ ){
//     console.log(i)
// }
// // 2. Excited Kitten
// for (let b = 1; b <= 20; b++){
//     console.log(`Love me, pet me! HSSSSSS!`)
// }
// let phrases = ["...human...why you taking pictures of me?..." , "...the catnip made me do it..." , "...why does the red dot always get away..."];
// for (let b = 1; b <= 20; b++){
//     let randomPhrase = Math.floor(Math.random() * phrases.length);
//     if (b % 2 === 0){
//         console.log(`${phrases[randomPhrase]}`)
//     } else {
//         console.log(`Not an even number`)
//     }
// }
// // Fizz Bizz
// for (let c = 1; c <= 100; i ++){
//     if (c % 3 === 0 && c % 5 === 0){
//         console.log(`FizzBuzz`)
//     }
//     else if (c % 5 === 0) {
//         console.log(`Buzz`)
//     }
//     else if (c % 3 === 0){
//         console.log(`Fizz`)
//     }
// }

// Getting to know you
// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// kenny[0] = 'Gameboy'
// console.log(kenny);

// jimClark[1] = jimClark[1]+1
// console.log(jimClark);

// ryan[2] = 'Gotham City'
// console.log(ryan);

// reuben.pop();
// console.log(reuben);
// reuben.push('Chicago');
// console.log(reuben);

// jimHaff.splice(2, 1,'Indy','Chicago','Nashville');
// console.log(jimHaff)

// jimHaff.splice(2,2);
// console.log(jimHaff);

const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i = 0; i < turtles.length; i++){
    turtles[i] = turtles[i].toUpperCase();
    console.log(turtles[i]);
}