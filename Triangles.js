/*# Hungry for more?

## Triangles

0. declare a variable `argument` and set it equal to 7.

1. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.

>Ex: `argument` is 7

```
#
##
###
####
#####
######
#######
```

2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.  This is deceptively tricky. 

>Ex: `argument` is 7

```
      #
     ##
    ###
   ####
  #####
 ######
#######
```


3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

>Ex: `argument` is 7

```
#######
######
#####
####
###
##
#
```

4. Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument.  This is also tricky.

>Ex: `argument` is 7

```
#######
 ######
  #####
   ####
    ###
     ##
      #
```

5. Change the value of `argument` and reload your code and marvel at how you just solved a challenging problem and feel proud of yourself.*/

/*let argument = 7 // this would be the height of triangle.
for(let i = 0; i < argument; i++){ // Make each line until we hit arugment
 // console.log('started first forloop')
  let line = '' // Start of my line, I will build my line here
  for (let j = 0; j < i + 1 ; j++) {
    //console.log("added a # to line ")
    line += '#'
  }
  //console.log("Exited second forloop")
  console.log(line);
}*/

/*2. Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of `argument`.  This is deceptively tricky. 

>Ex: `argument` is 7

```
      #
     ##
    ###
   ####
  #####
 ######
#######*/

let argument = 7 
for(let i = 7; i > 0; i++){
  let line = ''
  for(let j = 0; j < i; j--){
    line +='#'

  }
  console.log(line)
  
}





/*3. Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

>Ex: `argument` is 7


let argument = 7 
for(let i = 7; i > 0; i--){
  let line = ''
  for(let j = 0; j < i; j++){
    line +='#'

  }
  console.log(line)
  
}*/

