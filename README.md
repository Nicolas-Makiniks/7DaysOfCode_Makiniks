# 7DaysOfCode_Makiniks
Participating in the #7DaysOfCode challenge, and here is where I going to share my results

## 📝 Daily Report - Day 1

🗓 Date: 24/06/2025

⏳ Time spend: ~1h
> Studied and practiced JavaScript comparison operators (```==``` vs ```===```).

💡 Concepts Learned:
1. Loose equality ```==```: Java Script automatically converts types to compare only values.
2. Strict equality ```===```: Compares both value and type.
3. Using template literals in ```console.log```: I learned to interpolate variables directly in strings using backticks and ```${variableHere}```.

🧪 Code Highlight of the Day:
```
let numberOne = 1;
let stringOne = '1';

if (numberOne == stringOne) {
  console.log(`The variables numberOne: ${numberOne} and stringOne: '${stringOne}' have the same value but different types`);
}
```
> I found this much simpler than what I was used to do in C or C++

## 📝 Daily Report – Day 2

🗓 Date: 25/06/2025

⏳ Time invested: ~1h
> Explored how to collect and display information using prompt() and alert() in JavaScript.

💡 Concepts Learned:
1. ```prompt()``` and ```alert()``` functions: These are built-in JavaScript methods used to collect input and display messages directly through the browser’s UI.
2. Synchronous behavior & blocking: I learned that both ```prompt()``` and ```alert()``` are blocking, they pause the execution of the script until the user responds. Since JavaScript is single-threaded, this can halt the entire flow of a webpage, making these methods not ideal for modern applications.
3. Alternatives for real projects: While ```prompt()``` and ```alert()``` are good for learning or quick demos, professional applications typically use custom modals or form inputs (often via HTML/CSS/JS frameworks) to collect and display information without blocking the main thread.

🧪 Code Highlight of the Day:
```
const userName = prompt("What's your name?");
alert(`Nice to meet you, ${userName}!`);
```
> This simple interaction showed me how the browser pauses everything until the user interacts with the prompt or alert, demonstrating how synchronous JavaScript behaves in the browser.

## 📝 Daily Report – Day 3

🗓 Date: 26/06/2025

⏳ Time invested: ~1h
> Practicing while loops, conditional logic, and collecting multiple user inputs.

💡 Concepts learned/reviewed:

1. ```while``` loops with input validation: I used ```while``` loops to keep the program waiting until the user provides a valid input. This ensures that the program only moves forward with correct and expected values, improving the user experience.
2. Flow control with ```if```/```else```: I implemented conditional checks to define how the system should respond based on the user’s decisions (like choosing Front-End or Back-End, specialization or Fullstack).
3. Collecting dynamic input into an ```array```: I allowed the user to input multiple technologies one by one and stored them in an ```array``` (```userTechList```) until they decided to stop. This created a smooth and interactive data collection process.

🧪 Code highlight of the day:
```
while (!validTech) {
  const userTech = prompt('What technologies would you like to learn? Enter one at a time. To finish, leave the input blank or click cancel.');

  if (!userTech || userTech.trim() === '') {
    validTech = true;
  } else {
    userTechList.push(userTech);
    alert(`${userTech} sounds like a great choice!`);
  }
}
```
> This part helped me understand how a loop can remain active until a specific exit condition is met — in this case, the user's choice to stop entering data.
## 📝 Daily Report – Day 4 of the Challenge

🗓 Date: 27/06/2025

⏳ Time invested: ~2h
> Creating a number guessing game.

💡 Concepts learned and applied:

1. Generating random numbers using ```Math.random()``` and ```Math.floor()```: I applied the formula to generate integers in a defined range (0 to 10) using:
```
Math.floor(Math.random() * (max - min + 1)) + min;
```
2. Program structure using functions, loops, and flag control: I used ```while```, ```for```, and multiple boolean variables (```gameLoop```, ```isInputValid```, etc.) to manage game flow, retries, and user interactions in a responsive loop.
3. User input validation and error-proofing: My main goal was to create a bulletproof input system that handles:
- Non-numeric inputs;
- Out-of-range values;
- Empty strings;
- Not yet implemented: user cancellation;
- Simplifying blank input validation:
> I discovered that applying ```.trim()``` directly at assignment ```prompt().trim()``` eliminates the need for separate empty ```string``` checks. However, I also realized this makes it impossible to check for ```null``` (when the user cancels), since ```.trim()``` would throw an error in that case — which is something I want to fix later.

🧪 Code highlight of the day:
```
userChosenNumber = prompt('...').trim();

if (isNaN(userChosenNumber)) {
  alert('Please enter numbers only!');
} else if (userChosenNumber > 10) {
  alert('Please enter a value from 0 to 10!');
} else if (!userChosenNumber) {
  alert('You left the field blank!');
} else {
  alert(`You entered ${userChosenNumber}, let’s check...`);
}
```
> This snippet reflects my effort to ensure valid and safe user input, making sure the game won’t break regardless of what’s typed.
