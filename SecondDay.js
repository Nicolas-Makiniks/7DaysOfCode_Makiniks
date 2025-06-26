const userName = prompt("What's your name?");
const userAge = prompt("How old are you?");
const userLanguage = prompt("What programming language are you studying? (e.g., C++, JavaScript, etc.)");
let validAnswer = false;

alert(`Hello ${userName}, you're ${userAge} years old and you're learning ${userLanguage}. Programming is for everyone, regardless of age!`);

while (!validAnswer) {
    const answer = prompt(`Do you enjoy programming in ${userLanguage}? Type 1 for YES or 2 for NO:`);

    if (answer === "1") {
        alert("That's awesome! Keep learning and you'll go far!");
        validAnswer = true;
    } else if (answer === "2") {
        alert("That's okay! Maybe try exploring other languages to find one you like");
        validAnswer = true;
    } else {
        alert("Please enter 1 for YES or 2 for NO");
    }
}
