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

// Getting to Know You //


Use the following arrays to answer the questions below (name, age, hometown):
```javascript
const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];
```
1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the `kenny` array with "Gameboy".

2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8)

<hr>
&#x1F534; The commit message should read: <br>
"Commit 5 - Getting to Know You answered"
<hr></hr>