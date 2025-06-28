let validInterest = false;
let validSpecialization = false;
let validTech = false;

const userTechList = [];

while (!validInterest) {
    const userInterest = prompt('Which path are you interested in? 1 - Front-End or 2 - Back-End?');

    if (userInterest === '1') {
        alert('Front-End is a great choice! You’ll be designing and building with the end user in mind.');
        validInterest = true;
    } else if (userInterest === '2') {
        alert('Back-End is a solid option! You’ll focus on the logic, databases, and server-side of applications.');
        validInterest = true;
    } else {
        alert('Please enter 1 or 2 only.');
    }
}

while (!validSpecialization) {
    const userChoice = prompt('Would you prefer to 1 - Specialize in one area or 2 - Become a Fullstack developer?');

    if (userChoice === '1') {
        alert('Great! Specializing in one area can make you an expert and a go-to person for specific technologies. It’s a great way to develop deep technical skills and stand out.');
        validSpecialization = true;
    } else if (userChoice === '2') {
        alert('Awesome! Becoming a Fullstack developer means understanding both the front-end and back-end. It gives you flexibility and the ability to contribute to all parts of a project.');
        validSpecialization = true;
    } else {
        alert('Please enter 1 or 2 only.');
    }
}

while (!validTech) {
    const userTech = prompt('What technologies would you like to learn? Enter one at a time. To finish, leave the input blank or click cancel.');

    if (!userTech || userTech.trim() === '') {
        validTech = true;
    } else {
        userTechList.push(userTech);
        alert(`${userTech} sounds like a great choice!`);
        alert(`${userTech} has been added to your list of technologies.`);
    }
}