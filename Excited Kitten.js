/*Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random. */


let even = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for(let i = 1; i < 21; i++){
  console.log(i,"Love me, pet me! HSSSSSS!")
let randomPhrase = Math.floor(Math.random() * even.length)
  if( i > 0 && i%2 === 0){
console.log(even[randomPhrase]);
}


}