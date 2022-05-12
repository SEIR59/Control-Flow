/*## Getting to Know You
Use the following arrays to answer the questions below (name, age, hometown):
```javascript */


/*```

 1. Jim Clark decides that Kenny can't be named "Kenny" anymore. Replace the string "Kenny" in the `kenny` array with "Gameboy".

2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older.  Don't just hard code `187`--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but [see if you can do it in one line of code](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities.  Whatever the _first_ of the 3 cities for Jim Haff is now, remove it from the array using [`.splice()`](https://www.google.com/search?q=mdn+splice&oq=mdn+splice&aqs=chrome.0.0j69i60j0l4.1078j0j7&sourceid=chrome&ie=UTF-8) */

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

console.log(kenny[0]);
kenny[0] = "Gameboy"
console.log(kenny[0]);

console.log(jimClark[1]);
jimClark[1] ++
console.log(jimClark[1])

console.log(ryan[2])
ryan[2] = "Gotham City"
console.log(ryan[2])

console.log(reuben[2]);
reuben.pop()
console.log(reuben);
reuben.push("chicago")
console.log(reuben);

jimHaff.pop()
jimHaff.splice(3, 0, 'New York','California', 'Punta De Este')
console.log(jimHaff);
jimHaff.splice(2,1)
console.log(jimHaff);