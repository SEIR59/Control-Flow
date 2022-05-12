/*## Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for loop` to call `.toUpperCase()` on each of them and print out the result.

3. Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.*/

const NinjaTurtlesMember = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

for(let i = 0;i < NinjaTurtlesMember.length;i++){
  //console.log(NinjaTurtlesMember[i].toUpperCase());
  let temp = NinjaTurtlesMember[i]
  let Ninja = '';
  
  for(let j = 0;j < temp.length;j++){
    
    if(j % 2 === 0){
      Ninja = Ninja.concat(temp.charAt(j).toUpperCase());
    
    }else{
      Ninja = Ninja.concat(temp.charAt(j));
    }
    NinjaTurtlesMember[i] = Ninja
    
  }
    
  }
for(let i = 0; i < NinjaTurtlesMember.length; i++){
  console.log(NinjaTurtlesMember[i])
}