// Easy going //

for (let i =1; i <= 20; i++) {
    console.log(i)
}
	
// Get Even //

for (let i = 0; i <= 200; i++) {
    if (i % 2 === 0) 
        console.log(i)
 }

// Excited Kitten //

  // 1 //
 for (let i = 0; i <= 20; i++) {
	console.log('Love me, pet me! HSSSSSS!')
 }
 //2//

 let catSays = ["...human...why you taking pictures of me?...", "...the catnip made me do it...","...why does the red dot always get away..."]
 for (let i = 0; i <= 20; i++) {
    console.log(i) 
    console.log('Love me, pet me! HSSSSSS!')
    if(i % 2 === 0)
    console.log(catSays[(Math.floor(Math.random() * 3))])
 }
// Fizz Buzz//

for (let number = 1; number <= 15; number++) {
	if (number % 3 == 0 && number % 5 == 0) {
		console.log('FizzBuzz')
	} else if (number % 3 == 0) {
		console.log('Fizz')
	} else if (number % 5 == 0) {
		console.log('Buzz')
	} else {
		console.log(number)
	}
}
