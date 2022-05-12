// question 1:
for (let i = 0; i < 21; i++){
    console.log(i)
}

// question 2:
for (let i = 0; i < 201; i += 2){
    console.log(i)
}

// question 3:
let x
for (let i = 0; i < 21; i++){
    if (i % 2 === 1){
        console.log("Love me, pet me! HSSSSSS!")
    } else {
         x = Math.random()
    }
    
    if (x > 0.66){
        console.log("...human...why you taking pictures of me?...")
    } else if (x > 0.33) {
        console.log("...the catnip made me do it...")
    } else if (x > 0){
        console.log("...why does the red dot always get away...")
    }
    x = 0
}

//question 4:
for (let i = 1; i < 101; i++){
    if (i % 15 === 0){
        console.log("FizzBuzz")
    } else if (i % 5 === 0){
        console.log("Buzz")
    } else if (i % 3 === 0){
        console.log("Fizz")
    } else {
        console.log(i)
    }
}

//question 5:
//1
kenny[0] = "Gameboy"
console.log(kenny)
//2
jimClark[1] += 1
console.log(jimClark)
//3
ryan[2] = "Gotham City"
console.log(ryan)
//4
reuben.pop()
reuben.push("Chicago")
console.log(reuben)
//5
jimHaff[2] = ["New York", "New Jersery", "New Hampshire"]
console.log(jimHaff)
//6
jimHaff.splice(2, 1, ["New Jersey", "New Hampshire"])
console.log(jimHaff)

//question 6
let arr = ["Donatello", "Leonardo", "Michaelangelo"]
for (let i = 0; i < arr.length; i++){
  let x = ""
    for (let j = 0; j < arr[i].length; j++){
        if (j % 2 === 0){
            x = x + arr[i][j].toUpperCase()
        } else {
          x = x + arr[i][j]
        }
    }
    arr[i] = x
}
console.log(arr)