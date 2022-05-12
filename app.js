//#####Easy Going######//
//Write a for loop that will log the numbers 1 through 20.
const a1 = [];
for(let i = 1; i < 21; i++) {
    a1.push(i);
}
console.log(a1);

//#####Get Even######//
//Write a for loop that will log only the even numbers in 0 through 200.
const a2 = [];
for(let i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
        a2.push(i);
    }
}
console.log(a2);