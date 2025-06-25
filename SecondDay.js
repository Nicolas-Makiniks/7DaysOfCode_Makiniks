let userLikeThisLanguage;

const userName = prompt('How I can call your name?');
const userAge = prompt('How old are you?');
const userLanguage = prompt('What programming language are you studying? (like C++, JavaScript and etc.)');

alert(`Hello ${userName}, you are ${userAge} old and like ${userLanguage}, programming is for everyone, no matter how old are you!`);

getWhatUserLike()

function getWhatUserLike () {
    userLikeThisLanguage = prompt(`Do you like programming in ${userLanguage}? Answer with 1 for YES or 2 for NO`);

    if (userLikeThisLanguage == 1) {
        alert('Great! Keep studying and you be very successful');
    } else if (userLanguage == 2) {
        alert('Ohh what a shame... Have you tried learning other languages?');
    } else {
        alert('Please, use numbers here!');
        getWhatUserLike()
    }
}