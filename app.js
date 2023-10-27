//PRACTICE 3.1
//1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. display the  list and its length in the console.
// 3. After the display then Update "Bread" to "Bananas."
// 4. Display the  entire updated list to the console. use basic java script , html and css

//Answer: Step 1: Create an array for the shopping list

// let shoppingList = ["Milk", "Bread", "Apples"];

// // Step 2: Display the initial shopping list and its length
// console.log("Initial shopping list: " + shoppingList);
// console.log("Initial shopping list length: " + shoppingList.length);

// // Step 3: Update "Bread" to "Bananas"
// const indexOfBread = shoppingList.indexOf("Bread");
// if (indexOfBread !== -1) {
//     shoppingList[indexOfBread] = "Bananas";
// }

// // Step 4: Display the entire updated list
// console.log("Updated shopping list: " + shoppingList);

//PRACTICE 3.2
//1. Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list. display it in console.
// 3. Update "Bread" with Bananas and Eggs. display it in console.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically. display it in console.
// 6. Find and output the index value of Milk in console.
// 7. After Bananas, add Carrots and Lettuce. display it in console.
// 8. Create a new list containing Juice and Pop. display this in console.
// 9. Combine both lists, adding the new list twice to the end of the first list. display it in console.
// 10. Get the last index value of Pop and output it to the console.
// 11. Your final list should look like this:
// ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice",
// "Pop", "Juice", "Pop"]


// ANSWER: Step 1: Create an empty shopping list array
// let shoppingList = [];

// // Step 2: Add items to the list and display it in the console
// shoppingList.push("Milk", "Bread", "Apples");
// console.log("Shopping list after adding items:", shoppingList);

// // Step 3: Update "Bread" with "Bananas" and "Eggs"
// const indexOfBread = shoppingList.indexOf("Bread");
// if (indexOfBread !== -1) {
//   shoppingList[indexOfBread] = "Bananas";
//   shoppingList.push("Eggs");
// }
// console.log("Shopping list after updating:", shoppingList);

// // Step 4: Remove the last item from the array and output it
// const lastItem = shoppingList.pop();
// console.log("Removed item:", lastItem);

// // Step 5: Sort the list alphabetically and display it
// shoppingList.sort();
// console.log("Shopping list after sorting:", shoppingList);

// // Step 6: Find and output the index value of "Milk"
// const indexOfMilk = shoppingList.indexOf("Milk");
// console.log("Index of 'Milk' in the list:", indexOfMilk);

// // Step 7: Add "Carrots" and "Lettuce" after "Bananas"
// const indexAfterBananas = shoppingList.indexOf("Bananas") + 1;
// shoppingList.splice(indexAfterBananas, 0, "Carrots", "Lettuce");
// console.log("Shopping list after adding 'Carrots' and 'Lettuce':", shoppingList);

// // Step 8: Create a new list containing "Juice" and "Pop"
// let newList = ["Juice", "Pop"];
// console.log("New list:", newList);

// // Step 9: Combine both lists, adding the new list twice to the end of the first list
// shoppingList = shoppingList.concat(newList, newList);
// console.log("Combined shopping list:", shoppingList);

// // Step 10: Get the last index value of "Pop" and output it
// const lastIndexOfPop = shoppingList.lastIndexOf("Pop");
// console.log("Last index of 'Pop':", lastIndexOfPop);

//PRACTICE 3.3
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

// // ANSWER: Step 1: Create an array containing three values: 1, 2, and 3
// const originalArray = [1, 2, 3];

// // Display the original array in the console
// console.log("Original Array:", originalArray);

// // Step 2: Nest the original array into a new array three times
// const newArray = [originalArray, originalArray, originalArray];

// // Display the new array in the console
// console.log("New Array (nested original array three times):", newArray);

// // Step 3: Output the value 2 from one of the arrays into the console
// const value = newArray[1][1];

// // Display the value 2 in the console
// console.log("Value 2 from one of the arrays:", value);

// Practice exercise 3.4
// 1. Create a new myCar object for a car. Add some properties, including, but not
// limited to, make and model, and values for a typical car or your car. Feel free
// to use booleans, strings, or numbers.
// JavaScript Multiple Values
// [ 64 ]
// 2. Create a variable that can hold the string value color. This variable
// containing a string value color can now be used to reference the property
// name within myCar. Then, use the variable within the square bracket notation
// to assign a new value to the color property in myCar.
// 3. Use that same variable and assign a new property string value to it, such as
// forSale. Use the bracket notation once again to assign a new value to the
// forSale property to indicate whether the car is available for purchase.
// 4. Output make and model into the console.
// 5. Output the value of forSale into the console.

// ANSWER
// Create a myCar object with some properties
// let myCar = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022,
//     color: "Blue",
//     forSale: true,
//     mileage: 15000
//   };

//   // Create a variable to reference the property name 'color'
//   let propertyName = 'color';

//   // Use the variable within square bracket notation to assign a new value to the 'color' property
//   myCar[propertyName] = 'Red';

//   // Assign a new property 'forSale' and set its value using the variable
//   propertyName = 'forSale';
//   myCar[propertyName] = false;

//   // Output 'make' and 'model' to the console
//   console.log('Make:', myCar.make);
//   console.log('Model:', myCar.model);

//   // Output the value of 'forSale' to the console
//   console.log('For Sale:', myCar.forSale);

// Practice exercise 3.5
// 1. Create an object named people that contains an empty array that is called
// friends. 
// 2. Create three variables, each containing an object, that contain one of your
// friend's first names, last names, and an ID value. ask the user to enter them
// 3. Add the three friends to the friend array.
// 4. Output it to the console

// ANSWER
// Step 1: Create an object named people with an empty friends array
// let people = {
//     friends: []
//   };

//   // Step 2: Create variables for your friend's information
//   let friend1 = {
//     firstName: prompt("Enter the first name of your friend 1:"),
//     lastName: prompt("Enter the last name of your friend 1:"),
//     id: prompt("Enter the ID of your friend 1:")
//   };

//   let friend2 = {
//     firstName: prompt("Enter the first name of your friend 2:"),
//     lastName: prompt("Enter the last name of your friend 2:"),
//     id: prompt("Enter the ID of your friend 2:")
//   };

//   let friend3 = {
//     firstName: prompt("Enter the first name of your friend 3:"),
//     lastName: prompt("Enter the last name of your friend 3:"),
//     id: prompt("Enter the ID of your friend 3:")
//   };

//   // Step 3: Add the friends to the friends array
//   people.friends.push(friend1, friend2, friend3);

//   // Step 4: Output the friends array to the console
//   console.log("Friends List:", people.friends);

// CHAPTER PROJECT
// Manipulating an array
// Take the following array:
// const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
// {test: 'one', score: 55}, ['one', 'two']];
// Manipulate your array using various methods, such as pop(), push(), shift(), and
// unshift(), and transform it into the following:
// ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
// You can take the following steps, or adopt your own approach:
// • Remove the first item and the last item.
// • Add FIRST to the start of the array.
// • Assign hello World to the fourth item value.
// • Assign MIDDLE to the third index value.
// • Add LAST to the last position in the array.
// • Output it to the console. use html and css to display it in the webpage also


// const theList = ['Laurence', 'Svekis', true, 35, null, undefined, { test: 'one', score: 55 }, ['one', 'two']];

// // Remove the first and last items
// theList.shift();
// theList.pop();

// // Add "FIRST" to the start of the array
// theList.unshift("FIRST");

// // Assign "MIDDLE" to the third index value
// theList[2] = "MIDDLE";

// // Assign "hello World" to the fourth item value
// theList[3] = "hello World";

// // Add "LAST" to the last position in the array
// theList.push("LAST");

// // Output the transformed array to the console
// console.log(theList);

// // Display the transformed array on the webpage
// const outputElement = document.getElementById('output');
// outputElement.innerHTML = theList.map(item => `<p>${item}</p>`).join('');

// PROJECT 2
// Company product catalog
// In this project, you will implement a data structure for a product catalog and create
// queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and
// quantity.
// 3. Add all three objects to the main array using an array method, and then log
// the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data
// structure.

// ANSWER

// // Step 1: Create an array to hold an inventory of store items
// let inventory = [];

// // Step 2: Create three items with properties: name, model, cost, and quantity
// let item1 = {
//   name: "Smartphone",
//   model: "S10",
//   cost: 499.99,
//   quantity: 10
// };

// let item2 = {
//   name: "Laptop",
//   model: "XPS 13",
//   cost: 999.99,
//   quantity: 5
// };

// let item3 = {
//   name: "Tablet",
//   model: "iPad Air",
//   cost: 329.99,
//   quantity: 7
// };

// // Step 3: Add the items to the inventory array
// inventory.push(item1, item2, item3);

// // Step 4: Access the quantity element of the third item and log it
// console.log("Inventory Array:", inventory);
// console.log("Quantity of the third item:", inventory[2].quantity);

// // Display the result on the webpage
// const outputElement = document.getElementById("output");
// outputElement.innerHTML = `
//   <h2>Product Catalog</h2>
//   <ul>
//     <li>Name: ${inventory[0].name}, Model: ${inventory[0].model}, Cost: $${inventory[0].cost}, Quantity: ${inventory[0].quantity}</li>
//     <li>Name: ${inventory[1].name}, Model: ${inventory[1].model}, Cost: $${inventory[1].cost}, Quantity: ${inventory[1].quantity}</li>
//     <li>Name: ${inventory[2].name}, Model: ${inventory[2].model}, Cost: $${inventory[2].cost}, Quantity: ${inventory[2].quantity}</li>
//   </ul>
// `;
// SELF CHECK QUIZ
// Can you use const and update values within an array?

// Yes, you can use const to declare an array, but you can still change the values inside the array.
// Which property in an array gives the number of items contained in the array?

// The length property of an array tells you how many items are in it.
// What is the output in the console?

// The first console.log returns -1 because 0 is not in the array.
// The second console.log returns 1 because 3 is at index 1 in the array.
// How do you replace the second element in an array with the value 4?

// You can replace the second element (at index 1) by setting myArr[1] to 4.
// What is the output in the console?

// The first console.log shows an array with two empty slots and 'test' at index 10.
// The second console.log returns undefined because there's nothing in the array at index 2.
// What is the output in the console?

// The output is undefined because myArr3 is first sorted and then its length is set to 0, making it an empty array with no elements.
// SECOND METHOD


// Sure, here are the questions followed by their simplified answers:

// Can you use const and update values within an array?

//     Yes, you can use const to declare an array, but you can still change the values inside the array.
//         Which property in an array gives the number of items contained in the array ?

//             The length property of an array tells you how many items are in it.
// What is the output in the console ?

//     arduino
// Copy code
// const myArr1 = [1, 3, 5, 6, 8, 9, 15];
// console.log(myArr1.indexOf(0)); // Output: -1 (0 is not in the array)
// console.log(myArr1.indexOf(3)); // Output: 1 (3 is at index 1 in the array)
// How do you replace the second element in an array with the value 4 ?

//     You can replace the second element(at index 1) by setting myArr[1] to 4.
// What is the output in the console ?

//     arduino
// Copy code
// const myArr2 = [];
// myArr2[10] = 'test';
// console.log(myArr2);        // Output: [ <2 empty items>, 'test' ]
// console.log(myArr2[2]);     // Output: undefined
// What is the output in the console ?
// const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);      // Output: undefined




// // METHOD 2


// Question: Can you use const and change values within an array?
//     Answer: Yes, you can use const to declare an array, and while you can't reassign the array itself, you can update or change the values within the array.

// Question: What property in an array tells you how many items it contains ?
//     Answer : The length property of an array tells you the number of items it contains.

//         Question: What do you see in the console for the following code ?

//             javascript
// Copy code
// const myArr1 = [1, 3, 5, 6, 8, 9, 15];
// console.log(myArr1.indexOf(0));
// console.log(myArr1.indexOf(3));
// Answer: You will see:

// -1(0 is not in the array)
// 1(3 is at index 1)
// Question: How can you replace the second element in an array myArr with the value 4 ?
//     Answer : You can replace it like this:

// javascript
// Copy code
// const myArr = [1, 3, 5, 6, 8, 9, 15];
// myArr[1] = 4;
// Question: What do you see in the console for the following code ?

//     javascript
// Copy code
// const myArr2 = [];
// myArr2[10] = 'test';
// console.log(myArr2);
// console.log(myArr2[2]);
// Answer: You will see:

// [ < 10 empty items >, 'test'](an array with 10 empty slots and 'test' at index 10)
// undefined(index 2 is not explicitly defined)
// Question: What do you see in the console for the following code ?

//     javascript
// Copy code
// const myArr3 = [3, 6, 8, 9, 3, 55, 553, 434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);
// Answer: You will see:

// undefined(the array is empty after sorting and setting its length to 0)












