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

// Practice exercise 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action
// }
// Logic Statements
// [ 74 ]
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.

// ANSWER

// // 1. Create a variable with a Boolean value.
// const myVariable = true;

// // 2. Output the value of the variable to the console.
// console.log("The value of myVariable is: " + myVariable);

// // 3. Check whether the variable is true and output a message to the console.
// if (myVariable) {
//     console.log("myVariable is true!");
// }

// // 4. Add another if statement with an '!' in front of the variable to check whether it's not true, and create a message for that case.
// if (myVariable) {
//     console.log("myVariable is true!");
// } else {
//     console.log("myVariable is not true!");
// }

// // 5. Change the variable to the opposite to see how the result changes.
// const myVariableOpposite = !myVariable;

// if (myVariableOpposite) {
//     console.log("myVariableOpposite is true!");
// } else {
//     console.log("myVariableOpposite is not true!");
// }

// Practice exercise 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
// 7. Output the response message variable to the console


// ANSWER

// // 1. Create a prompt to ask the user's age
// const userAge = prompt("Please enter your age:");

// // 2. Convert the response from the prompt to a number
// const age = parseInt(userAge);

// // 3. Declare a message variable that you will use to hold the console message for the user
// let message;

// // 4. If the input age is equal to or greater than 21, set the message variable to confirm entry to a venue and the ability to purchase alcohol
// if (age >= 21) {
//     message = "You can enter the venue and purchase alcohol.";
// }
// // 5. If the input age is equal to or greater than 19, set the message variable to confirm entry to the venue but deny the purchase of alcohol
// else if (age >= 19) {
//     message = "You can enter the venue, but you cannot purchase alcohol.";
// }
// // 6. Provide a default else statement to set the message variable to deny entry if none are true
// else {
//     message = "You are denied entry to the venue.";
// }

// // 7. Output the response message variable to the console
// console.log(message);



// Practice exercise 4.3
// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check whether
// their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console


// ANSWER

// 1. Create a Boolean value for an ID variable
// const hasValidID = true; // Change this to true or false as needed

// // 2. Using a ternary operator, create a message variable that will check whether their ID is valid and either allow a person into a venue or not
// const message = hasValidID ? "You are allowed to enter the venue." : "You are not allowed to enter the venue.";

// // 3. Output the response to the console
// console.log(message);

// Practice exercise 4.4
// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript function Math.
// random() will return a random number in the range of 0 to less than 1, including 0
// but not 1. You can then scale it to the desired range by multiplying the result and
// using Math.floor() to round it down to the nearest whole number; for example, to
// generate a random number between 0 and 9:
// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);
// Chapter 4
// [ 81 ]
// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value
// is assigned by generating a random number 0-5, for 6 possible results. You
// can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can
// repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a different
// value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each case,
// assigning new values depending on the results from the random value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.

// ANSWER

// // 1. Generate a random number between 0 and 5 (for 6 possible results)
// const randomValue = Math.floor(Math.random() * 6);

// // 2. Create a clear and friendly prompt to get a user's question
// const userQuestion = prompt("Welcome to the Magic 8-Ball!\nAsk a yes or no question:");

// // 3. Create 6 responses using the switch statement based on the random number
// let responseNumber;

// switch (randomValue) {
//     case 0:
//         responseNumber = 0; // It is certain.
//         break;
//     case 1:
//         responseNumber = 1; // Reply hazy, try again.
//         break;
//     case 2:
//         responseNumber = 2; // Don't count on it.
//         break;
//     case 3:
//         responseNumber = 3; // Signs point to yes.
//         break;
//     case 4:
//         responseNumber = 4; // Outlook not so good.
//         break;
//     case 5:
//         responseNumber = 5; // Ask again later.
//         break;
//     default:
//         responseNumber = 6; // I'm sorry, I can't predict that.
// }

// // 4. Create the final response using an array of responses
// const responses = [
//     "It is certain.",
//     "Reply hazy, try again.",
//     "Don't count on it.",
//     "Signs point to yes.",
//     "Outlook not so good.",
//     "Ask again later.",
//     "I'm sorry, I can't predict that."
// ];

// const finalResponse = `You asked: ${userQuestion}\nMagic 8-Ball says: ${responses[responseNumber]}`;

// // 5. Output the user's question and the Magic 8-Ball response to the console
// console.log(finalResponse);


// Practice exercise 4.5
// 1. Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My
// Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable
// strings and the output message string
// ANSWER

// // 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// let prize = prompt("Choose a number between 0 and 10 to win a prize:");

// // 2. Convert the prompt response to a number data type
// prize = parseInt(prize);

// // 3. Create a variable to use for the output message containing the value "My Selection: "
// let message = "My Selection: ";

// // 4. Using the switch statement, provide a response back regarding a prize that is awarded depending on what number is selected
// switch (prize) {
//     case 0:
//         message += "Congratulations! You've won a car!";
//         break;
//     case 1:
//         message += "You've won a vacation to a tropical island!";
//         break;
//     case 2:
//         message += "You've won a new smartphone!";
//         break;
//     case 3:
//         message += "You've won a gift card to your favorite restaurant!";
//         break;
//     case 4:
//         message += "You've won a year's supply of chocolate!";
//         break;
//     case 5:
//         message += "You've won a shopping spree!";
//         break;
//     case 6:
//     case 7:
//         message += "You've won a weekend getaway!";
//         break;
//     case 8:
//     case 9:
//     case 10:
//         message += "Sorry, you didn't win this time. Better luck next time!";
//         break;
//     default:
//         message += "Invalid selection. Please choose a number between 0 and 10.";
// }

// // 6. Output the message back to the user by concatenating your prize variable strings and the output message string
// console.log(message);

// Chapter projects CH4
// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to, or less
// than a dynamic number value in your code. Output the result to the user.

// ANSWER

// // 1. Define the dynamic number value
// const dynamicNumber = 42; // You can change this value as desired

// // 2. Ask the user to enter a number
// const userNumber = parseFloat(prompt("Please enter a number:"));

// // 3. Check whether the user's number is greater than, equal to, or less than the dynamic number
// if (isNaN(userNumber)) {
//     console.log("Invalid input. Please enter a valid number.");
// } else if (userNumber > dynamicNumber) {
//     console.log(`Your number (${userNumber}) is greater than ${dynamicNumber}.`);
// } else if (userNumber === dynamicNumber) {
//     console.log(`Your number (${userNumber}) is equal to ${dynamicNumber}.`);
// } else {
//     console.log(`Your number (${userNumber}) is less than ${dynamicNumber}.`);
// }


// PROJECT 2, Friend checker game
// Ask the user to enter a name, using the switch statement to return a confirmation
// that the user is a friend if the name selected is known in the case statements. You
// can add a default response that you don't know the person if it's an unknown name.
// Output the result into the console


// ANSWER
// // Ask the user to enter a name
// const userName = prompt("Enter a name to check if it's a friend:");

// // Using a switch statement to check the name
// switch (userName.toLowerCase()) {
//     case "alice":
//     case "bob":
//     case "charlie":
//         console.log(`Yes, ${userName} is a friend!`);
//         break;
//     default:
//         console.log(`Sorry, we don't know ${userName}.`);
// }

// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement. Since this project is a little more
// difficult, here are some suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player and then
// do the same for the computer's selection. The number represents the index
// values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can show the
// random results for the player and then also the result for the computer of the
// matching item from the array.
// 4. Create a condition to handle the player and computer selections. If both are
// the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but you
// could check which player's index value is bigger and assign the victory
// accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.


// ANSWER
// // 1. Create an array that contains the variables Rock, Paper, and Scissors.
// const choices = ["Rock", "Paper", "Scissors"];

// // 2. Ask the user to choose Rock, Paper, or Scissors.
// const userChoice = prompt("Choose Rock, Paper, or Scissors:").trim().toLowerCase();

// // 3. Validate the user's choice and generate a random choice for the computer.
// if (choices.includes(userChoice)) {
//     const computerChoice = choices[Math.floor(Math.random() * 3)];

//     // 4. Create a variable to hold a response message to the user.
//     let resultMessage;

//     // 5. Determine the winner based on the game logic.
//     if (userChoice === computerChoice) {
//         resultMessage = "It's a tie!";
//     } else if (
//         (userChoice === "Rock" && computerChoice === "Scissors") ||
//         (userChoice === "Paper" && computerChoice === "Rock") ||
//         (userChoice === "Scissors" && computerChoice === "Paper")
//     ) {
//         resultMessage = `You win! ${userChoice} beats ${computerChoice}.`;
//     } else {
//         resultMessage = `Computer wins! ${computerChoice} beats ${userChoice}.`;
//     }

//     // 6. Output the user's choice, computer's choice, and the result of the game.
//     console.log(`You chose: ${userChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);
//     console.log(resultMessage);
// } else {
//     console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
// }


// Let's go through each of the quiz questions and provide the expected output:

// Q1.What will be outputted to the console in this instance?

// javascript
// Copy code
// const q = '1';
// switch (q) {
//   case '1':
//     answer = "one";
//     break;
//   case 1:
//     answer = 1;
//     break;
//   case 2:
//     answer = "this is the one";
//     break;
//   default:
//     answer = "not working";
// }
// console.log(answer);
// Expected output: "one"

// Q2.What will be outputted to the console in this instance?

// javascript
// Copy code
// const q = 1;
// switch (q) {
//   case '1':
//     answer = "one";
//   case 1:
//     answer = 1;
//   case 2:
//     answer = "this is the one";
//     break;
//   default:
//     answer = "not working";
// }
// console.log(answer);
// Expected output: "this is the one"

// Q3.What will be outputted to the console in this instance?

// javascript
// Copy code
// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder = "login";
// console.log(userOkay);
// Expected output: "login"

// Q4. What will be outputted to the console in this instance?

// javascript
// Copy code
// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//   htmlOutput = "Welcome, that is a user";
// } else {
//   htmlOutput = "Denied, not a user ";
// }
// console.log(htmlOutput + ": " + userInput);
// Expected output: "Welcome, that is a user: John"

// Q5.What will be outputted to the console in this instance?

// javascript
// Copy code
// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
//   output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
//   output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
//   output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {
//   output = "Dinner time";
// } else if (myTime >= 22) {
//   output = "Time to go to sleep";
// } else {
//   output = "You should be sleeping";
// }
// console.log(output);
// Expected output: "Wake up, it's morning"

// Q6.What will be outputted to the console in this instance?

// javascript
// Copy code
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);    // false
// console.log(a > b && b > a);    // false
// console.log(d > b || b > a);    // true
// console.log(d > b && b > a);    // true
// The comments indicate the expected output for each line.

// Q7. What will be outputted to the console in this instance?

// javascript
// Copy code
// let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` : `${val} was LESS or Equal to 100`;
// console.log(message);    // "100 was LESS or Equal to 100"
// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);      // "100 is Even"
// The comments indicate the expected output for each line
