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

🗓 Date: June 26, 2025

⏳ Time spent: ~1h
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
